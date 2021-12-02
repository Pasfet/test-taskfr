<template>
  <header class="header">
    <form action="#" class="header__form search-form">
      <label class="search-form__label">
        <input
          type="text"
          placeholder="Поиск по системе"
          class="search-form__input"
        />
        <search-icon class="search-form__icon" />
      </label>
    </form>
    <div class="header__user user-info">
      <div class="user-info__avatar">
        <img src="~/assets/avatar.png" alt="avatar" />
      </div>
      <div class="user-info__description">
        <span class="user-info__name"
          ><b> {{ user.name }} </b></span
        >
        <span class="user-info__role">{{ user.role }}</span>
      </div>
    </div>
  </header>
</template>

<script>
import SearchIcon from "~/assets/SearchIcon.vue";

export default {
  name: "Header",
  components: {
    SearchIcon,
  },
  data: () => ({
    user: {
      name: "Alexander C.",
      role: "Администратор",
    },
  }),
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.search-form {
  width: 70%;
}

.search-form__label {
  width: 100%;
  position: relative;
}

.search-form__input {
  border-radius: 5px;
  border: 1px solid #e2e2e2;
  width: inherit;
  padding: 15px;
}

.search-form__icon {
  width: 20px;
  position: absolute;
  right: 10px;
  top: 50%;
  fill: #e2e2e2;
  transform: translate(-10px, -50%);
}

.search-form__icon:hover {
  cursor: pointer;
}

.user-info {
  display: flex;
}

.user-info__avatar {
  width: 40px;
  height: 40px;
  background-color: #e2e2e2;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-info__avatar img {
  width: 30px;
  height: 30px;
  object-fit: contain;
}

.user-info__description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5px;
}

.user-info__name {
  font-size: 16px;
}

.user-info__role {
  color: #808080;
  font-size: 12px;
}
</style>
