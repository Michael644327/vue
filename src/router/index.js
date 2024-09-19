import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue'; // 假設有一個 Home.vue 頁面
import Home from '../components/HelloWorld.vue';
import note from '/src/pages/note.vue'
import registerForm from '/src/pages/registerForm.vue'
import changecolor from '/src/pages/changeColor.vue'

const routes = [
  {
    path: '/portfolio/vue/',
    name: 'Home',
    meta: { showInMenu: true },
    component: Home
  },

  {
    path: '/portfolio/vue/note', component: note, name: 'noteDemo',
    meta: { showInMenu: true },
    children: [
      {
        path: '', name: 'noteDemo',
        component: () => import('/src/components/NoteField.vue'),
      },
      {
        path: 'add', name: 'addNote',
        component: () => import('/src/components/addNote.vue'),
      },

      {
        path: 'edit/:id', name: 'editNote', props: route => ({ id: Number(route.params.id) }),
        component: () => import('/src/components/editNote.vue'),
      },

    ]
  },
  {
    path: '/portfolio/vue/RegisterForm',
    name: 'Register',
    meta: { showInMenu: true },
    component: registerForm
  },
  {
    path: '/portfolio/vue/color',
    name: 'changeColor',
    meta: { showInMenu: true },
    component: changecolor
  },
  {
    path: '/portfolio/vue/pinia',
    name: 'Pinia狀態管理',
    meta: { showInMenu: true },
    component: () => import('../pages/PiniaStore.vue')
  },
  {
    path: '/portfolio/vue/axiosdemo',
    name: 'AxiosDemo',
    meta: { showInMenu: true }, 
    component: () => import('../pages/AxiosDemo.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;