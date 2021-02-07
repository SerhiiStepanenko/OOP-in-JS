class Button {
    constructor(width, height, background, value){
        this.width = width;
        this.height = height;
        this.background = background;
        this.value = value;
    }
    render() {
        let elem = document.createElement('button');
        elem.style.width = this.width + 'px';
        elem.style.height = this.height + 'px';
        elem.style.background = this.background;
        elem.innerText = this.value;
        return elem;
    }
}
