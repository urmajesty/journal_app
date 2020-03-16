// "app" component instance is created from index.js
//whenever we invoke "app" component with the new keyword it fires up the constructor the constructor assigns a property called entrys and kicks off entrys component(where a lot of our js code is going to live because it's essentially a container. )
class App {
    constructor() {

        this.entries = new Entries()
    }
        
}