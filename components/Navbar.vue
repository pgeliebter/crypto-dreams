<template>
  <header class="navbar py-0 page-header navbar-expand navbar-light px-4">
    <ul class="navbar-nav d-flex align-items-center h-100">
      <li class="nav-item d-flex flex-column h-100 justify-content-center dropdown">
        <!-- Icon made by Pixel perfect from www.flaticon.com -->
        <img src="/favicon.png" class="fe-4x align-middle" alt />
      </li>
      <!-- test -->

      <!-- this is the four squares which will be used for navigation -->
    </ul>
    
    

    <ul class="navbar-nav ps-5 me-lg-5">
      <p class="nav-item align-self-center mb-0 ps-2 pe-3 flex-shrink-1 h5">Welcome to Crypto Dreams!</p>
      <li class="nav-item py-lg-3 me-lg-2">
        <a class="nav-link" :class="this.$route.name === 'index' ? 'active' : ''" href="/">Spreads</a>
      </li>
      <li class="nav-item py-lg-3 me-lg-2">
        <a
          class="nav-link"
          :class="this.$route.name === 'prices' ? 'active' : ''"
          href="/prices"
        >Prices</a>
      </li>
    </ul>
  </header>
</template>
<script>
</script>