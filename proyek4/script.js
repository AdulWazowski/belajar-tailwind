function load(param){
  const gambar = document.getElementById('gambar')
  return gambar.src = param
}

fetch('https://api.unsplash.com/photos/?client_id=JIKN1mRB-tHAHU8y3gzP1qdn71RLTDwladrVO13Pu3Q')
  .then(res => res.json())
  .then(data => {
    const sampel = data[0].urls.small
    
    load(sampel)// cek hasilnya di console
  })
  .catch(err => console.error("Gagal load playlist:", err))