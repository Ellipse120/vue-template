<template>
    <section>
        <transition name="fade-transform" mode="out-in">
            <router-view :key="key"></router-view>
        </transition>
    </section>
</template>

<script>
export default {
  name: "AppMain",
  data() {
    return {
      temp: ""
    };
  },
  computed: {
    key() {
      return this.$route.fullPath;
    }
  }
};
</script>

<style scoped>
</style>
