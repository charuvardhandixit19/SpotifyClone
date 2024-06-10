console.log("welcome to music app");
let  audioElement = new Audio('1.mp3');
let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let songitem = Array.from(document.getElementsByClassName('songitem'));
let song = [
    {songname : "warrior" , filepath : "songs/1.mp3" , coverpath : "covers/1.jpg"},
    {songname : "let me love you" , filepath : "songs/2.mp3" , coverpath : "covers/2.jpg"},
    {songname : "crown2020" , filepath : "songs/3.mp3" , coverpath : "covers/3.jpg"},
    {songname : "shamless" , filepath : "songs/4.mp3" , coverpath : "covers/4.jpg"},
    {songname : "affection moon" , filepath : "songs/5.mp3" , coverpath : "covers/5.jpg"},
    {songname : "perfect" , filepath : "songs/6.mp3" , coverpath : "covers/6.jpg"},
    {songname : "love me like you do" , filepath : "songs/7.mp3" , coverpath : "covers/7.jpg"},
    {songname : "heathens" , filepath : "songs/8.mp3" , coverpath : "covers/8.jpg"},
    {songname : "young blood" , filepath : "songs/9.mp3" , coverpath : "covers/9.jpg"},
    {songname : "blood and the water" , filepath : "songs/10.mp3" , coverpath : "covers/10.jpg"}
]

songitem.forEach((element,i) => {
  // console.log(element,i);
  element.getElementsByTagName("img")[0].src = song[i].coverpath;
  element.getElementsByClassName("songname")[0].innerText = song[i].songname; 

})
//click event handel
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
      { 
         audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
      }
      else
      {
        audioElement.pause() ;
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity=0;
      }
})

audioElement.addEventListener('timeupdate' , ()=>{
    // console.log("timeupdate");
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  //  console.log(progress);
    progressbar.value=progress;
})

progressbar.addEventListener('change', ()=>{
    audioElement.currentTime = progressbar.value*audioElement.duration/100;
})

const makeAllPlay = ()=>{
  Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.classList.remove('fa-pause');
    element.classList.add('fa-play');
  })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    console.log(e);
    songIndex = parseInt(e.target.id);
    makeAllPlay();
    e.target.classList.remove('fa-play');
    e.target.classList.add('fa-pause');
    audioElement.src =`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
  

  })
})

document.getElementById('next').addEventListener('click',()=>{
  if(songIndex>=9){
    songIndex=0;
  }
  else{
    songIndex += 1;
  }
  audioElement.src =`songs/${songIndex+1}.mp3`;
  audioElement.currentTime=0;
  audioElement.play();
  masterPlay.classList.remove('fa-play');
  masterPlay.classList.add('fa-pause');

})

document.getElementById('previous').addEventListener('click',()=>{
  if(songIndex>=0){
    songIndex=0;
  }
  else{
    songIndex -= 1;
  }
  audioElement.src =`songs/${songIndex+1}.mp3`;
  audioElement.currentTime=0;
  audioElement.play();
  masterPlay.classList.remove('fa-play');
  masterPlay.classList.add('fa-pause');

})