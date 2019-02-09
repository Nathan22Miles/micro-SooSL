import { observable } from 'mobx'

import { Sign } from './Signs'

export class Gloss {
    constructor (public text: string, public sign: Sign) {}
}

export class SooSLViewModel {
    constructor (glosses: Gloss[]) {
        this.glosses = glosses
    }

    @observable selectedGloss?: Gloss
    glosses: Gloss[]
}

// Create (possibly multiple) glosses for each sign
export function getGlosses(signs: Sign[]): Gloss[] {
    let glosses: Gloss[] = []

    signs.forEach(sign => {
        let { text } = sign.glossTexts[0]
        let parts = text.split(';')
        parts.forEach(part => {
            glosses.push(new Gloss(part.trim(), sign))
        })
    })

    return glosses
}