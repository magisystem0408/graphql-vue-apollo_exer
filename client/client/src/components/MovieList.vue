<template>
  <b-table-simple outlined hover class="mt-4">
    <b-thead>
      <b-tr>
        <b-th>タイトル</b-th>
        <b-th>ジャンル</b-th>
        <b-th>監督</b-th>
      </b-tr>
    </b-thead>
    <b-tbody>
      <b-tr v-for="movie in movies" :key="movie.id">
        <b-td>{{movie.name}}</b-td>
        <b-td>{{movie.genre}}</b-td>
        <b-td>{{movie.director}}</b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>
</template>

<script>
import {MOVIE_LIST} from "@/graphql/queries";

export default {
  name: "MovieList",
  apollo:{
    movies:MOVIE_LIST
  }
}
</script>

<style scoped>

</style>