<template>
  <div id="app" class="appStyle">
    <FormSearch />
    <router-view />
  </div>
</template>
<script>
import FormSearch from '@/components/FormSearch.vue';

export default {
  components:{
        FormSearch,
      },
};
</script>
<style>
.appStyle {
  z-index : 1
}
</style>