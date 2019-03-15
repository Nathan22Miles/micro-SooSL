import { observable } from 'mobx'
import _ from 'underscore'

import { Project, GlossText } from './model/Project'

export class Root {
    @observable project?: Project
    @observable positions: string[] = []

    @observable glossTexts: GlossText[] = []
    @observable selectedGlossText?: GlossText

    setGlossTexts() {
        let gts: GlossText[] = []
        let signs = this.project && this.project.signs || []

        signs.forEach(sign => {
            sign.senses.forEach(sense => {
                if (sense.gloss_texts.length) {
                    gts.push(sense.gloss_texts[0])
                }
            })
        })

        this.glossTexts = _.sortBy(gts, gt => gt.text.toLowerCase())
        console.log('glossTexts', this.glossTexts.length)

        if (gts.length) this.selectedGlossText = gts[0]
    }
}
