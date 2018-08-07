<template>
  <div class="app-container">
    <el-table :data="list" v-loading="listLoading" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column align="center" label='ID' width="95">
        <template slot-scope="scope">
          {{scope.row.id}}
        </template>
      </el-table-column>
      <el-table-column label="Title">
        <template slot-scope="scope">
          {{scope.row.url}}
        </template>
      </el-table-column>
      <el-table-column label="Avatar" width="110" align="center">
        <template slot-scope="scope">
          <img :src="scope.row.avatar_url" alt="🎃🎃🎃🎃🎃🎃" class="image">
        </template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.login}}</span>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="query.currentPage"
            :page-sizes="[10, 100, 200, 300, 400]"
            :page-size="query.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="all.length">
    </el-pagination>
  </div>
</template>

<script>
import { list } from "@/api/table";
import users from "./users-mock";
export default {
  data() {
    return {
      all: [],
      list: [],
      listLoading: true,
      query: {
        currentPage: 1,
        pageSize: 10
      }
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      // this.listLoading = true;
      // list().then(response => {
      //   this.listLoading = false;
      //   this.list = response.data;
      // });
      this.all = [...users];
      this.listLoading = false;
      this.list = this.all.slice(0, 10);
    },

    handleSizeChange(val) {
      this.query.pageSize = val;
      this.excelDataPagination();
    },

    handleCurrentChange(val) {
      this.query.currentPage = val;
      this.excelDataPagination();
    },

    excelDataPagination() {
      let currentPage = this.query.currentPage;
      let pageSize = this.query.pageSize;
      --currentPage;
      this.list = this.all.slice(
        currentPage * pageSize,
        (currentPage + 1) * pageSize
      );
    }

  }
};
</script>

<style scoped>
.image {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
