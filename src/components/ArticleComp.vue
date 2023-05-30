<template>
    <div>
        <h1>
            {{ msg }}
        </h1>
        <p>This is description of Article page</p><br/>

        <br/><button v-on:click="createArticle">Create Article</button><br/>
        <br/><button v-on:click="updateArticle">Update Article</button><br/>
        <br/><button v-on:click="getArticleById">Get Article By Id</button><br/>
        <br/><button v-on:click="getArticleList">Get Article List</button><br/>
        <br/><button v-on:click="deleteArticle">Delete Article</button>

    </div>
</template>

<script>

import axios from "axios";

export default {
    name: 'ArticleComp',
    props: {
        msg: String
    },

    data() {
        return {
            text: "apple"
        }
    }, methods: {

        createArticle() {

            axios.post('http://127.0.0.1:8000/api/article', { name: 'Tom', age: 38 }).then(response => {
                console.log(response.data);
            }).catch(error => {
                console.error(error);
            });
        }, 
        updateArticle() {

            axios.patch('http://127.0.0.1:8000/api/article/1', { name: 'Bob', age: 22 }).then(response => {
                console.log(response.data);
            }).catch(error => {
                console.error(error);
            });
        }, 
        getArticleById() {

            axios.get('http://127.0.0.1:8000/api/article/1').then(response => {
                console.log(response.data);
            }).catch(error => {
                console.error(error);
            });
        }, 
        getArticleList() {

            axios.get('http://127.0.0.1:8000/api/article/list').then(response => {
                console.log(response.data);
            }).catch(error => {
                console.error(error);
            });
        }, 
        deleteArticle() {

            axios.delete('http://127.0.0.1:8000/api/article/1').then(response => {
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