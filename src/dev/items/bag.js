IDRegistry.genItemID("bag");
IDRegistry.genItemID("pollen_bag");

Item.setCategory("bag", 3);
Item.setCategory("pollen_bag", 3);

Item.createItem("bag", "Bag", {name: "bag", meta: 0}, {
    isTech: false,
    stack: 64
});

Item.createItem("pollen_bag", "Pollen Bag", {name: "pollen_bag", meta: 0}, {
    isTech: false,
    stack: 64
});

Recipes.addShaped({id: ItemID.bag, count: 1, data: 0}, /* Результат крафта */
	["aba", "bcb", "bbb"], /* Форма рецепта */
	['a', 287, 0, 'b', 415, 0]/* Ингридиенты */
); 

Callback.addCallback("ItemUse", function(coords, item) {
    // If player uses a stick
    if (item.id == ItemID.bag && World.getBlockID(coords.x, coords.y, coords.z) == 37
    && World.getBlockID(coords.x, coords.y, coords.z) == 38) {
        Player.decreaseCarriedItem(1);
        Player.addItemToInventory(ItemID.pollen_bag, 1);
    }
});