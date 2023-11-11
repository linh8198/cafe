var mainImg = document.querySelector('.khung .main ')
var preImg = document.querySelector('.khung .main img:nth-child(2)')
var listImg = document.querySelectorAll('.khung .list-img img')
var btnNext = document.querySelector('.khung .next')
var btnPre = document.querySelector('.khung .pre')
var currentIndex = 0
var aaa = 0
// setInterval(() => {


//     if (currentIndex === listImg.length - 1) {
//         currentIndex = 0
//         aaa = 0
//     } else {
//         aaa = aaa + 100
//         currentIndex++


//     }
//     updateImgByIndex(currentIndex)
//     mainImg.style.transform = `translateX(-${aaa}%)`
// }, 2000)
function updateImgByIndex(index) {
    currentIndex = index
    listImg.forEach(item => {
        item.classList.remove('activeImg')
    })
    listImg[index].classList.add('activeImg')

}
listImg.forEach((img, index) => {
    img.addEventListener('click', () => {
        updateImgByIndex(index)

    })
})

btnNext.addEventListener('click', () => {

    if (currentIndex === listImg.length - 1) {
        currentIndex = 0
        aaa = 0
    } else {
        aaa = aaa + 100
        currentIndex++


    }
    updateImgByIndex(currentIndex)
    // mainImg.style.animation = '1s next forwards'
    mainImg.style.transform = `translateX(-${aaa}%)`
    console.log(aaa)




})
btnPre.addEventListener('click', () => {


    if (currentIndex == 0) {
        currentIndex = listImg.length - 1
        aaa = currentIndex * 100
    } else {
        aaa = aaa - 100
        currentIndex--
    }
    updateImgByIndex(currentIndex)
    // mainImg.style.animation = '1s next forwards'
    mainImg.style.transform = `translateX(-${aaa}%)`
    console.log(aaa)
})