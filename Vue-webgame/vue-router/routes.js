import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: '/number-baseball', component: NumberBall},
        { path: '/response-check', component: ResponseCheck},
        { path: '/rock-scissors-paper', component: RockScissorsPaper},
        { path: '/lotto-generator', component: LottoGenerator},
    ]
});
