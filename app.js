 const music = new Audio ('audio/taumaya.mp3')
//  music.play();

const songs = [
    {
        id: '1,',
      songName: `tylent<br>
      <div class="subtitle">xvolld</div>`,
        poster: "img/1.jpg"
      
    },
    {
        id: '2,',
        songName: `stontel<br>
        <div class="subtitle">xvolld</div>`,
          poster: "img/2.jpg"
        
      },
      {
        id: '3,',
        songName: `taumaya<br>
        <div class="subtitle">xvolld</div>`,
          poster: "img/3.jpg"
        
      }];



// Array.from(Document.getElementsByClassName('songItem')).forEach((e, i,) =>{
//     e.getElementsByTagName('img')[0].src = songs[i].poster;
//     e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

// });


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');


masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
})


let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft +=330;
});
pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -=330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click', ()=>{
    Artists_bx.scrollLeft +=330;
});
pop_art_left.addEventListener('click', ()=>{
    Artists_bx.scrollLeft -=330;
});
