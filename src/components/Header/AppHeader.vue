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
    position: relative; // Aggiungi questa riga per posizionare il pseudoelemento ::after rispetto all'elemento <a>
}

/* Aggiungi una freccia sottolineata all'hover */
ul li a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px; // Spessore della linea
    background-color: #fcb900; // Colore della linea
    transition: width 0.3s ease; // Animazione della larghezza
}

ul li a:hover::after {
    width: 100%; // Larghezza della linea all'hover
}


.fa-icon {
    display: inline-block;
    vertical-align: middle; 
    margin-right: 10px; 
}

</style>