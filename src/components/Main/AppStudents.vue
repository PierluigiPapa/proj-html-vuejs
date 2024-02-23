<script>
export default {
    name: 'AppStudents',
    data() {
        return {
            autoPlay: null,
            currentIndex: 1,
            isImageEnlarged: false,
            students: [
                {
                    image: '../src/assets/images/1-100x100.jpg',
                    title: 'Come as you are',
                    text: "MasterStudy used is an excellent workshop whether you come as a counselor, advisor, administrator, or faculty member. I am going home empowered. I am looking forward to attending the On Course MasterStudy and the MasterStudy National Conference next year and facilitating the use of this excellent retention/student success course at my college.",
                },

                {
                    image: '../src/assets/images/2-100x100.jpg',
                    title: 'Paints of the Future',
                    text: 'The response to your MasterStudy has been really overwhelming! Those who participated in the workshop are spreading the word here on campus and the “buzz” is on. The VP of Instruction wants you to come back! Her goal is to have more faculty trained. She also wants to attend a workshop herself. Our President told me Masterstudy needs to be the cornerstone of our success program.',
                },

                {
                    image: '../src/assets/images/4-100x100.jpg',
                    title: 'Investing on your future',
                    text: "It is no exaggeration to say this MasterStudy experience was transformative-both professionally and personally. This workshop will long remain a high point of my life. Thanks again.... I am feeling energized and eager to start teaching my class next week. I can't wait to use all of my new teaching tools. I will absolutely recommend this workshop to other educators!",
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
            this.isImageEnlarged = true;
            if (this.isLastImage) this.currentIndex = 0;
            else this.currentIndex++;
        },
        goToPrev() {
            this.isImageEnlarged = true;
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
            this.autoPlay = setInterval(this.goToNext, 2000);
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
                    <div class="d-flex justify-content-center flex-column">
                        <div class="d-flex justify-content-center">
                            <font-awesome-icon icon="fa-solid fa-arrow-left" id="prev" @click="goToPrev"
                                @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay" />

                            <div v-for="(student, i) in students" :key="i">
                                <div class="student-image-container d-flex justify-content-center align-items-center">
                                    <img :src="student.image" :class="{ 'enlarged': isImageEnlarged && currentIndex === i }">
                                </div>
                            </div>
                            <font-awesome-icon icon="fa-solid fa-arrow-right" class="fa-solid" @click="goToNext"
                                @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay" />
                        </div>

                        <div class="student-text-container">
                            <div class="d-flex justify-content-center align-items-center flex-column">
                                <strong class="text-center title">{{ students[currentIndex].title }}</strong>
                                <div class="star-rating">
                                    <font-awesome-icon v-for="star in Array(5).fill()" icon="fa-solid fa-star" :key="star"/>
                                </div>
                                
                                <p class="text-center student-text">{{ students[currentIndex].text }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>




<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;
.row {
    width: 100%;
    height: 600px;
}

h2 {
    font-size: 40px;
    font-weight: bold;
}

img {
    width: 50px;
    border-radius: 50px;
    margin-bottom: 30px;
}

.fa-arrow-left {
    padding-right: 40px;
    padding-top: 20px;
    font-size: 30px;
    cursor: pointer;
}

.fa-arrow-right {
    padding-left: 10px;
    padding-top: 20px;
    font-size: 30px;
    cursor: pointer;
}

.fa-star {
    color: $giallo;
    margin-top: 10px;
    margin-bottom: 30px;
}

.title {
    font-size: 20px;
    white-space: nowrap;
}

.student-text {
    font-size: 15px;
    font-family: "Open Sans", sans-serif;
    width: 500px;
    height: 400px;
}

.enlarged {
    transition: transform 0.3s ease;
    transform: scale(2);
}

.student-image-container {
    padding-right: 30px;
    padding-left: -30px;
    display: block;
}

</style>