<template>
    <div>
        <img alt="Vue logo" src="../assets/logo.png">
        <CategoryComp msg="This is an Category page"/>
    </div>
</template>

<script>
// @ is an alias to /src
import CategoryComp from '@/components/CategoryComp.vue'

export default {
    name: 'CategoryView',
    components: {
        CategoryComp
    }
}
</script>