import React, { Component } from 'react'
import { Root } from '../Root'
import { observer } from 'mobx-react'

interface IPositionChooser { 
    root: Root,
}

@observer
export default class PositionChooser extends Component<IPositionChooser> {
    constructor(props: IPositionChooser) {
        super(props)

        this.selected = this.selected.bind(this)
    }

    render() {
        return (
            <div>
                <svg width="580" height="400">
                    <ellipse ry="154.5" rx="111.5" cy="200.9375" cx="287" fill="#00f" />
                    <ellipse ry="16" rx="25.5" id="svg_2" cy="138.4375" cx="242" 
                        fill={this.selected('left-eye')} 
                        onClick={() => this.onClick('left-eye') }
                    />
                    <ellipse ry="16" rx="25.5" id="svg_3" cy="139.4375" cx="329" 
                        fill={this.selected('right-eye')}
                        onClick={() => this.onClick('right-eye')}
                    />
                </svg>
            </div>
        )
    }

    onClick(_id: string) {
        let { positions } = this.props.root 

        let i = positions.indexOf(_id)
        if (i >= 0) {
            positions.splice(i, 1)
        } else {
            positions.push(_id)
        }

    }

    selected(_id: string) {
        let { positions } = this.props.root 
        return positions.includes(_id) ? 'red' : 'yellow'
    }
}
