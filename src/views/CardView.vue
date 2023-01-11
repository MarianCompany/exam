<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CardView",

  data: () => {
    return {
      programId: undefined,
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

    program() {
      return this.programs[this.programId];
    },
  },

  created() {
    this.fetchPrograms();
    this.programId = this.$route.params.id;
  }
}
</script>

<template>
  <div class="container">
    <div class="program__item" v-if="areProgramsLoaded">
      <h4 class="program__title">
        {{ program.title }}
      </h4>
      <p class="program__text">
        {{ program.description }}
      </p>
      <p class="program__text">
        <b>Сложность:</b> <span class="program__text_highlighted">{{ program.difficulty }}</span>
      </p>
      <p class="program__text">
        <b>Популярность:</b> <span class="program__text_highlighted">{{ program.popularity }}</span>
      </p>
      <p class="program__text">
        <b>Цена:</b> <span class="program__text_highlighted">{{ program.price }}</span>
      </p>
    </div>
  </div>
</template>