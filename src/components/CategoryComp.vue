<template>
    <div>
        <h1>
            {{ msg }}
        </h1>
        <p>This is description of Category page</p>

        <br/><button v-on:click="createCategory">Create Category</button><br/>
        <br/><button v-on:click="updateCategory">Update Category</button><br/>
        <br/><button v-on:click="getCategoryById">Get Category By Id</button><br/>
        <br/><button v-on:click="getCategoryList">Get Category List</button><br/>
        <br/><button v-on:click="deleteCategory">Delete Category</button>

    </div>
</template>

<script>

import axios from "axios";

export default {
    name: 'CategoryComp',
    props: {
        msg: String
    },

    data() {
        return {
            text: "apple"
        }
    }, methods: {

        createCategory() {

            axios.post('http://127.0.0.1:8000/api/category', { name: 'Tom', age: 38 }).then(response => {
                console.log(response.data);
            }).catch(error => {
                console.error(error);
            });
        }, 
        updateCategory() {

            axios.patch('http://127.0.0.1:8000/api/category/1', { name: 'Bob', age: 22 }).then(response => {
                console.log(response.data);
            }).catch(error => {
                console.error(error);
            });
        }, 
        getCategoryById() {

            axios.get('http://127.0.0.1:8000/api/category/1').then(response => {
                console.log(response.data);
            }).catch(error => {
                console.error(error);
            });
        }, 
        getCategoryList() {

            axios.get('http://127.0.0.1:8000/api/category/list').then(response => {
                console.log(response.data);
            }).catch(error => {
                console.error(error);
            });
        }, 
        deleteCategory() {

            axios.delete('http://127.0.0.1:8000/api/category/1').then(response => {
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