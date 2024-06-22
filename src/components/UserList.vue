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
    <div id="search">
      <h2>Search User by ID</h2>
      <input v-model="searchId" type="text" placeholder="Enter User ID" />
      <button @click="fetchUserById">Search</button>
    </div>
    <div v-if="selectedUser" id="user-details">
      <h2>User Details</h2>
      <p><strong>ID:</strong> {{ selectedUser.id }}</p>
      <p><strong>Name:</strong> {{ selectedUser.name }}</p>
      <p><strong>Age:</strong> {{ selectedUser.age }}</p>
      <p><strong>Email:</strong> {{ selectedUser.email }}</p>
    </div>
  </div>
</template>

 <!-- Composition Api Scripts -->
<script setup>
import { ref } from 'vue';
import userData from "../services/api-data-service"
const userList = ref([]);
const selectedUser = ref(null);
const searchId = ref('');
const fetchUsers =async () => {
  try {
    const response = await userData.getUser();
    userList.value = response.data
  } catch (error) {
    console.error('Error fetching registered users:', error);
  }
};
const fetchUserById = async () => {
  try {
    if (searchId.value) {
      const response = await userData.getUserById(searchId.value);
      selectedUser.value = response.data;
    } else {
      console.error('Please enter a valid user ID.');
    }
  } catch (error) {
    console.error(`Error fetching user with ID ${searchId.value}:`, error);
  }
};
fetchUsers();
</script>

<style scoped>
#user {
  font-family: Arial, sans-serif;
  background-color: #64c1ad;
  padding: 20px;
  border-radius: 8px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 15px;
  padding: 10px;
  border-bottom: 1px solid #0c0c0c;
}

li p {
  margin: 0;
}

#search {
  margin-top: 20px;
}

#search input {
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

#search button {
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

#search button:hover {
  background-color: #0056b3;
}

#user-details {
  margin-top: 20px;
}
</style>