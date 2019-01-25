'use strict';

/**
 * Duckling API client.
 * 
 * @version 2.2.0
 */
var ducklingApi = {
    /**
     * Searches ducklings.
     * 
     * @param {string} query - The text to match on search.
     * @param {function} callback - The expression to evaluate on response. If error first 
     * argument informs the error message, othwerwise first argument is undefined and second argument provides the matching 
     * results.
     */
    searchArtist (query, callback) {

        fetch('https://api.spotify.com/v1/search?q=${query}&type=artist`, {
            method: 'GET',
            headers: {
                autoritzation: 'Bearer '
            }
    )


        .then(res => res.json()) //ho transformem a json
        .then(({artists:{items} }) => callback(undefined, items)

    }