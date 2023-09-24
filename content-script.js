let prev_sY = scrollY.toFixed()
let prev_sH = document.documentElement.scrollHeight

addEventListener('scroll', _ => {
  prev_sY = scrollY.toFixed()
  prev_sH = document.documentElement.scrollHeight
})

addEventListener('resize', _ => {
  const sY = scrollY.toFixed()
  const sH = document.documentElement.scrollHeight
  scrollTo(0, (sH * sY / prev_sH).toFixed(0))
})
