<template>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.home {
  display: flex;
  gap: 3rem;

  .book-details {
    flex-grow: 1;
    padding: 1rem;
    border: 1px solid #ccc;
  }
}
</style>
