IDRegistry.genBlockID("dark_flower");

Block.createSpecialType("Dark_Flower", {
    solid: false,
    rendertype: 1,
    lightlevel: 3
});

Block.createBlock("dark_flower", [
    {
        name: "Dark Flower",
        texture: [
            ["planks", 0], ["planks", 0], 
            ["planks", 0], ["planks", 0], 
            ["planks", 0], ["planks", 0]
        ], inCreative: true
    }
], "Dark_Flower"); 

TileEntity.registerPrototype(BlockID.dark_flower, {
    defaultValues: {
        particleLoopTime: 45
    },

    tick: function() {
        this.data.particleLoopTime--;

        if(World.getBlockID(this.x + 1, this.y - 1, this.z) == 88
        && World.getBlockID(this.x, this.y - 1, this.z + 1) == 88
        && World.getBlockID(this.x - 1, this.y - 1, this.z) == 88
        && World.getBlockID(this.x, this.y - 1, this.z - 1) == 88
        && World.getBlockID(this.x + 1, this.y, this.z + 1) == 50
        && World.getBlockID(this.x - 1, this.y, this.z + 1) == 50
        && World.getBlockID(this.x - 1, this.y, this.z - 1) == 50
        && World.getBlockID(this.x + 1, this.y, this.z - 1) == 50) {
            Game.tipMessage("Еба ты смог...")
        }

        if(this.data.particleLoopTime <= 0) {
            this.data.particleLoopTime = 45;
            Particles.addFarParticle(20, this.x + 0.5, this.y + 0.5, this.z + 0.5, 0, 0, 0, 0);
        }
    },

    click: function(id, count, data, coords) {
        if(id == ItemID.pollen_bag) {
            //
        }
    }
});