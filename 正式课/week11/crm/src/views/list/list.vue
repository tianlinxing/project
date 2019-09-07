<template>
  <div class="list_box">
    <el-table :data="tableData" border style="width: 100%" class="table_box">
      <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="age" label="年龄" width="120"></el-table-column>
      <el-table-column prop="province" label="省份" width="120"></el-table-column>
      <el-table-column prop="city" label="市区" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" width="300"></el-table-column>
      <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="primary" size="small">编辑</el-button>
          <el-button type="danger" size="small" @click="del(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>确定要删除吗</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sureDel">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getList, del } from "@/api/getData.js";
export default {
  created() {
    this.initList();
  },
  methods: {
    initList() {
      let p = getList();
      p.then(data => {
        // console.log(data);
        this.tableData = data.data;
      });
    },
    handleClick(row) {
      // row 是点击的那一行的数据
      console.log(row);
      // 1、只传递id 把从后台获取到的列表数据  存储到 localStorage中
      // 2、点击的时候 把整条数据都存储到localStorage 中
      // 3、只传id 然后根据id去后台请求数据
      this.$router.push({path:'/info',query:row});

    },

    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },

    del(row) {
      // 点击红色删除按钮的时候 我们把这一条数据赋给 data中的row
      this.row = row;
      this.dialogVisible = true;
    },

    sureDel() {
      this.dialogVisible = false;
      // 删除要告诉后台删除数据的id
      let p = del({ id: this.row.id }); // 这个del是axios的del 不是methods中的del
      // 删除成功就提示用户删除成功  失败就提示用户删除失败
      p.then(data => { 
        if (data.errorCode === 0) {
          // 删除成功就重新请求列表数据
          this.initList();
          this.$message.success('删除成功');
        } else {
          this.$message.error('删除失败');
        }
      }); 
    }
  },

  data() {
    return {
      tableData: [],
      dialogVisible: false,
      row: null
    };
  }
};
</script>

<style lang="less" scoped>
.table_box,
.list_box {
  line-height: 40px;
}
</style>

