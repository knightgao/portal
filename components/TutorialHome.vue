<template>
  <div>
    <nav>
      <a v-for="item in linkList" :key="item.id" :href="item.href">
        {{ item.name }}
      </a>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// const title = ref('秋浦の能量站')

const linkList = ref([
  {
    id: '1',
    name: 'home',
    href: 'https://devgaoy.cn'
  }
]);
</script>
