<template>
  <el-container class="header">
    <el-header>
      <el-row>
        <el-col :span="4">
          <el-menu class="header-left-menu">
            <el-menu-item index="0"><el-avatar size="large" :src="circleUrl"></el-avatar></el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="12">
          <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1"><i class="el-icon-s-home"></i>首页</el-menu-item>
            <el-menu-item index="2"><i class="el-icon-s-marketing"></i>热门</el-menu-item>
            <el-menu-item index="3"><i class="el-icon-star-on"></i>归档</el-menu-item>
            <el-menu-item index="4"><i class="el-icon-user-solid"></i>关于</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="8">
          <el-menu mode="horizontal" class="header-right-menu">
            <el-menu-item index="5"><el-button type="primary" size="small" >登录</el-button></el-menu-item>
            <el-menu-item index="6"><el-button type="danger" size="small">注册</el-button></el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-header>
    <el-container class="main">
      <el-main>
        <blog-list></blog-list>
      </el-main>
      <el-aside width="400px">
        <div class="my-avatar">
          <el-avatar :size="80 " :src="circleUrl"></el-avatar>
          <p class="my-name text-align"><i class="el-icon-smoking"></i> <b>老烟斗</b></p>
        </div>
        <el-divider></el-divider>
        <p class="intor">个人介绍</p>
        <p class="text-left">加班到天明，学习到昏厥。</p>
        <p class="text-left">微信公众号：【 我也不知道在哪呢 】</p>
        <p class="text-left">在写点啥呢？ 我也不知大写啥了 就这么着这吧  等想起来在补充吧  </p>
        <el-divider></el-divider>
        <p class="intor">标签云</p>
        <div class="intor-tag">
          <el-button type="primary" size="small">浏览器</el-button>
          <el-button type="danger" size="small">浏览器内核</el-button>
          <el-button type="infor" size="small">react.js</el-button>
          <el-button type="success" size="small">vue.js</el-button>
          <el-button type="warning" size="small">element-ui</el-button>
          <el-button type="primary" size="small">webpack</el-button>
          <el-button type="warning" size="small">Mysql</el-button>
          <el-button type="infor" size="small">全栈工程师</el-button>
          <el-button type="danger" size="small">JavaScript</el-button>
          <el-button type="success" size="small">node.js</el-button>
          <el-button type="primary" size="small">express</el-button>
        </div>
      </el-aside>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script>
import blogList from './www/blogList'
export default {
  data () {
    return {
      activeIndex: '1',
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  },
  components: {
    blogList
  },
  methods: {
    handleSelect (val) {
      console.log(val)
    }
  }
}
</script>
<style scoped>
  .el-menu {
    height: 60px;
    border: 0;
    border-bottom:solid 1px #e6e6e6;
  }
  .header {
    height: 100%;
    min-width: 1600px;
  }
  .header-left-menu {
    padding-left:200px;
  }
  .header-right-menu {
    padding-right:200px;
  }
  .main {
    margin: 0 200px;
  }
  .el-footer {
    padding: 0;
  }
  .my-avatar {
    margin-top: 50px;
  }
  .my-name {
    font-size: 18px;
  }
  .intor {
    color: #909399;
  }
  .intor-tag {
    display:flex;
    flex-wrap:wrap;
  }
  .el-button{
    margin: 0 10px 10px 0;
  }
</style>
