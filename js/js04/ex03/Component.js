export class Component{
    
    /*#reference = null
    constructor(access){
        this.#reference = document.getElementById
        this.access = access
    }

    accessElement(){
        return this.#reference + "(" + this.access + ")"
    }*/

    #element = null
    constructor(tag, parent, options){
        this.tag = tag
        this.parent = parent
        this.options = options 
        this.biuld()
    }

    biuld(){
        this.#element = document.createElement(this.tag)
        Object.assign(this.#element, this.options)
        return this
    }

    getElement = () => this.#element

    render(){
        if (this.parent instanceof Component){
            this.parent.getElement().append(this.#element)
        } else{
            document.querySelector(this.parent).append(this.#element)
        }
    }
}