<template>
    <nav class=" navbar fixed-top navbar-expand-lg navbar-light">
    <div class="container containernav">
      <a class="navbar-brand" href="#"
        ><img class="logoimg" src="https://www.oblivius.ma/images/logo.png"
      /></a>
      <button
        class="navbar-toggler p-0 border-0"
        type="button"
        id="navbarSideCollapse"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav ms-auto mt-1 navbar-nav-scroll">
          <li class="nav-item">
            <a class="nav-link ms-2 active" aria-current="page" href="#header">
              <p style="font-weight: bold">Accueil</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link ms-2" href="#services">
              <p style="font-weight: bold">à propos</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link ms-2" href="#details">
              <p style="font-weight: bold">Services</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link ms-2" href="#features">
              <p style="font-weight: bold">Process</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link ms-2" href="#features">
              <p style="font-weight: bold">Réalisations</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link ms-2 me-4" href="#features">
              <p style="font-weight: bold">contact</p>
            </a>
          </li>
        </ul>
        <span class="nav-item">
          <a class="nav-link devis text-white btn-navbar" href="#contact"
            >demander un devis</a
          >
        </span>
      </div>
    </div>
  </nav>
</template>
<script>
import $ from 'jquery';
export default {
    name: 'NavBar',
}
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    var $item = $(".nav-item a p")
    var $itembtn = $(".btn-navbar")
    $nav.toggleClass('bg-navbar', $(this).scrollTop() > 50 );
    $item.toggleClass('text-dark',$(this).scrollTop() > 50);
    $itembtn.removeClass('text-white',$(this).scrollTop() > 50);
    $itembtn.toggleClass('text-white',$(this).scrollTop() == 0);
    $itembtn.toggleClass('devisnewclass',$(this).scrollTop() > 50)
  });
});
</script>