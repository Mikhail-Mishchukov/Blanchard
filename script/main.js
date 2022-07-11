document.addEventListener('DOMContentLoaded', function() {
    //Выпадающий лист в header
    document.querySelectorAll('.direction-art__btn').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const direction = event.currentTarget.dataset.direction
            document.querySelector(`[data-target="${direction}"]`).classList.toggle('direction-art__droplist_active')
        })
    });
    window.addEventListener("click", function(event) {
        if (!event.target.matches('.direction-art__btn')) {
            document.querySelectorAll('.direction-art__droplist').forEach(function(tabContent) {
                tabContent.classList.remove('direction-art__droplist_active')
            })
        }
    });
    //Инпут в 1024
    function attributeForBtn() {
        document.querySelector('.form-search__btn').setAttribute('type', 'submite')
    }
    document.querySelector('.form-search__btn').addEventListener('click', function() {

        document.querySelector('.form-search__input').classList.toggle('form-search__input_active')
        document.querySelector('.form-search').classList.toggle('form-search_active')
        setInterval(attributeForBtn, 700);

    })
    document.querySelector('.header-top__form-btn').addEventListener('click', function() {


        document.querySelector('.form-search').classList.toggle('form-search_active')
        setInterval(attributeForBtn, 100);

    })
    document.querySelector('.form-search__close-btn').addEventListener('click', function() {


        document.querySelector('.form-search').classList.remove('form-search_active')


    })


    //swiper hero
    var swiperHero = new Swiper('#swiper-hero', {
        autoplay: {
            delay: 4000,
        },

        effect: 'fade',
    })

    document.querySelector('.header-top__burger').addEventListener('click', function() {
        document.querySelector('.header-top__nav').classList.add('header-top__nav_active')
    })
    document.querySelector('.header-top__close-btn').addEventListener('click', function() {
            document.querySelector('.header-top__nav').classList.remove('header-top__nav_active')
        })
        //SELECT
    const element = document.querySelector('.gallery-sort-select');
    const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
    });
    //SWIPER GALLERY
    var swiper = new Swiper('#swiper-gallery', {


        prevButton: '.swiper-button-prev-gallery',

        navigation: {
            nextEl: '.swiper-button-next-gallery',
            prevEl: '.swiper-button-prev-gallery',
            clickable: true,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
        },
        breakpoints: {
            1500: {
                slidesPerView: 3,
                slidesPerColumn: 2,
                spaceBetween: 50,
            },
            768: {
                slidesPerView: 2,
                slidesPerColumn: 2,
                spaceBetween: 34,
            },
            500: {
                slidesPerView: 2,
                slidesPerColumn: 0,
                spaceBetween: 15,
            },
            320: {
                slidesPerView: 1,
                slidesPerColumn: 0,
                spaceBetween: 0,
            }

        }

    });

    const modal = new GraphModal({
        isOpen: (modal) => {
            console.log('opened');
        },
        isClose: () => {
            console.log('closed');
        }
    });





    document.querySelectorAll('.choice-country-items-btn').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const country = event.currentTarget.dataset.country


            document.querySelectorAll('.country-content').forEach(function(tabContent) {
                tabContent.classList.remove('country-is-active')
            })
            document.querySelector(`[data-target="${country}"]`).classList.add('country-is-active')
            $(".accordion").accordion("refresh");
        })
    });

    const choicec = document.querySelectorAll('.choice-country-items-btn');
    choicec.forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            choicec.forEach(function(tabContent) {
                tabContent.classList.remove('choice-country-items-btn-is-active')
            })
            event.target.classList.add('choice-country-items-btn-is-active');
        });
    });


    $(function() {
        var icons = {
            header: "accordion-header-icon",
            activeHeader: "accordion-header-icon accordion-header-icon-active"
        };
        $(".accordion").accordion({
            heightStyle: "content",
            collapsible: true,

            icons: icons

        });

    });
    document.querySelectorAll('.accordion-content-droplist-btn').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const artist = event.currentTarget.dataset.artist
            const width = screen.width;
            const blockSrll = document.querySelectorAll('.catalog-discribe-artist-container');

            if (width < 953) {
                blockSrll.forEach(function(tab) {
                    tab.scrollIntoView({ behavior: "smooth" })
                })



            }


            document.querySelectorAll('.artist-hidden').forEach(function(tabContent) {
                tabContent.classList.remove('artist-active');
            })

            if (document.querySelector(`[data-target="${artist}"]`)) {

                document.querySelector(`[data-target="${artist}"]`).classList.add('artist-active')
            }


        })
    });

    document.querySelectorAll('.accordion-content-droplist-btn').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            document.querySelectorAll('.accordion-content-droplist-btn').forEach(function(tabContent) {
                tabContent.classList.remove('accordion-content-droplist-btn-is-open')
            })
            event.target.classList.add('accordion-content-droplist-btn-is-open');
        });
    });

    document.querySelector('.event-btn').addEventListener('click', function() {
        document.querySelectorAll('.event-items').forEach(function(dop) {
            dop.classList.add('add-items-is-open');
        })
        document.querySelector('.event-btn').classList.add('event-btn-off');


    });

    var swiperEvent = new Swiper('#swiper-event', {

        slidesPerView: 1,
        spaceBetween: 10,
        // loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        /*allowTouchMove: false,*/
    })


    document.querySelector('.mobile-btn-choose-checkbox').addEventListener('click', function() {
        document.querySelector('.mobile-btn-choose-checkbox').classList.toggle('mobile-btn-choose-checkbox-active')
        document.querySelectorAll('.droplist-choose-checkbox-items').forEach(function(tabCheck) {
            tabCheck.classList.toggle('droplist-choose-checkbox-items-active');
        })
        document.querySelector('.droplist-choose-checkbox').classList.toggle('droplist-choose-checkbox-is-active');

    })
    document.querySelectorAll('.publication-checkbox').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('change', function(event) {
            const gener = event.currentTarget.dataset.gener

            if (this.checked) {
                document.querySelector(`[data-target="${gener}"]`).classList.add('droplist-choose-checkbox-items-checked')
            } else document.querySelector(`[data-target="${gener}"]`).classList.remove('droplist-choose-checkbox-items-checked')


        })
    });



    var swiperPublication = new Swiper('#swiper-publication', {

        loop: false,
        prevButton: '.swiper-button-prev-gallery',

        navigation: {
            nextEl: '.swiper-button-next-gallery',
            prevEl: '.swiper-button-prev-gallery',
            clickable: true,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
        },
        breakpoints: {
            1310: {
                slidesPerView: 3,
                spaceBetween: 50,
            },

            1024: {
                slidesPerView: 2,

                spaceBetween: 49,
            },
            667: {
                slidesPerView: 2,
                spaceBetween: 34,
            }


        }

    });







    const swiperProjects = new Swiper('.swiper-projects', {


        //loop: true,


        prevButton: '.swiper-button-prev-projects',
        nextButon: '.swiper-button-next-projects',
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next-projects',
            prevEl: '.swiper-button-prev-projects',
            clickable: true,
        },
        breakpoints: {


            1319: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 40,
            },


        }


    });

    var selector = document.querySelector("input[type='tel']");
    var im = new Inputmask("+7 (999)-999-99-99");
    im.mask(selector);
    new JustValidate('.contacts-form', {
        rules: {
            name: {
                required: true,
                minLength: 2,
                maxLength: 30
            },
            tel: {
                required: true,
                function: (name, value) => {
                    const phone = selector.inputmask.unmaskedvalue()
                    return Number(phone) && phone.length === 10
                }

            },

        },
        messages: {
            name: {
                minLength: 'Минимум 2 буквы',
                required: 'Как вас зовут?'
            },
            tel: {

                required: 'Укажите ваш телефон'
            },

        },
        submitHandler: function(form) {
            let formData = new FormData(form);

            let xhr = new XMLHttpRequest();


            xhr.open('POST', "/script/mail.php", true);
            xhr.send(formData);
            form.reset();

        }

    })

    ymaps.ready(init);

    function init() {

        var myMap = new ymaps.Map("map-decktop", {
            center: [55.75846306898368, 37.601079499999905],
            zoom: 14,
        });
        var myPlacemark = new ymaps.Placemark([55.75846306898368, 37.601079499999905], {}, {
            iconLayout: 'default#image',
            iconImageHref: '../img/contacts/marker-map.svg',
            iconImageSize: [20, 20],
            iconImageOffset: [-3, -42]
        });
        myMap.geoObjects.add(myPlacemark);

    }


    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }

});