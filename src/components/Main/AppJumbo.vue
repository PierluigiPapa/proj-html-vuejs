<script>
    export default {
        name: 'AppJumbo',
        data() {
            return {
                email: '',
                arrEmail: [],
                countdown: {
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                },
                countdownInterval: null
            }
        },
        mounted() {
            this.calculateCountdown();
            this.startCountdown();
        },
        methods: {
            emailGet() {
                this.arrEmail.push(this.email)
                this.email = '';
            },
            calculateCountdown() {
                const deadline = new Date('2024-02-23T19:30:00').getTime();
                let now = new Date().getTime();
                let difference = deadline - now;
    
                if (difference < 0) {
                    clearInterval(this.countdownInterval);
                    return;
                }
    
                this.countdown.days = Math.floor(difference / (1000 * 60 * 60 * 24));
                this.countdown.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                this.countdown.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                this.countdown.seconds = Math.floor((difference % (1000 * 60)) / 1000);
            },
            startCountdown() {
                this.countdownInterval = setInterval(() => {
                    this.calculateCountdown();
                }, 1000);
            }
        }
    }
    </script>
    

<template>
    <section id="jumbo">
        <div class="container">
            <div class="row">
                <div id="up" class="col-12 d-flex justify-content-center align-items-center flex-column">
                    <h1> Start your Human <span class="yellow">Revolution</span> today</h1>
                    <p class="text-grey">A wonderful serenity has taken possession of my entire soul, like these sweet
                        mornings of spring which i enjoy with my whole heart.</p>
                </div>
                <div id="bottom" class="col-12">
                    <div class="row main">
                        <div class="col-6 d-flex justify-content-center flex-column">
                            <h4 class="ps-5 mb-3"><strong class="white">Limited Sale:</strong> All courses with 55%
                                off
                            </h4>
                            <div class="input-group px-5">
                                <input v-model="email" type="email" class="form-control py-2"
                                placeholder="Enter your E-mail" @keyup.enter="emailGet">
                            </div>
                            <button @click="emailGet" type="button">SUBSCRIBE</button>
                        </div>
                        <div class="col-6">
                            <div class="row main">
                                <div class="col-3">
                                    <h2>{{countdown.days}}</h2>
                                    <h5>Days</h5>
                                </div>
                                <div class="col-3">
                                    <h2>{{ countdown.hours }}</h2>
                                    <h5>Hours</h5>
                                </div>
                                <div class="col-3">
                                    <h2>{{ countdown.minutes }}</h2>
                                    <h5>Minutes</h5>
                                </div>
                                <div class="col-3">
                                    <h2>{{ countdown.seconds }}</h2>
                                    <h5>Seconds</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
#jumbo {
    height: 750px;
    background-image: url("../../assets/images/slide-1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}

#up {
    height: 425px;
}

#bottom {
    margin-top: 240px;
    padding: 0 20px;
}

#bottom,
.main {
    height: 200px;
    background-color: #fcb900;
    border-radius: 10px;
}


.col-3 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

h1 {
    padding-top: 180px;
    padding-bottom: 6px;
    padding-left: 500px;
    padding-right: 250px;
    font-weight: bold;
    font-size: 60px;
    color: #333333;
}

h4 {
    margin-top: 60px;
    font-size: 30px;
    font-weight: bold;
    color: #333333;
}

h2 {
    color: white;
    font-size: 60px;
}

.yellow {
    color: #fcb900;
}

.white {
    color: white;
}

.text-grey {
    padding-left: 500px;
    padding-right: 200px;
    margin-bottom: 0;
    margin-top: 15px;
    font-family: sans-serif;
}

input {
    position: absolute;
    box-shadow: 14px 10px 21px -10px rgba(0,0,0,0.75);
    border-radius: 50px;
    height: 54px;
    z-index: 1;
}

button {
    position: relative;
    background-color: #2d4649;
    color: white;
    bottom: 2%;
    top: -25%;
    left: 75%; 
    padding: 10px;
    border: none;
    border-radius: 50px;
    width: 140px;
    height: 55px;
    z-index: 99;
}
</style>