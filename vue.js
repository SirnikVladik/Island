var menu = document.getElementById('menu');
var menuContent = document.querySelector('.menu-content');
var size = document.getElementById('size');
var blocks = document.getElementById('blocks');
size.addEventListener('change', e => {
    console.log(e.target.value);
});

var bod = new Vue({
    el: "#wrapper",
    data: {
        hide: true,
        classObject: {
            water: true,
            sand: false,
        },
        size: 3,
        sizeBefore: 3,
        lines: [
            [1, 0, 1],
            [0, 1, 0],
            [1, 0, 1]
        ],
    },
    methods: {
        hiding() {
            this.hide = !this.hide;
            this.size = this.sizeBefore;
        },
        changingSize(event) {
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
        saveSettings(event) {
            this.sizeBefore = this.size;
            //this.lines = ;
        },
        randomSelection(event) {
            var s = this.size;
            this.size = Math.floor(Math.random() * 10) + 1;
            if (this.size == s) {
                bod.randomSelection();
            };
        },
        changeMaterial(e) {
            let target = e.target;
            if (target.classList.contains('water')) {
                target.classList.remove('water');
                target.classList.add('sand');
                console.log('Material chenged to sand');
            } else if (target.classList.contains('sand')) {
                target.classList.remove('sand');
                target.classList.add('water');
                console.log('Material chenged to water');
            }
        },
    },
});
