declare let opts: any;

const player = require("play-sound")((opts = {}));
const spawn = require("child_process").spawn;
const exec = require("child_process").exec;
const str = process.argv[2];
const lastChar = str.slice(-1);
let time = Number(str.slice(0, -1));
let timeRemaining: number;
let period: string;

const timeHandler = () => {
  if (lastChar === "s") return { period: "seconds", time: 1 };
  if (lastChar === "m") return { period: "minutes", time: 60 };
  if (lastChar === "h") return { period: "hours", time: 60 * 60 };
  if (lastChar === "d") return { period: "days", time: 60 * 60 * 24 };
  if (lastChar === "W") return { period: "weeks", time: 60 * 60 * 24 * 7 };
  if (lastChar === "x") return { period: "months", time: 60 * 60 * 24 * 7 * 4 };
  return { period: "seconds", time: 1 };
};
timeRemaining = timeHandler().time * 1000 * time;
period = timeHandler().period;
const child = spawn("sleep", [process.argv[2]]);
child.stdout.on("data", (_data: any) => {
  if (time === 0) {
    child.kill("SIGINT");
  }
  console.log(_data);
});
child.stdout.on("close", () => {
  clearInterval(minutesIntervalID);
  clearInterval(secondsIntervalID);
  player.play("C:/Users/gon_w/Music/bell.mp3", function (err: any) {
    if (err) throw err;
  });
  console.log("Time Over 👾");
});

console.clear();
console.log(`${time} ${period} left 🍅`);

const secondsIntervalID = setInterval(() => {
  timeRemaining = timeRemaining - 1000;
  if (timeRemaining / 1000 < 60) {
    console.clear();
    console.log(`${timeRemaining / 1000} seconds left 🍅`);
  }
}, 1000);

const minutesIntervalID = setInterval(() => {
  console.clear();
  time = time - 1;
  if (timeRemaining / 1000 > 60) {
    console.log(`${time} ${period} left 🍅`);
  }
}, 1000 * timeHandler().time);
