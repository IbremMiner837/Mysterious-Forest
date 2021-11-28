IDRegistry.genItemID("bag");

Item.setCategory("bag", 3);

Item.createItem("bag", "Bag", "bag", 0, {
    isTech: false,
    stack: 64
});

Recipes.addShaped({id: ItemID.bag, count: 1, data: 0}, /* Результат крафта */
	["aba", "bcb", "bbb"], /* Форма рецепта */
	['a', 287, 0, 'b', 415, 0]/* Ингридиенты */
); 