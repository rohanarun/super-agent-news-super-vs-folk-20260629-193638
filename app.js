(function(){
  // Guard animations if GSAP fails
  try {
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', () => {
      if (!nav) return;
      if (window.scrollY > 40) {
        nav.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)';
      } else {
        nav.style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)';
      }
    });
  } catch (e) {
    // no-op fallback
  }
})();