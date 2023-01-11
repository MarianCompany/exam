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
  <div class="body">
    <TheHeader />

    <main>
      <router-view/>
    </main>

    <TheFooter />
  </div>
</template>

<style lang="scss">
  @import '@/assets/css/main.scss';
</style>
