import {createRouter, createWebHashHistory, Router} from 'vue-router';
import MainPage from '../views/MainPage.vue';
import ImageViewPage from '../views/ImageViewPage.vue';
import AboutPage from '../views/AboutPage.vue';
import SupportPage from '../views/SupportPage.vue';
import SkylandPage from '../views/additional/SkylandPage.vue';

const router: Router = createRouter({
    history: createWebHashHistory('/web'),
    routes: [
        {
            path: '/',
            name: 'Main',
            component: MainPage
        },
        {
            path: '/view',
            name: 'Image',
            component: ImageViewPage
        },
        {
            path: '/about',
            name: 'About',
            component: AboutPage
        },
        {
            path: '/support',
            name: 'Support',
            component: SupportPage
        },
        {
            path: '/additional',
            name: 'Additional',
            children: [
                {
                    path: '/additional/skyland',
                    name: 'Additional',
                    component: SkylandPage
                }
            ]
        }
    ]
});

export default router;
