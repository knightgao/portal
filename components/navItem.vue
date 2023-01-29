<script setup lang="ts">

interface Props {
    item?: {
        id: string,
        name: string,
        href: string,
        img: string
    }
}
const props = defineProps<Props>()
const item = computed(() => props.item || {})


</script>

<template>
    <a :href="item.href" target="__blank">
        <div h-full h-100>
            {{ props?.item?.name }}
        </div>
    </a>
</template>