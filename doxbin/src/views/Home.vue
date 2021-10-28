<template>
  <div> 
    <center id="object">
    <h3> Search for a dox </h3>
    <div class="card">
      <input class="input borderless" style="margin-right: 10px;" type="text" placeholder="Search for..." v-model="this.search"/>
    </div>
  </center>
    <DoxList :list="this.posts"/>
  </div>
</template>

<script>
import DoxList from '@/components/DoxList.vue'

export default {
  name: 'Home',
  components: {
    DoxList
  },
  data() {
    return {
      posts: [],
      search: ""
    }
  },
  watch: {
    search: async function() {
      return await this.searchPosts();
    }
  },
  async mounted() {
    await this.getPosts();
  },
  computed: {
    isValid() {
      return this.search.length >= 1;
    }
  },
  methods: {
      async getPosts() {
        const response = await fetch(`http://localhost:4000/api/v1/posts?limit=100`, {
            headers: {
            'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        if(result.status == "success")
        {
          this.posts = result.posts;
        }
      },

      async searchPosts() {
        const response = await fetch(`http://localhost:4000/api/v1/posts?search=${this.search}&limit=100`, {
            headers: {
            'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        if(result.status == "success")
        {
          this.posts = result.posts;
        }
      }
  },
}
</script>

<style scoped>
.card {
  padding: 20px;
  width: 300px;
  height: 70px;
  border-radius: 8px;
  -webkit-box-shadow: -1px 3px 49px -5px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 3px 49px -5px rgba(0,0,0,0.75);
  box-shadow: -1px 3px 49px -5px rgba(0,0,0,0.75);
  display: inline;
}

#object {
  margin-bottom: 50px;
}

.borderless {
  border: 0;
}

</style>