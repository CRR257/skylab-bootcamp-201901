import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'

import Search from '../Search'
import Results from '../Results'

import './index.sass'

class Home extends Component {
    state = { videos: null, searchFeedback: null }

    handleSearch = query => {
        this.props.history.push(`/home/videos/${query}`)
    }

    render() {
        const { handleSearch , state : { searchFeedback }} = this

        return (
            <section className="home columns is-fullheight">
                <div class="container column is-10">
                    <Search onSearch={handleSearch} />
                    <Route path='/home/videos/:query' render={(props) => <Results query={props.match.params.query} />} />

                </div>
            </section >
        )
    }
}
export default withRouter(Home)