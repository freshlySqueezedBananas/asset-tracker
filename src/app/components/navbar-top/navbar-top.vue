<template>
  <nav class="nav">
    <div class="nav-left">
      <a class="nav-item">
        <img src="/static/logo.png" alt="Bliss logo">
      </a>
    </div>

    <!-- This "nav-menu" is hidden on mobile -->
    <!-- Add the modifier "is-active" to display it on mobile -->
    <div class="nav-right">

      <div class="nav-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="button is-primary">
              <span>Logout</span>
              <span class="icon">
                <i class="fa fa-sign-out"></i>
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>
<script src="./navbar-top.js" lang="babel"></script>
<style src="./navbar-top.scss" lang="scss" scoped></style>
