var custom_UI = new UI.StandartWindow({
	standart: {header: {text: {text: "Created With UIEditor"}},
	background: {color: android.graphics.Color.rgb(179, 179, 179)}, inventory: {standart: true}},
	drawing: [],
	elements: {
		"closeButton_0": {type: "closeButton", x: 934, y: 30, global: true, bitmap: "close_default", bitmap2: "close_default2", scale: 3.2},
		"slot_0": {type: "slot", x: 422, y: 113, size: 77, visual: false, bitmap: "slot_dna", needClean: true, isTransparentBackground: false},
		"slot_1": {type: "slot", x: 422, y: 190, size: 77, visual: false, bitmap: "slot_egg", needClean: true, isTransparentBackground: false},
		"slot_2": {type: "slot", x: 422, y: 266, size: 77, visual: false, bitmap: "slot_kamen_jizni", needClean: true, isTransparentBackground: false},
		"slot_3": {type: "slot", x: 794, y: 190, size: 76, visual: false, bitmap: "slot_default", needClean: true, isTransparentBackground: false},
		clicker: {
                onClick: function(container) {
                    container.getGuiContent().elements["slot_0"];
                    container.getGuiContent().elements["slot_1"];
                    container.getGuiContent().elements["slot_2"];
                    container.getGuiContent().elements["slot_3"];
      }
    } 
  }
});



var container = new UI.Container(); 
TileEntity.registerPrototype(BlockID.dna_analizator_cow,{ 
getGuiScreen: function(){ 
return custom_UI; 
}, 
tick: function(){ 
    if(this.container.getSlot("slot_0").id == ItemID.dnaCow &&
        this.container.getSlot("slot_1").id == 344 &&
        this.container.getSlot("slot_2").id == ItemID.kamenJizni
  ){ 
        this.container.setSlot("slot_3", 383, 1, 11);
} 
} 
});

