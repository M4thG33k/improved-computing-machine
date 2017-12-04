class Resource{
    constructor(name){
        this.name = name;
        this.id = "resource_" + name.replace(/\W+/g, '');
        this.amount = 0;
        this.ticksPerAction = 30;
        this.ticks = 0;
        this.renderElement = null;
    }

    getName(){
        return this.name;
    }

    getAmount(){
        return this.amount;
    }

    /*
    Adds delta to the current amount as long is delta is non-negative. Use the remove amount method to remove an amount
     */
    addAmount(delta){
        if (delta >= 0) {
            this.amount += delta;
        }
    }

    canRemove(delta){
        return delta <= this.amount;
    }

    /*
    Attempts to remove delta from the current amount. Returns true iff the entire amount of delta was removed.
     */
    removeAmount(delta){
        if (this.canRemove(delta)){
            this.amount -= delta;
            return true;
        }
        return false;
    }

    do_tick(){
        if (this.ticks === 0)
        {
            this.addAmount(1);
        }
        this.ticks = (this.ticks+1) % this.ticksPerAction;
    }

    getRenderHTML(){
        let html = "<div class=\"list-group-item d-flex flex-column\" id='" + this.id +"'>";
        html += "<div>" +  this.name + "</div>";
        html += "<div class='amount'>" + this.amount + "</div>";
        html += "</div>";
        return html;
    }

    setRenderElement(element){
        this.renderElement = element;
    }

    updateRender(){
        this.renderElement.find(".amount").text(this.amount);
    }
}
