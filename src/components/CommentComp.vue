<template>
    <div>
        <h1>
            {{ msg }}
        </h1>
        <p>This is description of Comment page</p>

        <br/><button v-on:click="createComment">Create Comment</button><br/>
        <br/><button v-on:click="updateComment">Update Comment</button><br/>
        <br/><button v-on:click="getCommentById">Get Comment By Id</button><br/>
        <br/><button v-on:click="getCommentList">Get Comment List</button><br/>
        <br/><button v-on:click="deleteComment">Delete Comment</button>

    </div>
</template>

<script>

import axios from "axios";

export default {
    name: 'CommentComp',
    props: {
        msg: String
    },

    data() {
        return {
            text: "apple"
        }
    }, methods: {

        createComment() {

            axios.post('http://127.0.0.1:8000/api/comment', { name: 'Tom', age: 38 }).then(response => {
                console.log(response.data);
            }).catch(error => {
                console.error(error);
            });
        }, 
        updateComment() {

            axios.patch('http://127.0.0.1:8000/api/comment/1', { name: 'Bob', age: 22 }).then(response => {
                console.log(response.data);
            }).catch(error => {
                console.error(error);
            });
        }, 
        getCommentById() {

            axios.get('http://127.0.0.1:8000/api/comment/1').then(response => {
                console.log(response.data);
            }).catch(error => {
                console.error(error);
            });
        }, 
        getCommentList() {

            axios.get('http://127.0.0.1:8000/api/comment/list').then(response => {
                console.log(response.data);
            }).catch(error => {
                console.error(error);
            });
        }, 
        deleteComment() {

            axios.delete('http://127.0.0.1:8000/api/comment/1').then(response => {
                console.log(response.data);
            }).catch(error => {
                console.error(error);
            });
        }
    }
}
</script>

<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>