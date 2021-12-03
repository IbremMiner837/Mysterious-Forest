IDRegistry.genBlockID("dark_flower");

Block.createSpecialType("Dark_Flower", {
    solid: true,
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
        particleLoopTime: 45,
        lightningBoltSpawnTime: 35,
        portal: false
    },

    tick: function() {
        this.data.particleLoopTime--;

        if(World.getBlockID(this.x + 1, this.y - 1, this.z + 1) == 88
        && World.getBlockID(this.x - 1, this.y - 1, this.z + 1) == 88
        && World.getBlockID(this.x - 1, this.y - 1, this.z - 1) == 88
        && World.getBlockID(this.x + 1, this.y - 1, this.z - 1) == 88
        && World.getBlockID(this.x + 1, this.y - 1, this.z) == VanillaBlockID.soul_soil
        && World.getBlockID(this.x, this.y - 1, this.z + 1) == VanillaBlockID.soul_soil
        && World.getBlockID(this.x - 1, this.y - 1, this.z) == VanillaBlockID.soul_soil
        && World.getBlockID(this.x, this.y - 1, this.z - 1) == VanillaBlockID.soul_soil) {

            this.data.portal = true;

        } else {
            this.data.portal = false;
            this.data.lightningBoltSpawnTime = 35;
        }

        if(this.data.portal == true) {
            this.data.lightningBoltSpawnTime--;

            if(this.data.lightningBoltSpawnTime <= 0) {
                this.data.lightningBoltSpawnTime = 35;
                this.data.portal = false;
                Entity.spawn(this.x, this.y + 0.1, this.z, 93);
            }
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