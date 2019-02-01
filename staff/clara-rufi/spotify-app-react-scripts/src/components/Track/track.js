import React, { Component } from 'react';
import './track.sass' 

class Track extends Component {
    state = {color: null}

    // onChange =() =>{
    //     this.setState({color:'green'}) //li passem props pq es pugui passar al pare
    // }

    onGoBackTracks= () => {
        this.props.onGoBackTracks()
    }

    render() {
        const { track } = this.props
        
        return <section className="resultstracks_container">
            <div className="title_go_back">
            <h3><u>Track</u></h3>  
            <button className="goBack" onClick={this.onGoBackTracks}>Go Back to Tracks</button>
            </div>
           
      
            <div className="card_title-track">{track.name}< i class="far fa-heart pointer" style={{backgroundColor:this.state.color}} onClick={() => this.onChange()}></i></div>
            <audio controls autoPlay loop src={track.preview_url} class="player">
            </audio>

        </section>
    }
}

export default Track;