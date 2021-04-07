<template>
  <div>
    <el-card>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        :inline="true"
      >
        <el-divider content-position="left">企业基本信息</el-divider>
        <el-row>
          <el-col :span="6">
            <el-form-item label="公司ID" prop="id">
              <el-input v-model="ruleForm.id"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="注册时间" prop="id">
              <el-input v-model="ruleForm.id"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="注册资本" prop="id">
              <el-input v-model="ruleForm.id"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="行业" prop="id">
              <el-input v-model="ruleForm.id"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="区域" prop="id">
              <el-input v-model="ruleForm.id"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="企业类型" prop="id">
              <el-input v-model="ruleForm.id"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="控制人类型" prop="id">
              <el-input v-model="ruleForm.id"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="控制人持股比" prop="id">
              <el-input v-model="ruleForm.id"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider content-position="left">企业知识产权信息</el-divider>
        <el-row>
          <el-col :span="6">
            <el-form-item label="专利" prop="id">
              <el-input v-model="ruleForm.id"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="商标" prop="id">
              <el-input v-model="ruleForm.id"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="著作权" prop="id">
              <el-input v-model="ruleForm.id"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        
        <el-divider content-position="left">企业融资报表</el-divider>
        <el-row>
          <el-col :span="12">
            <el-form-item label="债权融资额度" prop="id">
              <el-input v-model="ruleForm.id" placeholder="2015" style="width:100px;margin-right:10px"></el-input>
              <el-input v-model="ruleForm.id" placeholder="2016" style="width:100px;margin-right:10px"></el-input>
              <el-input v-model="ruleForm.id" placeholder="2017" style="width:100px;margin-right:10px"></el-input>
              <el-input v-model="ruleForm.id" placeholder="不明年份" style="width:100px;"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="债权融资成本" prop="id">
              <el-input v-model="ruleForm.id" placeholder="2015" style="width:100px;margin-right:10px"></el-input>
              <el-input v-model="ruleForm.id" placeholder="2016" style="width:100px;margin-right:10px"></el-input>
              <el-input v-model="ruleForm.id" placeholder="2017" style="width:100px;margin-right:10px"></el-input>
              <el-input v-model="ruleForm.id" placeholder="不明年份" style="width:100px;"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row >
          <el-col :span="12">
            <el-form-item label="股权融资额度" prop="id" >
              <el-input v-model="ruleForm.id" placeholder="2015" style="width:100px;margin-right:10px"></el-input>
              <el-input v-model="ruleForm.id" placeholder="2016" style="width:100px;margin-right:10px"></el-input>
              <el-input v-model="ruleForm.id" placeholder="2017" style="width:100px;margin-right:10px"></el-input>
              <el-input v-model="ruleForm.id" placeholder="不明年份" style="width:100px;"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="内部融资和贸易融资额度" prop="id" label-width="170px">
              <el-input v-model="ruleForm.id" placeholder="2015" style="width:100px;margin-right:10px"></el-input>
              <el-input v-model="ruleForm.id" placeholder="2016" style="width:100px;margin-right:10px"></el-input>
              <el-input v-model="ruleForm.id" placeholder="2017" style="width:100px;margin-right:10px"></el-input>
              <el-input v-model="ruleForm.id" placeholder="不明年份" style="width:100px;"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row >
          <el-col :span="12">
            <el-form-item label="内部融资和贸易融资成本" prop="id" >
              <el-input v-model="ruleForm.id" placeholder="2015" style="width:100px;margin-right:20px"></el-input>
              <el-input v-model="ruleForm.id" placeholder="2016" style="width:100px;margin-right:20px"></el-input>
              <el-input v-model="ruleForm.id" placeholder="2017" style="width:100px;margin-right:20px"></el-input>
              <el-input v-model="ruleForm.id" placeholder="不明年份" style="width:100px;margin-right:20px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="项目融资和政策融资额度" prop="id" >
              <el-input v-model="ruleForm.id" placeholder="2015" style="width:100px;margin-right:20px"></el-input>
              <el-input v-model="ruleForm.id" placeholder="2016" style="width:100px;margin-right:20px"></el-input>
              <el-input v-model="ruleForm.id" placeholder="2017" style="width:100px;margin-right:20px"></el-input>
              <el-input v-model="ruleForm.id" placeholder="不明年份" style="width:100px;margin-right:20px"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="项目融资和政策融资成本" prop="id" label-width="170px">
             <el-input v-model="ruleForm.id" placeholder="2015" style="width:100px;margin-right:20px"></el-input>
              <el-input v-model="ruleForm.id" placeholder="2016" style="width:100px;margin-right:20px"></el-input>
              <el-input v-model="ruleForm.id" placeholder="2017" style="width:100px;margin-right:20px"></el-input>
              <el-input v-model="ruleForm.id" placeholder="不明年份" style="width:100px;margin-right:20px"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {},
      rules: {}
    };
  },

  components: {},

  methods: {}
};
</script>

<style scoped>
.demo-ruleForm {
  width: 100%;
}
</style>