<template>
  <div id="app">
    <Header></Header>
    <b-container>
      <b-row>
        <b-col md="4"><Sidenav /></b-col>
        <b-col md="8"><MovieList /></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import Header from "@/components/Header";
import MovieList from "@/components/MovieList";
import Sidenav from "@/components/Sidenav";
export default {
  name: 'App',
  components: {
    Sidenav,
    MovieList,
    Header
  }
}
</script>

<style>

</style>
