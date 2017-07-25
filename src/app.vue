<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>

import Header from './site-components/Header';
import Footer from './site-components/Footer';

export default {
  components: {
    AppHeader: Header,
    AppFooter: Footer
  }
}
</script>
