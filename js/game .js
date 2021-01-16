class Game{
    constructor(){

    }

    getState(){
        var getStateref=database.ref("gameState");
        getStateref.on("value",function(data){
            gameState=data.val();
        })
    }

    update(state){
        database.ref("/").update({

            gameState:state
        })
    }
    
    start(){
        if(gameState===0){
            player=new Player(); 
            var playerCountref=await database.ref("playerCount").once("value");
            if(playerCountref.exist){
            playerCount=playerCountref.val();
            player.getCount();
            
            } 
            form=new Form();
        form.display();  
        }
        
        
    }

    play(){
        forn.hide();
        Player.getPlayerinfo();
        if(allPlayer!==undefined){
            
        }
    }


}