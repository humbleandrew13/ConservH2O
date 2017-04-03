var game = new Phaser.Game(800,600,Phaser.CANVAS,'gameDiv');

var gameState = {
    preload:function(){
        
    },
    
    create:function(){
        
    },
    
    update:fuction(){
    
    }
}


game.state.add('gameState', gameState);

game.state.start('gameState')