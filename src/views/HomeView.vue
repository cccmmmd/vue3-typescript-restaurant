<script setup lang="ts">
import { ref } from 'vue'
import type {recommendstatus} from '../types'
import {recommendstatusList} from '../constants'


// enum restaurantStatusEnum {
//   'Want to try' = 'Want to try' , 
//   'Recommended' = 'Recommended', 
//   "Don't recommend" = "Don't recommend", 
//   'Must try' = 'Must try'}
// type restaurantStatus = keyof typeof restaurantStatusEnum

interface Restaurant {
  name?: string
  type?: string
  address?: string
  phone?: string
  status?: recommendstatus
}

// type restaurantStatus = 'Want to try' | 'Recommended' | "Don't recommend" | 'Must try'

const restaurantList = ref<Restaurant[]>([])

const restobj = ref<Restaurant>({})

const addRestaurant = () => {
  restaurantList.value.push({ ...restobj.value })
  Object.assign(restobj.value, {
    name: '',
    type: '',
    address: '',
    phone: '',
    status: ''
  })
}
</script>

<template>
  <main>
    <div class="add-restaurant-form">
      <h2>Add Restaurant</h2>
      <form @submit.prevent="addRestaurant">
        <div class="form-group">
          <label for="restaurantName">Restaurant Name:</label>
          <input type="text" id="restaurantName" v-model="restobj.name" required />
        </div>

        <div class="form-group">
          <label for="cuisineType">Cuisine Type:</label>
          <input type="text" id="cuisineType" v-model="restobj.type" required />
        </div>

        <div class="form-group">
          <label for="address">Address:</label>
          <textarea id="address" v-model="restobj.address" rows="3" required></textarea>
        </div>
        <div class="form-group">
          <label for="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" v-model="restobj.phone" required />
        </div>
        <div class="form-group">
          <label for="status">Restaurant Status</label>
          <select name="staus" id="status" v-model="restobj.status">
            <option v-for="s in recommendstatusList" :key="s" :value="s">{{ s }}</option>
          </select>
          
        </div>
        <button type="submit">Add Restaurant</button>
      </form>
    </div>
    <div>
      <ul>
        <li v-for="re in restaurantList" :key="re.name">
          {{ re.name }} - {{ re.type }} - {{ re.address }} - {{ re.phone }} - {{ re.status }}
        </li>
      </ul>
    </div>
  </main>
</template>
