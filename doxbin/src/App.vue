<template>
  <span>
    <div class="nav_bar">
      <h3> doxbin </h3>
      <div class="nav_items">
        <router-link class="nav_item" to="/"> Home </router-link>
        <router-link class="nav_item" to="/about"> About </router-link>
        <router-link class="nav_item btn" to="/dox"> New dox </router-link>
      </div>
    </div>
    <div class="page">
      <router-view/>
    </div>
  </span>
</template>

<script>
export default {
  name: 'App'
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

body {
  background-color: #fff;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}

.nav_bar { 
  float: left;
  width: 100%;
  padding: 10px;
  padding-top: 2px;
  margin: 0;
  z-index: 999;
  background-color: #fff;
}

.nav_item {
  padding: 20px;
  display: inline;
  text-decoration: none;
  color: #272654;
}

.textbox {
  resize: none;
  height: 20%;
  background-color: #f1f3fd;
  border-radius: 8px;
  padding: 10px;
  color: black;
  font-family: 'Inter', sans-serif;
}

.spacer {
  margin: 20px;
}

.btn {
  background-color: #f1f3fd;
  border-radius: 8px;
  padding: 10px;
  color: black;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
}

.seperator {
  border: 0;
  border-top: 1px solid #dee2e6;
  margin: 5%;
}

table {
  font-weight: lighter;
  width: 100%;
}

.table_outer_r {
  border-left: 1px solid #f1f3fd;
}

.table_outer_l {
  border-right: 1px solid #f1f3fd;
}

th {
  border: 0;
  border-top: 1px solid #f1f3fd;
  border-bottom: 1px solid #f1f3fd;
  padding: 4%;
  margin-left: 2%;
  text-align: left;
  font-weight:normal;
}

td {
  padding: 4%;
  margin-left: 2%;
  text-align: left;
  font-weight:normal;
  border-bottom: 1px solid #f1f3fd;
}

.input {
  background-color: #f1f3fd;
  border-radius: 8px;
  padding: 10px;
  color: black;
  font-family: 'Inter', sans-serif;
}

.primary {
  background-color: #5e5ce4;
  color: white;
}

.success {
  background-color: #10c6a3;
  color: white;
  border: 0;
}

.danger {
  background-color: #d93952;
  color: white;
  border: 0;
}

.success_text {
  color: #10c6a3;
  border: 0;
}

.danger_text {
  color: #d93952;
  border: 0;
}

a {
  color: #5e5ce4;
  text-decoration: none;
}

.nav_items {
  justify-items: right;
  justify-content: right;
  text-align: right;
  margin-right: 5%;
}

.page {
  justify-items: center;
  justify-content: center;
  text-align: center;  
}

p {
  font-size: 16px;
}

</style>

<style scoped>
  h3 {
    margin: 0;
    padding: 0;
  }
</style>