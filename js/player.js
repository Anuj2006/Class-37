class Player{
   constructor(){
       this.name=null;
       this.distance=0;
       this.index=null;
       


   }

   getCount(){
      var countref=database.ref("playerCount");
       countref.on("value",(data)=>{
           playerCount=data.val();
       })
   }

   
   updateCount(count){
       database.ref("/").update({
       playerCount:count
       })
   }

   update(){
       var playerindex="players/player"+this.index;
       database.ref(playerindex).set({
           name:this.name,
           distance:this.distance
       })

   }
   
   static getPlayerinfo(){
       var playerref=database.ref("players");
       playerref.on("value",(data)=>{
           allPlayer=data.val();
       })
   }
}
