export class Dialect {
    id: number
    abbr: string
    focal: boolean
    name: string

    constructor(doc: any) {
        this.id = doc.id
        this.abbr = doc.abbr
        this.focal = doc.focal
        this.name = doc.name
    }
}

export class GrammarCategory {
    id: number
    name: string

    constructor(doc: any) {
        this.id = doc.id
        this.name = doc.name
    }
}

export class SentenceText {
    lang_name: string
    lang_id: number
    order: number
    text: string

    constructor(doc: any) {
        this.lang_name = doc.lang_name
        this.lang_id = doc.lang_id
        this.order = doc.order
        this.text = doc.text
    }
}

export class Sentence {
    id: number
    path: string
    hash: string
    sentence_texts: SentenceText[]

    constructor(doc: any) {
        this.id = doc.id
        this.path = doc.path
        this.hash = doc.hash
        this.sentence_texts = (doc.sentence_texts || []).map((_item: any) => new SentenceText(_item))
    }
}

export class ExtraText {
    lang_name: string
    lang_id: number
    order: number
    text: string

    constructor(doc: any) {
        this.lang_name = doc.lang_name
        this.lang_id = doc.lang_id
        this.order = doc.order
        this.text = doc.text
    }
}

export class ExtraMediaFile {
    id: number
    path: string
    hash: string

    constructor(doc: any) {
        this.id = doc.id
        this.path = doc.path
        this.hash = doc.hash
    }
}

export class GlossText {
    sense: Sense
    lang_name: string
    lang_id: number
    order: number
    text: string

    constructor(sense: Sense, doc: any) {
        this.sense = sense
        this.lang_name = doc.lang_name
        this.lang_id = doc.lang_id
        this.order = doc.order
        this.text = doc.text
    }
}

export class Sense {
    sign: Sign
    id: number
    dialects: Dialect[]
    grammar_category: GrammarCategory
    gloss_texts: GlossText[]
    sentences: Sentence[]
    extra_texts: ExtraText[]
    extra_media_files: ExtraMediaFile[]

    constructor(sign: Sign, doc: any) {
        this.sign = sign
        this.id = doc.id
        this.grammar_category = new GrammarCategory(doc.grammar_category)

        this.dialects = (doc.dialects || []).map((_item: any) => new Dialect(_item))
        this.gloss_texts = (doc.gloss_texts || []).map((_item: any) => new GlossText(this, _item))
        this.sentences = (doc.sentences || []).map((_item: any) => new Sentence(_item))
        this.extra_texts = (doc.extra_texts || []).map((_item: any) => new ExtraText(_item))
        this.extra_media_files = (doc.extra_media_files || []).map((_item: any) => new ExtraMediaFile(_item))
    }
}

// Sign
//     senses
// .       gloss_texts

export class Sign {
    id: number
    path: string
    hash: string
    component_codes: string[]
    senses: Sense[]

    constructor(doc: any) {
        this.id = doc.id
        this.path = doc.path
        this.hash = doc.hash
        this.component_codes = doc.component_codes

        this.senses = (doc.senses || []).map((sense: any) => new Sense(this, sense))
    }
}

export class Project {
    sooSL_version: string
    project_name: string
    project_description: string
    signs: Sign[]

    constructor(doc: any) {
        this.sooSL_version = doc.SooSL_version
        this.project_name = doc.Project_name
        this.project_description = doc.Project_description

        this.signs = (doc.Signs || []).map((sign: any) => new Sign(sign))
    }
}
