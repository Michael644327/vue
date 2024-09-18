import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue'; // 假設有一個 Home.vue 頁面
import Home from '../components/HelloWorld.vue';
import note from '/src/pages/note.vue'
import registerForm from '/src/pages/registerForm.vue'
import changecolor from '/src/pages/changeColor.vue'
import parentspage from '/src/pages/parents.vue'
import childpage from '/src/pages/child.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { showInMenu: true },
    component: Home
  },

  {
    path: '/note', component: note, name: 'noteDemo',
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
    path: '/RegisterForm',
    name: 'Register',
    meta: { showInMenu: true },
    component: registerForm
  },
  {
    path: '/color',
    name: 'changeColor',
    meta: { showInMenu: true },
    component: changecolor
  },
  {
    path: '/parents',
    name: '父元件',
    meta: { showInMenu: true },
    component: parentspage
  },
  {
    path: '/child',
    name: 'child',
    meta: { showInMenu: true },
    component: childpage
  },
  {
    path: '/pinia',
    name: 'Pinia狀態管理',
    meta: { showInMenu: true },
    component: () => import('../pages/PiniaStore.vue')
  },
  {
    path: '/axiosdemo',
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