if (!localStorage.getItem("musicStarted")) {

let music = new Audio("music.mp3");

music.loop = true;

music.volume = 0.7;

music.play();

localStorage.setItem("musicStarted","true");

}