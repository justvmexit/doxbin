<template>
  <center id="object">
    <h3> Search for a dox </h3>
    <div class="card">
      <input class="input borderless" style="margin-right: 10px;" type="text" placeholder="Search for..." v-model="this.search"/>
      <button v-if="isValid" @click="redirect" class="btn success borderless">Search</button>
      <button v-else class="btn danger borderless">Search</button>
    </div>
  </center>
</template>

<script>
export default {
  name: 'SearchBox',
  data() {
    return {
      search: ""
    }
  },
  computed: {
    isValid() {
      return this.search.length >= 1;
    }
  },
  methods: {
    redirect() {
      this.$router.push({
        path: 'search',
        query: { q: this.search }
      });
    }
  }
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
