<template>
  <div class="row">
    <div class="col-4">選單
      <div class="list-group">

        <router-link
          to="/newpage/a"
          class="list-group-item list-group-item-action"
        >元件 A</router-link>
        <router-link
          to="/newpage/b"
          class="list-group-item list-group-item-action"
        >元件 B</router-link>
        <router-link
          to="/newpage/namedView/c2a"
          class="list-group-item list-group-item-action"
        >命名視圖 c2a</router-link>
        <router-link
          to="/newpage/namedView/a2c"
          class="list-group-item list-group-item-action"
        >命名視圖 a2c</router-link>

      </div>
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>
