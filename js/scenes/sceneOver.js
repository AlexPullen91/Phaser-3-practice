class SceneOver extends Phaser.Scene {
    constructor() {
        super('SceneOver');
    }

    preload() {
        this.load.image("button1", "images/ui/buttons/2/1.png");
    	this.load.image("gameTitle", "images/gameTitle.png")
    }

    create() {
        this.alignGrid = new AlignGrid({rows:11, cols:11, scene:this}); // adds grid to the scene
        //this.alignGrid.showNumbers();

        var title = this.add.image(0, 0, 'gameTitle'); // inserts title image
        Align.scaleToGameW(title, .8); // scales down the title
        this.alignGrid.placeAtIndex(38, title); // places it central
        // button to re-start the game
        var btnStart = new FlatButton({scene:this, key:'button1', text:'Play Again!', event:'start_game'})
        this.alignGrid.placeAtIndex(93, btnStart);

        emitter.on('start_game', this.startGame, this); // listen for re-start game event
    }

    startGame() {
        this.scene.start('SceneMain');
    }

    update() {

    }
}