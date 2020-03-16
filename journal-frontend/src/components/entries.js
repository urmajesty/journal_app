// a lot of code is going to live here ... it's essentially a container it's going to contain all our entries // create a new instance of the entries container // the constructor function kicks off 
class Entries {
    constructor() {
        this.entries = []
        this.adapter = new EntriesAdapter()
        //create new instance of entries adapter and saving it in a property called adapter
        // this.bindEventListeners()
        this.fetchAndRenderEntries()
        //call fetch and render entries because we saved and have access to getentries method
    }

    fetchAndRenderEntries() {
        this.adapter
        .getEntries()
        .then(entries => {
        
            entries.forEach(entry => this.entries.push(new Entry(entry)))
            
            //we take entries from server and iterate ovver that array. as we iterate we push that container on the entries prperty. 
            // console.log(this.entries)
        })
        .then(() => {
            this.render()
        })
    }

    render() {
        const entriesContainer = document.getElementById('journal-entry-container')
        entriesContainer.innerHTML = 'my journal entries'
   
    }
}