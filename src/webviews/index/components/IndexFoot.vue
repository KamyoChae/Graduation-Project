<template>
  <cube-tab-bar
    v-model="selectedLabelDefault"
    :data="tabs"
    @click="clickHandler"
    @change="changeHandler">
  </cube-tab-bar>

</template>

<script>
export default {
data () {
    return {
      selectedLabelDefault: 'Vip',
      tabs: [{
        label: 'Home',
        icon: 'cubeic-home'
      }, {
        label: 'Like',
        icon: 'cubeic-like'
      }, {
        label: 'Vip',
        icon: 'cubeic-vip'
      }, {
        label: 'Me',
        icon: 'cubeic-person'
      }]
    }
  },
  methods: {
    clickHandler (label) {
      // if you clicked home tab, then print 'Home'
      console.log(label)
    },
    changeHandler (label) {
      // if you clicked different tab, this methods can be emitted
    }
  }
}
</script>

<style lang='stylus' scoped>
.wrapper
    position fixed
    bottom 0
    width 100%
    height 7vh
    background #fff
    border-top 1px solid #eee
    .foot
        width inherit
        height inherit
        display flex  
        justify-content space-around
        align-items center
        span   
            background red  
</style>