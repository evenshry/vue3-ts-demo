<template>
  <div class="navigate">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style>
html,
body {
  height: 100%;
}

* {
  margin: 0px;
  padding: 0px;
}

#app {
  height: 100%;
  overflow-y: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 12px;
  color: #333;
}

.navigate {
  padding: 30px;
  font-size: 16px;
  text-align: center;
}
</style>
