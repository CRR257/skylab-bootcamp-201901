import React, { Component } from 'react';
import logic from '../../Logic/logic.js'
import './album.sass'  //en el cas del sass

class Album extends Component {

    onGoBackArtists= () => {
        this.props.onGoBackArtists()
    }
 

    getalbumId = id => {

        try {
            logic.retrieveTracks(id, (error, tracks) => {
                console.log(tracks)
                if (error) console.log(error.message)
                else {
                    this.props.setTracks(tracks)
                    console.log(tracks)
                }
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    render() {

        const { albums } = this.props
        return <section className="resultsalbum_container">
           <div className="card-columns">  
            <h3><u>Albums</u></h3>  
            <button className="goBack" onClick={this.onGoBackArtists}>Go Back to Artists</button>
            </div>
                {
                albums.map(album => (
                    <div className="card" key={album.id} onClick={() => this.getalbumId(album.id)} >
                        <div className="card-body">       
                            <h5 className="card-title">{album.name}</h5>                 
                            <img className="card-img-top" src={album.images[0] ? album.images[0].url : 'https://cdn.browshot.com/static/images/not-found.png'} alt={album.name} />
                            <small className="text-album">Released date: {album.release_date}</small>
                            <p></p>
                            <small className="text-album">Total tracks: {album.total_tracks}</small>
                        </div>
                    </div>
                ))
                }  
           
        </section>
        }
}

export default Album;