<template>
<div>
  <b-card class="mt-4" title="映画監督">
    <b-form>
      <b-form-group
      label="監督名"
      label-for="input-director-name"
      >
        <b-form-input
            id="input-director-name"
        type="text"
        placeholder="監督名"
        size="sm"
        required
        ></b-form-input>
      </b-form-group>

      <b-form-group
      label="年齢マムシ"
      label-for="input-director-age"
      >
        <b-form-input
            id="input-director-age"
        type="number"
        placeholder="チミマム年齢"
        size="sm"
        required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="outline-info">てぃみる？</b-button>
    </b-form>
  </b-card>

  <b-card class="mt-4" title="映画作品">
    <b-form>
      <b-form-group
          label="タイトル"
          label-for="input-movie-name"
      >
        <b-form-input
            id="input-movie-name"
            type="text"
            placeholder="タイトル"
            size="sm"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group
          label="ジャンル"
          label-for="input-movie-genre"
      >
        <b-form-input
            id="input-movie-genre"
            type="number"
            placeholder="ジャンル"
            size="sm"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="監督"
        label-for="input-movie-director"
      >
        <b-form-select
        size="sm">
          <b-form-select-option>あああ</b-form-select-option>
          <b-form-select-option>あああ</b-form-select-option>
          <b-form-select-option>あああ</b-form-select-option>
        </b-form-select>

      </b-form-group>

      <b-button type="submit" variant="outline-info">てぃみる？</b-button>
    </b-form>
  </b-card>




</div>
</template>

<script>
export default {
  name: "Sidenav"
}
</script>

<style scoped>

</style>