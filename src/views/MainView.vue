<template>
  <div class="container">
    <div class="cap">
      <img src="/img/cap-img.png" alt="" class="cap__img">
      <div class="cap__description">
        <h1 class="cap__title">
          Пора уже взяться за себя
        </h1>
        <p class="cap__text">
          Начни новую жизнь вместе с <span class="cap__company">Fitness4You</span>! <br> Для современного человека, забота о физическом состоянии — ключевой фактор к достижению целей. Запишись всего в пару кликов вместе с нами!
        </p>
        <a href="#programs" class="cap__btn">
          Записаться
        </a>
      </div>
    </div>
    <div id="programs" class="programs">
      <div class="programs__title-wrap">
        <h2 class="programs__section-title">
          Программы тренировок
        </h2>
      </div>
      <div v-if="areProgramsLoaded" class="programs__wrap">
        <div class="search">
          <input type="text" class="search__input" inputmode="text" placeholder="Поиск">
        </div>
        <div class="controls">
          <div class="controls__block">
            <p class="controls__title">
              Сортировка:
            </p>
            <div class="controls__wrap">
              <button class="controls__btn controls__btn_sort">
                По цене <img src="/img/chevron.svg" class="controls__btn-chevron">
              </button>
              <button class="controls__btn  controls__btn_sort">
                По популярности <img src="/img/chevron.svg" class="controls__btn-chevron">
              </button>
            </div>
          </div>
          <div class="controls-block">
            <p class="controls__title">
              Фильтрация:
            </p>
            <div class="controls__wrap">
              <button class="controls__btn">
                Легко
              </button>
              <button class="controls__btn">
                Средне
              </button>
              <button class="controls__btn">
                Сложно
              </button>
            </div>
          </div>
        </div>
        <div class="programs__list">
          <div
              v-for="item in programs"
              class="programs__item"
              :key="item.title"
          >
            <img v-if="item.popularity > 7.5" src="/img/fire.svg" alt="" class="programs__fire" fill="#9216FB">
            <div class="programs__cap">
              <h4 class="programs__title">
                {{ item.title }}
              </h4>
              <img :src="item.icon" alt="" class="programs__icon">
            </div>
            <div class="programs__body">
              <p class="programs__text">
                {{ item.description }}
              </p>
            </div>
            <div class="programs__footer">
              <p class="programs__price">
                {{ item.price }} ₽
              </p>
              <router-link to="" class="programs__link">
                Записаться
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "MainView",
  data: () => {
    return {

    }
  },

  methods: {
    ...mapActions({
      fetchPrograms: 'fetchPrograms',
    }),
  },

  computed: {
    ...mapGetters({
      areProgramsLoaded: 'getAreProgramsLoaded',
      programs: 'getPrograms',
    }),
  },

  created() {
    this.fetchPrograms();
  }
}
</script>