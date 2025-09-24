let playlist = []
let currentSongIndex = 0

// ambil elemen
const song = document.getElementById('song')
const progress = document.getElementById('progress')
const ctrlIcon = document.getElementById('ctrlIcon')
const titleEl = document.getElementById('judul-lagu')
const artistEl = document.getElementById('penyanyi')
const coverEl = document.getElementById('cover')

// tombol kontrol
const btnPrev = document.getElementById('backward')
const btnNext = document.getElementById('forward')

// load playlist dari JSON
fetch('../../src/json/playlist.json')
  .then(res => res.json())
  .then(data => {
    playlist = data
    loadSong(currentSongIndex)
  })
  .catch(err => console.error("Gagal load playlist:", err))

// fungsi untuk load lagu
function loadSong(index) {
  if (playlist.length === 0) return
  const track = playlist[index]

  song.src = track.src
  titleEl.textContent = track.judul
  artistEl.textContent = track.penyanyi
  coverEl.src = track.cover

  song.load()
  playSong()
}

// play
function playSong() {
  song.play()
  ctrlIcon.classList.add('fa-pause')
  ctrlIcon.classList.remove('fa-play')
}

// pause
function pauseSong() {
  song.pause()
  ctrlIcon.classList.remove('fa-pause')
  ctrlIcon.classList.add('fa-play')
}

// play/pause toggle
function playPause() {
  if (song.paused) {
    playSong()
  } else {
    pauseSong()
  }
}

// next
function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % playlist.length
  loadSong(currentSongIndex)
}

// prev
function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length
  loadSong(currentSongIndex)
}

// progress bar sync
song.onloadedmetadata = () => {
  progress.max = song.duration
}

song.ontimeupdate = () => {
  progress.value = song.currentTime
}

progress.onchange = () => {
  song.currentTime = progress.value
  playSong()
}

// event listener tombol
ctrlIcon.parentElement.addEventListener('click', playPause)
btnNext.addEventListener('click', nextSong)
btnPrev.addEventListener('click', prevSong)
