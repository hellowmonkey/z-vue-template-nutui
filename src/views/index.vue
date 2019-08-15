<template>
    <div>
        Hi
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions('user', ['getTest'])
    },
    mounted () {
        // this.getTest()
    }
}
</script>
