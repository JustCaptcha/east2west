<template>
  <div>
    <header>
      <ul id="dropdown1" class="dropdown-content">
        <li><a href="" @click.prevent="setLang('pl')">PL</a></li>
        <li><a href="">RU</a></li>
        <li><a href="">UA</a></li>
        <li class="divider"></li>
        <li><a href="">EN</a></li>
      </ul>
      <nav>
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo">East 2 West</a>
          <ul class="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <!-- Dropdown Trigger -->
            <li><a class="dropdown-button" href="" data-activates="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
          </ul>
        </div>
      </nav>
    </header>
    <main>

    </main>
    <footer>

    </footer>
  </div>
</template>
<script>
  $(document).ready(() => {
    $('.parallax').parallax();
    $('.dropdown-button').dropdown();
  });
  export default {
    name: 'test layout',
    methods: {
      setLang(lang) {
        this.$store.dispatch('language/SETLANG', lang);
      },
    },
  };

</script>
<style lang='stylus'>
  .brand-logo {
    margin-left: 30px;
  }

  nav {
    background-color: blue;
  }

</style>
