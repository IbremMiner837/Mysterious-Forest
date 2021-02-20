var dnaAnalizatorGUI = UI.StandartWindow({ 
standart: {header: {text: {text: "dnaAnalizator"}},
background: {color: android.graphics.Color.rgb(179, 179, 179)}, inventory: {standart: true}}, 
drawing: [], 
elements: { 
"slot_0": {type: "slot", x: 340, y: 240, size: 74, visual: false, bitmap: "slot_dna", needClean: true, isTransparentBackground: false}, 
"scale_0": {type: "scale", x: 421, y: 244, direction: 0, bitmap: "furnace_bar_background", scale: 4.499999999999999, value: 1}, 
"image_0": {type: "image", x: 500, y: 200, bitmap: "microscope", scale: 4.599999999999999}, 
"scale_1": {type: "scale", x: 641, y: 244, direction: 0, bitmap: "furnace_bar_background", scale: 4.499999999999999, value: 1}, 
"image_1": {type: "image", x: 750, y: 160, bitmap: "днк", scale: 7.399999999999989},
clicker: {
                onClick: function(container) {
                    container.getGuiContent().elements["slot_0"];
     } 
    }
   }
});
 


var container = new UI.Container(); 
TileEntity.registerPrototype(BlockID.dna_analizator,{ 
getGuiScreen: function(){ 
return dnaAnalizatorGUI; 
}, 
tick: function(){ 
    if(this.container.getSlot("slot_0").id == ItemID.dnaCow 
  ){ 
    this.container.clearSlot("slot_0");
} 
} 
});