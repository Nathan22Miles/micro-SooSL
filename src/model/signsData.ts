
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

export const signsData =[
    {
        "gloss_id": 3,
        "glossTexts": [
            {
                "gloss_id": 3,
                "lang_id": 1,
                "text": "slow (3)"
            },
            {
                "gloss_id": 3,
                "lang_id": 2,
                "text": "despacio (3)"
            },
            {
                "gloss_id": 3,
                "lang_id": 3,
                "text": "lent (3)"
            }
        ],
        "sentenceTexts": [],
        "citation": {
            "id": 2,
            "path": "SLOW(3)_id2.mp4",
            "hash": ""
        }
    },
    {
        "gloss_id": 5,
        "glossTexts": [
            {
                "gloss_id": 5,
                "lang_id": 1,
                "text": "slow (1)"
            },
            {
                "gloss_id": 5,
                "lang_id": 2,
                "text": "despacio (1)"
            },
            {
                "gloss_id": 5,
                "lang_id": 3,
                "text": "lent (1)"
            }
        ],
        "sentenceTexts": [],
        "citation": {
            "id": 3,
            "path": "SLOW-E1-201402SR_id3.mp4",
            "hash": ""
        }
    },
    {
        "gloss_id": 6,
        "glossTexts": [
            {
                "gloss_id": 6,
                "lang_id": 1,
                "text": "computer"
            },
            {
                "gloss_id": 6,
                "lang_id": 2,
                "text": "computadora"
            },
            {
                "gloss_id": 6,
                "lang_id": 3,
                "text": "ordinateur"
            }
        ],
        "sentenceTexts": [],
        "citation": {
            "id": 4,
            "path": "COMPUTER-E2-201402SR_id4.mp4",
            "hash": ""
        }
    },
    {
        "gloss_id": 7,
        "glossTexts": [
            {
                "gloss_id": 7,
                "lang_id": 1,
                "text": "father (1)"
            },
            {
                "gloss_id": 7,
                "lang_id": 2,
                "text": "padre (1)"
            },
            {
                "gloss_id": 7,
                "lang_id": 3,
                "text": "père (1)"
            }
        ],
        "sentenceTexts": [
            {
                "id": 36,
                "lang_id": 1,
                "text": "A father and mother went to the school because their daughter was involved in the play."
            }
        ],
        "citation": {
            "id": 5,
            "path": "FATHER-E2-201402SR_id5.mp4",
            "hash": ""
        }
    },
    {
        "gloss_id": 8,
        "glossTexts": [
            {
                "gloss_id": 8,
                "lang_id": 1,
                "text": "father (3)"
            },
            {
                "gloss_id": 8,
                "lang_id": 2,
                "text": "padre (3)"
            },
            {
                "gloss_id": 8,
                "lang_id": 3,
                "text": "père (3)"
            }
        ],
        "sentenceTexts": [],
        "citation": {
            "id": 6,
            "path": "FATHER (older)-E2-201402AB_id6.mp4",
            "hash": ""
        }
    },
    {
        "gloss_id": 9,
        "glossTexts": [
            {
                "gloss_id": 9,
                "lang_id": 1,
                "text": "mother (1)"
            },
            {
                "gloss_id": 9,
                "lang_id": 2,
                "text": "madre (1)"
            },
            {
                "gloss_id": 9,
                "lang_id": 3,
                "text": "mère (1)"
            }
        ],
        "sentenceTexts": [],
        "citation": {
            "id": 7,
            "path": "FATHER-E5-201402AB_id7.mp4",
            "hash": ""
        }
    },
    {
        "gloss_id": 10,
        "glossTexts": [
            {
                "gloss_id": 10,
                "lang_id": 1,
                "text": "sign fluently (2)"
            },
            {
                "gloss_id": 10,
                "lang_id": 2,
                "text": "hacer señas con fluidez (2)"
            },
            {
                "gloss_id": 10,
                "lang_id": 3,
                "text": "signer couramment (2)"
            }
        ],
        "sentenceTexts": [],
        "citation": {
            "id": 8,
            "path": "SIGN-FLUENTLY-E5-201402AB_id8.mp4",
            "hash": ""
        }
    },
    {
        "gloss_id": 11,
        "glossTexts": [
            {
                "gloss_id": 11,
                "lang_id": 1,
                "text": "write"
            },
            {
                "gloss_id": 11,
                "lang_id": 2,
                "text": "escribir"
            },
            {
                "gloss_id": 11,
                "lang_id": 3,
                "text": "écrire"
            }
        ],
        "sentenceTexts": [],
        "citation": {
            "id": 9,
            "path": "Write-AB_id9.mp4",
            "hash": ""
        }
    },
    {
        "gloss_id": 12,
        "glossTexts": [
            {
                "gloss_id": 12,
                "lang_id": 1,
                "text": "write sloppily; write carelessly"
            },
            {
                "gloss_id": 12,
                "lang_id": 2,
                "text": "escribir descuidadamente"
            },
            {
                "gloss_id": 12,
                "lang_id": 3,
                "text": "écrire négligemment"
            }
        ],
        "sentenceTexts": [],
        "citation": {
            "id": 10,
            "path": "WRITE-SLOPPY-E2-201402AB_id10.mp4",
            "hash": ""
        }
    },
    {
        "gloss_id": 14,
        "glossTexts": [
            {
                "gloss_id": 14,
                "lang_id": 1,
                "text": "birthday (1)"
            },
            {
                "gloss_id": 14,
                "lang_id": 2,
                "text": "cumpleaños (1)"
            },
            {
                "gloss_id": 14,
                "lang_id": 3,
                "text": "anniversaire (1)"
            }
        ],
        "sentenceTexts": [],
        "citation": {
            "id": 12,
            "path": "BIRTHDAY-E2-201402ST_id12.mp4",
            "hash": ""
        }
    },
    {
        "gloss_id": 15,
        "glossTexts": [
            {
                "gloss_id": 15,
                "lang_id": 1,
                "text": "birthday (4)"
            },
            {
                "gloss_id": 15,
                "lang_id": 2,
                "text": "cumpleaños (4)"
            },
            {
                "gloss_id": 15,
                "lang_id": 3,
                "text": "anniversaire (4)"
            }
        ],
        "sentenceTexts": [],
        "citation": {
            "id": 13,
            "path": "BIRTHDAY-E2-201402SR_id13.mp4",
            "hash": ""
        }
    },
    {
        "gloss_id": 17,
        "glossTexts": [
            {
                "gloss_id": 17,
                "lang_id": 1,
                "text": "brag (1)"
            },
            {
                "gloss_id": 17,
                "lang_id": 2,
                "text": "jactarse (1)"
            },
            {
                "gloss_id": 17,
                "lang_id": 3,
                "text": "se vanter (1)"
            }
        ],
        "sentenceTexts": [
            {
                "id": 5,
                "lang_id": 1,
                "text": "This particular outdoor camp had a leader who was very arrogant and boastful. He talked alot and ordered people around. The staff were sick of his arrogance."
            }
        ],
        "citation": {
            "id": 15,
            "path": "BRAG-E3-201402SR_id15.mp4",
            "hash": ""
        }
    },
    {
        "gloss_id": 18,
        "glossTexts": [
            {
                "gloss_id": 18,
                "lang_id": 1,
                "text": "arrogant; big-headed"
            },
            {
                "gloss_id": 18,
                "lang_id": 2,
                "text": "arrogante; orgulloso"
            },
            {
                "gloss_id": 18,
                "lang_id": 3,
                "text": "arrogant; orgueilleux"
            }
        ],
        "sentenceTexts": [
            {
                "id": 1,
                "lang_id": 1,
                "text": "This particular outdoor camp had a leader who was very arrogant and boastful. He talked alot and ordered people around. The staff were sick of his arrogance."
            }
        ],
        "citation": {
            "id": 14,
            "path": "BIG-HEAD-E2-201402ST_id14.mp4",
            "hash": ""
        }
    },
    {
        "gloss_id": 19,
        "glossTexts": [
            {
                "gloss_id": 19,
                "lang_id": 1,
                "text": "birthday (5)"
            },
            {
                "gloss_id": 19,
                "lang_id": 2,
                "text": "cumpleaños (5)"
            },
            {
                "gloss_id": 19,
                "lang_id": 3,
                "text": "anniversaire (5)"
            }
        ],
        "sentenceTexts": [],
        "citation": {
            "id": 16,
            "path": "BIRTHDAY-E5-201402ST_id16.mp4",
            "hash": ""
        }
    },
    {
        "gloss_id": 20,
        "glossTexts": [
            {
                "gloss_id": 20,
                "lang_id": 1,
                "text": "birthday (2)"
            },
            {
                "gloss_id": 20,
                "lang_id": 2,
                "text": "cumpleaños (2)"
            },
            {
                "gloss_id": 20,
                "lang_id": 3,
                "text": "anniversaire (2)"
            }
        ],
        "sentenceTexts": [],
        "citation": {
            "id": 17,
            "path": "BIRTHDAY(2)_id17.mp4",
            "hash": ""
        }
    },
    {
        "gloss_id": 21,
        "glossTexts": [
            {
                "gloss_id": 21,
                "lang_id": 1,
                "text": "birthday (3)"
            },
            {
                "gloss_id": 21,
                "lang_id": 2,
                "text": "cumpleaños (3)"
            },
            {
                "gloss_id": 21,
                "lang_id": 3,
                "text": "anniversaire (3)"
            }
        ],
        "sentenceTexts": [],
        "citation": {
            "id": 18,
            "path": "BIRTHDAY(3)_id18.mp4",
            "hash": ""
        }
    },
    {
        "gloss_id": 22,
        "glossTexts": [
            {
                "gloss_id": 22,
                "lang_id": 1,
                "text": "egotistical"
            },
            {
                "gloss_id": 22,
                "lang_id": 2,
                "text": "ególatra; egotistico"
            },
            {
                "gloss_id": 22,
                "lang_id": 3,
                "text": "égoïste"
            }
        ],
        "sentenceTexts": [],
        "citation": {
            "id": 19,
            "path": "BRAG-E6-201402SR_id19.mp4",
            "hash": ""
        }
    },
    {
        "gloss_id": 23,
        "glossTexts": [
            {
                "gloss_id": 23,
                "lang_id": 1,
                "text": "brag (2)"
            },
            {
                "gloss_id": 23,
                "lang_id": 2,
                "text": "jactarse (2)"
            },
            {
                "gloss_id": 23,
                "lang_id": 3,
                "text": "se vanter (2)"
            }
        ],
        "sentenceTexts": [],
        "citation": {
            "id": 19,
            "path": "BRAG-E6-201402SR_id19.mp4",
            "hash": ""
        }
    },
    {
        "gloss_id": 24,
        "glossTexts": [
            {
                "gloss_id": 24,
                "lang_id": 1,
                "text": "but (1)"
            },
            {
                "gloss_id": 24,
                "lang_id": 2,
                "text": "pero"
            },
            {
                "gloss_id": 24,
                "lang_id": 3,
                "text": "mais"
            }
        ],
        "sentenceTexts": [],
        "citation": {
            "id": 20,
            "path": "BUT-E2-201402SR_id20.mp4",
            "hash": ""
        }
    },
    {
        "gloss_id": 26,
        "glossTexts": [
            {
                "gloss_id": 26,
                "lang_id": 1,
                "text": "capitol (1)"
            },
            {
                "gloss_id": 26,
                "lang_id": 2,
                "text": "capitolio (1)"
            },
            {
                "gloss_id": 26,
                "lang_id": 3,
                "text": "capitole (1)"
            }
        ],
        "sentenceTexts": [],
        "citation": {
            "id": 21,
            "path": "CAPITOL-E2-201402AB_id21.mp4",
            "hash": ""
        }
    }
]