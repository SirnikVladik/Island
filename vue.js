var menu = document.getElementById('menu');
var menuContent = document.querySelector('.menu-content');
var size = document.getElementById('size');
var blocks = document.getElementById('blocks');
size.addEventListener('change', e => {
    console.log(e.target.value);
});
var startWidth = String(Number(blocks.offsetWidth)/3) + 'px';

var bod = new Vue({
    el: "#wrapper",
    data: {
        islands: 0,
        hide: true,
        size: 3,
        sizeBefore: 3,
        lines: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ],
        width: Number(blocks.offsetWidth),
        height: startWidth,
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
            } else if (val > 9) {
                val = String(9);
                this.size = 9;
            } else {
                this.size = Number(event.target.value);
        }
        },
        saveSettings(event) {
            this.sizeBefore = this.size;
            let k = 0;
            this.lines = [];
            for (let i = 0; i < this.size; i++) {
                this.lines.push([]);
                for(let j = 0; j < this.size; j++) {
                    this.lines[i].push(k);
                }
            };
            this.height = String(this.width/this.size) + 'px';
        },
        randomSelection(event) {
            this.sizeBefore = this.size;
            this.lines = [];
            for (let i = 0; i < this.size; i++) {
                this.lines.push([]);
                for(let j = 0; j < this.size; j++) {
                    let k = Math.floor(Math.random() * 2);
                    this.lines[i].push(k);
                }
            };
            this.height = String(this.width/this.size) + 'px';
        },
        changeMaterial(e) {
            let target = e.target;
            if (target.classList.contains('water')) {
                this.lines[target.textContent[0] - 1][target.textContent[2] - 1] = 1;
                target.classList.remove('water');
                target.classList.add('sand');
                console.log('Material chenged to sand');
            } else if (target.classList.contains('sand')) {
                this.lines[target.textContent[0] - 1][target.textContent[2] - 1] = 0;
                target.classList.remove('sand');
                target.classList.add('water');
                console.log('Material chenged to water');
            };
            console.log(this.lines);            
        },
    },
});
