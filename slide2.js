var mainImg2 = document.querySelector('.khung2 .main ')
var preImg2 = document.querySelector('.khung2 .main img:nth-child(2)')
var listImg2 = document.querySelectorAll('.khung2 .list-img img')
var btnNext2 = document.querySelector('.khung2 .next')
var btnPre2 = document.querySelector('.khung2 .pre')
var currentIndex2 = 0
var aaa2 = 0
var mainImg3 = document.querySelector('.khung3 .main ')
var preImg3 = document.querySelector('.khung3 .main img:nth-child(2)')
var listImg3 = document.querySelectorAll('.khung3 .list-img img')
var btnNext3 = document.querySelector('.khung3 .next')
var btnPre3 = document.querySelector('.khung3 .pre')
var currentIndex3 = 0
var aaa3 = 0
setInterval(() => {
    if (currentIndex2 === (listImg2.length - 2)) {
        currentIndex2 = 0
        aaa2 = 0
    } else {
        aaa2 = aaa2 + 50
        currentIndex2++


    }
    updateImgByIndex(currentIndex2)
    mainImg2.style.transform = `translateX(-${aaa2}%)`
}, 2000)
function updateImgByIndex(index) {
    currentIndex2 = index
    listImg2.forEach(item => {
        item.classList.remove('activeImg')
    })
    listImg2[index].classList.add('activeImg')

}
listImg2.forEach((img, index) => {
    img.addEventListener('click', () => {
        updateImgByIndex(index)

    })
})

setInterval(() => {
    if (currentIndex3 === listImg3.length - 2) {
        currentIndex3 = 0
        aaa3 = 0
    } else {
        aaa3 = aaa3 + 50
        currentIndex3++


    }
    updateImgByIndex(currentIndex3)
    mainImg3.style.transform = `translateX(-${aaa3}%)`
}, 2100)
function updateImgByIndex(index) {
    currentIndex3 = index
    listImg3.forEach(item => {
        item.classList.remove('activeImg')
    })
    listImg3[index].classList.add('activeImg')

}
listImg3.forEach((img, index) => {
    img.addEventListener('click', () => {
        updateImgByIndex(index)

    })
})
