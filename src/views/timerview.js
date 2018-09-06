var m = require("mithril");
var Timer = require("../models/timer");

module.exports = {
    oninit: function () {
        Timer.time = 30;
        self = this;
        this.timer = setInterval(function () {
            Timer.time--;
            m.redraw();
        }, 1000);
    },
    view: function() {
        return m("p[style='text-align:center;']", Timer.time);
    }
}