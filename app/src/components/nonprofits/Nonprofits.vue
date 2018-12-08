<template>
  <section class="nonprofits">
    <h2>Nonprofits</h2>
    
    <AddNonprofit :onAdd="handleAdd"/>

    <ul v-if="nonprofits">
      <li v-for="nonprofit in nonprofits" :key="nonprofit.id">
        {{nonprofit.name}}
      </li>
    </ul>
  </section>
</template>

<script>
import api from '../../services/api';
import AddNonprofit from './AddNonprofit';
export default {
  data() {
    return {
      nonprofits: null,
      error: null
    };
  },
  components: {
    AddNonprofit
  },
  created() {
    api.getNonprofits()
      .then(nonprofits => {
        this.nonprofits = nonprofits;
      })
      .catch(err => {
        this.error = err;
      });
  },
  methods: {
    handleAdd(nonprofit) {
      return api.addNonprofit(nonprofit)
        .then(saved => {
          this.nonprofit.push(saved);
        });
    }
  }
};
</script>

<style lang="postcss" scoped>
</style>