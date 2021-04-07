<template>
  <div class="batch">
    <el-row :gutter="20">
      <el-col :span="14">
        <el-card shadow="always" class='tableCard'>
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="企业ID" style="margin-bottom:10px">
              <el-input v-model="search" placeholder style="width:160px"></el-input>
            </el-form-item>
            <el-form-item class="l-button">
              <el-button type="primary" @click="setCurrent()">查询</el-button>
              <el-button type="primary" @click="clear()">清空</el-button>
            </el-form-item>
            <div class="r-button">
              <el-button type="primary" @click="dialogFormVisible = true" >上传文件</el-button>
              <form action="http://101.37.21.228:8000/download" method="get" style="display:inline;margin-left:10px">
                <input type="submit" value="下载文件" class="el-button el-button--primary">
              </form>
            </div>
            
            <el-dialog title="上传文件" :visible.sync="dialogFormVisible" :closeOnClickModal='false'>
              <el-upload
                class="upload"
                multiple
                :limit="4"
                action="http://101.37.21.228:8000/single/"
                :on-exceed="handleExceed"
                accept=".csv"
                :on-success="handleSuccess"
                :on-change="handleChange"
                :on-error="handleFail"
                :file-list="fileList"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <a class="el-upload__tip">只能上传.csv文件</a>
              </el-upload>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="showData" >确 定</el-button>
              </div>
            </el-dialog>
          </el-form>

          <el-table
            ref="singleTable"
            :data="tableData"
            highlight-current-row
            style="width: 100%;"
            max-height="365"
            @row-click="showComPaining"
            :row-class-name="rowStatus"
          >
            <el-table-column property="ID" label="ID" fixed></el-table-column>
            <el-table-column property="注册时间" label="注册时间"></el-table-column>
            <el-table-column property="注册资本" label="注册资本"></el-table-column>
            <el-table-column property="行业" label="行业" width="100px"></el-table-column>
            <el-table-column property="区域" label="区域"></el-table-column>
            <el-table-column property="企业类型" label="企业类型" width="150px"></el-table-column>
            <el-table-column property="控制人类型" label="控制人类型"></el-table-column>
            <el-table-column property="控制人持股比例" label="控制人持股比例"></el-table-column>
            <el-table-column property="专利" label="专利"></el-table-column>
            <el-table-column property="商标" label="商标"></el-table-column>
            <el-table-column property="著作权" label="著作权"></el-table-column>
            <el-table-column label="2015年融资信息">
              <el-table-column property="债权融资额度" label="债权融资额度" width="120px"></el-table-column>
              <el-table-column property="债权融资成本" label="债权融资成本" width="120px"></el-table-column>
              <el-table-column property="股权融资额度" label="股权融资额度" width="120px"></el-table-column>
              <el-table-column property="股权融资成本" label="股权融资成本" width="120px"></el-table-column>
              <el-table-column property="内部融资和贸易融资额度" label="内部融资和贸易融资额度" width="170px"></el-table-column>
              <el-table-column property="内部融资和贸易融资成本" label="内部融资和贸易融资成本" width="170px"></el-table-column>
              <el-table-column property="项目融资和政策融资额度" label="项目融资和政策融资额度" width="170px"></el-table-column>
              <el-table-column property="项目融资和政策融资成本" label="项目融资和政策融资成本" width="170px"></el-table-column>
            </el-table-column>
            <el-table-column label="2016年融资信息">
              <el-table-column property="债权融资额度1" label="债权融资额度" width="120px"></el-table-column>
              <el-table-column property="债权融资成本1" label="债权融资成本" width="120px"></el-table-column>
              <el-table-column property="股权融资额度1" label="股权融资额度" width="120px"></el-table-column>
              <el-table-column property="股权融资成本1" label="股权融资成本" width="120px"></el-table-column>
              <el-table-column property="内部融资和贸易融资额度1" label="内部融资和贸易融资额度" width="170px"></el-table-column>
              <el-table-column property="内部融资和贸易融资成本1" label="内部融资和贸易融资成本" width="170px"></el-table-column>
              <el-table-column property="项目融资和政策融资额度1" label="项目融资和政策融资额度" width="170px"></el-table-column>
              <el-table-column property="项目融资和政策融资成本1" label="项目融资和政策融资成本" width="170px"></el-table-column>
            </el-table-column>
            <el-table-column label="2017年融资信息">
              <el-table-column property="债权融资额度2" label="债权融资额度" width="120px"></el-table-column>
              <el-table-column property="债权融资成本2" label="债权融资成本" width="120px"></el-table-column>
              <el-table-column property="股权融资额度2" label="股权融资额度" width="120px"></el-table-column>
              <el-table-column property="股权融资成本2" label="股权融资成本" width="120px"></el-table-column>
              <el-table-column property="内部融资和贸易融资额度2" label="内部融资和贸易融资额度" width="170px"></el-table-column>
              <el-table-column property="内部融资和贸易融资成本2" label="内部融资和贸易融资成本" width="170px"></el-table-column>
              <el-table-column property="项目融资和政策融资额度2" label="项目融资和政策融资额度" width="170px"></el-table-column>
              <el-table-column property="项目融资和政策融资成本2" label="项目融资和政策融资成本" width="170px"></el-table-column>
            </el-table-column>
            <el-table-column label="2015年财务信息">
              <el-table-column property="从业人数" label="从业人数"></el-table-column>
              <el-table-column property="资产总额" label="资产总额"></el-table-column>
              <el-table-column property="负债总额" label="负债总额"></el-table-column>
              <el-table-column property="营业总收入" label="营业总收入" width="100px"></el-table-column>
              <el-table-column property="主营业务收入" label="主营业务收入" width="100px"></el-table-column>
              <el-table-column property="利润总额" label="利润总额" width="100px"></el-table-column>
              <el-table-column property="净利润" label="净利润"></el-table-column>
              <el-table-column property="纳税总额" label="纳税总额"></el-table-column>
              <el-table-column property="所有者权益合计" label="所有者权益合计"></el-table-column>
            </el-table-column>
            <el-table-column label="2016年财务信息">
              <el-table-column property="从业人数1" label="从业人数"></el-table-column>
              <el-table-column property="资产总额1" label="资产总额" ></el-table-column>
              <el-table-column property="负债总额1" label="负债总额"></el-table-column>
              <el-table-column property="营业总收入1" label="营业总收入" width="100px"></el-table-column>
              <el-table-column property="主营业务收入1" label="主营业务收入" width="100px"></el-table-column>
              <el-table-column property="利润总额1" label="利润总额" width="100px"></el-table-column>
              <el-table-column property="净利润1" label="净利润"></el-table-column>
              <el-table-column property="纳税总额1" label="纳税总额"></el-table-column>
              <el-table-column property="所有者权益合计1" label="所有者权益合计"></el-table-column>
            </el-table-column>
            <el-table-column label="2017年财务信息">
              <el-table-column property="从业人数2" label="从业人数"></el-table-column>
              <el-table-column property="资产总额2" label="资产总额"></el-table-column>
              <el-table-column property="负债总额2" label="负债总额"></el-table-column>
              <el-table-column property="营业总收入2" label="营业总收入" width="100px"></el-table-column>
              <el-table-column property="主营业务收入2" label="主营业务收入" width="100px"></el-table-column>
              <el-table-column property="利润总额2" label="利润总额" width="100px"></el-table-column>
              <el-table-column property="净利润2" label="净利润"></el-table-column>
              <el-table-column property="纳税总额2" label="纳税总额"></el-table-column>
              <el-table-column property="所有者权益合计2" label="所有者权益合计"></el-table-column>
            </el-table-column>
            <el-table-column label="累计三年不纳税"          property="tTaxes"  width="130px"></el-table-column>
            <el-table-column label="政府补贴依赖程度"        property="grant_profit" width="130px"></el-table-column>
            <el-table-column label="累计吸血年限"            property="tBlood" width="130px"></el-table-column>
            <el-table-column label="过度借债年限"            property="tDebt"  width="130px"></el-table-column>
            <el-table-column label="净资产收益率"            property="ROE" width="130px"></el-table-column>
            <el-table-column label="资产净利率"              property="ROA"  width="130px"></el-table-column>
            <el-table-column label="三年利润平均增长率"      property="Profit_growth" width="130px"></el-table-column>
            <el-table-column label="三年主营业收入平均增长率" property="main_growth" width="130px"></el-table-column>
            <el-table-column label="企业活力"                property="Vit" width="130px"></el-table-column>
            <el-table-column label="总资产周转率"            property="TAT" width="130px"></el-table-column>
            <el-table-column label="总资产利润率"            property="APR" width="130px"></el-table-column>
            <el-table-column label="杠杆率"                    property="Lev" width="130px"></el-table-column>
            <el-table-column property="flag" label="是否为僵尸企业" fixed="right"></el-table-column>
          </el-table>
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pageSize"
            layout="total, prev, pager, next"
            :total="totalPage"
          ></el-pagination>
        </el-card>
      </el-col>
      <el-col :span="10">
        <el-card shadow="always" style="height:502px">
          <div class="ComPainting">
            <div style="margin:0px 20px">
              <span >
                <a class="title">僵尸企业画像</a>
                <a class="comId">当前企业ID:<input type="button" style="border:none;background-color:white;" :value="this.currentID"></a>
              </span>
              <el-divider></el-divider>
            </div>
            <div id="ComPainting" style="height:400px"></div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="chart">
      <el-col :span="12" class="l-chart">
        <el-card class="industry">
          <div style="margin:0px 20px">
            <span>
              <h4>僵尸企业行业分布图</h4>
            </span>
            <el-divider></el-divider>
          </div>
          <div id="industry" style="height:300px;"></div>
        </el-card>
      </el-col>
      <el-col :span="12" class="r-chart">
        <el-card class="ragion">
          <div style="margin:0px 20px">
            <span>
              <h4>僵尸企业地区分布图</h4>
            </span>
            <el-divider></el-divider>
          </div>
          <div id="ragion" style="height:300px"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from "echarts";
import BatchApi from "../../api/batchApi";
import batchApi from "../../api/batchApi";
export default {
  data() {
    return {
      fileList: [],
      tableData: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},{},{},{},{}],

      industryKey: [],
      industryValue: [],
      ragionKey: [],
      ragionValue: [],

      comPaintingsData: [],
      comPaintingData: [0, 0, 0, 0, 0],
      comPainting:[],
      formInline: {},
      opinionData: [820, 932, 901, 934, 1290, 1330, 1320],
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: "120px",
      currentPage: 1,
      totalPage: 0,
      pageSize: 25,
      search: "",
      loading:true,
      currentID:""
    };
  },

  components: {},

  methods: {
    fetchData() {
      // BatchApi.tableData().then(response => {
      BatchApi.tableData().then(response => {
        console.log("数据", response.data);
        this.tableData = response.data.json_data;
        var industryData = response.data.industry;
        var ragionData = response.data.area;
        console.log("tableData", this.tableData);
        console.log("industryData", industryData);
        console.log("ragionData", ragionData);
        this.comPaintingsData = JSON.stringify(this.tableData, [
          "ID",
          "cwxyzk",
          "fznlzk",
          "cznlzk",
          "zcyynl",
          "cxnl",
          "sjxy",
          "ffxy",
          "sxbz"
        ]);
        console.log("企业画像", JSON.parse(this.comPaintingsData));

        this.totalPage = response.data.row_num;
        this.industryKey = [];
        this.industryValue = [];
        for (var key in industryData) {
          this.industryKey.push(key);
          this.industryValue.push(industryData[key]);
        }
        this.ragionKey = [];
        this.ragionValue = [];
        for (var key in ragionData) {
          this.ragionKey.push(key);
          this.ragionValue.push(ragionData[key]);
        }
        console.log("comPainting", this.comPaintingData);
        console.log("industryKey", this.industryKey);
        console.log("industryValue", this.industryValue);

        console.log("ragionKey", this.ragionKey);
        console.log("ragionValue", this.ragionValue);
        this.drawIndustry("industry");
        this.drawRagion("ragion");
      })
      .catch(error => {
        console.log("error:",error)
        this.$message({
          message: '请上传正确的文件',
          type: 'warning'
        });
      });
    },

    handleChange(file, fileList) {
      // this.fileList = fileList.slice(-4);
    },
    handleExceed(files, fileList) {},
    handleSuccess(response, file, fileList) {
      console.log("success", file);
      console.log("success", fileList);
      this.fileList = fileList;
      console.log("success", this.fileList);
    },
    handleFail(err, file, fileList) {
      console.log("上传失败");
    },
    drawIndustry(id) {
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
        color: [
          "#60acfc",
          "#32d3eb",
          "#5bc49f",
          "#feb64d",
          "#ff7c7c",
          "#9287e7"
        ],
        tooltip: {
          trigger: "axis"
        },
        legend: {
          // data: ["蒸发量", "降水量"]
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            data: this.industryKey
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            // name: "蒸发量",
            type: "bar",
            data: this.industryValue,
            barWidth:40,
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          }
        ]
      });
    },
    drawRagion(id) {
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
        color: [
          "#60acfc",
          "#32d3eb",
          "#5bc49f",
          "#feb64d",
          "#ff7c7c",
          "#9287e7"
        ],
        // title: {
        //   text: "某地区蒸发量和降水量",
        //   subtext: "纯属虚构"
        // },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          // data: ["蒸发量", "降水量"]
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            data: this.ragionKey
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            // name: "蒸发量",
            type: "bar",
            data: this.ragionValue,
            barWidth:40,
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          }
        ]
      });
    },
    drawComPainting(id) {
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
        color: [
          // "#448d9e",
          "#60acfc",
          "#32d3eb",
          "#5bc49f",
          "#feb64d",
          "#ff7c7c",
          "#9287e7"
        ],
        title: {
          // text: "基础雷达图"
        },
        tooltip: {
          trigger: "axis"
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: "black",
              backgroundColor: "white",
              borderRadius: 3,
              padding: [3, 5],
              fontSize:13
            }
          },
          indicator: [
            { text: "财务效益", max: 1 },
            { text: "发展潜力", max: 1 },
            { text: "偿债能力", max: 1 },
            { text: "资产运营", max: 1 },
            { text: "创新能力", max: 1 },
            { text: "僵尸历史", max: 1 },
            { text: "复活效应", max: 1 },
            { text: "输血标准", max: 1 }
          ]
        },
        series: [
          {
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",
            tooltip:{
              trigger:'item'
            },
            areaStyle: {},
            data: [
              {
                // value: [0, 4.2, 1.9, 3.4, 0.6],
                value: this.comPaintingData,
                name: "预算分配（Allocated Budget）",
                areaStyle: {
                  normal: {
                    color: "rgba(255,255,0,.3)"
                  }
                }
              }
            ]
          }
        ]
      });
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      // fetchData();
      batchApi.pageData(val).then(response => {
        this.tableData = response.data.json_data;
        console.log(val, this.tableData);
        this.comPaintingsData = JSON.stringify(this.tableData, [
          "ID",
          "cwxyzk",
          "fznlzk",
          "cznlzk",
          "zcyynl",
          "cxnl",
          "sjxy",
          "ffxy",
          "sxbz"
        ]);
        console.log("企业画像2", JSON.parse(this.comPaintingsData));
      });
      // this.showComPaining(this.tableData[0])
      this.comPaintingData=[]
      this.drawComPainting("ComPainting")

    },
    setCurrent() {
      // this.$refs.singleTable.setCurrentRow(row);
      console.log("search", this.search);
      if (this.search == "") {
        this.fetchData();
        this.currentPage = 1
      } else {
        batchApi.search(this.search).then(response => {
          console.log(response.data.json_data[0]);
          console.log("search", this.search);
          this.tableData = response.data.json_data;
        });
        // this.drawComPainting()
      }
      this.comPaintingData=[]
      this.drawComPainting("ComPainting")

    },
    showComPaining(row) {
      this.comPaintingData = [];
      console.log("row", row);
      var comID = row.ID;
      var items = JSON.parse(this.comPaintingsData);
      console.log('items',items)
      // console.log(comID)
      this.comPainting = items.filter(item => {
        // console.log(item.ID)
        return item.ID == comID;
      });
      console.log("comPainting",this.comPainting);
      this.currentID = this.comPainting[0].ID
      console.log("this.currentID",this.currentID)
      this.comPaintingData.push(
        this.comPainting[0].cwxyzk,
        this.comPainting[0].fznlzk,
        this.comPainting[0].cznlzk,
        this.comPainting[0].zcyynl,
        this.comPainting[0].cxnl,
        this.comPainting[0].sjxy,
        this.comPainting[0].ffxy,
        this.comPainting[0].sxbz
      );
      console.log("this.comPainting[0]", this.comPainting[0]);
      console.log("this.comPaintingData", this.comPaintingData);
      // console.log("this.comPaintingData type", typeof this.comPaintingData);
      this.drawComPainting("ComPainting")
    },
    showData() {
      this.dialogFormVisible = false;
      this.fetchData();
      this.drawIndustry("industry");
    },
    rowStatus(row) {
      // if (this.tableData[row.rowIndex].flag == 1) {
      if (this.tableData[row.rowIndex].flag == 1) {
        // console.log("rowColor", row.rowIndex);
        // console.log(this.tableData[row.rowIndex].flag);
        return "table-row-color";
      }
    },
    clear(){
      this.search = ''
      this.setCurrent()
    },
    downloadFile(){
      batchApi.download().then(response =>{
        console.log('download',response)
      })
    }
  },
  mounted() {
    this.$nextTick(function() {
      // this.drawIndustry("industry");
      // this.drawRagion("ragion");
      this.drawComPainting("ComPainting");
    });
  }
};
</script>

<style >
.tableCard{
  height:500px
}
.batch {
  flex-direction: row;
}
.upload {
  flex-direction: row;
}
.el-upload__tip {
  margin-left: 10px;
}
.upload {
  height: 280px;
}
.el-table td,
.el-table th {
  padding: 10px 0 !important;
}
.el-table {
  font-size: 12px;
}
.chart {
  margin-top: 20px;
}
.industry,
.ragion {
  height: 400px;
}
.ComPainting {
  height: 300px;
}
.el-divider--horizontal {
  height: 2px;
  margin: 10px 0;
}
.el-dialog {
  width: 30%;
}
h4 {
  margin-top: 0px;
}
.table-row-color td {
  background-color: #eeeeee;
}
.l-button{
  /* margin: 0px 35px; */
  display: flex;
  align-items: center;
}
.r-button{
  align-items: right;
  float:right;
  display: inline-block;

}
.title{
  /* display: block; */
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  margin-bottom:21.280px;
}
.comId{
  float: right;
  font-size: 85%;
}
</style>