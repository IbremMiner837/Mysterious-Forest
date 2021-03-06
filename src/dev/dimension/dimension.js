var dimension = new Dimensions.CustomDimension("Mysterious Forest", 1837);
// Some additional dimension setup, 
// e.g. setting some of the environment colors:
dimension.setSunsetColor(0.2, 1, 0.7);

var particle_id = 0;

Callback.addCallback("ItemUse", function(coords, item) {
    // If player uses a stick
    if (item.id == 280) {
        //Dimensions.transfer(Player.get(), Player.getDimension() == 0 ? dimension.id : 0);
        Particles.addParticle(particle_id, coords.x, coords.y + 1, coords.x, 0, 0, 0, 0);
        Game.message("Particle ID: " + particle_id + " " + "X: " + coords.x + " " + "Y: " + coords.y + " " + "Z: " + coords.z);
    } else if (item.id == 265) {
        particle_id--;
        Game.message("Particle ID: " + particle_id + " " + "X: " + coords.x + " " + "Y: " + coords.y + " " + "Z: " + coords.z);
    } else if (item.id == 266) {
        particle_id++;
        Game.message("Particle ID: " + particle_id + " " + "X: " + coords.x + " " + "Y: " + coords.y + " " + "Z: " + coords.z);
    } else if (item.id == 264) {
        particle_id = 0;
        Game.message("Particle ID: " + particle_id + " " + "X: " + coords.x + " " + "Y: " + coords.y + " " + "Z: " + coords.z);
    }
});

Callback.addCallback("LocalTick", function () {
    //
});

var generator = Dimensions.newGenerator({
    layers: [
        {
            minY: 0, maxY: 1,
            material: {base: 7}, 
        },
        {
            minY: 2, maxY: 56,
            material: {base: 1},
        },
        {
            minY: 54, maxY: 64, 
            yConversion: [[0, 1], [1, -1]], 
            material: {base: 2, cover: 2}, 
            noise: {
                octaves: {count: 5, scale: 150}
            }
        },
        {
            minY: 54, maxY: 96, 
            yConversion: [[0, 0.5], [0.6, -0.5], [1, -1]], 
            material: {base: 1, cover: 2}, 
            noise: {
                octaves: {count: 2, scale: 70, seed: 100}
            },
            heightmap: {
                octaves: {count: 3, scale: 450},
                conversion: [[0, 0.5], [1, -0.5]]
            }
        }
    ]
});
dimension.setGenerator(generator);