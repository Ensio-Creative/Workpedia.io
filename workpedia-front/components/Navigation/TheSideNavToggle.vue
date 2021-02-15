<template>
  <div
    class="drawer-toggle"
    role="button"
    @click="$emit('toggle'
    )"
  >
    <div class="bar" />
    <div class="bar" />
    <div class="bar" />
  </div>
</template>

<style scoped>
.drawer-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  width: 35px;
  cursor: pointer;
}

@media (min-width: 768px) {
  .drawer-toggle {
    display: none;
  }
}

.bar {
  width: 90%;
  height: 1px;
  background-color: #000;
  padding: 2px;
}
 .bar:nth-child(2) {
  width: 90%;
  height: 1px;
  margin-top: 5px;
  background-color: #000;
}
.bar:nth-child(3){
  width: 90%;
  height: 1px;
  margin-top: 5px;
  background-color: #000;
}
</style>
