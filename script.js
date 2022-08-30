const fugitivo = document.querySelector('.fugitivo')
const inicio = document.querySelector('.inicio')
const parar = document.querySelector('.parar')

inicio.addEventListener('click', () => fugitivo.style.display = 'block')

parar.addEventListener('click', () => fugitivo.style.display = 'none')

fugitivo.addEventListener('mouseover', () => {
    let x = Math.random() * (90 - 1) + 1
    let y = Math.random() * (90 - 1) + 1
    fugitivo.style.left = `${x}%`
    fugitivo.style.top =  `${y}%`
})


