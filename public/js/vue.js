const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let app = new Vue({
    el: '#app',
    data: {
        time: null,
        date: null,
        color: null
    },
    beforeDestroy() {
        clearInterval(this.interval)
    },    
    created() {
        this.interval = setInterval(() => {
            this.time = Intl.DateTimeFormat('en-SE', { timeStyle: 'long' }).format(new Date()).slice(0, -5);
            this.date = Intl.DateTimeFormat('en-SE', { dateStyle: 'full' }).format(new Date());

        let hours = new Date().getHours();

        if(hours >= 0 && hours < 7) {
            this.color = 'bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-900'
        } else if(hours >= 7 && hours < 12) {
            this.color = 'bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600'
        } else if(hours >= 12 && hours < 19) {
            this.color = 'bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500'
        } else if(hours >= 19 && hours < 22) {
            this.color = 'bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600'
        } else if(hours >= 22) {
            this.color = 'bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-900'
        }

        }, 1000);
    }
});