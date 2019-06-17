<template>
  <div>
    <img src="@/assets/login.jpg">
    <router-link to='/'>登录</router-link>
  </div>
</template>

<script>
export default {
  // name: 'home',
  // data () {
   
  // },
  // components: {
  // },
  // beforeCreate () {
  //   console.log('beforeCreate')
  // },
  // mounted () {
  // },
  // created () {
  //   console.log('created')
  // },
  // methods: {
  // }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
div{
  img {
    width: 100%;
    height: 965px;
  }
  a {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -100px;
    margin-top: -66px;
    font-size:100px;
    color: red;
    cursor: pointer;
    text-decoration: none;
  }
}
</style>
