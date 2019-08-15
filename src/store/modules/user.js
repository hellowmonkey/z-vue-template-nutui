export default {
    namespaced: true,
    state: {

    },
    mutations: {

    },
    actions: {
        getTest () {
            this.$ajax.get('aa').catch(e => {
                this.$toast.fail('aaaa')
            })
        }
    }
}
