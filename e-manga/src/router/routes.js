
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
  {
    path: '/pagamentos',
    component: () => import('pages/IndexPagamento.vue')
  },
  {
    path: '/login',
    component: () => import('pages/logarSistema.vue')
  },
  {
    path: '/busca',
    component: () => import('pages/BuscaProduto.vue')
  }
]

export default routes
