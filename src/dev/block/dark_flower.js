IDRegistry.genBlockID(dark_flower);

Block.createBlock("dark_flower", [
    {
        name: "Dark Flower",
        texture: [
            ["planks", 0], ["planks", 0], 
            ["planks", 0], ["planks", 0], 
            ["planks", 0], ["planks", 0]
        ], inCreative: true
    }
]); 

TileEntity.registerPrototype(BlockID.dark_flower, {
    defaultValues: {
        //
    },

    tick: function() {
        //
    },

    click: function(id, count, data, coords) {
        //
    }
});