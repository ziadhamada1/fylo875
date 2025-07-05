
    document.getElementById("scrollTopBtn").onclick = function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

      const menuIcon = document.getElementById('menuIcon');
    const mobileNav = document.getElementById('mobileNav');
    const navLinks = mobileNav.querySelectorAll('a');

    // Toggle القائمة
    menuIcon.onclick = () => {
      mobileNav.classList.toggle('show');
    };

    // عند الضغط على أي رابط تخفي القائمة
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('show');
      });
    });




window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
