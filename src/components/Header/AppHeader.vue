<script>
export default {
    name: 'AppHeader',
    props: {
        navOptions: Array
    },
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
                    text: 'Add Courses',
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
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
.col-6 {
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
    right: 35%;
    font-size: 9px;
    padding: 1px 5px;
    background-color: #dc1245;
    color: white;
    border-radius: 3px;
    font-weight: bold;
}

ul li a {
    text-decoration: none;
    color: #333333;
    padding-bottom: 10px;
    font-weight: bold;
    cursor: pointer;
}

ul li a:hover,
.active {
    border-bottom: 2px solid #fcb900;
}

i:hover {
    color: #fcb900;
    cursor: pointer;
}

.fa-linkedin {
    margin: 0 5px;
    color: #333333;
}
</style>