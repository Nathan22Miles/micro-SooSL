import React, { SFC } from 'react'

import { Component, Dialect, GrammarCategory, GlossText, Sentence,
         ExtraText, ExtraMediaFile, Sens, Sign, Project } from '../model/Project'
import { Root } from '../Root'

import CitationPlayer from './CitationPlayer'
import './Views.css'

interface TopViewProps { root: Root }
export const TopView: SFC<TopViewProps> = ({root}) => {
    return (
        <div>
            <div className="Header">micro-SooSL</div>
            <div className="Top">
                <GlossesListView root={root} />
                <CitationView root={root} />
                <TextInfoView root={root} />
            </div>
        </div>
    )
}

interface GlossesListViewProps { root: Root }
const GlossesListView: SFC<GlossesListViewProps> = ({root}) => {
    let { filteredGlossTexts } = root

    return (
        <div className="GlossesList">
            {filteredGlossTexts.map((glossText, i) => (
                <GlossView key={i} glossText={glossText} root={root} />
            ))}
        </div>
    )
}

interface GlossViewProps { glossText: GlossText, root: Root }
const GlossView: SFC<GlossViewProps> = ({glossText, root}) => {
    let { selectedGlossText } = root
    let className = 'Gloss' + (selectedGlossText && selectedGlossText.text === glossText.text ? ' GlossSelected' : '')

    return (
        <div className={className} onClick={() => {
                    root.selectedGlossText = glossText
                }}>
            <div>{glossText.text}</div>
        </div>
    )
}

interface CitationViewProps { root: Root }
const CitationView: SFC<CitationViewProps> = ({root}) => {
    let { selectedGlossText } = root
    if (!selectedGlossText) return null

    let { sign } = selectedGlossText.sens
    if (!sign) return null

    return (
        <div className="Citation">
            <CitationPlayer url={`demo/${sign.path.slice(2)}`} />
        </div>
    )
}

interface TextInfoViewProps { root: Root }
const TextInfoView: SFC<TextInfoViewProps> = ({root}) => {
    return (
        <div className="TextInfo">
            <GlossTextsView root={root} />
            <SentencesView root={root} />
        </div>
    )
}

interface GlossTextsViewProps { root: Root }
const GlossTextsView: SFC<GlossTextsViewProps> = ({root}) => {
    let { selectedGlossText } = root
    if (!selectedGlossText) return null

    let { gloss_texts } = selectedGlossText.sens
    return (
        <div className="GlossTexts">
            { gloss_texts.map((glossText: GlossText, i) => (
                <GlossTextView key={i} glossText={glossText} />
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

interface SentencesViewProps { root: Root }
const SentencesView: SFC<SentencesViewProps> = ({root}) => {
    let { selectedGlossText } = root
    if (!selectedGlossText) return null

    let { sentences } = selectedGlossText.sens

    return (
        <div className="Sentences">
            {sentences.map((Sentence: Sentence, i) => (
                <SentenceView key={i} sentence={Sentence} />
            ))}
        </div>
    )
}

interface SentenceViewProps { sentence: Sentence}
const SentenceView: SFC<SentenceViewProps> = ({sentence}) => {
    return (
        <div className="Sentence">
            <div>{sentence.sentence_texts[0].text}</div>
        </div>
    )
}
