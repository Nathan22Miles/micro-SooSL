import React, { Component } from 'react'
import { Root } from '../Root'
import { observer } from 'mobx-react'
import './Views.css'

const features = [
    ['left-eye', (props: any) => <ellipse {...props} ry="16" rx="25.5" cy="138.4375" cx="242" />],
    ['right-eye', (props: any) => <ellipse {...props} ry="16" rx="25.5" cy="139.4375" cx="329" />]
]

function Wrapper(props: any) {
    let { feature, contents, root } = props
    console.log('Wrapper', feature)
    let { positions } = root

    let className = positions.includes(feature) ? 'selected-feature' : 'unselected-feature'
    
    let onClick = () => {
        console.log('onClick', feature)
        let i = positions.indexOf(feature)
        if (i >= 0) {
            positions.splice(i, 1)
        } else {
            positions.push(feature)
        }
    }

    return contents({className, onClick}) 
}

interface IPositionChooser {
    root: Root,
}

@observer
export default class PositionChooser extends Component<IPositionChooser> {
    render() {
        (this.props.root.positions).join('')

        return (
            <div>
                <svg width="580" height="400">
                    <ellipse ry="154.5" rx="111.5" cy="200.9375" cx="287" fill="#00f" />
                    {
                        features.map(feat => 
                            <Wrapper key={feat[0]} feature={feat[0]} contents={feat[1]} root={this.props.root} />
                        )
                    }
                </svg>
            </div>
        )
    }
}
