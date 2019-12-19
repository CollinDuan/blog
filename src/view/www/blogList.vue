<template>
  <div>
    <el-row class="list">
      <el-col class="list-left" :span="14">
        <p class="title text-left">(建议精读)原生JS灵魂之问(中)，检验自己是否真的熟悉JavaScript？</p>
        <p
          class="intor text-left"
        >笔者最近在对原生JS的知识做系统梳理，因为我觉得JS作为前端工程师的根本技术，学再多遍都不为过。打算来做一个系列，一共分三次发，以一系列的问题为驱动，当然也会有追问和扩展，内容系统且完整，对初中级选手会有很好的提升，高级选手也会得到复习和巩固。这是本系列的第二篇</p>
        <p></p>
      </el-col>
      <el-col class="list-right" :span="8">
        <el-image :src="src" fit="contain" style="width: 50%; height: 50%">
          <div slot="placeholder" class="image-slot">
            加载中
            <span class="dot">...</span>
          </div>
        </el-image>
      </el-col>
    </el-row>
    <el-divider></el-divider>
  </div>
</template>

<script>
export default {
  data () {
    return {
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    }
  }
}
</script>

<style scoped lang="scss">
.list {
  margin-top: 20px;
}
.title {
  font-size: 16px;
}
.intor {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
