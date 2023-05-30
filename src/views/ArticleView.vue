<template>
    <div>
        <img alt="Vue logo" src="../assets/logo.png">
        <ArticleComp msg="This is an Article page"/>
    </div>
</template>

<script>
// @ is an alias to /src
import ArticleComp from '@/components/ArticleComp.vue'

export default {
    name: 'ArticleView',
    components: {
        ArticleComp
    }
}
</script>