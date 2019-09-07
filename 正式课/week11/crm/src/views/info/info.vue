<template>
  <div class="info_box">
    <div class="block">
      <el-date-picker v-model="date" type="date" placeholder="选择日期"></el-date-picker>
      <br />
      <el-input
        style="width:220px; margin-top:10px"
        v-model="name"
        placeholder="请输入姓名"
        size="small"
      ></el-input>
      <br />
      <el-input style="width:220px; margin-top:10px" v-model="age" placeholder="请输入年龄" size="small"></el-input>
      <br />
      <el-input
        style="width:220px; margin-top:10px"
        v-model="province"
        placeholder="请输入省份"
        size="small"
      ></el-input>
      <br />
      <el-input
        style="width:220px; margin-top:10px"
        v-model="city"
        placeholder="请输入市区"
        size="small"
      ></el-input>
      <br />
      <el-input
        style="width:220px; margin-top:10px"
        v-model="address"
        placeholder="请输入地址"
        size="small"
      ></el-input>
      <br />
      <el-input style="width:220px; margin-top:10px" v-model="zip" placeholder="请输入邮编" size="small"></el-input>
      <br />
      <el-button
        type="primary"
        style="width:220px; margin-top:10px"
        :plain="true"
        @click="submit"
        autofocus
        round
      >提交</el-button>
    </div>
  </div>
</template>

<script>
import { add } from "@/api/getData.js";
export default {
  data() {
    return {
      date: "",
      name: "",
      age: "",
      province: "",
      city: "",
      address: "",
      zip: ""
    };
  },

  created() {
    console.log(this.$route.query);
    // 获取到query上的数据之后 判断是否有数据 有的话就赋给data 中对应的属性
    let obj = this.$route.query;
    if (obj.id != undefined) {
      for (let k in obj) {
        if (k != "id") {
          // data中是没有id这个属性的
          this[k] = obj[k];
        }
      }
    }
  },

  methods: {
    fn() {
      console.log(arguments);
    },
    submit() {
      let { date, name, age, province, city, address, zip } = this;
      if (!date || !name || !age || !province || !city || !address || !zip) {
        this.$message({
          message: "所有输入框不能为空",
          type: "warning"
        });
      } else {
        // 发送请求
        let obj = { date, name, age, province, city, address, zip };
        // 对于obj 来说若有存在id 就是编辑
        if (this.$route.query.id != undefined) {
          obj.id = this.$route.query.id;
        }
        // console.log("obj", obj);
        // 若添加 （编辑） 成功 就跳转到table 页; 否则提示用户添加(编辑)失败
        add(obj).then(data => {
          // 若 errorCode 为0则代表添加成功
          if (data.errorCode === 0) {
            this.$router.push("/table");
          } else {
            let str = obj.id === undefined ? "添加失败" : "修改失败";
            this.$message.error(str);
          }
        });
      }
    },

    openVn() {
      const h = this.$createElement;
      this.$message({
        message: h("p", null, [
          h("span", null, "内容可以是 "),
          h("i", { style: "color: teal" }, "VNode")
        ])
      });
    }
  }
};
</script>

<style lang="less" scoped>
.info_box {
  line-height: 40px;
}
</style>
