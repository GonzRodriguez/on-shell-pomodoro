var player = require("play-sound")(opts = {});
var spawn = require("child_process").spawn;
var str = process.argv[2];
var lastChar = str.slice(-1);
var time = Number(str.slice(0, -1));
var timeRemaining;
var period;
var timeHandler = function () {
    if (lastChar === "s")
        return { period: "seconds", time: 1 };
    if (lastChar === "m")
        return { period: "minutes", time: 60 };
    if (lastChar === "h")
        return { period: "hours", time: 60 * 60 };
    if (lastChar === "d")
        return { period: "days", time: 60 * 60 * 24 };
    if (lastChar === "w")
        return { period: "weeks", time: 60 * 60 * 24 * 7 };
    if (lastChar === "x")
        return { period: "months", time: 60 * 60 * 24 * 7 * 4 };
    return { period: "seconds", time: 1 };
};
timeRemaining = timeHandler().time * 1000 * time;
period = timeHandler().period;
var child = spawn("sleep", [process.argv[2]]);
child.stdout.on("data", function (_data) {
    if (time === 0) {
        child.kill("SIGINT");
    }
    console.log(_data);
});
child.stdout.on("close", function () {
    clearInterval(minutesIntervalID);
    clearInterval(secondsIntervalID);
    player.play("C:/Users/gon_w/Music/bell.mp3", function (err) {
        if (err)
            throw err;
    });
    console.log("Time Over 👾");
});
console.clear();
console.log("".concat(time, " ").concat(period, " left \uD83C\uDF45"));
var secondsIntervalID = setInterval(function () {
    timeRemaining = timeRemaining - 1000;
    if (timeRemaining / 1000 < 60) {
        console.clear();
        console.log("".concat(timeRemaining / 1000, " seconds left \uD83C\uDF45"));
    }
}, 1000);
var minutesIntervalID = setInterval(function () {
    console.clear();
    time = time - 1;
    if (timeRemaining / 1000 > 60) {
        console.log("".concat(time, " ").concat(period, " left \uD83C\uDF45"));
    }
}, 1000 * timeHandler().time);
//# sourceMappingURL=index.js.map