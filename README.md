# On-shell-pomodoro
### Small script to run a pomodoro timer in the terminal. 
---
I tried different pomodoro timer apps for myself when coding and I realised that the only thing I needed was a timer that tells me how much it's left to finish and plays a sound to alert me when the times is over.

# Usage
Clone the repo
<br>
```
git clone https://github.com/GonzRodriguez/on-shell-pomodoro
```
install dependencies

```
npm i
```

run the program and pass the time as an argument.


```
node index.js 45m
```
#### Times frames
- "s" for seconds
- "m" for minutes
- "h" for hours
- "d" for days
- "w" for weeks
- "x" for monts
---
## Modyfy this line to point to the .mp3 file you want to play when the timer ends.
```
  // line 32
  player.play("C:/Users/gon_w/Music/bell.mp3", function (err: any) {
    if (err) throw err;
  });
```
---
## Run it form anyware in the terminal
Create an alias to run the file to it's full path
```
alias timer="cd ~ && node \Desktop\[...]\index.js"
```
Run the timer. Don't forget to add the time
```
timer 1m
```


https://user-images.githubusercontent.com/47540285/172041693-24b9160f-8875-4821-9e3c-3b3d65e4eef9.mp4

