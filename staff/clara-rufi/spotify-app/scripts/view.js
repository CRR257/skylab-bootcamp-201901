class Panel {
    constructor($container) {
        this.$container = $container
    }

    show() {
        this.$container.show()
    }

    hide() {
        this.$container.hide()
    }
}

class SearchPanel extends Panel {
    constructor() {
        super($(`<section class="search container">
        <h2>Search</h2>
    <form>
        <input class="searchartist" type="text" name="query" placeholder="Search an artist..."></input>
        <button class= "btn btn-danger button" type="submit">Search</button>
    </form>
</section>`))

    // var $container = this.$element; => no cal posar-ho, pq ja hem definit
    //el panel amb el constructor a dins

        this.__$form__ = this.$container.find('form')
        this.__$query__ = this.__$form__.find('input')
    
    }
    set onSearch(callback) {
        this.__$form__.on('submit', event => {
            event.preventDefault()

            const query = this.__$query__.val()

            callback(query)
        })
    }

    errorClear(){
        this.__errorPanel__.hide()
    } 
}

class ArtistsPanel extends Panel {
   
    constructor() {
        super($(`<section class="resultsArtist container">
        <h3><u>Artists</u></h3>
        <div class="card-columns"></div>    
    </section>`))

        this.__$list__ = this.$container.find('div')
    }

    set artists (artists){
     
        artists.forEach(({ id, name}) =>{
            const $item =$(`<div data-id=${id} class="card">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>

        </div>
    </div>`)

            $item.click(() => {
            
                const id = $item.data('id')
    
                this.__onArtistSelected__(id)
            })
        
            this.__$list__.append($item)
        })
    }
    set onArtistSelected(callback) {
        this.__onArtistSelected__ = callback
    }

    clear () {
        this.__$list__.empty()
    } 
}


/////////////////////////// Mostrar Cd's

class AlbumPanel extends Panel {
    constructor (){
        super($(`<section class="resultsalbum_container">
        <h3><u>Albums</u></h3>
        <div class="card-columns"></div> 
    </section>`))

        this.__$list__ = this.$container.find('div')
    }

    set albums (albums){
        albums.forEach(({ id, name, release_date, total_tracks}) =>{
            const $item =$(`<div data-id=${id} class="card">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <small class="text-album">Released date: ${release_date}</small>
                    <p>
                    <small class="text-album">Total tracks: ${total_tracks}</small>
                </div>
            </div>`)

            $item.click(() => {
                const id = $item.data('id')
                this.__onAlbumSelected__(id)                
            })

            this.__$list__.append($item)
    })
}
    set onAlbumSelected (callback) {
        this.__onAlbumSelected__ = callback
    }

    clear () {
        this.__$list__.empty()
    } 
}

class TracksPanel extends Panel{
    constructor(){
        super($(`<section class="resultstracks_container">
        <h3><u>Tracks</u></h3>
       
        <div class="card-tracks"></div> 
        <ul></ul>
    </section>`))

    this.__$list__ = this.$container.find('ul')
    }

    set tracks (tracks){
        tracks.forEach(({id, name}) =>{
            
            const $item =$(`<li data-id=${id} class="card tracks list">${name}</li>`)


        $item.click(() => {
        
            const id = $item.data('id')
            this.__onTrackSelected__(id)                   
        })

        this.__$list__.append($item)
    })
    }

        set onTrackSelected (callback) {
            this.__onTrackSelected__ = callback
        }

        clear () {
            this.__$list__.empty()
        } 
    }


class TrackPanel extends Panel{
    constructor(){
        super($(`<section class="resultstracks_container">
        <h3><u>Track selected</u></h3>
        <div class="resultstrack"></div> 
        <ul></ul>
    </section>`))

        this.__$list__ = this.$container.find('ul')
    }

    set track ({id, name}) {
        //console.log("track selected" + track)  /////////////////peta quan el poso

        const $item = $(`<li data-id=${id} class="card trackselected">
            <h5 class="card-text">${name}</h5>
        </li>`)


            this.__$list__.append($item)
            
    }
}