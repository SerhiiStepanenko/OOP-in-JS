class ModernButton extends Button{
    constructor(width, height, background, value, borderRadius){
        super(width, height, background, value);
        this.borderRadius = borderRadius;
    }
    render(){
        let elem = super.render();
        elem.style.borderRadius = this.borderRadius + 'px';
        return elem;
    }
}