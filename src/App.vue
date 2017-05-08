<template>
  <div id="app">
    <div id="navigation">
      <el-menu default-active="/attendance" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true" theme="light">
        <div id="logo"><img id="logo" src="./assets/icon/statistic.png"></div>
        <el-menu-item index="/attendance">考勤统计</el-menu-item>
        <el-menu-item index="/car">用车统计</el-menu-item>
      </el-menu>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
    data() {
      return {
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
html,
body{
    margin: 0; padding: 0;
    font-size: 100%;
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    width: 100%; height: 100%;
}
#app{
  width: 100%; height: 100%;
}

#logo{
  display: inline-block;
  height: 60px; width: 60px;
  position: relative;
  float: left;

}
#logo img{
  border-radius: 50%;
  width: 2.5em; height: 2.5em;
  margin: calc( 30px - 2.5em / 2 ) 0 0 calc( 30px - 2.5em / 2 );
}
</style>
