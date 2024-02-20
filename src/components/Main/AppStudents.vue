<script>
export default {
    name: 'AppStudents',
    data() {
        return {
            autoPlay: null,
            currentIndex: 0,
            isImageEnlarged: false,
            students: [
                {
                    image: '../src/assets/images/1-100x100.jpg',
                    title: 'Ciao',
                    text: 'Ciao',
                },
                {
                    image: '../src/assets/images/2-100x100.jpg',
                    title: 'Ciao',
                    text: 'Ciao',
                },
                {
                    image: '../src/assets/images/4-100x100.jpg',
                    title: 'Ciao',
                    text: 'Ciao',
                },
            ]
        };
    },
    computed: {
        lastIndex() {
            return this.students.length - 1;
        },
        isLastImage() {
            return this.currentIndex === this.lastIndex;
        }
    },
    methods: {
        goToNext() {
            this.isImageEnlarged = true; // Imposta lo stato di ingrandimento
            if (this.isLastImage) this.currentIndex = 0;
            else this.currentIndex++;
        },
        goToPrev() {
            this.isImageEnlarged = true; // Imposta lo stato di ingrandimento
            if (this.currentIndex) this.currentIndex--;
            else this.currentIndex = this.lastIndex;
        },
        setCurrentIndex(targetIndex) {
            this.currentIndex = targetIndex;
        },
        stopAutoPlay() {
            clearInterval(this.autoPlay);
        },
        startAutoPlay() {
            this.autoPlay = setInterval(this.goToNext, 4000);
        }
    },
    mounted() {
        this.startAutoPlay();
    }
};
</script>

<template>
    <section id="students">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="text-center py-5">What Students Say</h2>
                    <div class="d-flex justify-content-center">
                        <div class="d-flex justify-content-center">
                            <font-awesome-icon icon="fa-solid fa-arrow-left" id="prev" @click="goToPrev" @mouseenter="stopAutoPlay"
                                @mouseleave="startAutoPlay"/>
                            <figure v-for="(student, i) in students" :key="i" class="student-wrapper">
                                <div class="d-flex justify-content-center align-items-center">
                                    <img :src="student.image" :alt="student.text" :title="student.title"
                                        :class="{ 'enlarged': isImageEnlarged && currentIndex === i }">
                                </div>
                                <figcaption>
                                    <div class="d-flex justify-content-center align-items-center flex-column">
                                        <strong v-show="currentIndex === i" class=" text-center">{{ student.title }}</strong>
                                        <div v-show="currentIndex === i">
                                            <font-awesome-icon icon="fa-solid fa-star"/>
                                            <font-awesome-icon icon="fa-solid fa-star"/>
                                            <font-awesome-icon icon="fa-solid fa-star"/>
                                            <font-awesome-icon icon="fa-solid fa-star"/>
                                            <font-awesome-icon icon="fa-solid fa-star"/>
                                        </div>
                                        <p class="text-center" v-show="currentIndex === i">{{ student.text }}</p>
                                    </div>
                                </figcaption>
                            </figure>
                            <font-awesome-icon icon="fa-solid fa-arrow-right" class="fa-solid" id="prev" @click="goToPrev" @mouseenter="stopAutoPlay"
                                @mouseleave="startAutoPlay"/>
                        </div>
                        <!-- testo next -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
.row {
    height: 600px;
}

h2 {
    font-size: 40px;
    font-weight: bold;
}

.student-wrapper {
    width: 100px;
    margin-right: 30px;
}

img {
    width: 70px;
    border-radius: 50px;
    margin-bottom: 30px;
}

.fa-arrow-left {
    padding-right: 20px;
    padding-top: 20px;
    font-size: 30px;
    cursor: pointer;
}

.fa-arrow-right {
    padding-top: 20px;
    font-size: 30px;
    cursor: pointer;
}


.fa-star {
    color: #fcb900;
    margin-bottom: 30px;
}

strong {
    font-size: 20px;
}

.enlarged {
    transition: transform 0.3s ease;
    transform: scale(1.5);
}
</style>