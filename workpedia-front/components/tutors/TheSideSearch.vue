<template>
  <div>
    <div class="search-container">
      <label for="exampleFormControlInput1">Search Tutors</label>
      <input type="email" class="form-control gray" placeholder="eg. mathematics">
    </div>
    <div class="tables-container">
      <table class="table">
        <thead class="thead-light">
          <tr>
            <th scope="col">
              Trending
            </th>
            <th scope="col">
              Courses
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              Mathematics:
            </th>
            <td>Algebra</td>
          </tr>
          <tr>
            <th scope="row">
              Music:
            </th>
            <td>Violin</td>
          </tr>
          <tr>
            <th scope="row">
              Computer:
            </th>
            <td>Data Science</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideSearch'
}
</script>

<style scoped>
.search-container{
  margin-top: 20px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 5px #00000029;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
