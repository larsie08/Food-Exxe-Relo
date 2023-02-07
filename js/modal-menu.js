document.addEventListener('DOMContentLoaded', function() {

    const modalLinks = document.querySelectorAll('.modal-link');
    const overlay = document.querySelector('.overlay');
    const modal = document.querySelector('.rezerv-modal');
    const closeLink = document.querySelector('.close-modal');
    const body = document.body;

    const menuIcon = document.querySelector('.menu-link');
    const closeMenu = document.querySelector('.close-menu');
    const mediaMenu = document.querySelector('.media-menu');

    modalLinks.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            disableScroll();
            overlay.classList.add('open');
            modal.classList.add('open');
        })
    })

    closeLink.addEventListener('click', function(e) {
        e.preventDefault();
        enableScroll();
        overlay.classList.remove('open');
        modal.classList.remove('open');
    })

    document.body.addEventListener('keyup', function(e) {
        const key = e.keyCode;
        if (key === 27) {
            e.preventDefault();
            enableScroll();
            overlay.classList.remove('open');
            modal.classList.remove('open');
        }
    }, false)
 
    overlay.addEventListener('click', function(e) {
        e.preventDefault();
        enableScroll();
        overlay.classList.remove('open');
        modal.classList.remove('open');
    })

    menuIcon.addEventListener('click', function(e) {
        e.preventDefault();
        disableScroll();
        mediaMenu.classList.add('open-media');
    })

    closeMenu.addEventListener('click', function(e) {
        e.preventDefault();
        enableScroll();
        mediaMenu.classList.remove('open-media');
    })

    let fixBlocks = document.querySelectorAll('.fix-block');

    function disableScroll() {
        let pagePosition = window.scrollY;
            body.dataset.position = pagePosition;
            body.style.top = -pagePosition + 'px';
        let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
            fixBlocks.forEach((el) => {
                el.style.paddingRight = paddingOffset;
            })
            document.body.style.paddingRight - paddingOffset; 
        body.classList.add('disable-scroll');
    }
    function enableScroll() {
        let pagePosition = parseInt(body.dataset.position, 10);
            body.style.top = 'auto';
            body.classList.remove('disable-scroll');
            window.scroll({top: pagePosition, left: 0});
            body.removeAttribute('data-position');
        let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
            fixBlocks.forEach((el) => {
                el.style.paddingRight = '0px';
            })
            document.body.style.paddingRight - '0px';
    }
})