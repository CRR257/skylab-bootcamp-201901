import React, { Component } from 'react';
import logic from '../../Logic/logic.js'
import './tracks.sass' 

class Tracks extends Component {

    onGoBackAlbums= () => {
        this.props.onGoBackAlbums()
    }

    getTrackId = id => {

        try {
            logic.retrieveTrack(id, (error, track) => {
                console.log(track)

                if (error) console.log(error.message)
                else {
                    this.props.setTrack(track)
                    console.log(track)
                }
            })
        } catch (error) {
            console.log(error.message)
        }
    }
    render() {  
        const { tracks } = this.props
        return <section className="resultstracks_container">
            <div className="title_go_back">
            <h3><u>Tracks</u></h3>
            <button className="goBack" onClick={this.onGoBackAlbums}>Go Back to Albums</button>
            <div className="results_tracks"></div>
            </div>
            {
                tracks.map(track => (
                    <div className="card_tracks" key={track.id} onClick={() => this.getTrackId(track.id)}>
                        <div className="card_tracks_list">{track.name}</div>
                    </div>
                ))
            }
        </section>
    }
}

export default Tracks