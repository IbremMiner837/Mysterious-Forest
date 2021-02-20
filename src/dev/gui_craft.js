var guiDNAAnalizatorGUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "ДНК Анализатор"
            }
        },
        inventory: {
            standart: true
        },
        background: {
            color: android.graphics.Color.rgb(153, 17, 153)
        }
    },
     params: {
     slot: "craft_slot",
    },
    drawing: [],
    elements: {
        "slotSource1": {
            type: "slot",
            x: 531,
            y: 142
        },
        "slotSource2": {
            type: "slot",
            x: 531,
            y: 199
        },
        "slotSource3": {
            type: "slot",
            x: 531,
            y: 256
        },
        "btn_next": {
            type: "button",
            x: 897,
            y: 258,
            bitmap: "btn_next",
            bitmap2: "btn_next_clicked",
            scale: 3,
            clicker: {
                onClick: function(container) {
                    container.getGuiContent().elements["slotSource1"].y += 20;
                    container.getGuiContent().elements["slotSource2"].y += 20;
                    container.getGuiContent().elements["slotSource3"].y += 20;
            }
        },
        "btn_prev": {
            type: "button",
            x: 897,
            y: 130,
            bitmap: "btn_prev",
            bitmap2: "btn_prev_clicked",
            scale: 3,
            clicker: {
                onClick: function(container) {
                    container.getGuiContent().elements["slotSource1"].y -= 20;
                    container.getGuiContent().elements["slotSource2"].y -= 20;
                    container.getGuiContent().elements["slotSource3"].y -=20;
                   }
                }
            }
        },
    }
});

TileEntity.registerPrototype(BlockID.dna_analizator_cow, {
     defaultValues: {
     },
     //такт
     tick: function(){
         //ItemChopper
         if(this.container.getSlot("slotSource1").id == ItemID.dnaCow ,&&
            this.container.getSlot("slotSource2").id == 344 &&
            this.container.getSlot("slotSource3").id == ItemID.kamenZizni
         ){
            this.container.clearSlot("slotSource1");
            this.container.clearSlot("slotSource2");
            this.container.clearSlot("slotSource3");

            this.container.setSlot("slotResult", 1, 1, 0);
         }
     },
         },
  //GUI
TileEntity.registerPrototype(BlockID.dna_analizator,{
getGuiScreen: function(){
return guiDNAAnalizatorGUI;
});                    










