<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>

import Header from './site-components/Header';

export default {
  components: {
    AppHeader: Header
  }
}
</script>
