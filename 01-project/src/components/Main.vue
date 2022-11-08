<template lang="">
    <div class="w-full items-center content-center">
        <h2 class="text-center mt-5 text-xl">Movie List</h2>
        <p class="text-center">in KOREA.</p>
        <div class="w-full p-5">
            <Lists/>
        </div>
    </div>
</template>
<script>
import Lists from './Movie/Lists.vue'
export default {
    components: {
        Lists,
    }
}
</script>
<style lang="">
</style>