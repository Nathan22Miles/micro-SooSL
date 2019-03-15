import React, { Component } from 'react'
import { Root } from '../Root'
import { observer } from 'mobx-react'
import './Views.css'

import features from './positionFeatures'

function Wrapper(props: any) {
    let { featureName, contents, root } = props

    let className = root.positions.includes(featureName) ? 'selected-feature' : 'unselected-feature'
    
    let onClick = () => {
        console.log('onClick', featureName)
        let positions = root.positions.slice()

        let i = positions.indexOf(featureName)
        if (i >= 0) {
            positions.splice(i, 1)
        } else {
            positions.push(featureName)
        }

        root.setPositions(positions)
    }

    return contents({className, onClick}) 
}

interface IPositionChooser {
    root: Root,
}

@observer
export default class PositionChooser extends Component<IPositionChooser> {
    render() {
        (this.props.root.positions).join('') // look at all positions to force a redraw

        return (
            <div>
                <svg width="580" height="400">
                    <ellipse ry="154.5" rx="111.5" cy="200.9375" cx="287" fill="#00f" />
                    {
                        features.map(feat => 
                            <Wrapper key={feat[0]} featureName={feat[0]} contents={feat[1]} root={this.props.root} />
                        )
                    }
                </svg>
            </div>
        )
    }
}
