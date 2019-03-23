import React, { SFC } from 'react'

interface ICitationPlayer { url: string }


export default class CitationPlayer extends React.Component<ICitationPlayer> {
    render() {
        let url = this.props.url
        url = 'http://micro-soosl-nlm-hostingbucket-dev.s3-website-us-east-1.amazonaws.com/yes.mp4'
        return (
            <div>
                <video 
                    className="CitationPlayer"
                    controls
                    src={url}
                    autoPlay={true} />
            </div> 
        )
    }
}