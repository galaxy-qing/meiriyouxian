<template>
  <div class="tabbar-warper">
    <div class="tabbar-item" v-for="item in tabbar" :key="item.icon">
      <img href="" />
      <p>{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabbar: [
        {
          icon: '',
          text: '首页'
        },
        {
          icon: '',
          text: '分类'
        },
        {
          icon: '',
          text: 'HOME会员'
        },
        {
          icon: '',
          text: '购物车'
        },
        {
          icon: '',
          text: '我的'
        }
      ]
    };
  }
};
</script>

<style scoped>
.tabbar-warper {
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: space-around;
}
.tabbar-item {
  color: #777777;
  font-size: 16px;
}
</style>