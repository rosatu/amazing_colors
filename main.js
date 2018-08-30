let somelist = document.querySelectorAll('.somelist-item')
let somelistButtons = document.querySelectorAll('.somelist-item button')

setInterval(()=>{
  document.querySelector('body').style.transition = '1.5s'
  document.querySelector('body').style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${Math.random()})`
}, 2000)

let backgroundOpacity = 0

const createCoin = () => {
  let coin

  if (Math.random() < 0.5) {
    coin = document.createElement('img')
    coin.src = 'https://images-na.ssl-images-amazon.com/images/I/51xs7F%2BtP5L._SX425_.jpg'
  } else {
    coin = document.createElement('img')
    coin.src = 'https://images-na.ssl-images-amazon.com/images/I/51NyMaKLydL.jpg'
  }
  coin.style.width = '100px'
  coin.style.height = '100px'

  return coin
}

somelistButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    backgroundOpacity += 0.1
    document.querySelector('body').style.backgroundColor = `rgba(0, 0, 0, ${backgroundOpacity})`
    let image = btn.parentElement.querySelector('img')
    btn.parentElement.replaceChild(createCoin(), image)
  })
})


for (let i = 0; i < somelist.length; i++) {
  //randomly lets color for fun!
  somelist[i].style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${Math.random()})`

  // put created coin into list-item
  somelist[i].appendChild(createCoin());

}