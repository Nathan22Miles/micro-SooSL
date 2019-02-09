import React, { SFC } from 'react'

interface ICitationPlayer { url: string }

export default class CitationPlayer extends React.Component<ICitationPlayer> {
    render() {
        return (
            <div>
                <video 
                    className="CitationPlayer"
                    controls
                    src={this.props.url}
                    autoPlay={true} />
            </div> 
        )
    }
}