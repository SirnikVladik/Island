var menu = document.getElementById('menu');
var menuContent = document.querySelector('menu-content');
var size = document.getElementById('size');
size.addEventListener('change', e => {
    console.log(e.target.value);
});

var bod = new Vue({
    el: "#body",
    data: {
        hide: 'true',
        size: 3,
        sizeBefore: 3,
    },
    methods: {
        hiding: function () {
            this.hide = !this.hide;
        },
        changingSize: function (event) {
            let val = Number(event.target.value);
            if (val < 1) {
                val = String(1);
                this.size = 1;
            } else if (val > 10) {
                val = String(10);
                this.size = 10;
            } else {
                this.size = Number(event.target.value);
            }
        },
        saveSettings: function (event) {
            this.sizeBefore = this.size;
            console.log(this.size);
        }
    },
});
