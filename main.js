var menu = document.getElementById('#menu');
var menuContent = document.querySelector('menu-content');


new Vue({
    el: "#body",
    data: {
        hide: 'true',
    },
    methods: {
        hiding() {
            this.hide = !this.hide;
        },
    },
});
