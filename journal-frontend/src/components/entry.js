 // entry class constructor to creat a new instance of entry inside array
 class Entry { 
    constructor(entryJSON) {
    this.id = entryJSON.id
    this.body = entryJSON.body
    }


    renderLi() {
    return `<div data-id="entry-${this.id}">
    <li class="searching"> ${this.body}</li>
    
    <button class="delete" data-id="${this.id}">Delete</button>
    <div>
    
    <button class="likes" data-id="${this.id}">Like</button>
    <span class="count">0</span>
  </div></div>
  `

    }
}
    
