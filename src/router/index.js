import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '@/components/test/HomeComponent.vue'
import { siderCardRouter } from './siderCardRouter';
import { LaunchedProjectRouter } from './LaunchedProjectRouter';
import { memberRouter } from './memberRouter';
import { oauthLoginRouter } from './oauthLoginRouter';
import {projectRouter} from './projectRouter'

const routes = [
    {
        path: '/home',
        name: 'HOME',
        component: HomeComponent
    },
    {
        path: '/',
        name: 'ROOT',
        component: HomeComponent
    },
    
    ...siderCardRouter,
    ...LaunchedProjectRouter,
    ...memberRouter,
    ...oauthLoginRouter,
    ...projectRouter
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router