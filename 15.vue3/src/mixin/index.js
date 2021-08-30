const baseMixin = {
  data() {
    return {
      name: 'MixinName',
      id: 'MixinId',
      phone: {
        iphone: 1,
        huawei: 2,
      }
    }
  },
  methods: {
    success() {
      console.log('Mixin-succss')
    },
    error() {
      console.error('Mixin-error')
    },
  },
}

export default baseMixin
