// template.js
module.exports = {
    vueTemplate: compoenntName => {
        return `
<template>
<div class="${compoenntName}">${compoenntName}</div>
</template>
<script>
export default {
  name: '${compoenntName}',
  data(){
    return{

    }
  },
  methods:{

  },
  mounted(){

  },
  components: {

  }
}
</script>
<style lang="scss" scoped>
.${compoenntName} {
}
</style>
`
},
entryTemplate:
`
import Main from './main.vue'
export default Main
`
}