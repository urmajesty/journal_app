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
    createEntry(value) { 
        const entry = {
            body: value,
        }
       
        return fetch(this.baseUrl,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body:JSON.stringify({entry}),
        })
        .then(res => res.json())
    }

    

    updateEntry(value, id) {
        console.log()
        const entry = {
            body: value,
        }
        let dataId = this.getElementById('data-id')
        return fetch(`http://localhost:3000/entries/${dataId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body:JSON.stringify({ entry }),
        }).then(res => res.json())
    }
}




// adapter - new EntriesAdapter
// const entries = adapter.getEntries()