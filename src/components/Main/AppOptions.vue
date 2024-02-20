<script>
export default {
    name: 'AppOptions',
    data() {
        return {
            courses: [
                {
                    title: 'Entrepreneurship',
                    description: 'Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra Pellentesque nec posuere ligula, eu congue leo. Integer vulputate tempor arcu. Vestibulum vulputate.',
                    icon: 'fa-solid fa-briefcase'
                },
                {
                    title: 'Accelerated learning',
                    description: 'Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra Pellentesque nec posuere ligula, eu congue leo. Integer vulputate tempor arcu. Vestibulum vulputate.',
                    icon: 'fa-solid fa-rocket'
                },
                {
                    title: 'Productivity',
                    description: 'Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra Pellentesque nec posuere ligula, eu congue leo. Integer vulputate tempor arcu. Vestibulum vulputate.',
                    icon: 'fa-solid fa-thumbs-up'
                },
                {
                    title: 'Life Coaching',
                    description: 'Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra Pellentesque nec posuere ligula, eu congue leo. Integer vulputate tempor arcu. Vestibulum vulputate.',
                    icon: 'fa-solid fa-gear'
                }
            ]
        };
    }
}
</script>

<template>
    <section>
     <h2 class="text-center py-5">Why my courses?</h2>
     <div class="container">
         <div class="row">
             <div v-for="(course, index) in courses" :key="index" class="col-6 p-0 d-flex justify-content-center">
                 <div class="card mb-3" style="max-width: 540px;">
                     <div class="row g-0">
                         <div class="col-md-4 d-flex justify-content-center mt-5">
                             <font-awesome-icon :icon="course.icon" class="fa-solid"/>
                         </div>
                         <div class="col-md-8 d-flex justifu-content-center mt-4">
                             <div class="card-body ps-0">
                                 <h5 class="card-title">{{ course.title }}</h5>
                                 <p class="card-text">{{ course.description }}</p>
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
@use '../../styles/partials/variables.scss' as *;

h2 {
    font-size: 40px;
    font-weight: bold;
}

.row {
    height: 700px;
}

.card {
    height: 240px;
    border-left: 5px solid $giallo;
    border-top: none;
    border-right: none;
    border-bottom: none;
    box-shadow: 1px 2px 31px 0px rgba(0,0,0,0.25);
    border-radius: 0;
    cursor: pointer;
}

.fa-solid {
    font-size: 70px;
    color: $giallo;
}

h5 {
    font-weight: bold;
    font-size: 25px;
    color: $grigioscuro;

}

.card:hover .fa-solid {
    color: $bianco;
}

.card:hover {
    background-color: $giallo;
}

.card-text {
    font-size: 15px;
    font-family: "Open Sans", sans-serif;
    color: $grigioscuro;
}

</style>