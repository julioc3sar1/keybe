<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import Sidebar from '../components/Sidebar.vue';
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <router-link to="/login">go login</router-link>
    <router-view></router-view>
  </main>
</template>
