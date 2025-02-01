console.log("Welcome to Spotify")
//Initialize the variable
let songIndex = 0;
let audioElement = new Audio('musicc..mp3');
let masterPlay = document.getElementById('masterPlay')
let myProgessBar = document.getElementById('myProgressBar');
let songs = [
    {songName: "Salam-e-Ishq", filepath: "songs/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Salam-e-Ishq", filepath: "songs/2.mp3", coverPath: "cover/2.jpg"},
    {songName: "Salam-e-Ishq", filepath: "songs/3.mp3", coverPath: "cover/3.jpg"},
    {songName: "Salam-e-Ishq", filepath: "songs/4.mp3", coverPath: "cover/4.jpg"},
    {songName: "Salam-e-Ishq", filepath: "songs/5.mp3", coverPath: "cover/5.jpg"},
    {songName: "Salam-e-Ishq", filepath: "songs/6.mp3", coverPath: "cover/6.jpg"},
    {songName: "Salam-e-Ishq", filepath: "songs/7.mp3", coverPath: "cover/7.jpg"},
    {songName: "Salam-e-Ishq", filepath: "songs/8.mp3", coverPath: "cover/8.jpg"},
]
//AudioElement.play();

//Listen to Events
//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }  
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
     masterPlay.classList.add('fa-play-circle'); 
    }
})
//listen to events
audioElement.addEventListener('timeupdate', ()=>{
    
    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log('timeupdate');
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
