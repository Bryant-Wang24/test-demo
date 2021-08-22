<template>
  <div
    @click="clickEvent('out')"
    style="width: 100px; height: 100px; background: pink"
  >
    <button @click.once="clickEvent('in')">点击</button>
    <h2>我爱你{{ params.name }}</h2>
    <div id="div" @click="copyContent">日日思君不见君</div>
    <textarea id="textarea" readonly="readonly" />
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      // id: "",
      aidou: {},
    };
  },
  // props: {
  //   query: {
  //     type: String,
  //     default: "VUE",
  //   },
  // },
  props: ["params"], // 此处接收路由配置 props 传进来对象的 xx 属性
  mounted() {
    console.log(this.params); //获取传递的参数
    // this.id = this.$route.params.id;
    // this.aidou = this.$route.query;
    // console.log(this.aidou);
  },
  methods: {
    copyContent() {
      const text = document.getElementById("div").innerText;
      document.getElementById("textarea").value = text;
      const textarea = document.querySelector("#textarea");
      textarea.select();
      document.execCommand("copy");
    },
    clickEvent(e: any) {
      console.log(e);
      //不加 once 每次点击按钮都会输出 in  out
      //加了 once 只有第一次点击按钮会输出 in  out,之后再点击按钮不会输出 in,只会输出 out
    },
  },
};
</script>

<style lang="scss" scoped>
.outside {
  width: 400px;
  height: 400px;
  line-height: 400px;
  background: pink;
}
.outside .inside {
  background: red;
  width: 200px;
  height: 200px;
}
#textarea {
  border: 1px solid red;
  position: absolute;
  top: 0;
  left: -1000px;
  opacity: 0;
  z-index: -1000;
}
</style>