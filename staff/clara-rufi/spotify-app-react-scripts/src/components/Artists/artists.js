import React, { Component } from 'react';
import logic from '../../Logic/logic.js'
import './artists.sass' 

class Artist extends Component {

    getartistId = id => {

        try {
            logic.retrieveAlbums(id, (error, albums) => {

                if (error) console.log(error.message)
                else {
                    this.props.setAlbums1(albums)
                    console.log(albums)
                }
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    render() {
        //console.log(this.props.artists) //mostrar el obj de artistas

        const { artists } = this.props  //pq hem passat l'estat d'un pare al fill, o una funcio o un string, passen a ser props
        return <section className="resultsArtist container">
            <h3><u>Artists</u></h3>
            <div className="card-columns">      
            {
                artists.map(artist => (
                    <div className="card" key={artist.id} onClick={() => this.getartistId(artist.id)} >
                         <div className="card-body_albums">
                        <h5 className="card-title">{artist.name}</h5>
                        <img className="card-img-top" src={artist.images[0] ? artist.images[0].url : 'https://cdn.browshot.com/static/images/not-found.png'} alt={artist.name} />
                    </div>
                    </div>
                ))
            }
            </div> 
            
        </section>
    }
}

export default Artist;