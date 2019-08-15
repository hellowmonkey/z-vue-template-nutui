module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `@import "./src/assets/style/var.scss"; @import "@nutui/nutui/dist/styles/index.scss";`
            }
        }
    }
}
