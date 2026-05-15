// Tällä lisätään tai poistetaan luokka (scrolled) header-elementistä käyttäjän skrollatessa sivua.
    window.addEventListener('scroll', function() {
      const header = document.getElementById('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

// Mobiilivalikon toggle, mahdollistaa valikon avaamisen ja sulkemisen mobiililaitteella (niinkuin tässä: hamburger-ikonista ristiin).
    function toggleMenu() {
      const menu = document.getElementById('mobileMenu');
      const menuIcon = document.querySelector('.menu-icon');
      const closeIcon = document.querySelector('.close-icon');
      
      menu.classList.toggle('open');
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    }
