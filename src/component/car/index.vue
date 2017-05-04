<template>
  <div id="query">
    <h2>车辆预约单查询统计</h2>

    <div id="key-form">
      <el-form :inline="true" :model="reservation" class="demo-form-inline">
        <el-form-item label="选择车辆">
          <el-select v-model="reservation.car" placeholder="点选车辆">
            <el-option label="任意" value="%"></el-option>
            <el-option v-for="car in cars" :label="car.model" :value="car.carid"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="预约人">
          <el-input v-model="reservation.applicant" placeholder="预约人"></el-input>
        </el-form-item>
        <el-form-item label="司机">
          <el-input v-model="reservation.driver" placeholder="司机"></el-input>
        </el-form-item>
        <el-form-item label="随行人员">
          <el-input v-model="reservation.accompanist" placeholder="随行人员"></el-input>
        </el-form-item>
        <el-tooltip placement="top" effect="light">
          <div slot="content">设置「随意搜」之后，前面的人员筛选条件将会失效</div>
          <el-form-item label="随意搜*">
            <el-input v-model="reservation.fuzzyName" placeholder="输入姓名，搜出相关信息"></el-input>
          </el-form-item>
        </el-tooltip>
        <el-form-item label="选择月份">
          <el-select v-model="reservation.month" placeholder="选一月">
            <el-option label="当月" value="0"></el-option>
            <el-option v-for="(m, index) in month" :label="m" :value="index"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" @click="search">查询</el-button>
        </el-form-item>
        <el-form-item label="">
          <el-button type="warning" @click="exportExcel">导出Excel</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div id="query-table">
      <el-table :data="reservationStatistic" border style="width: 100%"
        v-loading="loading" element-loading-text="玩儿命加载中……"
        :default-sort = "{prop: 'id'}" fit>
        <el-table-column v-for="col in columns"
          :prop="col.prop"
          :label="col.label"
          :sortable="col.sortable"
          :width="col.width">
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      reservation: {
          car: '',
          applicant: '',
          driver: '',
          accompanist: '',
          fuzzyName: '',
          month: ''
      },
      cars: [],
      month: {
        jan: '一月',
        feb: '二月',
        mar: '三月',
        apr: '四月',
        may: '五月',
        jun: '六月',
        jul: '七月',
        aug: '八月',
        sep: '九月',
        oct: '十月',
        nov: '十一月',
        dec: '十二月'
      },
      loading: false,
      reservationStatistic: [ ],
      columns: [
        { prop: "id", label: "序号", sortable: true},
        { prop: "createDt", label: "创建时间", sortable: true, width: "180" },
        { prop: "startpoint", label: "出发地点" },
        { prop: "endpoint", label: "目的地点" },
        { prop: "schedule-start", label: "预计出发时刻", sortable: true, width: "180" },
        { prop: "schedule-end", label: "预计返回时刻", sortable: true, width: "180" },
        { prop: "car", label: "车辆型号" },
        { prop: "applicant", label: "预约人" },
        { prop: "driver", label: "司机" },
        { prop: "accompanist", label: "随行人员" },
        { prop: "returnDt", label: "实际返回时刻" }
      ]
    }
  },
  methods: {
    search (){
      this.loading = true;
      console.log(this.reservation);
      let reservation = {};
      for( let r in this.reservation ){
        if( typeof this.reservation[r] != 'function' )
          // console.log( this.reservation[r].toString() );
          reservation[r] = this.reservation[r].toString();
      }
      console.log(reservation);
      this.$http.post('http://www.gdrtc.org/car/server/statistic/reservationStatistic.php', reservation,{
        emulateJSON: true,
        headers: {
            'Content-Type': 'enctype="application/x-www-form-urlencoded; charset=utf-8"'
        }
    }).then(function(response){
        this.reservationStatistic = response.data;
        this.loading = false;
      }, function(response){
        console.log(response);
        this.loading = false;
      });
    },
    exportExcel () {
      let reservation = {};
      for( let r in this.reservation ){
        if( typeof this.reservation[r] != 'function' )
          // console.log( this.reservation[r].toString() );
          reservation[r] = this.reservation[r].toString();
      }
      this.$http.post('http://www.gdrtc.org/car/server/statistic/export-excel.php', reservation,{
        emulateJSON: true,
        headers: {
            'Content-Type': 'enctype="application/x-www-form-urlencoded; charset=utf-8"'
        }
    }).then(function(response){
        console.log(response.data.replace(/.*downloadfrom/, ''));
        window.location.assign(response.data.replace(/.*downloadfrom/, ''));
      }, function(response){
        console.log(response);
      });
    }
  },
  mounted: function(){
    this.$http.get('http://www.gdrtc.org/car/server/reservation/application-init.php')
      .then( response => {
        console.log(response);
        this.cars = response.data.records;
      }, response => {
        console.log(response);
      })
  }
}
</script>

<style>
  #query{
    margin: 1em;
    text-align: center;
  }
</style>
