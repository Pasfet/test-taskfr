<template>
  <div class="breadcrumbs">
    <ul class="breadcrumbs__list">
      <li class="breadcrumbs__item">
        <nuxt-link to="/">
          <home-icon class="breadcrumbs__home-icon" />
        </nuxt-link>
      </li>
      <li class="breadcrumbs__item">
        <nuxt-link to="/users"> Пользователи </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import HomeIcon from "~/assets/HomeIcon.vue";

export default {
  name: "Breadcrumbs",
  components: {
    HomeIcon,
  },
};
</script>

<style scoped>
.breadcrumbs {
  padding: 20px;
}
.breadcrumbs__list {
  list-style-type: none;
  display: flex;
  align-items: center;
}

.breadcrumbs__item {
  margin-right: 30px;
  position: relative;
}

.breadcrumbs__item:not(:last-child)::after {
  content: "";
  position: absolute;
  top: 50%;
  transform: translate(20%, -50%);
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: cover;
  background-image: url("data:image/svg+xml,%3Csvg width='24px' height='24px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z' /%3E%3C/svg%3E%0A");
}

.breadcrumbs__item a {
  text-decoration: none;
  color: #000;
}
</style>
