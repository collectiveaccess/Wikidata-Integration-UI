<script>
  import { base } from '$app/paths';
</script>

<nav class="navbar" aria-label="main navigation">
  <div class="navbar-menu  is-active">
    <a href={`${base}/`} class="navbar-item">Home</a>
    <a href={`${base}/linked_data_graph`} class="navbar-item">Linked Data Graph</a>
    <a href={`${base}/wikidata`} class="navbar-item">Wikidata Integration</a>
  </div>
</nav>

<section class="main">
  <slot />
</section>

<style>
  nav {
    border-bottom: 1px solid #999;
  }

  .main {
    margin-top: 2rem;
  }
</style>
