Hooks.once('init', async function() {
	console.log("************************************************** juacom99's Combat Assistance INIT **************************************************"); 
});


Hooks.once('ready', async function() {
	console.log("************************************************** juacom99's Combat Assistance READY **************************************************"); 
});



Hooks.on('combatTurn', async function(combat,updateData,updateOptions) {
  actorId=combat.turns[combat.turn].actorId
  actor=Actor.get(actorId);
  
  combatReactions=actor.items.find((i)=>i.type=="feat" && i.name=="Combat Reactions")
  
  
    if(combatReactions)
    {
      combatReactions.system.uses.value=combatReactions.system.uses.max
      ui.notifications.info("Combat reactions refilled");
    }
    else
    {
        ui.notifications.error("No combat reactions");
    }
  
  
});