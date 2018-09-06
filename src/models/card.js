var m = require("mithril");
var Timer = require("./timer");

var Card = {
    current: null,
    list: [],
    loadList: function() {
        return m.request({
            method: "GET",
            url: "https://api.scryfall.com/cards/random?pretty=true",
        })
        .then(function(result) {
            if (result.type_line.includes("Land") || result.type_line.includes("Artifact")) {
                Card.loadList();
            } else {
                Card.current = result;
            }
        })
    },

    guess: function(color) {
        if (Card.current.colors.includes(color)) {
            Card.loadList();
            Timer.time += 3;
        } else {
            Timer.time -= 1;
        }
    }
}

module.exports = Card;
