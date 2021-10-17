<template>
    <center>
        <h1>Create a new dox!</h1>
        <div class="container">
            <input class="input" v-model="this.title" placeholder="Enter a title for post"/>
            <textarea class="input" v-model="this.content" placeholder="Enter content for post"> </textarea>
            <button @click="postData" v-if="isValid" class="btn success full">Post</button>
            <button v-else class="btn danger full">Post</button>
        </div>
    </center>
</template>

<script>
export default {
    name: 'NewDox',
    methods: {
        async postData() {
            const response = await fetch(`http://localhost:4000/api/v1/posts`, {
                method: 'POST',
                body: JSON.stringify({
                    title: this.title,
                    content: this.content
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const result = await response.json();
            console.log(result)
            if(result.status == "success")
            {
                this.$router.push({ name: 'Dox', params: {id: result.id }});
            }
        }
    },
    computed: {
        isValid() {
            return this.title.length >= 1 && this.title.length <= 255 && this.content.length >= 1 && this.content.length <= 4096;
        }
    },
    data() {
        return {
            title: "",
            content: ""
        }
    }
}
</script>

<style scoped>
 .container {
    padding: 20px;
    width: 560px;
    border-radius: 8px;
    border: 0;
    -webkit-box-shadow: -1px 3px 49px -5px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 3px 49px -5px rgba(0,0,0,0.75);
    box-shadow: -1px 3px 49px -5px rgba(0,0,0,0.75);
  }

  textarea {
    resize: none;
    width: 80%;
    height: 250px;
    border: 0;
  }

  .full {
    width: 80%;
  }

  input {
    margin-bottom: 10px;
    border: 0;
    width: 80%;
    height: auto;
    padding: 10px;
  }
</style>