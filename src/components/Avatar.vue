<script setup>
import { defineProps } from 'vue';
const props = defineProps(['imageUrl'])
</script>
<template>
    <div class="avatar" :style="{ backgroundImage: `url(${props.imageUrl})` }">
        
    </div>
</template>
<style lang="scss">
    .avatar{
        border-radius: 50%;
        width: 40px;
        height: 40px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    
</style>