IDRegistry.genItemID("med");
IDRegistry.genItemID("medPlastin");
IDRegistry.genItemID("plata0");
IDRegistry.genItemID("plata1");
IDRegistry.genItemID("plata2");
IDRegistry.genItemID("component");

Item.createItem("med", "Медь", {name: "med", meta: 0}, {stack: 64});
Item.createItem("medPlastin", "Медьная пластина", {name: "med_plastin", meta: 0}, {stack: 64});
Item.createItem("plata0", "Чистая плата", {name: "plata", meta: 0}, {stack: 64});
Item.createItem("plata1", "Плата с чипами", {name: "plata", meta: 1}, {stack: 64});
Item.createItem("plata2", "Плата анализатор", {name: "plata", meta: 2}, {stack: 64});
Item.createItem("component", "Чип", {name: "component", meta: 0}, {stack: 64});



IDRegistry.genBlockID("dna_analizator");

IDRegistry.genBlockID("dna_analizator_cow");
IDRegistry.genBlockID("dna_analizator_red_cow");
IDRegistry.genBlockID("dna_analizator_sheep");
IDRegistry.genBlockID("dna_analizator_pig");
IDRegistry.genBlockID("dna_analizator_chiken");
IDRegistry.genBlockID("dna_analizator_villager");

IDRegistry.genBlockID("dna_analizator_zombie");
IDRegistry.genBlockID("dna_analizator_skeleton");
IDRegistry.genBlockID("dna_analizator_creeper");
IDRegistry.genBlockID("dna_analizator_spider");
IDRegistry.genBlockID("dna_analizator_enderman");

IDRegistry.genBlockID("dna_analizator_pigman");


Block.createBlockWithRotation("dna_analizator", 
     [{name: "ДНК Анализатор", texture: 
     [["machine_side", 0], ["machine_side", 0], 
     ["machine_side", 0], ["dna_for_egg", 0], 
     ["machine_side", 0], ["machine_side", 0]], 
     inCreative: true}]);
     
     var DNA_Analizator = new UI.StandartWindow({
     standart: {
          header: {
               text: {
                    text: "DNA Analizator"
               }
               //color: android.graphics.Color.rgb(0x47, 0x26, 0x0c),
          },
          inventory: {
               standart: true
          },
          background: {
          	 standart: true
               //bitmap: "thaum_background"
          },
          minHeight: 600
     },
     params: {
          textures: {
               slot: "slot_default",
               invSlot: "slot_default_selected",
               selection: "dna_selection",
               closeButton: "dna_close_button_up",
               closeButton2: "dna_close_button_down",
               scale: "furnace_bar_backround",
               //frame: "thaum_frame_default"
          }
     },
     /*drawing: [
          {type: "bitmap", x: 842, y: 104, bitmap: "aspect_scale_background", scale: 4},
          {type: "bitmap", x: 560, y: 100, bitmap: "aspect_reactor_background", scale: 360 / 128},
     ],*/
     elements: {
          //слот для крови
        "slot_0": {type: "slot", x: 390, y: 115, size: 66, visual: false, bitmap: "custom.slot_syringe", 
         isValid: function(id) {
				if (/*Кровь Мирных Мобов*/ id == ItemID.blood_of_peaceful_mobs_19 || id == ItemID.blood_of_peaceful_mobs_75 || id == ItemID.blood_of_peaceful_mobs_10 || id == ItemID.blood_of_peaceful_mobs_112 || id == ItemID.blood_of_peaceful_mobs_11 || id == ItemID.blood_of_peaceful_mobs_24 || id == ItemID.blood_of_peaceful_mobs_121 || id == ItemID.blood_of_peaceful_mobs_23 || id == ItemID.blood_of_peaceful_mobs_16 || id == ItemID.blood_of_peaceful_mobs_25 || id == ItemID.blood_of_peaceful_mobs_22 || id == ItemID.blood_of_peaceful_mobs_30 || id == ItemID.blood_of_peaceful_mobs_12 || id == ItemID.blood_of_peaceful_mobs_18 || id == ItemID.blood_of_peaceful_mobs_109 || id == ItemID.blood_of_peaceful_mobs_13 || id == ItemID.blood_of_peaceful_mobs_26 || id == ItemID.blood_of_peaceful_mobs_21 || id == ItemID.blood_of_peaceful_mobs_17 || id == ItemID.blood_of_peaceful_mobs_125 || id == ItemID.blood_of_peaceful_mobs_111 || id == ItemID.blood_of_peaceful_mobs_74 || id == ItemID.blood_of_peaceful_mobs_115 || id == ItemID.blood_of_peaceful_mobs_118
                         || id == ItemID.blood_of_peaceful_mobs_43 || id == ItemID.blood_of_peaceful_mobs_33 || id == ItemID.blood_of_peaceful_mobs_110 || id == ItemID.blood_of_peaceful_mobs_50 || id == ItemID.blood_of_peaceful_mobs_55 || id == ItemID.blood_of_peaceful_mobs_104 || id == ItemID.blood_of_peaceful_mobs_41 || id == ItemID.blood_of_peaceful_mobs_49 || id == ItemID.blood_of_peaceful_mobs_hoglin || id == ItemID.blood_of_peaceful_mobs_47 || id == ItemID.blood_of_peaceful_mobs_42 || id == ItemID.blood_of_peaceful_mobs_phantom || id == ItemID.blood_of_peaceful_mobs_127 || id == ItemID.blood_of_peaceful_mobs_pillager || id == ItemID.blood_of_peaceful_mobs_ravager || id == ItemID.blood_of_peaceful_mobs_54 || id == ItemID.blood_of_peaceful_mobs_39 || id == ItemID.blood_of_peaceful_mobs_34 || id == ItemID.blood_of_peaceful_mobs_37 || id == ItemID.blood_of_peaceful_mobs_46 || id == ItemID.blood_of_peaceful_mobs_105 || id == ItemID.blood_of_peaceful_mobs_57 || id == ItemID.blood_of_peaceful_mobs_45 || id == ItemID.blood_of_peaceful_mobs_48 || id == ItemID.blood_of_peaceful_mobs_126 || id == ItemID.blood_of_peaceful_mobs_32 || id == ItemID.blood_of_peaceful_mobs_116 || id == ItemID.blood_of_peaceful_mobs_127
                         /*|| id == ItemID.blood_of_peaceful_mobs_122*/|| id == ItemID.blood_of_peaceful_mobs_48 || id == ItemID.blood_of_peaceful_mobs_31 || id == ItemID.blood_of_peaceful_mobs_38 || id == ItemID.blood_of_peaceful_mobs_20 || id == ItemID.blood_of_peaceful_mobs_29 || id == ItemID.blood_of_peaceful_mobs_113 || id == ItemID.blood_of_peaceful_mobs_123 || id == ItemID.blood_of_peaceful_mobs_28 || id == ItemID.blood_of_peaceful_mobs_108 || id == ItemID.blood_of_peaceful_mobs_35 || id == ItemID.blood_of_peaceful_mobs_14 || id == ItemID.blood_of_peaceful_mobs_36) return true;
				return false;
			}, needClean: false, isTransparentBackground: false},
          //шкала для передачи крови в микроскоп
		"scale_0": {type: "scale", x: 474, y: 123, direction: 0, bitmap: "custom.furnace_bar_background", scale: 3.2, value: 1},
		//микроскоп
          "image_0": {type: "image", x: 546, y: 83, bitmap: "custom.microscope", scale: 3.2},
		//шкала для передачи инфы в экран
          "scale_1": {type: "scale", x: 650, y: 123, direction: 0, bitmap: "custom.furnace_bar_background", scale: 3.2, value: 1},
		//экран
          "image_1": {type: "image", x: 740, y: 80, bitmap: "custom.dna_for_egg_0", scale: 7.25},
		//слот для колб
          "slot_1": {type: "slot", x: 390, y: 305, size: 66, visual: false, bitmap: "custom.slot_dna", 
          isValid: function(id) {
               if(id == ItemID.flask) return true;
               return false;
          }, needClean: false, isTransparentBackground: false},
		//шкала для передачи колб для днк
          "scale_2": {type: "scale", x: 474, y: 313, direction: 0, bitmap: "custom.furnace_bar_background", scale: 3.2, value: 1},
		//слот для днк
          "slot_2": {type: "slot", x: 568, y: 305, size: 67, visual: false, bitmap: "custom.slot_dna", needClean: false, isTransparentBackground: false},
		//слот для передачи днк из микроскопа в колбу
          "scale_3": {type: "scale", x: 570, y: 220, direction: 0, bitmap: "custom.furnace_bar_background", scale: 3.2, value: 1},
		//слот для использованых шприцов
          "slot_3": {type: "slot", x: 390, y: 209, size: 66, visual: false, bitmap: "custom.slot_syringe", needClean: false, isTransparentBackground: false},
          
          //"aspectScale": {type: "scale", x: 850, y: 120, direction: 1, scale: 8, value: 1, bitmap: "aspectScale_nitor", overlay: "aspect_scale_overlay_1", overlayScale: 4},
          //"stateText": {type: "text", x: 625, y: 227, width: 90, height: 100, text: "", font: {color: android.graphics.Color.WHITE, shadow: .6, size: 25}}
     }
});

TileEntity.registerPrototype(BlockID.dna_analizator, {
     defaultValues: {
          //values
     },
     tick: function(){
          var slot0 = this.container.getSlot("slot_0");
          var slot1 = this.container.getSlot("slot_1");
          var slot2 = this.container.getSlot("slot_2");
          var slot3 = this.container.getSlot("slot_3");

          if(slot0 == id.ItemID.blood_of_peaceful_mobs_19) {
               Debug.message("ЕБООООООООООООООЙ");
               
          }
     },
     click: function(id, count, data, coords){
          //code
     },
     getGuiScreen: function(){
          return DNA_Analizator;
     }
});
     
     
     
     
     
     
     
     
     
     
     
