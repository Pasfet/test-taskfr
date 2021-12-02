<template>
  <div class="card-wrapper">
    <div v-for="user in users" :key="user.id" class="card__item">
      <nuxt-link :to="`/users/${user.id}`">{{ user.name }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "UsersPage",
  layout: "main",
  async asyncData({ $axios }) {
    const { data } = await $axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    return { users: data };
  },
};
</script>

<style scoped>
.card-wrapper {
  padding: 20px;
}

.card__item {
  padding: 10px 0;
}
</style>
