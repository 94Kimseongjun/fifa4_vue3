import { createRouter, createWebHashHistory } from 'vue-router';
import FormSearch from '@/components/FormSearch.vue';
import ResultSearch from '@/components/ResultSearch.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'FormSearch',
      component: FormSearch,
    },
    {
      
        path: '/ResultSearch/:inputNickName',
        name: 'ResultSearch',
        component: ResultSearch,
        props: true
      
    },
  ],
});

export default router;