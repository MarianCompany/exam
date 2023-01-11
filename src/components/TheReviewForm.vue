<script>
import {mapActions} from "vuex";

export default {
  name: "TheReviewForm",
  data: () => {
    return {
      name: '',
      text: '',
    }
  },
  methods: {
    ...mapActions({
      sendForm: 'sendForm',
    }),
  },
}
</script>

<template>
  <form action="" class="form review__form">
    <h4 class="form__title">
      Оставить отзыв:
    </h4>
    <div class="form__wrap">
      <input type="text" class="form__input" inputmode="text" name="name" placeholder="Ваше имя" v-model="name">
      <textarea name="text" id="" cols="30" rows="5" placeholder="Ваш отзыв" class="form__textarea" v-model="text"></textarea>
      <button class="btn form__btn" @click.prevent="sendForm({name, text})">
        Отправить
      </button>
    </div>
  </form>
</template>