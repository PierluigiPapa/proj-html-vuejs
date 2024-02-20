<script>
export default {
    name: 'AppBook',
}
</script>

<template>
    <section id="adv">
        <div class="container-fluid">
            <div class="row">
                <div class="col-6 p-0 d-flex text-center flex-column">
                    <h2>Get My Exclusive Investing Book <br> just for $19.50</h2>
                    <p>Vestibulum imentum eu urna vel cursus. Aenean <br> vehicula quam quam, vitae pellentesque urna <br> elementum cursus.
                    </p>
                    <img class="partner" src="../../assets/images/amazon.png" alt="">
                </div>
                <div class="col-5 d-flex justify-content-start align-items-end p-0">
                    <img class="book" src="../../assets/images/book.png" alt="">
                </div>
                <div class="col-1 pe-0">
                    <div class="box d-flex flex-column text-center">
                        <font-awesome-icon icon="fa-solid fa-display" class="fa-solid"/>
                        <font-awesome-icon icon="fa-solid fa-crosshairs" class="fa-solid"/>
                        <font-awesome-icon icon="fa-solid fa-wrench" class="fa-solid"/>
                        <font-awesome-icon icon="fa-solid fa-cart-shopping" class="fa-solid"/>
                        <font-awesome-icon icon="fa-solid fa-mobile-screen-button" class="fa-solid"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
#adv {
    background-image: url("../../assets/images/slider_1-1917x607-1914x606.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}

.row {
    height: 600px;
}

.book {
    height: 500px;
}

.partner {
    max-width: 230px;
    margin-top: 30px;
    margin-left: 355px;
    cursor: pointer;
}

h2 {
    color: #fcb900;
    font-size: 40px;
    padding-top: 130px;
    padding-left: 150px;
    padding-right: 60px;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
}

p {
    color: white;
    font-size: 25px;
    padding-left: 150px;
    padding-right: 60px;
    font-style: italic;
    font-family: "Open Sans", sans-serif;
}

.box {
    background-color: white;
    width: 60px;
    height: 250px;
    margin-top: 150px;
    margin-left: 90px;
}

.fa-solid {
    font-size: 25px;
    margin: 12px auto;
    cursor: pointer;
    transition: color 0.5s;
}

// .fa-solid:hover {
//     color: #fcb900;
// }
</style>