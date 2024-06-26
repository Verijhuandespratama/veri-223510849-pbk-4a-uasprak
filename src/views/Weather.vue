<template>
  <div>
    <WeatherWidget />
  </div>
</template>

<script>
import WeatherWidget from '../components/WeatherWidget.vue';

export default {
  name: 'Weather',
  components: {
    WeatherWidget
  }
};
</script>
