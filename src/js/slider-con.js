function swiperSlider() {
    const teamMain = document.querySelectorAll('[data-slider="team-slider"]');
    //const heroSlider = document.querySelectorAll('[data-slider="hero-slider"]');
    if (teamMain) {
        teamMain.forEach(slider => {
            // кнопки вперед та назад
            let arrowLeft = slider.querySelector('.swiper-button-prev');
            let arrowRight = slider.querySelector('.swiper-button-next');

            //коментуємо чи видаляемо якщо не потрібно
            let pagination = slider.querySelector('.swiper-pagination');
            //коментуємо чи видаляемо якщо не потрібно

            let swiper = new Swiper(slider.querySelector('.swiper'), {
                speed: 1500,
                // автоплей
                //centeredSlides: true,
                // autoplay: {
                //     delay: 3000,
                //     disableOnInteraction: false,
                // },
                slidesPerView: 3, // кількість слайдерів для показу
                spaceBetween: 20, // відстань між слайдерами


                // крапки пагінації
                pagination: {
                    el: pagination,
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<li class="' + className + '"></li>';
                    },
                },
                // кнопки навігації
                navigation: {
                    nextEl: arrowRight,
                    prevEl: arrowLeft,
                },

                // додаємо додатковий клас
                // можна використовувати для додаткових анімацій
                on: {
                    transitionStart: function () {
                        let previousIndex = this.previousIndex;
                        let previousSlide = slider.getElementsByClassName('swiper-slide')[previousIndex];
                        if (previousSlide) {
                            setTimeout(function () {
                                previousSlide.classList.remove('is-play');
                            }, 1000);
                        }
                    },
                    transitionEnd: function () {
                        let activeIndex = this.activeIndex;
                        let activeSlide = slider.getElementsByClassName('swiper-slide')[activeIndex];
                        activeSlide.classList.add('is-play');
                    },
                },
                // адаптив
                breakpoints: {
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    // when window width is >= 1200px
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    }
                }

            });
        });
    }
    // if (heroSlider) {
    //     heroSlider.forEach(slider => {
    //         //
    //         let arrowLeft = slider.querySelector('.swiper-button-prev');
    //         let arrowRight = slider.querySelector('.swiper-button-next');
    //         //

    //         let pagination = slider.querySelector('.swiper-pagination');
    //         swiper = new Swiper(slider.querySelector('.swiper'), {
    //             speed: 1500,
    //             //centeredSlides: true,
    //             // autoplay: {
    //             //     delay: 3000,
    //             //     disableOnInteraction: false,
    //             // },
    //             slidesPerView: 1,
    //             spaceBetween: 20,
    //             pagination: {
    //                 el: pagination,
    //                 clickable: true,
    //                 renderBullet: function (index, className) {
    //                     return '<li class="' + className + '"></li>';
    //                 },
    //             },
    //             //
    //             navigation: {
    //                 nextEl: arrowRight,
    //                 prevEl: arrowLeft,
    //             },
    //             //
    //             on: {
    //                 transitionStart: function () {
    //                     let previousIndex = this.previousIndex;
    //                     let previousSlide = slider.getElementsByClassName('swiper-slide')[previousIndex];
    //                     if (previousSlide) {
    //                         setTimeout(function () {
    //                             previousSlide.classList.remove('is-play');
    //                         }, 1000);
    //                     }
    //                 },
    //                 transitionEnd: function () {
    //                     let activeIndex = this.activeIndex;
    //                     let activeSlide = slider.getElementsByClassName('swiper-slide')[activeIndex];
    //                     activeSlide.classList.add('is-play');
    //                 },
    //             },
    //             breakpoints: {
    //                 // when window width is >= 320px
    //                 320: {
    //                     slidesPerView: 1,
    //                     spaceBetween: 20,
    //                 },
    //                 // when window width is >= 480px
    //                 768: {
    //                     slidesPerView: 2,
    //                     spaceBetween: 30
    //                 },
    //                 // when window width is >= 640px
    //                 1200: {
    //                     slidesPerView: 3,
    //                     spaceBetween: 40
    //                 }
    //             }

    //         });
    //     });
    // }
}
window.addEventListener('load', swiperSlider, false);