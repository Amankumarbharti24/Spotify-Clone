console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    // {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/11.m4a", coverPath: "covers/11.jpg"},
    // {songName: "Cielo - Huma-Huma", filePath: "songs/12.m4a", coverPath: "covers/12.webp"},
    // {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/13.m4a", coverPath: "covers/13.jpg"},
    // {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/14.m4a", coverPath: "covers/14.jpg"},
    // {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/15.m4a", coverPath: "covers/15.jpg"},
    // {songName: "Rabba - Salam-e-Ishq", filePath: "songs/16.m4a", coverPath: "covers/16.jpg"},
    // {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/17.m4a", coverPath: "covers/17.jpg"},
    // {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/18.m4a", coverPath: "covers/18.jpg"},
    // {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/19.m4a", coverPath: "covers/19.jpg"},
    // {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/20.m4a", coverPath: "covers/20.jpg"},
    // {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/21.m4a", coverPath: "covers/21.jpg"},
    // {songName: "Cielo - Huma-Huma", filePath: "songs/22.m4a", coverPath: "covers/22.jpg"},
    // {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/23.m4a", coverPath: "covers/23.jpg"},
    // {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/24.m4a", coverPath: "covers/24.jpg"},
    // {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/25.m4a", coverPath: "covers/25.jpg"},
    // {songName: "Rabba - Salam-e-Ishq", filePath: "songs/26.m4a", coverPath: "covers/26.jpg"},
    // {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/27.m4a", coverPath: "covers/77.jpg"},
    // {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/28.m4a", coverPath: "covers/28.jpg"},
    // {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/29.m4a", coverPath: "covers/29.jpg"},
    // {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/30.m4a", coverPath: "covers/30.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})