let openPanel = document.querySelectorAll('.open-panel');
let bottomPanel = document.querySelectorAll('.bottom-panel .row-wrapper .row');


openPanel.forEach(function (element) {
    
    element.onclick = function () {
        let arrow = document.querySelector('.open-panel .rotate');
        let shownPanel = document.querySelector('.show');

        if (!element.nextElementSibling.classList.contains("show") && shownPanel !== null) {
            shownPanel.classList.remove('show')
        }
        if(!element.lastElementChild.lastElementChild.classList.contains('rotate') && arrow !== null){
            arrow.classList.remove('rotate');
        }
        element.nextElementSibling.classList.toggle('show');
        element.lastElementChild.lastElementChild.classList.toggle('rotate');
    }
})

bottomPanel.forEach(function (element) {
    element.onclick = function () {
        let arrow = document.querySelector('.bottom-panel .row .rotate');
        let shownPanel = document.querySelector('.bottom-panel .row-wrapper .show');

        if (!element.nextElementSibling.classList.contains("show") && shownPanel !== null) {
            shownPanel.classList.remove('show');
        }

        if(!element.lastElementChild.classList.contains('rotate') && arrow !== null){
            arrow.classList.remove('rotate');
        }
        element.nextElementSibling.classList.toggle('show');
        element.lastElementChild.classList.toggle('rotate');

    }
})