function funcPopup() {
    const body = document.querySelector('body');
    const scrollBarWidth = window.innerWidth - body.offsetWidth;
    const popupLinks = document.querySelectorAll('.popup-link');
    const lockPadding = document.querySelectorAll(".lock-padding");
    const popups = document.querySelectorAll('.popup');

    let unlock = true;

    const timeout = 800;

    if (popupLinks.length > 0) {
        for (let index = 0; index < popupLinks.length; index++) {
            const popupLink = popupLinks[index];
            popupLink.style.pointerEvents = 'auto';
            popupLink.addEventListener("click", function (e) {
                const popupName = popupLink.getAttribute('data-popup-btn');
                const curentPopup = document.querySelector('[data-popup-target="'+ popupName +'"]');
                popupOpen(curentPopup);
                e.preventDefault();
            });
        }
    }
    if (popups.length > 0) {
        for (let index = 0; index < popups.length; index++) {
            const popup = popups[index];
            setTimeout(function () {
                popup.style.visibility = 'visible';
            }, 1500);
        }
    }


    const popupCloseIcon = document.querySelectorAll('.close-popup');
    if (popupCloseIcon.length > 0) {
        for (let index = 0; index < popupCloseIcon.length; index++) {
            const el = popupCloseIcon[index];
            el.addEventListener('click', function (e) {
                popupClose(el.closest('.popup'));
                e.preventDefault();
            });
        }
    }

    function popupOpen(curentPopup) {
        if (curentPopup && unlock) {
            const popupActive = document.querySelector('.popup.open');
            if (popupActive) {
                popupClose(popupActive, false);
            } else {
                bodyLock();
            }
            curentPopup.classList.add('open');
            curentPopup.addEventListener("click", function (e) {
                if (!e.target.closest('.popup__content')) {
                    popupClose(e.target.closest('.popup'));
                }
            });
        }
    }

    function popupClose(popupActive, doUnlock = true) {
        if (popupActive && unlock && popupActive.classList.contains('open')) {
            popupActive.classList.remove('open');
            if (doUnlock) {
                bodyUnLock();
            }
        }
    }

    function bodyLock() {
        const lockPaddingValue = window.innerWidth - body.offsetWidth + 'px';

        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = scrollBarWidth + 'px';
            }
        }
        body.style.paddingRight = scrollBarWidth + 'px';
        body.classList.add('lock');

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, timeout);
    }

    function bodyUnLock() {
        setTimeout(function () {
            if (lockPadding.length > 0) {
                for (let index = 0; index < lockPadding.length; index++) {
                    const el = lockPadding[index];
                    el.style.paddingRight = 0;
                }
            }
            body.style.paddingRight = 0;
            body.classList.remove('lock');
        }, timeout);

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, timeout);
    }

    document.addEventListener('keydown', function (e) {
        if (e.which === 27) {
            const popupActive = document.querySelector('.popup.open');
            popupClose(popupActive);
        }
    });
}
window.addEventListener('load', funcPopup);