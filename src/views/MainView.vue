<script>
import {mapActions, mapGetters} from "vuex";
import TheProgramsList from "@/components/TheProgramsList";
import TheReviewForm from "@/components/TheReviewForm";

export default {
  name: "MainView",
  components: {
    TheProgramsList,
    TheReviewForm,
  },

  data: () => {
    return {

    }
  },

  methods: {
    ...mapActions({
      fetchReviews: 'fetchReviews',
    }),
  },

  computed: {
    ...mapGetters({
      areReviewsLoaded: 'getAreReviewsLoaded',
      reviews: 'getReviews',
    }),
  },

  created() {
    this.fetchReviews();
  }
}
</script>

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
        <a href="#programs" class="btn cap__btn">
          Записаться
        </a>
      </div>
    </div>
    <div id="programs" class="programs">
      <div class="programs__title-wrap">
        <h2 class="programs__section-title">
          Программы тренировок
        </h2>
        <TheProgramsList />
      </div>
    </div>
    <div class="review">
      <h4 class="review__title">
         Отзывы
      </h4>
      <div class="review__list" v-if="areReviewsLoaded">
        <div class="review__item" v-for="item in reviews" :key="item.name">
          <p class="review__name">
            {{ item.name }}
            <span class="review__date">
              {{ item.date }}
            </span>
          </p>
          <p class="review__text">
            {{ item.text }}
          </p>
        </div>
      </div>
      <TheReviewForm />
    </div>
  </div>
</template>