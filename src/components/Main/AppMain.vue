<script>
import AppJumbo from './AppJumbo.vue';
import AppFounder from './AppFounder.vue';
import AppCourses from './AppCourses.vue';
import AppBook from './AppBook.vue';
import AppOptions from './AppOptions.vue';

export default {
    components: {
        AppJumbo,
        AppFounder,
        AppCourses,
        AppBook,
        AppOptions,
    }
}
</script>

<template>
   
    <AppJumbo></AppJumbo>

    <AppFounder></AppFounder>

    <AppCourses></AppCourses>

    <AppBook></AppBook>

    <AppOptions></AppOptions>


</template>

<style lang="scss" scoped>
</style>