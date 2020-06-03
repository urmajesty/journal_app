// a lot of code is going to live here ... it's essentially a container it's going to contain all our entries // create a new instance of the entries container // the constructor function kicks off 
class Entries {
    constructor() {
        this.entries = []
        
        this.adapter = new EntriesAdapter()
        
        this.initEventListeners()
        this.fetchAndRenderEntries()   
    }

    initEventListeners() {
        this.entriesContainer = document.getElementById('affirmations-entries-container')
        this.body = document.querySelector('body')
        this.newEntryBody = document.getElementById("new-entry-body")
        this.entryForm = document.getElementById("new-affirmations-entry-form")
        this.entryForm.addEventListener('submit', this.createEntry.bind(this))
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
       
    
 
    deleteEntry(e) {

        console.log(e.target.className)
        if (e.target.className="delete") {
            

            let configObj = {
                method: "DELETE",
                headers: {
                "Content-Type": "application/json",    
                }
            }
            let id = e.target.dataset.id
  
    
    
            fetch(`http://localhost:3000/entries/${id}`, configObj)
            .then(function() {
        
            })
      
            let element = e.target.parentElement
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
    }


    updateEntry(e) {
    
        const li = e.target
        li.contentEditable="false"
        li.classList.remove('edit')
        const newValue = li.innerHTML
        const id = li.dataset.id
    
        this.adapter.updateEntry(newValue, id)
    }

    likeButton(e) {
        // console.log(e.target.className)
        // if(e.target.className="button.likes"){
        //     e.preventDefault();
           
           
        // }
        // fetch(`http://localhost:3000/toys/`, {
        //     method: 'PATCH',
        //     headers: {
        //     'Content-Type': 'application/json',
        //     "Accept": "application/json"
        //     },
        //     body: JSON.stringify({likes})

        
        // })
        // .then(resp => resp.json())

        if (e.target.className="button.likes") {
        
            let configObj = {
                method: "PATCH",
                headers: {
                "Content-Type": "application/json",    
                }
            }
            let id = e.target.dataset.id



            fetch(`http://localhost:3000/entries/${id}/`, configObj)
        
            .then(resp => resp.json())

        
            if (e.target.className = "button.likes"){
                
                let count = e.target.parentElement.querySelector('.count')
                count.innerHTML = (parseInt(count.innerText) + 1)
            }
            // render json: { likes_count: @entry.likes.length}
        }
    }
        
       
    
    
    

    fetchAndRenderEntries() {
        this.adapter
        .getEntries()
    
        .then(entries => {
            entries.sort((a, b) => a.id - b.id).forEach(entry => this.entries.push(new Entry(entry)))
        })    
        .then(() => {
            this.render()
        })
    }
   

    render() {
        
        this.entriesContainer.innerHTML = this.entries.map(entry => entry.renderLi()).join('')
        document.querySelectorAll('button.delete').forEach(element => {
            element.addEventListener('click', this.deleteEntry.bind(this))
        })
        document.querySelectorAll('button.likes').forEach(element => {
            element.addEventListener('click', this.likeButton.bind(this))
    
        })
        
    }
    

       
    
}


        

// 

    



