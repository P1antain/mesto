export class Section{
    constructor({items, render}, containerSelector) {
        this._renderedItems = items;
        this._renderer = render;
        this._container = document.querySelector(containerSelector);
    }
    addItem(element){
        this._container.append(element)
    }
    renderItems(){
        this._renderedItems.forEach(element => {
            this._renderer(element);
        });
    }
}