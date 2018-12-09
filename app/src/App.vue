<template>
  <div id="app">
    <header>
      <img alt="nonprofits hands logo" src="./assets/nonprofits.jpg">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/nonprofits">Nonprofits</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView></RouterView>
    </main>
    
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
header {
  height: 75px;
  background: rgb(169, 186, 209);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
header img {
  height: 100%;
}
nav {
  text-decoration: none;
  color: black;
  margin: 3px;
  padding: 3px;
  border: 1px solid black;
}
main {
  padding: 8px;
}
</style>
