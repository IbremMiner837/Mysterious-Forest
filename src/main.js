/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 3
*/



// file: DNA.js


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














// file: groups.js

Item.addCreativeGroup("Кровь", "Кровь",
//Кровь мирных
[ItemID.blood_of_peaceful_mobs_19, ItemID.blood_of_peaceful_mobs_75,
  ItemID.blood_of_peaceful_mobs_10, ItemID.blood_of_peaceful_mobs_112,
  ItemID.blood_of_peaceful_mobs_11, ItemID.blood_of_peaceful_mobs_24,
  ItemID.blood_of_peaceful_mobs_121, ItemID.blood_of_peaceful_mobs_23,
  ItemID.blood_of_peaceful_mobs_16, ItemID.blood_of_peaceful_mobs_25,
  ItemID.blood_of_peaceful_mobs_22, ItemID.blood_of_peaceful_mobs_30,
  ItemID.blood_of_peaceful_mobs_12, ItemID.blood_of_peaceful_mobs_18,
  ItemID.blood_of_peaceful_mobs_109, ItemID.blood_of_peaceful_mobs_13,
  ItemID.blood_of_peaceful_mobs_26, ItemID.blood_of_peaceful_mobs_21,
  ItemID.blood_of_peaceful_mobs_17, ItemID.blood_of_peaceful_mobs_125,
  ItemID.blood_of_peaceful_mobs_111, ItemID.blood_of_peaceful_mobs_74,
  ItemID.blood_of_peaceful_mobs_115, ItemID.blood_of_peaceful_mobs_118,
//Кровь враждебных
  ItemID.blood_of_evil_mobs_43, ItemID.blood_of_evil_mobs_33,
  ItemID.blood_of_evil_mobs_110, ItemID.blood_of_evil_mobs_50,
  ItemID.blood_of_evil_mobs_55, ItemID.blood_of_evil_mobs_104,
  ItemID.blood_of_evil_mobs_41, ItemID.blood_of_evil_mobs_49,
  ItemID.blood_of_evil_mobs_hoglin, ItemID.blood_of_evil_mobs_47,
  ItemID.blood_of_evil_mobs_42, ItemID.blood_of_evil_mobs_phantom,
  ItemID.blood_of_evil_mobs_127, ItemID.blood_of_evil_mobs_pillager,
  ItemID.blood_of_evil_mobs_ravager, ItemID.blood_of_evil_mobs_54,
  ItemID.blood_of_evil_mobs_39, ItemID.blood_of_evil_mobs_34,
  ItemID.blood_of_evil_mobs_37, ItemID.blood_of_evil_mobs_46,
  ItemID.blood_of_evil_mobs_105, ItemID.blood_of_evil_mobs_57,
  ItemID.blood_of_evil_mobs_45, ItemID.blood_of_evil_mobs_48,
  ItemID.blood_of_evil_mobs_126, ItemID.blood_of_evil_mobs_32,
  ItemID.blood_of_evil_mobs_116, ItemID.blood_of_evil_mobs_27,
//Кровь нейтральных
  ItemID.blood_of_neutral_mobs_122, ItemID.blood_of_neutral_mobs_48,
  ItemID.blood_of_neutral_mobs_31, ItemID.blood_of_neutral_mobs_38,
  ItemID.blood_of_neutral_mobs_20, ItemID.blood_of_neutral_mobs_29,
  ItemID.blood_of_neutral_mobs_113, ItemID.blood_of_neutral_mobs_123,
  ItemID.blood_of_neutral_mobs_28, ItemID.blood_of_neutral_mobs_108,
  ItemID.blood_of_neutral_mobs_35, ItemID.blood_of_neutral_mobs_14,
  ItemID.blood_of_neutral_mobs_36]);
  
  
  
Item.addCreativeGroup("ДНК", "ДНК",
//ДНК мирных
[ItemID.dna_of_peaceful_mobs_19, ItemID.dna_of_peaceful_mobs_75,
  ItemID.dna_of_peaceful_mobs_10, ItemID.dna_of_peaceful_mobs_112,
  ItemID.dna_of_peaceful_mobs_11, ItemID.dna_of_peaceful_mobs_24,
  ItemID.dna_of_peaceful_mobs_121, ItemID.dna_of_peaceful_mobs_23,
  ItemID.dna_of_peaceful_mobs_16, ItemID.dna_of_peaceful_mobs_25,
  ItemID.dna_of_peaceful_mobs_22, ItemID.dna_of_peaceful_mobs_30,
  ItemID.dna_of_peaceful_mobs_12, ItemID.dna_of_peaceful_mobs_18,
  ItemID.dna_of_peaceful_mobs_109, ItemID.dna_of_peaceful_mobs_13,
  ItemID.dna_of_peaceful_mobs_26, ItemID.dna_of_peaceful_mobs_21,
  ItemID.dna_of_peaceful_mobs_17, ItemID.dna_of_peaceful_mobs_125,
  ItemID.dna_of_peaceful_mobs_111, ItemID.dna_of_peaceful_mobs_74,
  ItemID.dna_of_peaceful_mobs_115, ItemID.dna_of_peaceful_mobs_118,
//ДНК враждебных
  ItemID.dna_of_evil_mobs_43, ItemID.dna_of_evil_mobs_33,
  ItemID.dna_of_evil_mobs_110, ItemID.dna_of_evil_mobs_50,
  ItemID.dna_of_evil_mobs_55, ItemID.dna_of_evil_mobs_104,
  ItemID.dna_of_evil_mobs_41, ItemID.dna_of_evil_mobs_49,
  ItemID.dna_of_evil_mobs_hoglin, ItemID.dna_of_evil_mobs_47,
  ItemID.dna_of_evil_mobs_42, ItemID.dna_of_evil_mobs_phantom,
  ItemID.dna_of_evil_mobs_127, ItemID.dna_of_evil_mobs_pillager,
  ItemID.dna_of_evil_mobs_ravager, ItemID.dna_of_evil_mobs_54,
  ItemID.dna_of_evil_mobs_39, ItemID.dna_of_evil_mobs_34,
  ItemID.dna_of_evil_mobs_37, ItemID.dna_of_evil_mobs_46,
  ItemID.dna_of_evil_mobs_105, ItemID.dna_of_evil_mobs_57,
  ItemID.dna_of_evil_mobs_45, ItemID.dna_of_evil_mobs_48,
  ItemID.dna_of_evil_mobs_126, ItemID.dna_of_evil_mobs_32,
  ItemID.dna_of_evil_mobs_116, ItemID.dna_of_evil_mobs_27,
//ДНК нейтральных
  ItemID.dna_of_neutral_mobs_122, ItemID.dna_of_neutral_mobs_48,
  ItemID.dna_of_neutral_mobs_31, ItemID.dna_of_neutral_mobs_38,
  ItemID.dna_of_neutral_mobs_20, ItemID.dna_of_neutral_mobs_29,
  ItemID.dna_of_neutral_mobs_113, ItemID.dna_of_neutral_mobs_123,
  ItemID.dna_of_neutral_mobs_28, ItemID.dna_of_neutral_mobs_108,
  ItemID.dna_of_neutral_mobs_35, ItemID.dna_of_neutral_mobs_14,
  ItemID.dna_of_neutral_mobs_36]);




// file: DNA_Analizator.js

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
    
Block.createBlockWithRotation("dna_analizator_cow", 
     [{name: "ДНК Анализатор", texture: 
     [["machine_side", 0], ["machine_side", 0], 
     ["machine_side", 0], ["dna_for_cow", 0], 
     ["machine_side", 0], ["machine_side", 0]], 
     inCreative: false}]);
     
Block.createBlockWithRotation("dna_analizator_red_cow", 
     [{name: "Анализатор ДНК", texture: 
     [["machine_side", 0], ["machine_side", 0], 
     ["machine_side", 0], ["dna_for_red_cow", 0], 
     ["machine_side", 0], ["machine_side", 0]], 
     inCreative: false}]);
     
Block.createBlockWithRotation("dna_analizator_sheep", 
     [{name: "Анализатор ДНК", texture: 
     [["machine_side", 0], ["machine_side", 0], 
     ["machine_side", 0], ["dna_for_sheep", 0], 
     ["machine_side", 0], ["machine_side", 0]], 
     inCreative: false}]);
     
Block.createBlockWithRotation("dna_analizator_pig", 
     [{name: "Анализатор ДНК", texture: 
     [["machine_side", 0], ["machine_side", 0], 
     ["machine_side", 0], ["dna_for_pig", 0], 
     ["machine_side", 0], ["machine_side", 0]], 
     inCreative: false}]);
     
Block.createBlockWithRotation("dna_analizator_chiken", 
     [{name: "Анализатор ДНК", texture: 
     [["machine_side", 0], ["machine_side", 0], 
     ["machine_side", 0], ["dna_for_chiken", 0], 
     ["machine_side", 0], ["machine_side", 0]], 
     inCreative: false}]);
     
Block.createBlockWithRotation("dna_analizator_villager", 
     [{name: "Анализатор ДНК", texture: 
     [["machine_side", 0], ["machine_side", 0], 
     ["machine_side", 0], ["dna_for_villager", 0], 
     ["machine_side", 0], ["machine_side", 0]], 
     inCreative: false}]);
     
     
     
Block.createBlockWithRotation("dna_analizator_zombie", 
     [{name: "Анализатор ДНК", texture: 
     [["machine_side", 0], ["machine_side", 0], 
     ["machine_side", 0], ["dna_for_zombie", 0], 
     ["machine_side", 0], ["machine_side", 0]], 
     inCreative: false}]);
     
Block.createBlockWithRotation("dna_analizator_skeleton", 
     [{name: "Анализатор ДНК", texture: 
     [["machine_side", 0], ["machine_side", 0], 
     ["machine_side", 0], ["dna_for_skeleton", 0], 
     ["machine_side", 0], ["machine_side", 0]], 
     inCreative: false}]);
     
Block.createBlockWithRotation("dna_analizator_creeper", 
     [{name: "Анализатор ДНК", texture: 
     [["machine_side", 0], ["machine_side", 0], 
     ["machine_side", 0], ["dna_for_creeper", 0], 
     ["machine_side", 0], ["machine_side", 0]], 
     inCreative: false}]);
     
Block.createBlockWithRotation("dna_analizator_spider", 
     [{name: "Анализатор ДНК", texture: 
     [["machine_side", 0], ["machine_side", 0], 
     ["machine_side", 0], ["dna_for_spider", 0], 
     ["machine_side", 0], ["machine_side", 0]], 
     inCreative: false}]);
     
Block.createBlockWithRotation("dna_analizator_enderman", 
     [{name: "Анализатор ДНК", texture: 
     [["machine_side", 0], ["machine_side", 0], 
     ["machine_side", 0], ["dna_for_enderman", 0], 
     ["machine_side", 0], ["machine_side", 0]], 
     inCreative: false}]);
     
     
     
Block.createBlockWithRotation("dna_analizator_pigman", 
     [{name: "Анализатор ДНК", texture: 
     [["machine_side", 0], ["machine_side", 0], 
     ["machine_side", 0], ["dna_for_pigman", 0], 
     ["machine_side", 0], ["machine_side", 0]], 
     inCreative: false}]);
     
     var triggerSlot0 = [id == ItemID.syringe || id == ItemID.flask];
     
     var aspectReactorGui = new UI.StandartWindow({
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
        "slot_0": {type: "slot", x: 390, y: 115, size: 66, visual: false, bitmap: "custom.slot_syringe", isValid: function(id) {
				if (triggerSlot0/*id == ItemID.syringe ||*/ ) return true;
				return false;
			}, needClean: false, isTransparentBackground: false},
		"scale_0": {type: "scale", x: 474, y: 123, direction: 0, bitmap: "custom.furnace_bar_background", scale: 3.2, value: 1},
		"image_0": {type: "image", x: 546, y: 83, bitmap: "custom.microscope", scale: 3.2},
		"scale_1": {type: "scale", x: 650, y: 123, direction: 0, bitmap: "custom.furnace_bar_background", scale: 3.2, value: 1},
		"image_1": {type: "image", x: 740, y: 80, bitmap: "custom.dna_for_egg_0", scale: 7.25},
		"slot_1": {type: "slot", x: 390, y: 305, size: 66, visual: false, bitmap: "custom.slot_dna", needClean: false, isTransparentBackground: false},
		"scale_2": {type: "scale", x: 474, y: 313, direction: 0, bitmap: "custom.furnace_bar_background", scale: 3.2, value: 1},
		"slot_2": {type: "slot", x: 568, y: 305, size: 67, visual: false, bitmap: "custom.slot_dna", needClean: false, isTransparentBackground: false},
		"scale_3": {type: "scale", x: 570, y: 220, direction: 0, bitmap: "custom.furnace_bar_background", scale: 3.2, value: 1},
		"slot_3": {type: "slot", x: 390, y: 209, size: 66, visual: false, bitmap: "custom.slot_syringe", needClean: false, isTransparentBackground: false},
          //"aspectScale": {type: "scale", x: 850, y: 120, direction: 1, scale: 8, value: 1, bitmap: "aspectScale_nitor", overlay: "aspect_scale_overlay_1", overlayScale: 4},
          //"stateText": {type: "text", x: 625, y: 227, width: 90, height: 100, text: "", font: {color: android.graphics.Color.WHITE, shadow: .6, size: 25}}
     }
});
//UI.testUI(aspectReactorGui); // тестовое открытие после создания
// добавляем созданный интерфейс нашему tile entity из прошлых глав

// ...
// создаем блок
TileEntity.registerPrototype(BlockID.dna_analizator, {
     defaultValues: {
          someValue: 0 // сохраняемое значение someValue, по умолчанию 0
     },
     tick: function(){
          // что то сделать каждый тик, к примеру выводим someValue
          //Debug.message(this.data.someValue);
     },
     click: function(id, count, data, coords){
          this.data.someValue = 1; // установить значение someValue на 1
     },
     getGuiScreen: function(){
          return aspectReactorGui; // при попытке открыть интерфейс, возвращаем наш объект интерфейса
     }
     // остальные события не трогаем
});
     
     
     
     
     
     
     
     
     
     
     




