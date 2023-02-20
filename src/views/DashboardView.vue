<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import Sidebar from '../components/Sidebar.vue';
import Navbar from '../components/Navbar.vue';
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <navbar class="mb-4"></navbar>
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex align-items-center justify-content-between">
          <h2 class="text-dark">Users</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
                <router-link to="/"></router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Users</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </main>
</template>
