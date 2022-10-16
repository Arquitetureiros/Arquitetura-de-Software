
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
    path: '/manterManga',
    component: () => import('pages/ManterManga.vue')
  },
  {
    path: '/acompanharpedido',
    component: () => import('pages/AcompanharPedido.vue')
  },
  {
    path: '/editarperfil',
    component: () => import('pages/EditarPerfil.vue')
  }
]

export default routes
