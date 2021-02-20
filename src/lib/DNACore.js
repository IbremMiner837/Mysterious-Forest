LIBRARY({
    name: "DNACore",
    version: 1,
    shared: true,
    api: "CoreEngine"
});

var DNKCore = {
    group:{},
    registerItem:function(id,name,texture,params){
    IDRegistry.genItemID(id);
    params.stack = 64;
    Item.createItem(id,name,texture,params);
    Callback.addCallback("PlayerAttack",function(player,entity){
    if(Entity.getCarriedItem(Player.get()).id == syringe){
    if(Entity.getType(entity)==params.type){
    Player.decreaseCarriedItem(1);
    Item.addItemToInventory(ItemID[id],1);
    }
    }
    })
    
    },
    createGroup:function(name,display){
    this.group[name] = {id:[],name:name,display:display};
    },
    addInGroup:function(name,value){
    this.group[name].id.push(value);
    },
    registerCreativeGroup:function(){
    for(var i in this.group){
    var group = this.group[i];
    Item.addCreativeGroup(group.name,group.display,group.id);
    }
    }
    }

    EXPORT("EnergyTypeRegistry", EnergyRegistry);