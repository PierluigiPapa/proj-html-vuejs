<script>
export default {
    name: 'AppCourses',
    data () {
        return {
            courses: [
                {
                    image: "../src/assets/images/photo-1496307042754-b4aa456c4a2d-370x200.jpeg",
                    title: "How to be a DJ? Make Eletronic Music",
                    category: "Eletronic",
                    price: "$59",
                    level: "Advance",
                    lectures: "8 Lectures",
                    duration: "6 hours"
                },

                {
                    image: "../src/assets/images/12345-1-370x200.png",
                    title: "Nvidia and UE4 Techonolgies Practice",
                    category: "Nvidia",
                    price: "$76",
                    level: "Advance",
                    lectures: "8 Lectures",
                    duration: "6 hours"
                },

                {
                    image: "../src/assets/images/photo-1491897554428-130a60dd4757-370x200.jpeg",
                    title: "Fashion Photography from professional",
                    category: "Fashion",
                    price: "€76",
                    level: "Advance",
                    lectures: "6 Lectures",
                    duration: "6 hours"
                },

                {
                    image: "../src/assets/images/photo-1416339134316-0e91dc9ded92-370x200.jpeg",
                    title: "Design Instruments for Communication",
                    category: "Communication",
                    price: "€50",
                    level: "Intermediate",
                    lectures: "6 Lectures",
                    duration: "6 hours"
                },

                {
                    image: "../src/assets/images/cathryn-lavery-67852-unsplash-370x200.jpg",
                    title: "Make your Concept Right and Beautiful",
                    category: "Art",
                    price: "€35",
                    level: "Intermediate",
                    lectures: "6 Lectures",
                    duration: "6 hours"
                },

                {
                    image: "../src/assets/images/photo-1475452779376-caebfb988090-370x200.jpeg",
                    title: "Nvidia and UE4 Techonolgies Practice",
                    category: "Bycicling",
                    price: "€90",
                    level: "Beginner",
                    lectures: "6 Lectures",
                    duration: "6 hours"
                },
            ]
        }
    
    }
}
</script>

<template>
    <section id="card-main">
      <h2 class="text-center py-5">New Courses</h2>
      <div class="container">
        <div class="row height">
          <div v-for="(course, index) in courses" :key="index" class="col-4 d-flex justify-content-center align-items-start p-0">
            <div class="card" style="width: 480px;">
              <img :src="course.image" class="card-img-top banner-image" alt="">
              <p class="banner">SPECIAL</p>
              <h4 class="banner-price">{{ course.price }}</h4>
              <div class="card-body">
                <h5 class="card-title text-center">{{ course.title }}</h5>
                <p class="card-text text-center course">{{ course.category }}</p>
                <div class="separator"></div>
                <div class="row sub-height">
                  <div class="col-4 d-flex align-items-center">
                    <font-awesome-icon icon="fa-solid fa-signal" class="fa-solid me-1" />
                    <p class="m-0 sub-text">{{ course.level }}</p>
                  </div>
                  <div class="col-4 d-flex align-items-center">
                    <font-awesome-icon icon="fa solid fa-list" class="fa-solid me-1" />
                    <p class="m-0 sub-text">{{ course.lectures }}</p>
                  </div>
                  <div class="col-4 d-flex align-items-center">
                    <font-awesome-icon icon="fa-regular fa-clock" class="fa-solid me-1" />
                    <p class="m-0 sub-text">{{ course.duration }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="text-center loading">LOAD MORE</p>
      </div>
    </section>
</template>



<style lang="scss" scoped>
#card-main {
    height: 1050px;
    background-color: #edf2f5;
}

.card {
    position: relative;
    margin-top: 20px;
    margin-left: 20px;
    cursor: pointer;
}

.banner {
    position: absolute;
    color: white;
    right: 2%;
    top: 2%;
    padding: 2px 6px;
    background-color: #fcb900;
    border-radius: 3px;
    font-size: 0.6rem;
}

.banner-price {
    position: absolute;
    top: 20%;
    left: 43%;
    color: white;
    display: none;
}


.card:hover .banner-price {
    display: block;
}

.card .banner-image {
    transition: filter 0.6s, opacity 0.6s;
}

.card:hover .banner-image {
    filter: brightness(0.6); 
}

.height {
    height: 750px;
}

.sub-height {
    height: 30px;
}

h2 {
    font-size: 40px;
    font-weight: bold;
}

.course {
    color: #aaaaaa;
}

.separator {
    height: 1px;
    border: 1px solid #edf2f5;
    margin-bottom: 10px;
}

.sub-text {
    font-size: 13px;
    padding-left: 3px;
    padding-right: 20px;
    white-space: nowrap;
    text-align: center;
}

.fa-solid {
    color: #fcb900;
}

.loading {
    padding: 10px 10px;
    background-color: #fcb900;
    border-radius: 50px;
    margin: 10px 570px;
    margin-top: 70px;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.5s;
}

.col-4 {
    padding-left: 30px;
}

.loading:hover {
    color: white;
}
</style>