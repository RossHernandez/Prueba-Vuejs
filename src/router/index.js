import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

const routes = [
    {
        path:'/hola',
        name:'componenteA',
        component: () => import('@/components/HelloWorld'),
    },
    {
        path:'/',
        name:'ComponenteB',
        component: () => import('@/components/ComponenteB'),
    },
    {
        path:'/imagenes',
        name:'Imagenes',
        component: () => import('@/components/Imagenes'),
    }

];

const router =  new Router({
    mode:'history',
    base:process.env.BASE_URL,
    routes:routes
});

export default router;
