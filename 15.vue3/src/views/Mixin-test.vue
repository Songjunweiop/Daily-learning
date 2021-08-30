<template>
  <div class="home"></div>
</template>

<script>
import BaseMixin from '../mixin/index.js'
export default {
  name: 'Mixin-test',
  mixins: [BaseMixin],
  data(){
    return {
      name: 'myName',
      phone: {
        iphone: 1,
      }
    }
  },
  // data: {
  //   name: 'myName',
  // },
  mounted() {
    console.log(this.$data)
  },
}
</script>
