<template>
    <q-page class="q-pa-md flex flex-center">
      <q-card class="weather-widget q-ma-md">
        <q-card-section>
          <div class="text-h6 text-bold no-wrap">Current Weather In {{ city }}</div>
        </q-card-section>
        <q-card-section>
          <q-input 
            filled
            v-model="city" 
            @keyup.enter="fetchWeather" 
            placeholder="Masukkan nama kota"
            class="q-mb-md"
          />
          <q-btn 
            label="Cari" 
            color="primary" 
            @click="fetchWeather" 
            class="full-width"
          />
        </q-card-section>
        <q-card-section v-if="weather" class="text-center">
          <div>
            <p>Kota: {{ weather.name }}</p>
            <p>Suhu: {{ (weather.main.temp - 273.15).toFixed(2) }}°C</p>
            <p>Deskripsi: {{ weather.weather[0].description }}</p>
          </div>
        </q-card-section>
        <q-card-section v-else class="text-center">
          <p>Memuat...</p>
        </q-card-section>
      </q-card>
    </q-page>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'WeatherWidget',
    data() {
      return {
        city: '',
        weather: null,
        apiKey: '55dbaaf434af235eda569e7ce319b5f1'
      };
    },
    methods: {
      fetchWeather() {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`;
        axios.get(url)
          .then(response => {
            this.weather = response.data;
          })
          .catch(error => {
            console.error("Error fetching weather data:", error);
          });
      }
    },
    mounted() {
      this.fetchWeather();
    }
  };
  </script>
  
  <style scoped>
  .weather-widget {
    max-width: 300px;
  }
  
  .no-wrap {
    white-space: nowrap;
  }
  </style>
  