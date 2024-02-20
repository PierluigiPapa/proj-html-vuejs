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
                    title: 'Paints of the Future',
                    text: "It is no exaggeration to say this MasterStudy experience was transformative-both professionally and personally. This workshop will long remain a high point of my life. Thanks again... I am feeling energized and eager to start teaching my class next week. I can't wait to use all of my new teaching tools. I will absolutely recommend this workshop to other educators!",
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
                      <strong v-show="currentIndex === i" class="text-center title">{{ student.title }}</strong>
                      <div v-show="currentIndex === i" class="star-rating">
                        <font-awesome-icon v-for="star in Array(5).fill()" icon="fa-solid fa-star" :key="star"/>
                      </div>
                      <p class="text-center student-text" v-show="currentIndex === i">{{ student.text }}</p>
                    </div>
                  </figcaption>
                </figure>
                <font-awesome-icon icon="fa-solid fa-arrow-right" class="fa-solid" @click="goToNext" @mouseenter="stopAutoPlay"
                  @mouseleave="startAutoPlay"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>


<style lang="scss" scoped>
.row {
    width: 100%;
    height: 600px;
}

h2 {
    font-size: 40px;
    font-weight: bold;
}

img {
    width: 70px;
    margin-left: 10px;
    margin-right: 20px;
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
    padding-left: 20px;
    padding-top: 20px;
    font-size: 30px;
    cursor: pointer;
}

.fa-star {
    color: #fcb900;
    margin-bottom: 30px;
}

.title {
    font-size: 20px;
    white-space: nowrap;
}

.text {
    margin-right: 60px;
}

.enlarged {
    transition: transform 0.3s ease;
    transform: scale(1.5);
}
</style>