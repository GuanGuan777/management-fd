<template>
  <div class="home">
    <profile-card></profile-card>
    <classes-card v-for="item in list" :key="item.id" :data="item"></classes-card>
  </div>
</template>

<script>
// @ is an alias to /src
import profileCard from "./components/profileCard";
import classesCard from "@/components/global/classesCard";
import { getCourse } from "@/api/course";
export default {
  name: "Home",
  data() {
    return {
      list: []
    };
  },
  components: {
    profileCard: profileCard,
    classesCard: classesCard
  },
  mounted() {
    getCourse()
      .then(result => {
        this.list = result.data.data;
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>

<style lang="scss" scoped>
.home {
  margin: 0 auto;
  width: 1100px;
}
</style>
