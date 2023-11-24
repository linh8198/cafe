let mayPhaCaPhe = document.getElementById('mayPhaCaPhe')
let mayXayCaPhe = document.getElementById('mayXayCaPhe')
let mayXaySinhTo = document.getElementById('mayXaySinhTo')
let mayPhaCaPheChild = document.querySelector('.sidebar-child__list')
let mayXayCaPheChild = document.querySelector('#mayXayCaPheChild')
let mayXaySinhToChild = document.querySelector('#mayXaySinhToChild')


let a = document.querySelector('.sidebar-menu__icon-down')
let mayXayCaPheIcon = document.querySelector('#mayXayCaPheIcon')
let mayXaySinhToIcon = document.querySelector('#mayXaySinhToIcon')

let barIcon = document.querySelector('#barIcon')
let sideBarMenu = document.querySelector('.sidebar-menu')

let closeSidebar = document.querySelector('.close-sidebar')

let prev = document.querySelector('.slick-prev')

let gift = document.querySelector('.title-gift')

let doiTac = document.querySelector('.doi-tac')
let doiTacActive = document.querySelector('#js')
mayPhaCaPhe.onclick = () => {
    mayPhaCaPheChild.classList.toggle('d-block')
    a.classList.toggle('sidebar-menu__icon-down--rotate')
}

mayXayCaPhe.onclick = () => {
    mayXayCaPheChild.classList.toggle('d-block')
    mayXayCaPheIcon.classList.toggle('sidebar-menu__icon-down--rotate')
}
mayXaySinhTo.onclick = () => {
    mayXaySinhToChild.classList.toggle('d-block')
    mayXaySinhToIcon.classList.toggle('sidebar-menu__icon-down--rotate')
}

barIcon.onclick = (event) => {

    sideBarMenu.classList.toggle('onclick-sidebar-menu')
}

sideBarMenu.onclick = (event) => {
    if (event.target.classList.contains("sidebar-menu")) {

        sideBarMenu.classList.toggle('onclick-sidebar-menu')
    }
}

closeSidebar.onclick = () => {
    sideBarMenu.classList.toggle('onclick-sidebar-menu')

}



// slide
$(document).ready(function () {
    $('.slider-1').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"

    });
});
$(document).ready(function () {
    $('.slide-small').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1000

    });
});

$(document).ready(function () {
    $('.flashshale-list').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: "<button type='button' class='slick-prev slick-arrow pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next slick-arrow pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });
});

// prev.outerHTML = '<p>Nội dung mới</p>'

console.log(prev)



$(document).ready(function () {
    $('.frame-body').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: "<button type='button' class='slick-prev slick-arrow pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next slick-arrow pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });
});

$(document).ready(function () {
    $('.list-category-slider').slick({

        responsive: [

            {
                breakpoint: 739,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });
});


//gift
var aa = 4000
var b = 0
setInterval(() => {
    gift.classList.toggle('white-title')
}, 300)

// doi tac

let myInterval = function (aa) {

    mya = setInterval(() => {
        if (aa === -4000) {
            aa = 4000
        }
        aa--
        b = aa
        // doiTac.style = `transform: translateX(${aa / 40}%)`
        doiTac.style = `left: ${aa / 40}%`
    }, 1)

}
myInterval(aa)
function stop(x) {
    clearInterval(mya)
    console.log(aa)
}
function action() {
    console.log(b)
    myInterval(b)

}
