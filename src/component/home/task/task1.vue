<template>
  <div id="task1">
    <h1>This is Task1~</h1>
    <p>{{ msg }}</p>
    <p>{{ $route.name }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Task1'
    }
  }
}
</script>

<style>
#task1{
  margin: 0 auto;
  text-align: center;
}
</style>
