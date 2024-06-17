<template>
  <div id="user">
    <h1>All Users</h1>
    <ul>
      <li v-for="(user,index ) in userList" :key="index">
        <p><strong>ID:</strong> {{ user.id }}</p>
        <p><strong>Name:</strong> {{ user.name }}</p>
        <p><strong>Age:</strong> {{ user.age }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue';


const userList = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8081/user');
    userList.value = response.data
  } catch (error) {
    console.error('Error fetching registered users:', error);
  }
});
</script>

<style scoped>
#user {
  font-family: Arial, sans-serif;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd;
}

li p {
  margin: 0;
}
</style>
