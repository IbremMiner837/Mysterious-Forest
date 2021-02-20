Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
    // Generate 10 ore veins
    for(var i = 0; i < 10; i++){
        // Get random coords in the chunk with given coords, in 0..50 height range
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 50);
        // Генерация руды в высоте от 32 до 64
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.medOre, 0, random(32, 64));
    }
});