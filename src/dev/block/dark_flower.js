Block.createSpecialType("dark_flower", {
    base: 37,
    solid: true,
    rendertype: 1,
    renderlayer: 4,
    lightlevel: 3
});

IDRegistry.genBlockID("dark_flower");

Block.createBlock("dark_flower", [
    {
        name: "Dark Flower",
        texture: [
            ["planks", 0], ["planks", 0], 
            ["planks", 0], ["planks", 0], 
            ["planks", 0], ["planks", 0] 
        ], inCreative: true
    }
], "dark_flower"); 

TileEntity.registerPrototype(BlockID.dark_flower, {
    defaultValues: {
        particleLoopTime: 35,
        lightningBoltSpawnTime: 35,
        portal: false
    },

    tick: function() {
        this.data.particleLoopTime--;

        if(World.getBlockID(this.x + 1, this.y - 1, this.z + 1) == 88
        && World.getBlockID(this.x - 1, this.y - 1, this.z + 1) == 88
        && World.getBlockID(this.x - 1, this.y - 1, this.z - 1) == 88
        && World.getBlockID(this.x + 1, this.y - 1, this.z - 1) == 88
        && World.getBlockID(this.x + 1, this.y - 1, this.z) == 533 //почва душ
        && World.getBlockID(this.x, this.y - 1, this.z + 1) == 533
        && World.getBlockID(this.x - 1, this.y - 1, this.z) == 533
        && World.getBlockID(this.x, this.y - 1, this.z - 1) == 533) {

            this.data.portal = true;
            Game.message("Zaebumba");

        } else {
            this.data.portal = false;
            this.data.lightningBoltSpawnTime = 35;
        }

        if(this.data.portal == true) {
            this.data.lightningBoltSpawnTime--;

            if(this.data.lightningBoltSpawnTime <= 0) {
                this.data.lightningBoltSpawnTime = 35;
                this.data.portal = false;
                Entity.spawn(this.x, this.y, this.z, 93);
            }
        }

        if(this.data.particleLoopTime <= 0) {
            this.data.particleLoopTime = 35;
            Particles.addFarParticle(20, this.x + 0.5, this.y + 1.5, this.z + 0.5, 0, 0, 0, 0);
        }
    },

    click: function(id, count, data, coords) {
        if(id == ItemID.pollen_bag) {
            //
        }
    }
});