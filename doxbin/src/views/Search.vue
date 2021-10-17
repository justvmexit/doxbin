<template>
  <div> 
    <SearchBox/>
    <DoxList :list="this.search"/>
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue'
import DoxList from '@/components/DoxList.vue'

export default {
  name: 'Search',
  components: {
    SearchBox,
    DoxList
  },
  data() {
    return {
      search: []
    }
  },
  async mounted() {
    await this.getPosts();

    setInterval(async function () {
        await this.getPosts();
    }.bind(this), 5000); 
  },
  watch: {
    async $route() {
      await this.getPosts();
    }
  },
  methods: {
      async getPosts() {
        const response = await fetch(`http://localhost:4000/api/v1/posts?search=${this.$route.query.q}&limit=100`, {
            headers: {
            'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        if(result.status == "success")
        {
            this.search = result.posts;
        }
        else
        {
            this.$toast.error(result.message)
        }
      }
  },
}
</script>
