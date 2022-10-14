<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-primary">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="bg-primary">
          Pagamento
        </q-toolbar-title>
        <div>
          <q-btn flat color="white" label="Entrar/Cadastrar"
          size="13px"
          />
        </div>
        <div>
          <q-btn round>
            <q-avatar size="42px">
              <img src="public/avatar.png">
            </q-avatar>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <div class="q-pa-md" style="display: grid; justify-content: center; padding-top:100px;">
        <div class="q-gutter-y-md column" style="max-width: 300px">
          Busca por um produto
          <q-input outlined v-model="busca" />
          <div >
            <q-btn color="primary" icon-right="search" label="Pesquisar" />
          </div>
        </div>
      </div>
    </q-page-container>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
        Opções
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />

      </q-list>
    </q-drawer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Início',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Pedidos',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Criar anúncio',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Minhas vendas',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Meus produtos',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Carrinho',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Meu perfil',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  },
  {
    title: 'Pagamentos',
    icon: 'receipt',
    link: 'localhost:9000/#/'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)
    const nrItens = ref(1)
    const busca = ref()

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      nrItens,
      busca
    }
  }
})
</script>
