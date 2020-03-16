 // entry class constructor to creat a new instance of entry inside array
class Entry { 
    constructor(entryJSON) {
    this.id = entryJSON.id
    this.body = entryJSON.body
    }
}
//establish id and body property