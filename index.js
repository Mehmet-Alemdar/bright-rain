$('.lamp-img').mousemove(function () {
  $('.div-lamp').addClass('div-lamp-return')
  $('.drop').addClass('div-lamp-return')
})
$('.lamp-img').mouseleave(function () {
  $('.div-lamp').removeClass('div-lamp-return')
  $('.drop').removeClass('div-lamp-return')
})

const rain = (name, speed) => {
  $('.' + name).show()
  $('.' + name).animate({ marginTop: '55vh', transition: `${speed}s` })
  setTimeout(function () {
    $('.' + name).hide()
    rain(name, speed)
  }, speed * 1000)
}

const callRain = () => {
  for (let i = 1; i < 7; i++) {
    switch (i) {
      case 1:
        rain('drop1', 1)
        break
      case 2:
        rain('drop2', 1.6)
        break
      case 3:
        rain('drop3', 0.9)
        break
      case 4:
        rain('drop4', 2)
        break
      case 5:
        rain('drop5', 2.5)
        break
      case 6:
        rain('drop6', 0.9)
        break
    }
  }
}

callRain()
