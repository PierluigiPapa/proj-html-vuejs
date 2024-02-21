<script>
export default {
    name: 'AppFooter',
    data () {
        return {
            pagesInfo: ['Blog', 'Courses', 'Home', 'Membership A...', 'Shortcodes', 'Typography'],
            aboutInfo: {
                site: 'Masterstudy is Education WordPress theme featured by Learning.',
                company: 'Management System (LMS) for online education',
                developerCompany: 'Developed by StylemixThemes'
            },
            contactsInfo : {
                place: 'USA, Callifornia 20, First Avenue, Callifornia',
                phone: '+1 212 458 300 32',
                fax: '+1 212 375 24 14',
                email: 'info@masterstudy.com'
            },
            blogInfo: [
                {
                    image: 'photo-1517520287167-4bbf64a00d66-150x150.jpeg',
                    title: 'Our main target is to "Developing Yourself as a Leader"',
                    text: 'August 9, 2018'
                },
                
                {
                    image: 'photo-1490376840453-5f616fbebe5b-150x150.jpeg',
                    title: 'Those Other College Expenses You Are Not Thinking About',
                    text: 'June 3, 2015'
                }
            ]
        }
    }
}
</script>

<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <h3>ABOUT</h3>
                    <div class="about-first">
                        <p>{{ aboutInfo.site }}</p>
                        <p>{{ aboutInfo.company }}</p>
                        <p>{{ aboutInfo.developerCompany }}</p>
                    </div>
                    <div class="d-flex brands">
                        <font-awesome-icon icon="fa-brands fa-facebook" class=" fa-brands fa-lg" />
                        <font-awesome-icon icon="fa-brands fa-x-twitter" class=" fa-brands fa-lg" />
                        <font-awesome-icon icon="fa-brands fa-instagram" class=" fa-brands fa-lg" />
                    </div>
                </div>
                <div class="col-3">
                    <h3>CONTACT</h3>
                    <p class="contacts-first">{{ contactsInfo.place }}</p>
                    <p>Tel: {{ contactsInfo.phone }}</p>
                    <p>Fax: {{ contactsInfo.fax }}</p>
                    <p class="contacts-last">{{ contactsInfo.email }}</p>
                </div>
                <div class="col-3">
                    <h3>PAGES</h3>
                    <ul class="d-flex flex-wrap ps-3">
                        <li v-for="page in pagesInfo"><a href="#">{{ page }}</a></li>
                    </ul>
                </div>
                <div class="col-3">
                    <h3>BLOG</h3>
                    <div v-for="blog in blogInfo" :key="blog.title" class="d-flex">
                        <img :src="`/src/assets/images/${blog.image}`" alt="">
                        <div class="d-flex flex-column right-description">
                            <h4>{{ blog.title }}</h4>
                            <p class="blockquote-footer">{{ blog.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
   
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;


footer {
    background-color: $giallo;
}

.row {
    height: 400px;
}

h3 {
    padding-top: 70px;
    margin-bottom: 30px;
}

p {
    margin-bottom: 0;
    font-family: "Open Sans", sans-serif;
}

.about-first {
    padding-right: 10px;
    font-family: "Open Sans", sans-serif;
}

.fa-brands {
    margin-top: 15px;
    padding-right: 20px;
    transition: color 0.5s;
    cursor: pointer;
}

.fa-brands:hover {
    color: $bianco;
}

.contacts-first {
    margin-bottom: 20px;
    padding-right: 10px;
    font-family: "Open Sans", sans-serif;
}

.contacts-last {
    margin-top: 20px;
    font-family: "Open Sans", sans-serif;
}

ul li {
    flex-basis: calc(100% / 2);
    margin-bottom: 20px;
    transition: color 0.5s;
}

li:hover {
    color: $bianco;
}

a {
    text-decoration: none;
    color: $grigioscuro
}

a:hover {
    color: $bianco;
}

ul li a {
    cursor: pointer;
}

img {
    height: 80px;
    width: 80px;
    margin-bottom: 35px;
}

h4 {
    font-size: 15px;
    margin-bottom: 20px;
    padding-right: 70px;
    transition: color 0.5s;
    cursor: pointer;
}

h4:hover {
    color: $bianco;
}

.right-description {
    margin-left: 10px;
}   
</style>