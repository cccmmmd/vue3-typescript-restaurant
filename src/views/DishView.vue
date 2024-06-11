<script setup lang="ts">
import { ref } from 'vue'
import type {Dish} from '../types'
import {recommendstatusList} from '../constants'




const dishList = ref<Dish[]>([])

const restobj = ref<Dish>({})

const addDish = () => {
  dishList.value.push({ ...restobj.value })
  Object.assign(restobj.value, {
    name: '',
    type: '',
    status: ''
  })
}
</script>

<template>
  <main>
    <div class="add-restaurant-form">
      <h2>Add Dish</h2>
      <form @submit.prevent="addDish">
        <div class="form-group">
          <label for="restaurantName">Restaurant Name:</label>
          <input type="text" id="restaurantName" v-model="restobj.name" required />
        </div>
        <div class="form-group">
          <label for="cuisineType">Cuisine Type:</label>
          <input type="text" id="cuisineType" v-model="restobj.type" required />
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
        <li v-for="dish in dishList" :key="dish.name">
          {{ dish.name }} - {{ dish.type }} - {{ dish.status }}
        </li>
      </ul>
    </div>
  </main>
</template>
