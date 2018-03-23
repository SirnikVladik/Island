var menu = document.getElementById('menu');
var menuContent = document.querySelector('.menu-content');
var size = document.getElementById('size');
var blocks = document.getElementById('blocks');
size.addEventListener('change', e => {
    console.log(e.target.value);
});
var startWidth = String(Number(blocks.offsetWidth) / 3) + 'px';

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
                for (let j = 0; j < this.size; j++) {
                    this.lines[i].push(k);
                }
            };
            this.height = String(this.width / this.size) + 'px';
        },
        randomSelection(event) {
            this.sizeBefore = this.size;
            this.lines = [];
            for (let i = 0; i < this.size; i++) {
                this.lines.push([]);
                for (let j = 0; j < this.size; j++) {
                    let k = Math.floor(Math.random() * 2);
                    this.lines[i].push(k);
                }
            };
            this.height = String(this.width / this.size) + 'px';
        },
        changeMaterial(e) {
            let target = e.target;
            if (target.classList.contains('water')) {
                this.lines[target.textContent[0] - 1][target.textContent[2] - 1] = 1;
                target.classList.remove('water');
                target.classList.add('sand');
            } else if (target.classList.contains('sand')) {
                this.lines[target.textContent[0] - 1][target.textContent[2] - 1] = 0;
                target.classList.remove('sand');
                target.classList.add('water');
            };
            this.countIslands();
            console.log(this.lines);
        },
        countIslands() {
            let field = this.lines;
            var fieldCopy = JSON.parse(JSON.stringify(field));
            let count = 0;
            for (let i = 0; i < field.length; i++) {
                for (let j = 0; j < field[i].length; j++) {
                    //------------------------------------
                    if (field[i][j]) {
                        var elem = {
                            x: j,
                            y: i,
                        };
                        wave = [elem];
                        while (wave.length) {
                            var waveLength = wave.length;
                            wave.forEach(waveNode => {
                                var right = {
                                    x: waveNode.x + 1,
                                    y: waveNode.y,
                                };
                                var bottom = {
                                    x: waveNode.x,
                                    y: waveNode.y + 1,
                                };
                                var top = {
                                    x: waveNode.x,
                                    y: waveNode.y - 1,
                                };
                                var left = {
                                    x: waveNode.x - 1,
                                    y: waveNode.y,
                                };
                                if (field[right.y]) {
                                    if (field[right.y][right.x]) {
                                        wave.push(right);
                                    };
                                };
                                if (field[bottom.y]) {
                                    if (field[bottom.y][bottom.x]) {
                                        wave.push(bottom);
                                    };
                                };
                                if (field[left.y]) {
                                    if (field[left.y][left.x]) {
                                        wave.push(left);
                                    };
                                };
                                if (field[top.y]) {
                                    if (field[top.y][top.x]) {
                                        wave.push(top);
                                    };
                                };
                                field[waveNode.y][waveNode.x] = 0;
                            });
                            for (let i = waveLength; i > 0; i--) {
                                wave.splice(0, 1);
                            };
                            //
                        };
                        count += 1;
                    };
                    //------------------------------------
                };
            };
            this.islands = count;
            this.lines = fieldCopy;
        },
    },
});
