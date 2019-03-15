import { observable } from 'mobx'
import _ from 'underscore'

import { Project, GlossText } from './model/Project'

export class Root {
    @observable project?: Project
    @observable positions: string[] = []

    @observable glossTexts: GlossText[] = []
    @observable filteredGlossTexts: GlossText[] = []
    @observable selectedGlossText?: GlossText

    setPositions(positions: string[]) {
        console.log('setPositions', positions)
        // If some positions have been specified, select only signs that have at least
        // one of the select components
        if (positions.length) {
            this.filteredGlossTexts = this.glossTexts.filter(gt => {
                return gt.sens.sign.components.some(component => positions.includes(component.code))
            })
        }
        else {
            this.filteredGlossTexts = this.glossTexts
        }

        if (this.filteredGlossTexts.length) {
            this.selectedGlossText = this.filteredGlossTexts[0]
        } else {
            this.selectedGlossText = undefined
        }

        this.positions = positions

    }

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

        if (gts.length) this.selectedGlossText = this.glossTexts[0]
    }
}