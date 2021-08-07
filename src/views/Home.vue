<template>
  <div>
    <div
      class="page"
      v-for="(items, key, index) in form"
      :key="index"
      @click="choose(index)"
    >
      <div>USB{{ key }}</div>
      <div>{{ items.port }}</div>
      <div>{{ items.name }}</div>
      <div>{{ items.age }}</div>
      <!-- <div :class="item.id === 2 ? 'name' : ''">{{ item.printerModel }}</div>
      <div>{{ item.id }}</div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          printerModel: "kobe",
          id: 0,
        },
        {
          printerModel: "jordon",
          id: 1,
        },
        {
          printerModel: "curry",
          id: 2,
        },
      ],
      form: {
        ffyusb3: { port: "5004", name: "wang", age: "20" },
        ffyusb0: { port: "5006", name: "zhang", age: "1" },
        ffyusb1: { port: "5002", name: "zhou", age: "30" },
        ffyusb5: { port: "5005", name: "wu", age: "10" },
        ffyusb2: { port: "5003", name: "zeng", age: "50" },
        ffyusb6: { port: "5001", name: "li", age: "40" },
      },
    };
  },
  created() {
    this.test();
  },
  components: {},
  methods: {
    test() {
      function objKeySort(arys) {
        var keyList = Object.keys(arys).map((res) =>
          res.substr(res.length - 1, 1)
        );
        var valueList = Object.keys(arys);
        var mapList = arys;
        const resultList = new Map();
        for (let i = 0; i < keyList.length; i++) {
          resultList.set(keyList[i], mapList[valueList[i]]);
        }
        let obj = {};
        for (let [k, v] of resultList) {
          obj[Number(k) + 1] = v;
          // console.log(typeof k);
        }
        return obj;
      }
      this.form = objKeySort(this.form);
      console.log("新的列表", this.form);
    },
    getJoke() {
      this.$axios.get("https://autumnfish.cn/api/joke").then((res) => {
        console.log(res.data);
        this.joke = res.data;
      });
    },
    choose(index) {
      // console.log(index);
      // this.$router.push({ path: "/App1" }); //字符串路径
      // this.$router.push({ path: "/App1/333" }); //带有路径的对象
      // this.$router.push({ name: "App1", params: { id: "444" } }); // 命名路由，路由配置时，需要 name 字段
      this.$router.push({
        path: "/App1",
        query: { name: "kobe", age: "41", height: 198 },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.page {
  border: 1px solid red;
}
.name {
  color: red;
  font-size: 25px;
}
</style>