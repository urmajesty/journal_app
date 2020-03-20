// a lot of code is going to live here ... it's essentially a container it's going to contain all our entries // create a new instance of the entries container // the constructor function kicks off 
class Entries {
    constructor() {
        this.entries = []
        this.adapter = new EntriesAdapter()
        //create new instance of entries adapter and saving it in a property called adapter
        this.initEventListeners()
        this.fetchAndRenderEntries()
        //call fetch and render entries because we saved and have access to getentries method
    }

    initEventListeners() {
        this.entriesContainer = document.getElementById('journal-entries-container')
        this.body = document.querySelector('body')
        this.newEntryBody = document.getElementById("new-entry-body")
        this.entryForm = document.getElementById("new-journal-entry-form")
        // this.entryForm.addEventListener('submit', this.createEntry)
        this.entryForm.addEventListener('submit', this.createEntry.bind(this))
        this.entriesContainer.addEventListener('dblclick', this.handleEditClick.bind(this))
        this.entriesContainer.addEventListener('blur', this.updateEntry.bind(this), true)
        this.entriesContainer.addEventListener('click', this.deleteEntry.bind(this));
        // const deleteButton = document.createElement("button");
        this.entries
    
        
    }   
    

    createEntry(e) {
        
        e.preventDefault()
        const value = this.newEntryBody.value

        this.adapter.createEntry(value).then(entry => {
            this.entries.push(new Entry(entry))
            this.newEntryBody.value = ""
            this.render()



            
        })
    }   

    // deleteEntry(e) {
    //     const deleteButton = document.createElement("button");
    //     deleteButton.innerHTML = "Delete";
    //     deleteButton.classList.add("delete");
    //     element.appendChild(deleteButton);
    // }
    deleteEntry(e) {

  if (e.target.className = "delete"){

    let configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      }
    }

    let id = e.target.dataset.id
    fetch(`http://localhost:3000/entries/${id}`, configObj)
      .then(function(){
        console.log("Done!")
      })
      console.log(`${this.id}`)
    let element = document.getElementById(`${this.id}`)
    element.remove()
    console.log("removed!")
  }
}

            // id.classList.remove("delete")

            // let configObj = {
            //     method: "DELETE",
            //     headers: {
            //         "Content-Type": "application/json",
            //         Acccepts: "application/json"
            //     }
            // }
            // fetch(this.baseURL, this.id

           
    
    //     updateEntry(value, id) {
    //     const entry = {
    //         body: value,
    //     }
        
    //     return fetch(`${this.baseUrl}/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json',
    //         },
    //         body:JSON.stringify({ entry }),
    //     }).then(res => res.json())
    // }



    handleEditClick (e) {
        this.toggleEntry(e)
    }

        toggleEntry(e) {
        const li = e.target
        //makes li editable 
        li.contentEditable="true"
        li.focus()
        li.classList.add('edit')

        // <button class="delete"id=${entry.id}>Delete</button>
    }

    updateEntry(e) {
        console.log(e.target)
        const li = e.target
        li.contentEditable="false"
        li.classList.remove('edit')
        const newValue = li.innerHTML
        const id = li.dataset.id
        console.log(li.dataset.id)
        this.adapter.updateEntry(newValue, id)
    }


    fetchAndRenderEntries() {
        this.adapter
        .getEntries()
        .then(entries => {
            entries.sort((a, b) => a.id - b.id).forEach(entry => this.entries.push(new Entry(entry)))
        //we take entries from server and iterate over that array. as we iterate we push that container on the entries prperty. 
            // console.log(this.entries)
        })
        .then(() => {
            this.render()
        })
    }

    render() {
        
        this.entriesContainer.innerHTML = this.entries.map(entry => entry.renderLi()).join('')
        
   }
}