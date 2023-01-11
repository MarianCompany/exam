<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "TheProgramsList",
  data: () => {
    return {
      searchQuery: '',
      sortBy: '',
      filterBy: '',
      filterAlias: {
        'easy': {
          min: 0,
          max: 3.5,
        },
        'medium': {
          min: 3.6,
          max: 7.5,
        },
        'hard': {
          min: 7.6,
          max: 10,
        },
      }
    }
  },

  computed: {
    ...mapGetters({
      areProgramsLoaded: 'getAreProgramsLoaded',
      programs: 'getPrograms',
    }),

    filteredPrograms() {
      let result = this.programs;

      if (this.searchQuery) {
        result = result.filter(function(el) {
          return el.title.startsWith(this.searchQuery) || el.title.endsWith(this.searchQuery) || el.title.includes(this.searchQuery);
        }.bind(this));
      }

      if (this.filterBy) {
        result = result.filter(function(el) {
          return el.difficulty >= this.filterAlias[this.filterBy].min
              && el.difficulty <= this.filterAlias[this.filterBy].max;
        }.bind(this));
      }

      if (this.sortBy) {
        if (this.sortBy === 'priceToDown') {
          result = result.sort((a, b) => b.price - a.price);
        } else if (this.sortBy === 'priceToTop') {
          result = result.sort((a, b) => a.price - b.price);
        } else if (this.sortBy === 'popularityToDown') {
          result = result.sort((a, b) => b.popularity - a.popularity);
        } else if (this.sortBy === 'popularityToTop') {
          result = result.sort((a, b) => a.popularity - b.popularity);
        }
      }

      return result;
    },
  },

  methods: {
    ...mapActions({
      fetchPrograms: 'fetchPrograms',
      fetchReviews: 'fetchReviews',
    }),

    changePriceSort() {
      if (this.sortBy === 'priceToDown') {
        this.sortBy = 'priceToTop';
      } else if (this.sortBy === 'priceToTop') {
        this.sortBy = '';
      } else {
        this.sortBy = 'priceToDown';
      }
    },

    changePopularitySort() {
      if (this.sortBy === 'popularityToDown') {
        this.sortBy = 'popularityToTop';
      } else if (this.sortBy === 'popularityToTop') {
        this.sortBy = '';
      } else {
        this.sortBy = 'popularityToDown';
      }
    },

    changeProgramsFilter(query) {
      if (query === this.filterBy) {
        this.filterBy = '';
        return 0;
      }

      this.filterBy = query;
    },
  },

  created() {
    this.fetchPrograms();
  }
}
</script>

<template>
  <div v-if="areProgramsLoaded" class="programs__wrap">
    <div class="search">
      <input type="text" class="search__input" inputmode="text" placeholder="Поиск" v-model="searchQuery">
    </div>
    <div class="controls">
      <div class="controls__block">
        <p class="controls__title">
          Сортировка:
        </p>
        <div class="controls__wrap">
          <button
              @click.prevent="changePriceSort"
              class="controls__btn controls__btn_sort"
              :class="{
                    'controls__btn_active': sortBy.startsWith('price'),
                  }"
          >
            По цене
            <img
                src="/img/chevron.svg"
                class="controls__btn-chevron"
                :class="{
                      'controls__btn-chevron_up': sortBy === 'priceToDown',
                      'controls__btn-chevron_active': sortBy && sortBy.startsWith('price'),
                    }"
            >
          </button>
          <button
              class="controls__btn controls__btn_sort"
              :class="{
                    'controls__btn_active': sortBy.startsWith('popularity'),
                  }"
              @click.prevent="changePopularitySort"
          >
            По популярности
            <img
                src="/img/chevron.svg"
                class="controls__btn-chevron"
                :class="{
                      'controls__btn-chevron_up': sortBy === 'popularityToDown',
                      'controls__btn-chevron_active': sortBy && sortBy.startsWith('popularity'),
                    }"
            >
          </button>
        </div>
      </div>
      <div class="controls-block">
        <p class="controls__title">
          Фильтрация:
        </p>
        <div class="controls__wrap">
          <button
              @click="changeProgramsFilter('easy')"
              class="controls__btn"
              :class="{
                    'controls__btn_active': filterBy === 'easy',
                  }"
          >
            Легко
          </button>
          <button
              @click="changeProgramsFilter('medium')"
              class="controls__btn"
              :class="{
                    'controls__btn_active': filterBy === 'medium',
                  }"
          >
            Средне
          </button>
          <button
              @click="changeProgramsFilter('hard')"
              class="controls__btn"
              :class="{
                    'controls__btn_active': filterBy === 'hard',
                  }"
          >
            Сложно
          </button>
        </div>
      </div>
    </div>
    <div class="programs__list" v-if="filteredPrograms.length">
      <router-link
          v-for="item in filteredPrograms"
          class="programs__item"
          :key="item.title"
          :to="`/programs/${item.id}`"
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
          <router-link to="" class="btn programs__link">
            Записаться
          </router-link>
        </div>
      </router-link>
    </div>
    <p class="programs__text programs__msg" v-else>
      К сожалению, таких программ нет :(
    </p>
  </div>
</template>