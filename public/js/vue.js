const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let app = new Vue({
    el: '#app',
    data: {
        time: null,
        date: null,
        color: null
    },
    methods: {
        GetClockColor: function() {
            let h = new Date().getHours();

            if(h >= 0 && h < 7) {
                return 'from-indigo-600 to-purple-900'
            } else if(h >= 7 && h < 12) {
                return 'from-yellow-400 to-yellow-600'
            } else if(h >= 12 && h < 19) {
                return 'from-blue-300 to-blue-500'
            } else if(h >= 19 && h < 22) {
                return 'from-blue-400 to-blue-600'
            } else if(h >= 22) {
                return 'from-pink-600 to-purple-900'
            }
        }
    },   
    created() {
        this.interval = setInterval(() => {
            this.time = Intl.DateTimeFormat('en-SE', { timeStyle: 'long' }).format(new Date()).slice(0, -5);
            this.date = Intl.DateTimeFormat('en-SE', { dateStyle: 'full' }).format(new Date());

            this.color = this.GetClockColor();
        }, 1000);
    }
});