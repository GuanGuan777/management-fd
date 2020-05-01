<template>
  <div class="home">
    <profile-card></profile-card>
    <classes-card v-for="item in list" :key="item.id" :data="item"></classes-card>
  </div>
</template>

<script>
// @ is an alias to /src
import profileCard from "./components/profileCard";
import classesCard from "./components/classesCard";
export default {
  name: "Home",
  data() {
    return {
      list: [
        {
          cid: "63012CC006",
          title: "高等数学",
          category: "必修课",
          credit: 2,
          hours: 64
        },
        {
          cid: "63012CC006",
          title: "大学英语",
          category: "必修课",
          credit: 2,
          hours: 64
        }
      ]
    };
  },
  components: {
    profileCard: profileCard,
    classesCard: classesCard
  }
};
</script>

<style lang="scss" scoped>
.home {
  margin: 0 auto;
  width: 1100px;
}
</style>
