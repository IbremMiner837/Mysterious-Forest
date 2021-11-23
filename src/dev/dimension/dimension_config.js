Callback.addCallback('DimensionLoaded', function (dimension) {
    if(dimension == 1837) {
        Entity.addEffect(Player.get(), 25, 1, 1000/*, [ambience], [particles]*/);
    }
});