const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let app = new Vue({
    el: '#app',
    data: {
        time: null,
        date: null,
        color: null,
        deg: null,
        desc: null,
        view: null,
        wind: null,
        sunset: null,
        icon: null,
        iconColor: null,
    },
    methods: {
        GetClockColor: function() {
            let h = new Date().getHours();

            if(h >= 0 && h < 7) {
                return 'from-indigo-600 to-purple-900'
            } else if(h >= 7 && h < 10) {
                return 'from-yellow-400 to-yellow-600'
            } else if(h >= 10 && h < 19) {
                return 'from-blue-300 to-blue-500'
            } else if(h >= 19 && h < 22) {
                return 'from-blue-400 to-blue-600'
            } else if(h >= 22) {
                return 'from-pink-600 to-purple-900'
            }
        },
        AddZero: function(x) {
            if(x < 10) {
                return '0' + x;
            } else {
                return x;
            }
        },
        UC: function(s) {
            return s.charAt(0).toUpperCase() + s.slice(1);
        }
    },   
    created() {
        let d, hours, minutes, seconds, day, date, month, year;

        this.interval = setInterval(() => {

            d = new Date();
            hours = d.getHours();
            minutes = d.getMinutes();
            seconds = d.getSeconds();
            day = days[d.getDay()];
            date = d.getDate();
            month = months[d.getMonth()];
            year = d.getFullYear();

            this.time = this.AddZero(hours) + ':' + this.AddZero(minutes) + ':' + this.AddZero(seconds);
            this.date = `${day}, ${date} ${month} ${year}`;

            this.color = this.GetClockColor();
        }, 1000);

        axios.get('http://127.0.0.1:3000/api/GetWeather').then(res => {
            this.deg = ~~res.data.deg;
            this.desc = this.UC(res.data.desc);
            this.view = res.data.view;
            this.wind = ~~res.data.wind;
            this.sunset = res.data.sunset;
            this.icon = res.data.icon;
            this.iconColor = res.data.iconColor;
        })
    }
});