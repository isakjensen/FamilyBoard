const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let app = new Vue({
    el: '#app',
    data: {
        time: null,
        date: null,
        state: false
    },
    methods: {
        isNight() {
            let hours = (new Date()).getHours();
            return false;
        }
    },
    beforeDestroy() {
        clearInterval(this.interval)
    },    
    created() {
        setTimeout(() => this.state = true, 1000);

        this.interval = setInterval(() => {
            this.time = Intl.DateTimeFormat('en-SE', { timeStyle: 'long' }).format(new Date()).slice(0, -5);
            this.date = Intl.DateTimeFormat('en-SE', { dateStyle: 'full' }).format(new Date());
        }, 1000)
    }
});