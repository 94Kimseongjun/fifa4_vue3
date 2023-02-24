<template>
  <div class="result-container">
    <div v-if="loading">
      Loading...
    </div>
    <div v-else>
      <div>
        <div v-if="items">
          <p v-if="items.nickname">Name of owner: {{ items.nickname }}</p>
          <p v-if="items.level">Level: {{ items.level }}</p>
          <p v-if="items.rank"> Official Match Highest Rank: {{ items.rank.division }}, Achievement Date: {{
            items.rank.achievementDate
          }} </p>
          <p v-else> There is no official game data. </p>
          <p v-if="items.autoRank"> Supervisor mode highest grade: {{ items.autoRank.division }}, achievement date: {{
            items.autoRank.achievementDate
          }} </p>
          <p v-else> Supervisor mode data does not exist. </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {

  data() {
    return {
      items: [],
      loading: false,
    };
  },
  created() {
    this.loading = true;
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await this.callExternalAPI(this.$route.params.inputNickName);
        this.items = response.data;
        this.loading = false;
      } catch (error) {
        console.error(error);
        this.loading = false;
      }
    },

    callExternalAPI(inputNickName) {
      return axios.post('http://127.0.0.1:8000/searchNickName', { 'nickName': inputNickName });
    },
  },
};
</script>


<style>
.result-container {
  margin-top: 200px;
  z-index: 100;
}
</style>