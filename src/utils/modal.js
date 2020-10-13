const btnClose = document.getElementById('btnClose')
const btnOpen = document.getElementById('btnOpen')
const modal_wrap = document.getElementById('modal_wrap')
const modal = document.getElementById('modal')

function replace(element, item1, item2) {
    element.classList.replace(item1, item2)
}

btnClose.addEventListener('click', (event) => {
    replace(modal_wrap,'opacityIn', 'opacityOut')
    replace(modal,'animationIn', 'animationOut')
    setTimeout(() => {
        modal_wrap.classList.remove('open')
    }, 1000)
    console.log('aaa')
})

btnOpen.addEventListener('click', (event) => {
    console.log('open')
    replace(modal_wrap,'opacityOut', 'opacityIn')
    replace(modal,'animationOut', 'animationIn')
    modal_wrap.classList.add('open')
})