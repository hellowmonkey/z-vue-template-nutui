<template>
    <div>
        <nut-button>Hi</nut-button>
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
