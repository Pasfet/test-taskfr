<template>
  <aside class="aside">
    <div class="aside__top">
      <div class="aside__logo"></div>
      <ul class="aside__list menu">
        <li v-for="item in $options.menuList" :key="item.id" class="menu__item">
          <nuxt-link :to="item.to" class="menu__item__link">
            <component :is="item.url" class="menu__item__image"></component>
            <span class="menu__item__title">{{ item.value }}</span>
          </nuxt-link>
          <div class="menu__item_fake"></div>
        </li>
      </ul>
    </div>
    <div class="aside__actions">
      <help-icon class="aside__actions-button" />
    </div>
  </aside>
</template>

<script>
import DocsIcon from "~/assets/DocsIcon.vue";
import UsersIcon from "~/assets/UsersIcon.vue";
import WarningIcon from "~/assets/WarningIcon.vue";
import CallIcon from "~/assets/CallIcon.vue";
import HelpIcon from "~/assets/HelpIcon.vue";

export default {
  name: "Sidebar",
  components: {
    DocsIcon,
    UsersIcon,
    WarningIcon,
    CallIcon,
    HelpIcon,
  },
  menuList: [
    {
      id: "1",
      url: "DocsIcon",
      value: "Опросы",
      to: "/",
    },
    {
      id: "2",
      url: "UsersIcon",
      value: "Пользователи",
      to: "/users",
    },
    {
      id: "3",
      url: "WarningIcon",
      value: "Черные списки",
      to: "/blacklist",
    },
    {
      id: "4",
      url: "CallIcon",
      value: "Колл-центр",
      to: "/call",
    },
  ],
};
</script>

<style scoped>
.aside {
  padding: 16px 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px -2px 5px 1px rgb(185 182 182 / 50%);
}

.aside__logo {
  margin: 0 auto 20px;
  width: 40px;
  height: 40px;
  background-color: red;
  border-radius: 50%;
}

.aside__actions {
  border: 1px solid #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  transition: border 0.3s ease;
}

.aside__actions-button {
  stroke: #000;
  transition: stroke 0.3s ease;
}

.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu {
  list-style-type: none;
}

.menu__item {
  position: relative;
  width: 100%;
  padding: 10px;
  margin-bottom: 5px;
  text-align: center;
  border: 2px solid transparent;
  background-color: transparent;
  transition: background-color 0.3s ease;
}

.menu__item_fake {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 10px;
  border: 2px solid transparent;
  transition: border 0.3s ease;
  z-index: -10;
}

.menu__item__link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #000;
}

.menu__item__link.nuxt-link-active.nuxt-link-exact-active {
  color: #85d50b;
}

.menu__item__link.nuxt-link-active.nuxt-link-exact-active + .menu__item_fake {
  border-color: #85d50b;
}

.menu__item__link.nuxt-link-active + .menu__item_fake:hover {
  border: transparent;
}

.menu__item__link.nuxt-link-active.nuxt-link-exact-active svg {
  fill: #85d50b;
}

.menu__item__image {
  width: 40px;
  transition: fill 0.3s ease;
}

.menu__item__title {
  font-weight: 600;
  font-size: 12px;
  margin-top: 10px;
  transition: color 0.3s ease;
}

.menu__item:hover {
  background-color: #e2e2e2;
  cursor: pointer;
}

.menu__item:hover .menu__item__image,
.menu__item:hover .menu__item__title {
  fill: #000;
  color: #000;
}

.aside__actions:hover,
.aside__actions:hover .aside__actions-button {
  border-color: #85d50b;
  stroke: #85d50b;
  cursor: pointer;
}
</style>
