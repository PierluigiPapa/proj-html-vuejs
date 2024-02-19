<script>
import AppJumbo from './AppJumbo.vue';
import AppFounder from './AppFounder.vue';
import AppCourses from './AppCourses.vue';
export default {
    components: {
        AppJumbo,
        AppFounder,
        AppCourses,
    }
}
</script>

<template>
   <main>
    <AppJumbo></AppJumbo>

    <AppFounder></AppFounder>

    <AppCourses></AppCourses>

   </main>
</template>

<style lang="scss" scoped>
</style>