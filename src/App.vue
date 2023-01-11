<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>

<template>
  <TheHeader />

  <main>
    <router-view/>
  </main>

  <TheFooter />
</template>

<style lang="scss">
@import '@/assets/css/main.scss';
</style>
