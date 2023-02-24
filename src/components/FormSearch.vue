<template>
  <div class="fixed-search" :style="fromTop ? { top: formTop.value + 'px' } : {}">
  <form>
    <div class="form-group">
      <input type="text" class="form-control" v-model="searchTerm">
    </div>
    <button class="btn btn-primary" @click.prevent="submitSearch">Search</button>
  </form>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup(){
    const fromTop = ref(0);

    return {
      fromTop
    }
  },
  data() {
    return {
      searchTerm: '',
    };
  },
  methods: {
    async submitSearch() {
      this.$router.push({
        name: 'ResultSearch',
        params: { 'inputNickName': this.searchTerm },
      });
    },
  },
};
</script>


<style>
.fixed-search {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 2;
}
</style>