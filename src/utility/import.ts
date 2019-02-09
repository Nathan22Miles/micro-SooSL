import _ from 'underscore'
import sqlite3 from 'sqlite3'
import fs from 'fs'

import { GlossCitation, SentenceCitation, GlossText, Citation, SentenceText, Sentence, Sign } from '../model/Signs'

// glossText: [gloss_id, lang_id], text
// gloss_citation: gloss_id, citation_id
// sentence_citation: citation_id, gloss_id, sentence_id


// TABLE "gloss_citation" ("gloss_id" INT ,"citation_id" INT )
// INSERT INTO gloss_citation VALUES(18,14);

// TABLE "citation" ("id" INT KEY ,"path" TEXT , "hash" TEXT)
// INSERT INTO citation VALUES(14,'BIG-HEAD-E2-201402ST_id14.mp4',NULL);

// TABLE "sentence_citation" ("citation_id" INT ,"gloss_id" INT ,"sentence_id" INT )

// TABLE "sentenceText" ("id" INT ,"lang_id" INT ,"text" TEXT , KEY ("id","lang_id") )
// INSERT INTO sentenceText VALUES(1,1,'This particular outdoor camp had ...

// TABLE "glossText" ("gloss_id" INT , "lang_id" INT , "text" TEXT , KEY ("gloss_id", "lang_id"))
// INSERT INTO glossText VALUES(18,1,'arrogant; big-headed')
// INSERT INTO glossText VALUES(18,2,'arrogante; orgulloso');


let db: sqlite3.Database

function openDb(): Promise<void> {
    return new Promise(function (resolve, reject) {
        db = new sqlite3.Database('public/demo/demo.sqlite', (err: any) => {
            if (err)
                reject(err)
            else
                resolve()
        })
    })
}

function allRows(db: any, sql: string): Promise<any[]> {
    return new Promise(function (resolve, reject) {
        db.all(sql, function (err: any, rows: any[]) {
            if (err)
                reject(err)
            else
                resolve(rows)
        })
    })
}

async function buildModel() {
    let glossTextSql = `SELECT gloss_id, lang_id, text FROM glossText`
    let gloss_citationSql = `SELECT gloss_id, citation_id FROM gloss_citation`
    let citationSql = `SELECT id, path FROM citation`
    let sentence_citationSql = `SELECT citation_id, gloss_id, sentence_id FROM sentence_citation`
    let sentenceSql = `SELECT id, video_id, text_id FROM sentence`
    let sentenceTextSql = `SELECT id, lang_id, text FROM sentenceText`

    let glossTexts: GlossText[] = (await allRows(db, glossTextSql))
        .map((row: any) => new GlossText(row))

    let gloss_citations: GlossCitation[] = (await allRows(db, gloss_citationSql))
        .map((row: any) => new GlossCitation(row))

    let citations: Citation[] = (await allRows(db, citationSql))
        .map((row: any) => new Citation(row))

    let sentenceTexts: SentenceText[] = (await allRows(db, sentenceTextSql))
        .map((row: any) => new SentenceText(row))

    let sentences: Sentence[] = (await allRows(db, sentenceSql))
        .map((row: any) => new Sentence(row))

    let sentence_citations: SentenceCitation[] = (await allRows(db, sentence_citationSql))
        .map((row: any) => new SentenceCitation(row))

    let signs: Sign[] = []

    glossTexts.forEach(gt => {
        let { gloss_id } = gt
        let sign: Sign | undefined = signs.find(s => s.gloss_id === gloss_id)

        if (!sign) {
            sign = new Sign({gloss_id})
            signs.push(sign)

            let gs = gloss_citations.find(gs => gs.gloss_id === gloss_id)
            if (gs) {
                sign.citation = citations.find(c => c.id === gs!.citation_id)
            }

            let sentenceCitation = sentence_citations.find(sc => sc.gloss_id === gloss_id)
            if (sentenceCitation) {
                let sentence = sentences.find(s => s.id === sentenceCitation!.sentence_id)
                if (sentence) {
                    let sentenceText = sentenceTexts.find(st => st.id === sentence!.text_id)
                    sentenceText && sign!.sentenceTexts.push(sentenceText)
                }
            }
        }

        sign.glossTexts.push(gt)
    })

    return signs
}

let header = `
import { Sign, Citation, GlossText, SentenceText, GlossCitation } from '../model/Signs'

export function getSigns(): Sign[] {
    return signsData.map((sign: any) => {
        return new Sign({
            gloss_id: sign.gloss_id,
            citation: new Citation(sign.citation),
            glossTexts: sign.glossTexts.map((gt: any) => new GlossText(gt)),
            sentenceTexts: sign.sentenceTexts.map((st: any) => new SentenceText(st)),
        })
    })
}

export const signsData =` 


openDb()
    .then(() => {
        return buildModel()
    })
    .then(signs => {
        let json = JSON.stringify(signs.slice(0,20), null, 4)
        fs.writeFileSync('src/model/signsData.ts', header + json, 'utf-8')
        console.log(`src/model/signsData.ts written`)
    })
    .catch(err => {
        console.log(`ERROR ${err}`)
    })