<template>
  <div>
    <input type="button" value="GET" @click="getJoke" />
    <p>{{ joke }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      joke: "一个好笑的笑话",
    };
  },
  components: {},
  methods: {
    getJoke() {
      this.$axios.get("https://autumnfish.cn/api/joke").then((res) => {
        console.log(res.data);
        this.joke = res.data;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid red;
  height: 400px;
  width: 400px;
  .test {
    margin-left: 3%;
    box-sizing: border-box;
    width: 30%;
    height: 100px;
    border: 1px solid red;
  }
  .selected {
    background: pink;
  }
}
</style>