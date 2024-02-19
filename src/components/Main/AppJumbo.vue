<script>
export default {
    name: 'AppJumbo',
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
                                <button @click="emailGet" type="button">SUBSCRIBE</button>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="row main">
                                <div class="col-3">
                                    <h2>26</h2>
                                    <h5>Days</h5>
                                </div>
                                <div class="col-3">
                                    <h2>01</h2>
                                    <h5>Hours</h5>
                                </div>
                                <div class="col-3">
                                    <h2>47</h2>
                                    <h5>Minutes</h5>
                                </div>
                                <div class="col-3">
                                    <h2>34</h2>
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
    font-weight: bold;
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
}

input {
    border-radius: 50px;
}

button {
    border-radius: 50px;
    background-color: #2d4649;
    color: white;
    padding: 10px;
    border: none;
}
</style>