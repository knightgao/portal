<template>
    <div>
        <nav flex>
            <NavItem  v-for="item in dataList" :key="item.id" :item="item"></NavItem>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue';
import type { NavItem } from '~~/composables/type';

const dataList: Ref<Array<NavItem>> = ref([
    {
        id: "1",
        name: "秋浦",
        href: "https://devgaoy.cn",
        img: ""
    },
    {
        id: "2",
        name: "秋浦",
        href: "https://devgaoy.cn",
        img: ""
    },
    {
        id: "3",
        name: "秋浦",
        href: "https://devgaoy.cn",
        img: ""
    },
    {
        id: "4",
        name: "秋浦",
        href: "https://devgaoy.cn",
        img: ""
    }
])
</script>