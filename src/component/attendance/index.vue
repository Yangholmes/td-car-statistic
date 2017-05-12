<template>
  <div id="attendance">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '此功能暂不开放'
    }
  },
  mounted: function(){
    console.log('Attendance page mounted');
  }
}
</script>

<style>
#attendance{
  width: 100%; height: 100%;
}
</style>
