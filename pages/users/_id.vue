<template>
  <div class="card">
    <div>{{ user.name }}</div>
    <div>{{ user.username }}</div>
    <div>{{ user.email }}</div>
    <div>{{ user.phone }}</div>
    <div>{{ user.website }}</div>
  </div>
</template>

<script>
export default {
  name: "UserPage",
  layout: "main",
  async asyncData({ params, $axios }) {
    const { data } = await $axios.get(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    return { user: data };
  },
};
</script>

<style scoped>
.card {
  padding: 20px;
}

.card > div {
  padding: 10px 0;
}
</style>
