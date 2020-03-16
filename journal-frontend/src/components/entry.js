 // entry class constructor to creat a new instance of entry inside array
class Entry { 
    constructor(entryJSON) {
        //establish id and body property
    this.id = entryJSON.id
    this.body = entryJSON.body
    }
}