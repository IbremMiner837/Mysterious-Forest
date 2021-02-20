
    IDRegistry.genItemID("syringe"); //Шприц
    Item.createItem("syringe", "Шприц", {name: "syringe", meta: 0}, {stack:64});

    
    /*var DNACore = {
        group: {},
        registerItem: function(id, name, texture, params) {
            IDRegistry.genItemID(id);
            params.stack = 64;
            Item.createItem(id, name, texture, params);
            Callback.addCallback("PlayerAttack", function (player, entity) {
                if(Entity.getCarriedItem(Player.get()).id == ItemID.syringe) {
                    if(Entity.getType(entity) == params.type) {
                        Player.decreaseCarriedItem(1);
                        Item.addItemToInventory([ItemID.id], 1);
                    }
                }
            })
        },
        createGroup: function(name, display) {
            this.group[name] = {id: [], name:name, display:display};
        },
        addInGroup: function(name, value) {
            this.group[name].id.push(value);
        },
        registerCreativeGroup: function() {
            for(var i in this.group) {
                var group = this.group[i];
                Item.addCreativeGroup(group.name, group.display, group.id);
            }
        }
    }

    DNACore.createGroup("blood", "Кровь");

    DNACore.registerItem("blood_of_neutral_mobs_122", "Кровь Пчелы", 
    {
        name: "blood",
        meta: 1
    }, {
        type: 122
    });

    DNACore.addInGroup("blood", ItemID.blood_of_neutral_mobs_122);
    DNACore.registerCreativeGroup();*/


//Кровь мирных мобов
IDRegistry.genItemID("blood_of_peaceful_mobs_19"); //Летучая мышь
IDRegistry.genItemID("blood_of_peaceful_mobs_75"); //Кошка
IDRegistry.genItemID("blood_of_peaceful_mobs_10"); //Курица
IDRegistry.genItemID("blood_of_peaceful_mobs_112"); //Треска
IDRegistry.genItemID("blood_of_peaceful_mobs_11"); //Корова
IDRegistry.genItemID("blood_of_peaceful_mobs_24"); //Осел
IDRegistry.genItemID("blood_of_peaceful_mobs_121"); //Лиса
IDRegistry.genItemID("blood_of_peaceful_mobs_23"); //Лошадь
IDRegistry.genItemID("blood_of_peaceful_mobs_16"); //Грибная Корова
IDRegistry.genItemID("blood_of_peaceful_mobs_25"); //Мул
IDRegistry.genItemID("blood_of_peaceful_mobs_22"); //Оцелот
IDRegistry.genItemID("blood_of_peaceful_mobs_30"); //Попугай
IDRegistry.genItemID("blood_of_peaceful_mobs_12"); //Свинья
IDRegistry.genItemID("blood_of_peaceful_mobs_18"); //Кролик
IDRegistry.genItemID("blood_of_peaceful_mobs_109"); //Лосось
IDRegistry.genItemID("blood_of_peaceful_mobs_13"); //Овца
IDRegistry.genItemID("blood_of_peaceful_mobs_26"); //Лошадь - Скелет
IDRegistry.genItemID("blood_of_peaceful_mobs_21"); //Снежный Голем
IDRegistry.genItemID("blood_of_peaceful_mobs_17"); //Спрут
IDRegistry.genItemID("blood_of_peaceful_mobs_125"); //Страйдер
IDRegistry.genItemID("blood_of_peaceful_mobs_111"); //Тропическая Рыба
IDRegistry.genItemID("blood_of_peaceful_mobs_74"); //Черепаха
IDRegistry.genItemID("blood_of_peaceful_mobs_115"); //Деревенский Житель v2
IDRegistry.genItemID("blood_of_peaceful_mobs_118"); //Странствующий Торговец

//Кровь враждебных мобов
IDRegistry.genItemID("blood_of_evil_mobs_43"); //Ифрит
IDRegistry.genItemID("blood_of_evil_mobs_33"); //Крипер
IDRegistry.genItemID("blood_of_evil_mobs_110"); //Утопленник
IDRegistry.genItemID("blood_of_evil_mobs_50"); //Древний Страж
IDRegistry.genItemID("blood_of_evil_mobs_55"); //Чешуйница Края
IDRegistry.genItemID("blood_of_evil_mobs_104"); //Вызыватель
IDRegistry.genItemID("blood_of_evil_mobs_41"); //Гаст
IDRegistry.genItemID("blood_of_evil_mobs_49"); //Страж
IDRegistry.genItemID("blood_of_evil_mobs_hoglin"); //Хоглин ?
IDRegistry.genItemID("blood_of_evil_mobs_47"); //Кадавр
IDRegistry.genItemID("blood_of_evil_mobs_42"); //Лавовый Куб
IDRegistry.genItemID("blood_of_evil_mobs_phantom"); //Фантом ?
IDRegistry.genItemID("blood_of_evil_mobs_127"); //Жестокий Пиглин
IDRegistry.genItemID("blood_of_evil_mobs_pillager"); //Разбойник ?
IDRegistry.genItemID("blood_of_evil_mobs_ravager"); //Разрушитель ?
IDRegistry.genItemID("blood_of_evil_mobs_54"); //Шалкер (shulker) 
IDRegistry.genItemID("blood_of_evil_mobs_39"); //Чешуйница (silverfish)
IDRegistry.genItemID("blood_of_evil_mobs_34"); //Скелет
IDRegistry.genItemID("blood_of_evil_mobs_37"); //Слизь (slime)
IDRegistry.genItemID("blood_of_evil_mobs_46"); //Зимогор
IDRegistry.genItemID("blood_of_evil_mobs_105"); //Досаждатель (vex)
IDRegistry.genItemID("blood_of_evil_mobs_57"); //Поборник (vindicator)
IDRegistry.genItemID("blood_of_evil_mobs_45"); //Ведьма (witch)
IDRegistry.genItemID("blood_of_evil_mobs_48"); //Скелет - Иссушитель
IDRegistry.genItemID("blood_of_evil_mobs_126"); //Зоглин
IDRegistry.genItemID("blood_of_evil_mobs_32"); //Зомби
IDRegistry.genItemID("blood_of_evil_mobs_116"); //Зомби - Житель v2

IDRegistry.genItemID("blood_of_evil_mobs_27"); //Лошадь - Зомби

//Кровь Нейтральных Мобов
//IDRegistry.genItemID("blood_of_neutral_mobs_122"); //Пчела
IDRegistry.genItemID("blood_of_neutral_mobs_48"); //Пещерный Паук
IDRegistry.genItemID("blood_of_neutral_mobs_31"); //Дельфин
IDRegistry.genItemID("blood_of_neutral_mobs_38"); //Странник Края
IDRegistry.genItemID("blood_of_neutral_mobs_20"); //Железный Голем
IDRegistry.genItemID("blood_of_neutral_mobs_29"); //Лама
IDRegistry.genItemID("blood_of_neutral_mobs_113"); //Панда
IDRegistry.genItemID("blood_of_neutral_mobs_123"); //Пиглин
IDRegistry.genItemID("blood_of_neutral_mobs_28"); //Белый Медведь
IDRegistry.genItemID("blood_of_neutral_mobs_108"); //Иглобрюх
IDRegistry.genItemID("blood_of_neutral_mobs_35"); //Паук
IDRegistry.genItemID("blood_of_neutral_mobs_14"); //Волк
IDRegistry.genItemID("blood_of_neutral_mobs_36"); //Зомбифицированный пиглин

//Кровь Мирных Мобов
Item.createItem("blood_of_peaceful_mobs_19", "Кровь Летучей Мыши", {name: "blood", meta: 0}, {stack: 64});
Item.createItem("blood_of_peaceful_mobs_75", "Кровь Кошки", {name: "blood", meta: 0}, {stack: 64});
Item.createItem("blood_of_peaceful_mobs_10", "Кровь Курицы", {name: "blood", meta: 0}, {stack: 64});
Item.createItem("blood_of_peaceful_mobs_112", "Кровь Трески", {name: "blood", meta: 0}, {stack: 64});
Item.createItem("blood_of_peaceful_mobs_11", "Кровь Коровы", {name: "blood", meta: 0}, {stack: 64});
Item.createItem("blood_of_peaceful_mobs_24", "Кровь Осла", {name: "blood", meta: 0}, {stack: 64});
Item.createItem("blood_of_peaceful_mobs_121", "Кровь Лисы", {name: "blood", meta: 0}, {stack: 64});
Item.createItem("blood_of_peaceful_mobs_23", "Кровь Лошади", {name: "blood", meta: 0}, {stack: 64});
Item.createItem("blood_of_peaceful_mobs_16", "Кровь Грибной Коровы", {name: "blood", meta: 0}, {stack: 64});
Item.createItem("blood_of_peaceful_mobs_25", "Кровь Мула", {name: "blood", meta: 0}, {stack: 64});
Item.createItem("blood_of_peaceful_mobs_22", "Кровь Оцелота", {name: "blood", meta: 0}, {stack: 64});
Item.createItem("blood_of_peaceful_mobs_30", "Кровь Попугая", {name: "blood", meta: 0}, {stack: 64});
Item.createItem("blood_of_peaceful_mobs_12", "Кровь Свиньи", {name: "blood", meta: 0}, {stack: 64});
Item.createItem("blood_of_peaceful_mobs_18", "Кровь Кролика", {name: "blood", meta: 0}, {stack: 64});
Item.createItem("blood_of_peaceful_mobs_109", "Кровь Лосося", {name: "blood", meta: 0}, {stack: 64});
Item.createItem("blood_of_peaceful_mobs_13", "Кровь Овцы", {name: "blood", meta: 0}, {stack: 64});
Item.createItem("blood_of_peaceful_mobs_26", "Кровь Лошади Скелета", {name: "blood", meta: 0}, {stack: 64});
Item.createItem("blood_of_peaceful_mobs_21", "Кровь Снежного Голема", {name: "blood", meta: 0}, {stack: 64});
Item.createItem("blood_of_peaceful_mobs_17", "Кровь Спрута", {name: "blood", meta: 0}, {stack: 64});
Item.createItem("blood_of_peaceful_mobs_125", "Кровь Страйдера", {name: "blood", meta: 2}, {stack: 64});
Item.createItem("blood_of_peaceful_mobs_111", "Кровь Тропической Рыбы", {name: "blood", meta: 0}, {stack: 64});
Item.createItem("blood_of_peaceful_mobs_74", "Кровь Черепахи", {name: "blood", meta: 0}, {stack: 64});
Item.createItem("blood_of_peaceful_mobs_115", "Кровь Деревенского Жителя", {name: "blood", meta: 0}, {stack: 64});
Item.createItem("blood_of_peaceful_mobs_118", "Кровь Странствующего Торговца", {name: "blood", meta: 0}, {stack: 64});

//Кровь Враждебных Мобов
Item.createItem("blood_of_evil_mobs_43", "Кровь Ифрита", {name: "blood", meta: 2}, {stack: 64});
Item.createItem("blood_of_evil_mobs_33", "Кровь Крипера", {name: "blood", meta: 4}, {stack: 64});
Item.createItem("blood_of_evil_mobs_110", "Кровь Утопленника", {name: "blood", meta: 1}, {stack: 64});
Item.createItem("blood_of_evil_mobs_50", "Кровь Древнего Стража", {name: "blood", meta: 1}, {stack: 64});
Item.createItem("blood_of_evil_mobs_55", "Кровь Чешуйницы Края", {name: "blood", meta: 3}, {stack: 64});
Item.createItem("blood_of_evil_mobs_104", "Кровь Вызывателя", {name: "blood", meta: 1}, {stack: 64});
Item.createItem("blood_of_evil_mobs_41", "Кровь Гаста", {name: "blood", meta: 2}, {stack: 64});
Item.createItem("blood_of_evil_mobs_49", "Кровь Стража", {name: "blood", meta: 1}, {stack: 64});
Item.createItem("blood_of_evil_mobs_hoglin", "Кровь Хоглина", {name: "blood", meta: 2}, {stack: 64});
Item.createItem("blood_of_evil_mobs_47", "Кровь Кадавра", {name: "blood", meta: 1}, {stack: 64});
Item.createItem("blood_of_evil_mobs_42", "Кровь Лавово-Куба", {name: "blood", meta: 2}, {stack: 64});
Item.createItem("blood_of_evil_mobs_phantom", "Кровь Фантома", {name: "blood", meta: 1}, {stack: 64});
Item.createItem("blood_of_evil_mobs_127", "Кровь Жестокого Пиглина", {name: "blood", meta: 2}, {stack: 64});
Item.createItem("blood_of_evil_mobs_pillager", "Кровь Разбойника", {name: "blood", meta: 1}, {stack: 64});
Item.createItem("blood_of_evil_mobs_ravager", "Кровь Разрушителя", {name: "blood", meta: 1}, {stack: 64});
Item.createItem("blood_of_evil_mobs_54", "Кровь Шалкера", {name: "blood", meta: 3}, {stack: 64});
Item.createItem("blood_of_evil_mobs_39", "Кровь Чешуйницы", {name: "blood", meta: 1}, {stack: 64});
Item.createItem("blood_of_evil_mobs_34", "Кровь Скелета", {name: "blood", meta: 1}, {stack: 64});
Item.createItem("blood_of_evil_mobs_37", "Кровь Слизи", {name: "blood", meta: 5}, {stack: 64});
Item.createItem("blood_of_evil_mobs_46", "Кровь Зимогора", {name: "blood", meta: 1}, {stack: 64});
Item.createItem("blood_of_evil_mobs_105", "Кровь Досаждателя", {name: "blood", meta: 1}, {stack: 64});
Item.createItem("blood_of_evil_mobs_57", "Кровь Поборника", {name: "blood", meta: 1}, {stack: 64});
Item.createItem("blood_of_evil_mobs_45", "Кровь Ведьмы", {name: "blood", meta: 1}, {stack: 64});
Item.createItem("blood_of_evil_mobs_48", "Кровь Скелета", {name: "blood", meta: 1}, {stack: 64});
Item.createItem("blood_of_evil_mobs_126", "Кровь Зоглина", {name: "blood", meta: 2}, {stack: 64});
Item.createItem("blood_of_evil_mobs_32", "Кровь Зомби", {name: "blood", meta: 1}, {stack: 64});
Item.createItem("blood_of_evil_mobs_116", "Кровь Зомби Жителя", {name: "blood", meta: 1}, {stack: 64});

Item.createItem("blood_of_evil_mobs_27", "Кровь Лашади Скелета", {name: "blood", meta: 1}, {stack: 64});

//Кровь Нейтральных Мобов
//Item.createItem("blood_of_neutral_mobs_122", "Кровь Пчелы", {name: "blood", meta: 1}, {stack: 64});
Item.createItem("blood_of_neutral_mobs_48", "Кровь Пещерного Паука", {name: "blood", meta: 1}, {stack: 64});
Item.createItem("blood_of_neutral_mobs_31", "Кровь Дельфина", {name: "blood", meta: 1}, {stack: 64});
Item.createItem("blood_of_neutral_mobs_38", "Кровь Странника Края", {name: "blood", meta: 1}, {stack: 64});
Item.createItem("blood_of_neutral_mobs_20", "Кровь Железного Голема", {name: "blood", meta: 1}, {stack: 64});
Item.createItem("blood_of_neutral_mobs_29", "Кровь Ламы", {name: "blood", meta: 1}, {stack: 64});
Item.createItem("blood_of_neutral_mobs_113", "Кровь Панды", {name: "blood", meta: 1}, {stack: 64});
Item.createItem("blood_of_neutral_mobs_123", "Кровь Пиглина", {name: "blood", meta: 2}, {stack: 64});
Item.createItem("blood_of_neutral_mobs_28", "Кровь Белого Медведя", {name: "blood", meta: 1}, {stack: 64});
Item.createItem("blood_of_neutral_mobs_108", "Кровь Иглобрюха", {name: "blood", meta: 1}, {stack: 64});
Item.createItem("blood_of_neutral_mobs_35", "Кровь Паука", {name: "blood", meta: 1}, {stack: 64});
Item.createItem("blood_of_neutral_mobs_14", "Кровь Волка", {name: "blood", meta: 1}, {stack: 64});
Item.createItem("blood_of_neutral_mobs_36", "Кровь Зомбифицированного Пиглина", {name: "blood", meta: 2}, {stack: 64});


//ДНК Мирных Мобов
IDRegistry.genItemID("dna_of_peaceful_mobs_19"); //Летучая мышь
IDRegistry.genItemID("dna_of_peaceful_mobs_75"); //Кошка
IDRegistry.genItemID("dna_of_peaceful_mobs_10"); //Курица
IDRegistry.genItemID("dna_of_peaceful_mobs_112"); //Треска
IDRegistry.genItemID("dna_of_peaceful_mobs_11"); //Корова
IDRegistry.genItemID("dna_of_peaceful_mobs_24"); //Осел
IDRegistry.genItemID("dna_of_peaceful_mobs_121"); //Лиса
IDRegistry.genItemID("dna_of_peaceful_mobs_23"); //Лошадь
IDRegistry.genItemID("dna_of_peaceful_mobs_16"); //Грибная Корова
IDRegistry.genItemID("dna_of_peaceful_mobs_25"); //Мул
IDRegistry.genItemID("dna_of_peaceful_mobs_22"); //Оцелот
IDRegistry.genItemID("dna_of_peaceful_mobs_30"); //Попугай
IDRegistry.genItemID("dna_of_peaceful_mobs_12"); //Свинья
IDRegistry.genItemID("dna_of_peaceful_mobs_18"); //Кролик
IDRegistry.genItemID("dna_of_peaceful_mobs_109"); //Лосось
IDRegistry.genItemID("dna_of_peaceful_mobs_13"); //Овца
IDRegistry.genItemID("dna_of_peaceful_mobs_26"); //Лошадь - Скелет
IDRegistry.genItemID("dna_of_peaceful_mobs_21"); //Снежный Голем
IDRegistry.genItemID("dna_of_peaceful_mobs_17"); //Спрут
IDRegistry.genItemID("dna_of_peaceful_mobs_125"); //Страйдер
IDRegistry.genItemID("dna_of_peaceful_mobs_111"); //Тропическая Рыба
IDRegistry.genItemID("dna_of_peaceful_mobs_74"); //Черепаха
IDRegistry.genItemID("dna_of_peaceful_mobs_115"); //Деревенский Житель v2
IDRegistry.genItemID("dna_of_peaceful_mobs_118"); //Странствующий Торговец

//ДНК Враждебных Мобов
IDRegistry.genItemID("dna_of_evil_mobs_43"); //Ифрит
IDRegistry.genItemID("dna_of_evil_mobs_33"); //Крипер
IDRegistry.genItemID("dna_of_evil_mobs_110"); //Утопленник
IDRegistry.genItemID("dna_of_evil_mobs_50"); //Древний Страж
IDRegistry.genItemID("dna_of_evil_mobs_55"); //Чешуйница Края
IDRegistry.genItemID("dna_of_evil_mobs_104"); //Вызыватель
IDRegistry.genItemID("dna_of_evil_mobs_41"); //Гаст
IDRegistry.genItemID("dna_of_evil_mobs_49"); //Страж
IDRegistry.genItemID("dna_of_evil_mobs_hoglin"); //Хоглин ?
IDRegistry.genItemID("dna_of_evil_mobs_47"); //Кадавр
IDRegistry.genItemID("dna_of_evil_mobs_42"); //Лавовый Куб
IDRegistry.genItemID("dna_of_evil_mobs_phantom"); //Фантом ?
IDRegistry.genItemID("dna_of_evil_mobs_127"); //Жестокий Пиглин
IDRegistry.genItemID("dna_of_evil_mobs_pillager"); //Разбойник ?
IDRegistry.genItemID("dna_of_evil_mobs_ravager"); //Разрушитель ?
IDRegistry.genItemID("dna_of_evil_mobs_54"); //Шалкер (shulker) 
IDRegistry.genItemID("dna_of_evil_mobs_39"); //Чешуйница (silverfish)
IDRegistry.genItemID("dna_of_evil_mobs_34"); //Скелет
IDRegistry.genItemID("dna_of_evil_mobs_37"); //Слизь (slime)
IDRegistry.genItemID("dna_of_evil_mobs_46"); //Зимогор
IDRegistry.genItemID("dna_of_evil_mobs_105"); //Досаждатель (vex)
IDRegistry.genItemID("dna_of_evil_mobs_57"); //Поборник (vindicator)
IDRegistry.genItemID("dna_of_evil_mobs_45"); //Ведьма (witch)
IDRegistry.genItemID("dna_of_evil_mobs_48"); //Скелет - Иссушитель
IDRegistry.genItemID("dna_of_evil_mobs_126"); //Зоглин
IDRegistry.genItemID("dna_of_evil_mobs_32"); //Зомби
IDRegistry.genItemID("dna_of_evil_mobs_116"); //Зомби - Житель v2

IDRegistry.genItemID("dna_of_evil_mobs_27"); //Лошадь - Зомби

//ДНК Нейтральных Мобов
IDRegistry.genItemID("dna_of_neutral_mobs_122"); //Пчела
IDRegistry.genItemID("dna_of_neutral_mobs_48"); //Пещерный Паук
IDRegistry.genItemID("dna_of_neutral_mobs_31"); //Дельфин
IDRegistry.genItemID("dna_of_neutral_mobs_38"); //Странник Края
IDRegistry.genItemID("dna_of_neutral_mobs_20"); //Железный Голем
IDRegistry.genItemID("dna_of_neutral_mobs_29"); //Лама
IDRegistry.genItemID("dna_of_neutral_mobs_113"); //Панда
IDRegistry.genItemID("dna_of_neutral_mobs_123"); //Пиглин
IDRegistry.genItemID("dna_of_neutral_mobs_28"); //Белый Медведь
IDRegistry.genItemID("dna_of_neutral_mobs_108"); //Иглобрюх
IDRegistry.genItemID("dna_of_neutral_mobs_35"); //Паук
IDRegistry.genItemID("dna_of_neutral_mobs_14"); //Волк
IDRegistry.genItemID("dna_of_neutral_mobs_36"); //Зомбифицированный пиглин

//ДНК Мирных Мобов
Item.createItem("dna_of_peaceful_mobs_19", "ДНК Летучей Мыши", {name: "dna", meta: 0}, {stack: 64});
Item.createItem("dna_of_peaceful_mobs_75", "ДНК Кошки", {name: "dna", meta: 0}, {stack: 64});
Item.createItem("dna_of_peaceful_mobs_10", "ДНК Курицы", {name: "dna", meta: 0}, {stack: 64});
Item.createItem("dna_of_peaceful_mobs_112", "ДНК Трески", {name: "dna", meta: 0}, {stack: 64});
Item.createItem("dna_of_peaceful_mobs_11", "ДНК Коровы", {name: "dna", meta: 0}, {stack: 64});
Item.createItem("dna_of_peaceful_mobs_24", "ДНК Осла", {name: "dna", meta: 0}, {stack: 64});
Item.createItem("dna_of_peaceful_mobs_121", "ДНК Лисы", {name: "dna", meta: 0}, {stack: 64});
Item.createItem("dna_of_peaceful_mobs_23", "ДНК Лошади", {name: "dna", meta: 0}, {stack: 64});
Item.createItem("dna_of_peaceful_mobs_16", "ДНК Грибной Коровы", {name: "dna", meta: 0}, {stack: 64});
Item.createItem("dna_of_peaceful_mobs_25", "ДНК Мула", {name: "dna", meta: 0}, {stack: 64});
Item.createItem("dna_of_peaceful_mobs_22", "ДНК Оцелота", {name: "dna", meta: 0}, {stack: 64});
Item.createItem("dna_of_peaceful_mobs_30", "ДНК Попугая", {name: "dna", meta: 0}, {stack: 64});
Item.createItem("dna_of_peaceful_mobs_12", "ДНК Свиньи", {name: "dna", meta: 0}, {stack: 64});
Item.createItem("dna_of_peaceful_mobs_18", "ДНК Кролика", {name: "dna", meta: 0}, {stack: 64});
Item.createItem("dna_of_peaceful_mobs_109", "ДНК Лосося", {name: "dna", meta: 0}, {stack: 64});
Item.createItem("dna_of_peaceful_mobs_13", "ДНК Овцы", {name: "dna", meta: 0}, {stack: 64});
Item.createItem("dna_of_peaceful_mobs_26", "ДНК Лошади Скелета", {name: "dna", meta: 0}, {stack: 64});
Item.createItem("dna_of_peaceful_mobs_21", "ДНК Снежного Голема", {name: "dna", meta: 0}, {stack: 64});
Item.createItem("dna_of_peaceful_mobs_17", "ДНК Спрута", {name: "dna", meta: 0}, {stack: 64});
Item.createItem("dna_of_peaceful_mobs_125", "ДНК Страйдера", {name: "dna", meta: 2}, {stack: 64});
Item.createItem("dna_of_peaceful_mobs_111", "ДНК Тропической Рыбы", {name: "dna", meta: 0}, {stack: 64});
Item.createItem("dna_of_peaceful_mobs_74", "ДНК Черепахи", {name: "dna", meta: 0}, {stack: 64});
Item.createItem("dna_of_peaceful_mobs_115", "ДНК Деревенского Жителя", {name: "dna", meta: 0}, {stack: 64});
Item.createItem("dna_of_peaceful_mobs_118", "ДНК Странствующего Торговца", {name: "dna", meta: 0}, {stack: 64});

//ДНК Враждебных Мобов
Item.createItem("dna_of_evil_mobs_43", "ДНК Ифрита", {name: "dna", meta: 2}, {stack: 64});
Item.createItem("dna_of_evil_mobs_33", "ДНК Крипера", {name: "dna", meta: 4}, {stack: 64});
Item.createItem("dna_of_evil_mobs_110", "ДНК Утопленника", {name: "dna", meta: 1}, {stack: 64});
Item.createItem("dna_of_evil_mobs_50", "ДНК Древнего Стража", {name: "dna", meta: 1}, {stack: 64});
Item.createItem("dna_of_evil_mobs_55", "ДНК Чешуйницы Края", {name: "dna", meta: 3}, {stack: 64});
Item.createItem("dna_of_evil_mobs_104", "ДНК Вызывателя", {name: "dna", meta: 1}, {stack: 64});
Item.createItem("dna_of_evil_mobs_41", "ДНК Гаста", {name: "dna", meta: 2}, {stack: 64});
Item.createItem("dna_of_evil_mobs_49", "ДНК Стража", {name: "dna", meta: 1}, {stack: 64});
Item.createItem("dna_of_evil_mobs_hoglin", "ДНК Хоглина", {name: "dna", meta: 2}, {stack: 64});
Item.createItem("dna_of_evil_mobs_47", "ДНК Кадавра", {name: "dna", meta: 1}, {stack: 64});
Item.createItem("dna_of_evil_mobs_42", "ДНК Лавово-Куба", {name: "dna", meta: 2}, {stack: 64});
Item.createItem("dna_of_evil_mobs_phantom", "ДНК Фантома", {name: "dna", meta: 1}, {stack: 64});
Item.createItem("dna_of_evil_mobs_127", "ДНК Жестокого Пиглина", {name: "dna", meta: 2}, {stack: 64});
Item.createItem("dna_of_evil_mobs_pillager", "ДНК Разбойника", {name: "dna", meta: 1}, {stack: 64});
Item.createItem("dna_of_evil_mobs_ravager", "ДНК Разрушителя", {name: "dna", meta: 1}, {stack: 64});
Item.createItem("dna_of_evil_mobs_54", "ДНК Шалкера", {name: "dna", meta: 3}, {stack: 64});
Item.createItem("dna_of_evil_mobs_39", "ДНК Чешуйницы", {name: "dna", meta: 1}, {stack: 64});
Item.createItem("dna_of_evil_mobs_34", "ДНК Скелета", {name: "dna", meta: 1}, {stack: 64});
Item.createItem("dna_of_evil_mobs_37", "ДНК Слизи", {name: "dna", meta: 5}, {stack: 64});
Item.createItem("dna_of_evil_mobs_46", "ДНК Зимогора", {name: "dna", meta: 1}, {stack: 64});
Item.createItem("dna_of_evil_mobs_105", "ДНК Досаждателя", {name: "dna", meta: 1}, {stack: 64});
Item.createItem("dna_of_evil_mobs_57", "ДНК Поборника", {name: "dna", meta: 1}, {stack: 64});
Item.createItem("dna_of_evil_mobs_45", "ДНК Ведьмы", {name: "dna", meta: 1}, {stack: 64});
Item.createItem("dna_of_evil_mobs_48", "ДНК Скелета", {name: "dna", meta: 1}, {stack: 64});
Item.createItem("dna_of_evil_mobs_126", "ДНК Зоглина", {name: "dna", meta: 2}, {stack: 64});
Item.createItem("dna_of_evil_mobs_32", "ДНК Зомби", {name: "dna", meta: 1}, {stack: 64});
Item.createItem("dna_of_evil_mobs_116", "ДНК Зомби Жителя", {name: "dna", meta: 1}, {stack: 64});

Item.createItem("dna_of_evil_mobs_27", "ДНК Лашади Скелета", {name: "dna", meta: 1}, {stack: 64});

//ДНК Нейтральных Мобов
Item.createItem("dna_of_neutral_mobs_122", "ДНК Пчелы", {name: "dna", meta: 1}, {stack: 64});
Item.createItem("dna_of_neutral_mobs_48", "ДНК Пещерного Паука", {name: "dna", meta: 1}, {stack: 64});
Item.createItem("dna_of_neutral_mobs_31", "ДНК Дельфина", {name: "dna", meta: 1}, {stack: 64});
Item.createItem("dna_of_neutral_mobs_38", "ДНК Странника Края", {name: "dna", meta: 3}, {stack: 64});
Item.createItem("dna_of_neutral_mobs_20", "ДНК Железного Голема", {name: "dna", meta: 1}, {stack: 64});
Item.createItem("dna_of_neutral_mobs_29", "ДНК Ламы", {name: "dna", meta: 1}, {stack: 64});
Item.createItem("dna_of_neutral_mobs_113", "ДНК Панды", {name: "dna", meta: 1}, {stack: 64});
Item.createItem("dna_of_neutral_mobs_123", "ДНК Пиглина[-", {name: "dna", meta: 2}, {stack: 64});
Item.createItem("dna_of_neutral_mobs_28", "ДНК Белого Медведя", {name: "dna", meta: 1}, {stack: 64});
Item.createItem("dna_of_neutral_mobs_108", "ДНК Иглобрюха", {name: "dna", meta: 1}, {stack: 64});
Item.createItem("dna_of_neutral_mobs_35", "ДНК Паука", {name: "dna", meta: 1}, {stack: 64});
Item.createItem("dna_of_neutral_mobs_14", "ДНК Волка", {name: "dna", meta: 1}, {stack: 64});
Item.createItem("dna_of_neutral_mobs_36", "ДНК Зомбифицированного Пиглина", {name: "dna", meta: 2}, {stack: 64});

//предметы
IDRegistry.genItemID("flask"); //Колба
IDRegistry.genItemID("probka");
IDRegistry.genItemID("kamenJizni");


Item.createItem("flask", "Колба", {name: "flask", meta: 0}, {stack:64});
Item.createItem("probka", "Пробка", {name: "probka", meta: 0}, {stack:64});
Item.createItem("kamenJizni", "Камень жизни", {name: "kamen_jizni", meta: 0}, {stack:64});



Callback.addCallback("PlayerAttack", function(player, victim){
    //code
});










