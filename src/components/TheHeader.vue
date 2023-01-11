<script>
export default {
  name: "TheHeader"
}
</script>

<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <div class="nav__block">
          <router-link to="/" class="nav__title">
            Fitness4You
          </router-link>
        </div>
        <div class="nav__block nav__links">
          <router-link to="/" class="nav__link">
            Главная
          </router-link>
          <a href="#programs" class="nav__link">
            Программы тренировок
          </a>
          <a href="/data/products.json" class="nav__link nav__link_sm">
            Программы
          </a>
          <a href="/data/reviews.json" class="nav__link nav__link_sm">
            Отзывы
          </a>
          <a href="https://github.com/MarianCompany/exam" class="nav__link nav__link_sm">
            Git-репо
          </a>
        </div>
        <div class="nav__block nav__avatar-block">
          <v-avatar
            color="#9216FB"
          >
            MA
          </v-avatar>
          <p class="nav__avatar-text">
            Привет, <span class="nav__avatar-text_highlighted">marinad</span>!
          </p>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
  @import '@/assets/css/main.scss';
</style>