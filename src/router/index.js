import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HelloWorld.vue';
import note from '/src/pages/note.vue'
import registerForm from '/src/pages/registerForm.vue'
import changecolor from '/src/pages/changeColor.vue'

const routes = [
  {
    path: '/vue',
    name: 'Home',
    meta: { showInMenu: true },
    component: Home
  },

  {
    path: '/vue/note', component: note, name: 'note',
    meta: { showInMenu: true },
    children: [
      {
        path: '', name: 'note',
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
    path: '/vue/registerForm',
    name: '表單練習',
    meta: { showInMenu: true },
    component: registerForm
  },
  {
    path: '/vue/color',
    name: '輸入偵測練習',
    meta: { showInMenu: true },
    component: changecolor
  },
  {
    path: '/vue/pinia',
    name: 'Pinia狀態管理',
    meta: { showInMenu: true },
    component: () => import('../pages/PiniaStore.vue')
  },
  {
    path: '/vue/axios',
    name: 'Axios練習',
    meta: { showInMenu: true }, 
    component: () => import('../pages/AxiosDemo.vue')
  },
];


const router = createRouter({
  mode: 'hash', //使用hash模式，在github pages上達到直連效果
  history: createWebHistory(),
  routes
});

export default router;