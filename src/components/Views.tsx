import React, { SFC } from 'react'

import { Sign, GlossText, SentenceText } from '../model/Signs'
import { SooSLViewModel, Gloss } from '../model/SooSLViewModel'
import CitationPlayer from './CitationPlayer'
import './Views.css'

interface TopViewProps { svm: SooSLViewModel }
export const TopView: React.SFC<TopViewProps> = ({svm}) => {
    return (
        <div>
            <div className="Header">micro-SooSL</div>
            <div className="Top">
                <GlossesListView svm={svm} />
                <CitationView svm={svm} />
                <TextInfoView svm={svm} />
            </div>
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
    let className = 'Gloss' + (selectedGloss && selectedGloss.text === gloss.text ? ' GlossSelected' : '')

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
    if (!citation) return null

    return (
        <div className="Citation">
            <CitationPlayer url={`demo/signs/${citation.path}`} />
        </div>
    )
}

interface TextInfoViewProps { svm: SooSLViewModel }
const TextInfoView: React.SFC<TextInfoViewProps> = ({svm}) => {
    return (
        <div className="TextInfo">
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
        <div className="GlossTexts">
            { glossTexts.map((glossText: GlossText) => (
                <GlossTextView glossText={glossText} />
            ))}
        </div>
    )
}

interface GlossTextViewProps { glossText: GlossText}
const GlossTextView: SFC<GlossTextViewProps> = ({glossText}) => {
    return (
        <div className="GlossText">
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
        <div className="SentenceTexts">
            {sentenceTexts.map((sentenceText: SentenceText) => (
                <SentenceTextView sentenceText={sentenceText} />
            ))}
        </div>
    )
}

interface SentenceTextViewProps { sentenceText: SentenceText}
const SentenceTextView: SFC<SentenceTextViewProps> = ({sentenceText}) => {
    return (
        <div className="SentenceText">
            <div>{sentenceText.text}</div>
        </div>
    )
}
