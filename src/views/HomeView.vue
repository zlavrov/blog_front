<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HomeComp msg="This is an Home page"/>
    </div>
</template>

<script>
// @ is an alias to /src
import HomeComp from '@/components/HomeComp.vue'

export default {
    name: 'HomeView',
    components: {
        HomeComp
    }
}
</script>
