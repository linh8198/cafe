
bar = document.querySelector('.bar')
bgNavBar = document.querySelector('.bg-sidebar')
mayPhaCaPhe = document.querySelector('#may-pha-ca-phe')
mayXayCaPhe = document.querySelector('#may-xay-ca-phe')
mayXaySinhTo = document.querySelector('#may-xay-sinh-to')
mayDunNuocNong = document.querySelector('#may-dun-nuoc-nong')
let doiTac = document.querySelector('.doi-tac')
let doiTacActive = document.querySelector('#js')
let test = document.querySelector('.doi-tac-active')
let gift = document.querySelector('.title-gift')
bar.onclick = function () {
    navBar = document.querySelector('.sidebar')
    navBar.classList.toggle('active')
}

bgNavBar.onclick = function () {
    // navBar = document.querySelector('.sidebar')
    navBar.classList.toggle('active')
}
mayPhaCaPhe.onclick = function () {
    ul1 = document.querySelector('#ul1')
    li1 = document.querySelector('.may-pha-ca-phe')
    ul1.classList.toggle('ul-show')
    li1.classList.toggle('active-ul')
    mayPhaCaPhe.classList.toggle('quay')
}
mayXayCaPhe.onclick = function () {
    ul2 = document.querySelector('#ul2')
    li2 = document.querySelector('.may-xay-ca-phe')
    ul2.classList.toggle('ul-show')
    li2.classList.toggle('active-ul')
    mayXayCaPhe.classList.toggle('quay')
}
mayXaySinhTo.onclick = function () {
    ul3 = document.querySelector('#ul3')
    li3 = document.querySelector('.may-xay-sinh-to')
    ul3.classList.toggle('ul-show')
    li3.classList.toggle('active-ul')
    mayXaySinhTo.classList.toggle('quay')
}
mayDunNuocNong.onclick = function () {
    ul4 = document.querySelector('#ul4')
    li4 = document.querySelector('.may-dun-nuoc-nong')
    ul4.classList.toggle('ul-show')
    li4.classList.toggle('active-ul')
    mayDunNuocNong.classList.toggle('quay')
}

hotline = document.querySelector('.hotline-img')

setTimeout(() => {
    hotline.classList.toggle('deg-15')
}, 200)
setInterval(() => {
    gift.classList.toggle('white-title')
}, 300)
var a = 4000
var b = 0
let myInterval = function (a) {

    mya = setInterval(() => {
        if (a === -4000) {
            a = 4000
        }
        a--
        b = a
        doiTac.style = `transform: translateX(${a / 40}%)`
    }, 1)

}
myInterval(a)
function stop(x) {
    clearInterval(mya)
    console.log(a)
}
function action() {
    console.log(b)
    myInterval(b)

}





