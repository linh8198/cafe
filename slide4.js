var mainImg4 = document.querySelector('.khung4 .main4 ')
var preImg4 = document.querySelector('.khung4 .main4 div:nth-child(2) img')
var listImg4 = document.querySelectorAll('.khung4 .list-img img')
var btnNext4 = document.querySelector('.khung4 .next')
var btnPre4 = document.querySelector('.khung4 .pre')
var currentIndex4 = 0
var aaa4 = 0
// setInterval(() => {


//     if (currentIndex4 === listImg4.length - 1) {
//         currentIndex4 = 0
//         aaa4 = 0
//     } else {
//         aaa4 = aaa4 + 10
//         currentIndex4++


//     }
//     updateImgByIndex(currentIndex4)
//     mainImg4.style.transform = `translateX(-${aaa4}%)`
// }, 2000)
function updateImgByIndex(index) {
    // currentIndex4 = index
    listImg4.forEach(item => {
        item.classList.remove('activeImg')
    })
    listImg4[index].classList.add('activeImg')

}
listImg4.forEach((img, index) => {
    img.addEventListener('click', () => {
        updateImgByIndex(index)

    })
})

btnNext4.addEventListener('click', () => {

    if (currentIndex4 === listImg4.length - 6) {
        currentIndex4 = 0
        aaa4 = currentIndex4 * 18
    } else {
        currentIndex4++
        aaa4 = aaa4 + 18

    }
    updateImgByIndex(currentIndex4)

    mainImg4.style.transform = `translateX(-${aaa4}%)`
    console.log('check', currentIndex4)

})
btnPre4.addEventListener('click', () => {
    if (currentIndex4 === 0) {
        currentIndex4 = listImg4.length - 6
        aaa4 = currentIndex4 * 18

    } else {
        aaa4 = aaa4 - 18
        currentIndex4--
    }
    updateImgByIndex(currentIndex4)
    // mainImg4.style.animation = '1s next forwards'
    mainImg4.style.transform = `translateX(-${aaa4}%)`
    console.log('checkpre', currentIndex4)

})