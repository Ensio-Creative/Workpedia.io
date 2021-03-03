<template>
  <div>
    <div class="search-container">
      <label for="exampleFormControlInput1">Search for a job</label>
      <input type="email" class="form-control gray mb-2" placeholder="eg. mathematics">
      <b-form-select v-model="selected" :options="options" />
      <b-form-select v-model="selected" :options="options" size="sm" class="mt-3" />
      <button class="btn btn-search form-control mt-2">
        Search
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheJobsSideSearch',
  data () {
    return {
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ]
    }
  }
}
</script>

<style scoped>
.btn-search{
  background-color: #0DB47B;
  color: #fff;
}
.search-container{
  margin-top: 20px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 5px #00000029;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
