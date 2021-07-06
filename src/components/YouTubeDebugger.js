// Code YouTubeDebugger Component Here
import React, { Component } from "react";

export default class YouTubeDebugger extends Component {
    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                resolution: '1080p'
                }
            }
        }
    }

    handleClick = (event) => {
        this.setState({
            settings: {
                ...this.state.settings, 
                bitrate: 12
            }
        })

    }

    handleResolutionClick = (event) => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }   
            }
        })
    }

    render(){
        return(
            <div class="buttons">
                <button className='bitrate' onClick={this.handleClick}>Bitrate</button>
                <button className='resolution' onClick={this.handleResolutionClick}>Resolution</button>
            </div>
            
        )
    }
}