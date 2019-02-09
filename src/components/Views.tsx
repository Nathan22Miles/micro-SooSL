import React, { SFC } from 'react'

import { Sign, GlossText, SentenceText } from '../model/Signs'
import { SooSLViewModel, Gloss } from '../model/SooSLViewModel'

interface TopViewProps { svm: SooSLViewModel }
export const TopView: React.SFC<TopViewProps> = ({svm}) => {
    return (
        <div>
            <CitationView svm={svm} />
            <TextInfoView svm={svm} />
            <GlossesListView svm={svm} />
        </div>
    )
}

interface GlossesListViewProps { svm: SooSLViewModel }
const GlossesListView: React.SFC<GlossesListViewProps> = ({svm}) => {
    let { glosses, selectedGloss } = svm
    return (
        <div className="GlossesList">
            { glosses.map(gloss => (
                <GlossView gloss={gloss} svm={svm} />
            ))}
        </div>
    )
}

interface GlossViewProps { gloss: Gloss, svm: SooSLViewModel }
const GlossView: SFC<GlossViewProps> = ({gloss, svm}) => {
    let { selectedGloss } = svm
    let className = 'GlossView' + (selectedGloss && selectedGloss.text === gloss.text ? ' GlossViewSelected' : '')

    return (
        <div className={className} onClick={() => {
                    svm.selectedGloss = gloss
                }}>
            <div>{gloss.text}</div>
        </div>
    )
}

interface CitationViewProps { svm: SooSLViewModel }
const CitationView: React.SFC<CitationViewProps> = ({svm}) => {
    let { selectedGloss } = svm
    if (!selectedGloss) return null

    let { citation } = selectedGloss.sign
    return (
        <div className="CitationView">
            Citation Path: {citation && citation.path}
        </div>
    )
}

interface TextInfoViewProps { svm: SooSLViewModel }
const TextInfoView: React.SFC<TextInfoViewProps> = ({svm}) => {
    return (
        <div className="TextInfoView">
            <GlossTextsView svm={svm} />
            <SentenceTextsView svm={svm} />
        </div>
    )
}

interface GlossTextsViewProps { svm: SooSLViewModel }
const GlossTextsView: React.SFC<GlossTextsViewProps> = ({svm}) => {
    let { selectedGloss } = svm
    if (!selectedGloss) return null

    let { glossTexts } = selectedGloss.sign
    return (
        <div className="GlossTextsView">
            { glossTexts.map((glossText: GlossText) => (
                <GlossTextView glossText={glossText} />
            ))}
        </div>
    )
}

interface GlossTextViewProps { glossText: GlossText}
const GlossTextView: SFC<GlossTextViewProps> = ({glossText}) => {
    return (
        <div className="GlossTextView">
            <div>{glossText.text}</div>
        </div>
    )
}

interface SentenceTextsViewProps { svm: SooSLViewModel }
const SentenceTextsView: React.SFC<SentenceTextsViewProps> = ({svm}) => {
    let { selectedGloss } = svm
    if (!selectedGloss) return null

    let { sentenceTexts } = selectedGloss.sign

    return (
        <div className="SentenceTextsView">
            {sentenceTexts.map((sentenceText: SentenceText) => (
                <SentenceTextView sentenceText={sentenceText} />
            ))}
        </div>
    )
}

interface SentenceTextViewProps { sentenceText: SentenceText}
const SentenceTextView: SFC<SentenceTextViewProps> = ({sentenceText}) => {
    return (
        <div className="SentenceTextView">
            <div>{sentenceText.text}</div>
        </div>
    )
}
