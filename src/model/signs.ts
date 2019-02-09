export class Sign {
    public gloss_id: number = 0
    public citation?: Citation
    public glossTexts: GlossText[] = []
    public sentenceTexts: SentenceText[] = []

    constructor(doc: any) {
        Object.assign(this, doc)
    }
}

export class Citation {
    public id: number = 0
    public path: string = ''    // e.g. 'ARROGANT-Exp_id64.mp4','5b2a1acf57a94458d3bd8ea40abeeee7'
    public hash: string = ''    // e.g. '5b2a1acf57a94458d3bd8ea40abeeee7'

    constructor(doc: any) {
        Object.assign(this, doc)
    }
}

export class GlossText {
    public gloss_id: number = 0
    public lang_id: number = 0
    public text: string = ''   // e.g. 'arrogant; big-headed'

    constructor(doc: any) {
        Object.assign(this, doc)
    }
}

export class SentenceText {
    public id: number = 0
    public lang_id: number = 0
    public text: string = ''

    constructor(doc: any) {
        Object.assign(this, doc)
    }
}




export class GlossCitation {
    public gloss_id: number = 0
    public citation_id: number = 0

    constructor(doc: any) { 
        Object.assign(this, doc)
    }
}

export class SentenceCitation {
    public gloss_id: number = 0
    public citation_id: number = 0
    public sentence_id: number = 0  // foreign key Sentence.id

    constructor(doc: any) {
        Object.assign(this, doc)
    }
}

export class Sentence {
    public id: number = 0
    public video_id: number = 0
    public text_id: number = 0   // foreign key SentenceText.id

    constructor(doc: any) {
        Object.assign(this, doc)
    }
}
