<template>
  <div id="task2">
    <h1>This is Task2~</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Task2'
    }
  }
}
</script>

<style>
#task2{
  margin: 0 auto;
  text-align: center;
}
</style>
