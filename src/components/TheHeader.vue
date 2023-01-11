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
          <h4 class="nav__title">
            <router-link to="/">
              Fitness4You
            </router-link>
          </h4>
        </div>
        <div class="nav__block">
          <router-link to="/">
            Главная
          </router-link>
          <router-link to="/products">
            Программы тренировок
          </router-link>
        </div>
        <div class="nav__block">
          <v-avatar
            color=""
          >

          </v-avatar>
        </div>
      </nav>
    </div>
  </header>
</template>