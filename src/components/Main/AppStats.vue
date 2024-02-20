<script>
export default {
    name: 'AppStats',
}
</script>

<template>
    <section id="stats">
        <div class="container">
            <div class="row">
                <div class="col-3 d-flex justify-content-end align-items-center p-0">
                    <font-awesome-icon icon="fa-solid fa-user-group" class="fa-solid"/>
                    <div class="d-flex flex-column">
                        <h3>3195</h3>
                        <p>Online Learner</p>
                    </div>
                </div>
                <div class="col-3 d-flex justify-content-center align-items-center p-0">
                    <font-awesome-icon icon="fa-solid fa-clapperboard" class="fa-solid" />
                    <div class="d-flex flex-column">
                        <h3>23</h3>
                        <p>Video Courses</p>
                    </div>
                </div>
                <div class="col-3 d-flex justify-content-center align-items-center p-0">
                    <font-awesome-icon icon="fa-solid fa-image" class="fa-solid" />
                    <div class="d-flex flex-column">
                        <h3>437</h3>
                        <p>Sliders and Images</p>
                    </div>
                </div>
                <div class="col-3 d-flex justify-content-start align-items-center p-0">
                    <font-awesome-icon icon="fa-solid fa-thumbs-up" class="fa-solid" />
                    <div class="d-flex flex-column">
                        <h3>1440</h3>
                        <p>Excellent Reviews</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
#stats {
    background-image: url("../../assets/images/counter-1919x1101.jpg");
    background-size: cover;
}

.row {
    height: 550px;
}

.fa-solid {
    margin-top: 10px;
    color: white;
    font-size: 70px;
    margin-right: 20px;
}

h3 {
    font-size: 45px;
    margin-top: 30px;
    color: #fcb900;
}

p {
    margin-top: -10px;
    color: white;
}

</style>