import React, { Component } from 'react';
import logic from '../../Logic/logic.js'
import './search.sass' 

class Search extends Component {
    state = { search: '' }  //artists ho posem null pq dp tindrem una array d'{}

    searchArtists = event => this.setState({ search: event.target.value })

    onbuttonsubmited = event => {
        event.preventDefault()

        const { state: { search} } = this

        try {
            logic.searchArtists(search, (error, artists) => {
                console.log('hola, search ')

                if (error) console.log(error.message)
                else {
                    this.props.setArtists(artists)
                   
                    //this.setState({artists: artists}) //es el mateix q this.setState({artists})
                }
            })
        } catch (error) {
            console.log(error.message)
        }
    }
    render() {
        const { searchArtists, onbuttonsubmited } = this  //pq es una funció

        return <section className="search container">
            <h2>Search</h2>
            <form onSubmit={onbuttonsubmited}>
                <input className="searchartist" type="text" name="query" placeholder="Search an artist..." onChange={searchArtists} />
                <button className="btn btn-danger button" type="submit">Search</button>
            </form>
        </section>
    }
}

export default Search;