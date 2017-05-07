<template>
    <li v-bind:class="{ 'is-do': item.is_do }" @click="DONE_TASK(item)">{{ item.title }}</li>
</template>

<script>
import { mapActions } from 'vuex'
import * as types from './store/mutation-types'

export default {
    props: ['item'],
    methods: {
        ...mapActions([
            types.DONE_TASK
        ])
    }
}
</script>

<style lang="scss" scoped>
    li {
        cursor: pointer;
    }
    li.is-do {
        text-decoration: line-through;
    }
</style>
