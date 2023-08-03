let audioElement = new Audio('true-stories.mp3');
let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItems'));
let songDuration = parseInt(audioElement.duration);

let songs = [
    { songName: "ap", filePath: "true-stories.mp3", coverPath: "true-stories.jpg" },
    { songName: "ap", filePath: "true-stories.mp3", coverPath: "true-stories.jpg" },
    { songName: "ap", filePath: "true-stories.mp3", coverPath: "true-stories.jpg" },
    { songName: "ap", filePath: "true-stories.mp3", coverPath: "true-stories.jpg" },
    { songName: "ap", filePath: "true-stories.mp3", coverPath: "true-stories.jpg" },
    { songName: "ap", filePath: "true-stories.mp3", coverPath: "true-stories.jpg" },
    { songName: "ap", filePath: "true-stories.mp3", coverPath: "true-stories.jpg" },
    { songName: "ap", filePath: "true-stories.mp3", coverPath: "true-stories.jpg" },
    { songName: "ap", filePath: "true-stories.mp3", coverPath: "true-stories.jpg" },
    { songName: "ap", filePath: "true-stories.mp3", coverPath: "true-stories.jpg" },
    { songName: "ap", filePath: "true-stories.mp3", coverPath: "true-stories.jpg" }
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    // element.getElementsByClassName("songItem")[0].innerText=songs[i].songName;
    element.getElementsByTagName("i")[0].innerText = songDuration;
});


masterPlay.addEventListener('click', function () {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.innerText = 'pause_circle';


    } else {
        audioElement.pause();
        masterPlay.innerText = 'play_circle';
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
            element.innerText = "play_circle";
            masterPlay.innerText = 'play_circle'
        })
    }
})
audioElement.addEventListener('timeupdate', function () {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;

})
myProgressBar.addEventListener('change', function () {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.innerText = "play_circle";
        masterPlay.innerText = 'play_circle'
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', function (e) {
        makeAllPlay();
        e.target.innerText = "pause_circle";
        audioElement.src = 'true-stories.mp3';
        audioElement.play();
        masterPlay.innerText = 'pause_circle'
    })
})