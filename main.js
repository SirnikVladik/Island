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
            let val = Number(event.target.value);
            if(val < 1) {
                val = toString(1);
                this.size = 1;
                console.log(this.size);
            } else  if (val > 10){
                val = toString(10);
                this.size = 10;
                console.log(this.size);
            } else {
                this.size = Number(event.target.value);            
                console.log(this.size);
            }
        },
        saveSettings(event) {
            console.log(this.size);            
        }
    },
});
