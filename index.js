$(document).ready(function () {
    $(".item_sider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        draggable: false,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
        dots: false,
        responsive: [
        {
            breakpoint: 1025,
            settings: {
            slidesToShow: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            arrows: false,
            infinite: false,
            },
        },
        ],
        // autoplay: true,
        // autoplaySpeed: 1000,
    });
    });
    $(document).ready(function () {
        $(".content_box_imgae").slick({
            slidesToShow: 1,
            
            infinite: true,
            arrows: true,
            draggable: false,
            prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
            nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
            dots: false,
            responsive: [
            {
                breakpoint: 1025,
                settings: {
                slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                arrows: false,
                infinite: false,
                },
            },
            ],
            autoplay: true,
            autoplaySpeed: 1000,
        });
        });
$(document).ready(function () {
            $(".riew_image").slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                arrows: true,
                draggable: false,
                prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
                nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
                dots: false,
                responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                    slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                    slidesToShow: 1,
                    arrows: false,
                    infinite: false,
                    },
                },
                ],
                // autoplay: true,
                // autoplaySpeed: 1000,
            });
            });
           
const menu_expand = document.querySelectorAll(".menu-expand")
const show_item = document.querySelectorAll(".menu-item-has-children .dropdown")
const burger_icon = document.querySelector(".burger-icon")
const mobile_header_active = document.querySelector(".mobile-header-active")
const close_style = document.querySelector(".close-style")
for(let i= 0; i < menu_expand.length; i++){
    menu_expand[i].addEventListener("click",function(){
        show_item[i].classList.toggle("show_item")
    })
}
burger_icon.addEventListener("click",function(){
    mobile_header_active.classList.add("sidebar-visible")
})
close_style.addEventListener("click",function(){
    mobile_header_active.classList.remove("sidebar-visible")
})