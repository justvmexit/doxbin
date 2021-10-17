<template>
  <div> 
    <SearchBox/>
    <DoxList :list="this.posts"/>
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue'
import DoxList from '@/components/DoxList.vue'

export default {
  name: 'Home',
  components: {
    SearchBox,
    DoxList
  },
  data() {
    return {
      posts: []
    }
  },
  async mounted() {
    await this.getPosts();

    setInterval(async function () {
        await this.getPosts();
    }.bind(this), 5000); 
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
      }
  },
}
</script>
