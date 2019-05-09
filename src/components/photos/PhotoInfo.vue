<template>
  <div class="photoinfo-container">
    <h3>{{ photoinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间:{{ photoinfo.add_time | dataFormat }}</span>
      <span>点击:{{ photoinfo.click }}次</span>
    </p>
    <hr>
    <!-- 缩略图区域 -->
    <div class="thumbnails">
      <img
        class="preview-img"
        v-for="(item, index) in list"
        :src="item.src"
        height="100"
        @click="$preview.open(index, list)"
        :key="item.src"
      >
    </div>
    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>
    <!-- 放置一个现成的评论子组件 -->
    <!-- 引用评论子组件 -->
    <cmt-box :id="id"></cmt-box>
  </div>
</template>
<script>
//1.导入评论子组件
import comment from "../subcomponents/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      photoinfo: {},
      list: []
    };
  },
  created() {
    this.getPhotoInfo();
    this.getThumbnails();
  },
  methods: {
    getPhotoInfo() {
      this.$http.get("" + this.id).then(res => {
        if (res.body.status === 0) {
          this.photoinfo = res.body.message[0];
        }
      });
    },
    getThumbnails() {
      this.$http.get("" + this.id).then(res => {
        if (res.body.status === 0) {
          this.list = res.body.message;
          this.list = this.list.forEach(res => {
            res.w = 600;
            res.h = 400;
          });
        }
      });
    }
  },
  components: {
    //2.注册评论子组件
    "cmt-box": comment
  }
};
</script>
<style lang="scss" scoped>
.photoinfo-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }

  .content {
    font-size: 13px;
    line-height: 30px;
  }

  .thumbnails {
    img {
      margin: 10px;
      box-shadow: 0 0 8px #999;
    }
  }
}
</style>
