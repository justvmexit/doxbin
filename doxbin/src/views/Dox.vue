<template>
    <center>
        <h1>{{ this.dox.title }}</h1>
        <div class="container">
            <textarea class="input" v-model="this.dox.content" readonly/>
        </div>
    </center>
</template>

<script>
export default {
    name: 'Dox',
    methods: {
        async getDox() {
            const response = await fetch(`http://localhost:4000/api/v1/posts/${this.$route.params.id}`, {
                headers: {
                'Content-Type': 'application/json'
                }
            });
            const result = await response.json();
            if(result.status == "success")
            {
                this.dox = result.post;
            }
        }
    },
    async mounted() {
        await this.getDox();

        setInterval(async function () {
            await this.getDox();
        }.bind(this), 5000); 
    },
    data() {
        return {
            dox: {}
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