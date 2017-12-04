class Game{
    constructor(){
        this.r = new Resource("Bob");
        $("#the_group").append(this.r.getRenderHTML());
        this.r.setRenderElement($("#"+this.r.id));
    }

    tickGame(){
        this.r.do_tick();
        this.r.updateRender();
    }
}

$(function(){
   // Start game tick
    game = new Game();
    function tickGame(){
        if (true){
            let length = 30;
            game.tickGame();
            setTimeout(tickGame, length);
        }
    }

    tickGame();
});