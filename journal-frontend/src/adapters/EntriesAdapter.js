//'like controller'... communicates with API // kicked off from entries.js
class EntriesAdapter {
    constructor() {
        this.baseUrl = 
        //constructor function.. base url is set... which is html
        'http://localhost:3000/entries'
         
    }


    getEntries() {
        return fetch(this.baseUrl).then(res => res.json()
        //Take response object and parse object to json
        )
    }
}

// adapter - new EntriesAdapter
// const entries = adapter.getEntries()