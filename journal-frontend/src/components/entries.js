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
        this.entriesContainer = document.getElementById('affirmations-entries-container')
        this.body = document.querySelector('body')
        this.newEntryBody = document.getElementById("new-entry-body")
        this.entryForm = document.getElementById("new-affirmations-entry-form")
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
        cdheaders: {
        "Content-Type": "application/json",
        // Accepts: "application/json"
      }
    }

    let id = e.target.dataset.id
    
    
    fetch(`http://localhost:3000/entries/${id}`, configObj)
      .then(function(){
      
      })
      
    let element = document.getElementById(`entry-${id}`)
    console.log(`entry-${id}`)
    element.remove()
 
  }
}
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
    
        const li = e.target
        li.contentEditable="false"
        li.classList.remove('edit')
        const newValue = li.innerHTML
        const id = li.dataset.id
    
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
// }class Entries {
//     constructor() {
//         this.entries = []
//         this.adapter = new EntriesAdapter()
//         //create new instance of entries adapter and saving it in a property called adapter
//         this.initEventListeners()
//         this.fetchAndRenderEntries()
//         //call fetch and render entries because we saved and have access to getentries method
//     }

//     initEventListeners() {
//         this.entriesContainer = document.getElementById('affirmations-entries-container')
//         this.body = document.querySelector('body')
//         this.newEntryBody = document.getElementById("new-entry-body")
//         this.entryForm = document.getElementById("new-affirmations-entry-form")
//         // this.entryForm.addEventListener('submit', this.createEntry)
//         this.entryForm.addEventListener('submit', this.createEntry.bind(this))
//         // this.entriesContainer.addEventListener('click', this.handleClickOnEntriesContainer.bind(this))
//         this.entriesContainer.addEventListener('dblclick', this.handleEditClick.bind(this))
//         this.entriesContainer.addEventListener('blur', this.updateEntry.bind(this), true)
//         this.entriesContainer.addEventListener('click', this.deleteEntry.bind(this));
//         // this.entriesContainer.addEventListener('dbclick', this.handleDoubleClick.bind(this))
//         // this.entriesContainer.addEventListener('unblur', this.handleCompleteEdit.bind(this))
//         // const deleteButton = document.createElement("button");
//         this.entries
    
        
//     }   

//     handleClickOnEntriesContainer(event){
//         console.log(event.target.className)
//         if (event.target.className == "delete"){
//             //this executes
//             let id = event.target.dataset.id
//             this.deleteEntry(id)
//         } 
        
//     }

//     // handleDoubleClick(event){
//     //     //is the event target a text tag?
//     //     console.log(event.target.tagName)
//     //     //if so, open up the text field to be edited
//     //     let id = event.target.dataset.id
//     //     this.handleEditClick(id)
//     // }

//     // handleCompleteEdit(event){
//     //     //is the event target unblur a text tag?
//     //     //if so, run your update

//     // }
    

//     createEntry(e) {
        
//         e.preventDefault()
//         const value = this.newEntryBody.value

//         this.adapter.createEntry(value).then(entry => {
//             this.entries.push(new Entry(entry))
//             this.newEntryBody.value = ""
//             this.render()



            
//         })
//     }   

//     // deleteEntry(e) {
//     //     const deleteButton = document.createElement("button");
//     //     deleteButton.innerHTML = "Delete";
//     //     deleteButton.classList.add("delete");
//     //     element.appendChild(deleteButton);
//     // }
//     deleteEntry() {

//     //     let dataId = document.getElementById('data-id')
    
//     //     fetch(`http://localhost:3000/entries/${dataId}`, {
//     //         method: 'DELETE'
//     //       })
//     //       .then(resp => resp.json())
//     //       .then(json => {
//     //           let journalEntry = document.querySelector(`.delete[data-id="${dataId}"]`) 
//     //           journalEntry.remove()
//     //       })
//     // }
    
    
//     fetch(`http://localhost:3000/entries/${id}`, configObj)', {

//         method: 'DELETE'
//           })
//           .then(resp => resp.json())
//           .then(json => {
//     }
      
//     let element = document.getElementById(`entry-${id}`)
//     console.log(`entry-${id}`, "removing entry")
//     element.remove()
    
 
//      }

//     handleEditClick (id) {
//         this.toggleEntry(event)
//     }

//         toggleEntry(event) {
//         const li = event.target
//         //makes li editable 
//         li.contentEditable="true"
//         li.focus()
//         li.classList.add('edit')

//         // <button class="delete"id=${entry.id}>Delete</button>
//     }

//     updateEntry(e) {
    
//         const li = e.target
//         li.contentEditable="false"
//         li.classList.remove('edit')
//         const newValue = li.innerHTML
//         const id = li.dataset.id
    
//         this.adapter.updateEntry(newValue, id)
//     }


//     fetchAndRenderEntries() {
//         this.adapter
//         .getEntries()
//         .then(entries => {
//             entries.sort((a, b) => a.id - b.id).forEach(entry => this.entries.push(new Entry(entry)))
//         //we take entries from server and iterate over that array. as we iterate we push that container on the entries prperty. 
//             // console.log(this.entries)
//         })
//         .then(() => {
//             this.render()
//         })
//     }

//     render() {
        
//         this.entriesContainer.innerHTML = this.entries.map(entry => entry.renderLi()).join('')
        
//    }
// }