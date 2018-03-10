var menu = document.getElementById('#menu');
var menuContent = document.querySelector('menu-content');
var size = document.getElementById('size');

size.addEventListener('change', e => {
    console.log(e.target.value);
});

new Vue({
    el: "#body",
    data: {
        hide: 'true',
        size: 3,
    },
    methods: {
        hiding() {
            this.hide = !this.hide;
        },
        changingSize(event) {
            this.size = Number(event.target.value);            
            console.log(this.size);
        },
        saveSettings(event) {
            console.log(this.size);            
        }
    },
});
