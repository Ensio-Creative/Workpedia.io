<template>
  <div>
    <!-- Categories Nav -->
    <div
      class="container bg-jobs-categories my-3"
    />
    <header class="container heading-search">
      <div class="row">
        <div class="col">
          <AppControlInput
            v-model="location"
            type="text"
            placeholder="Enter a location"
          />
        </div>
        <div class="col select-control">
          <select
            name="choose job type"
          >
            <option
              selected
              required
            >
              Choose a job type
            </option>
            <option
              required
            >
              Full Time
            </option>
            <option
              required
            >
              Part Time
            </option>
            <option
              required
            >
              Remote
            </option>
            <option
              required
            >
              Intern
            </option>
            <option
              required
            >
              Contract
            </option>
          </select>
        </div>
        <div class="col">
          <AppControlInput
            v-model="title"
            type="text"
            placeholder="Enter a title"
          />
        </div>
      </div>
    </header>
    <NuxtChild />
  </div>
</template>

<script>
export default {
  name: 'Categories',
  data () {
    return {
      displaySidenav: false,
      title: '',
      location: ''
    }
  }
}
</script>

<style scoped>
.categories-nav{
  background-color: #fff;
}
.categories-nav a{
  color: rgba(0, 0, 0, 0.5);
}
.categories-nav a:hover,
.categories-nav a:active,
.categories-nav a.nuxt-link-active {
  color: #251E8C;
}
.bg-jobs-categories {
  background-image: url('~static/img/workpedia-jobs-header.svg');
  height: 80vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.heading-search{
  margin-top: 60px;
}
.select-control {
  display: flex;
}
.select-control select{
  display: block;
  background-color: #E9E9E9;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  padding: 10px;
  border: 0px;
  height: 47px;
  align-self: center;
  border-radius: 8px;
}

.select-control select:focus {
  background-color: #E9E9E9;
  outline: none;
  border: 0px;
}

/* .select-control option {
  padding: 40px;
} */
</style>
