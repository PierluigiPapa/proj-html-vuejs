<script>
export default {
    name: 'AppHeader',
    data () {
        return {
            navOptions: [
                {
                    text: 'Courses',
                    url: '#',
                    current: false,
                },

                {
                    text: 'Courses Format',
                    url: '#',
                    current: false,
                },

                {
                    text: 'Add Course',
                    url: '#',
                    current: false,
                },

                {
                    text: 'Pages',
                    url: '#',
                    current: false,
                },

                {
                    text: 'Demos',
                    url: '#',
                    current: true,
                }
            ]
        }
    }
}
</script>

<template>
    <header>
        <nav class="container">
            <div class="row">
                <div class="col-6">
                    <img src="../../assets/images/MasterStudy-1.svg" alt="">
                </div>

                <div class="col-6 start">
                    <ul class="d-flex m-0 p-0 pe-5">
                        <span class="new">NEW</span>
                        <li class="list-unstyled mx-2" v-for="option in navOptions" :key="option.text"><a
                                :class="{ 'active': option.current }" :url="option.url">{{
                                    option.text }}</a></li>        
                    </ul>
                    <font-awesome-icon icon="fa-brands fa-linkedin" class="fa-icon fa-xl" />
                    <font-awesome-icon icon="fa-brands fa-instagram" class="fa-icon fa-xl" />
                    <font-awesome-icon icon="fa-brands fa-facebook" class="fa-icon fa-xl" />
                    <font-awesome-icon icon="fa-brands fa-x-twitter" class="fa-icon fa-xl" />
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;

.col-6 {
    padding-right: 190px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    cursor: pointer;
}

.start {
    justify-content: start;
}

ul {
    position: relative;
}

.new {
    position: absolute;
    bottom: 80%;
    right: 36%;
    font-size: 9px;
    padding: 1px 5px;
    background-color: $rosso;
    color: $bianco;
    border-radius: 3px;
    font-weight: bold;
}

ul li a {
    text-decoration: none;
    color: $grigioscuro;
    padding-bottom: 10px;
    font-weight: bold;
    cursor: pointer;
    position: relative; 
    white-space: nowrap;
}

ul li a::before {
    content: '';
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translateX(-50%) scaleY(0);
    transform-origin: bottom;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid $giallo;
    z-index: 1;
    transition: transform 0.3s ease;
}

ul li a:hover::before {
    transform: translateX(-50%) scaleY(1);
}

ul li a::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: $giallo;
    transition: width 0.3s ease;
}

ul li a:hover::after {
    width: 110%;
}

.fa-icon {
    display: inline-block;
    vertical-align: middle; 
    margin-right: 10px; 
    cursor: pointer;
    transition: color 0.3s ease;
}

.fa-icon:hover {
    color: $giallo;
}

</style>