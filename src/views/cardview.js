var m = require("mithril");
var TimerView = require("./timerview");
var Card = require("../models/card");

function sws(str) { //stands for significant white space
  return m.trust(str.replace(/\n/g, "<br>"));
}

module.exports = {
    oninit: Card.loadList,
    view: function() {
        if (!Card.current)
            return;

        var text = Card.current.type_line + "\n\n" + Card.current.oracle_text;

        if (Card.current.power) {
            text += "\n\n" + Card.current.power + "/" + Card.current.toughness;
        }

        return m("[style='width:500px; margin:auto;']", [
            m(TimerView),
            m(".card[style='height: 200px;']", sws(text)),
            m(".choice-container[style='margin-top: 20px;']", [
                m("button", {onclick: function() {Card.guess("W")} }, "White"),
                m("button", {onclick: function() {Card.guess("U")} }, "Blue"),
                m("button", {onclick: function() {Card.guess("B")} }, "Black"),
                m("button", {onclick: function() {Card.guess("R")} }, "Red"),
                m("button", {onclick: function() {Card.guess("G")} }, "Green"),
            ]),
        ]);
    }
}