<template>
    <div>
        <img alt="Vue logo" src="../assets/logo.png">
        <CommentComp msg="This is an Comment page"/>
    </div>
</template>

<script>
// @ is an alias to /src
import CommentComp from '@/components/CommentComp.vue'

export default {
    name: 'CommentView',
    components: {
        CommentComp
    }
}
</script>