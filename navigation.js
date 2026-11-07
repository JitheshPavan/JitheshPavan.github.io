(() => {
  const navigation = document.querySelector('.section-nav');
  const links = [...navigation.querySelectorAll('a')];
  const targets = links.map(link => document.querySelector(link.getAttribute('href')));
  let pending = false;

  function updateCurrentSection() {
    pending = false;
    const offset = window.matchMedia('(max-width: 1039px)').matches
      ? navigation.getBoundingClientRect().height + 40
      : 64;
    let active = 0;
    targets.forEach((target, index) => {
      if (target.getBoundingClientRect().top <= offset) active = index;
    });
    if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      active = links.length - 1;
    }
    links.forEach((link, index) => {
      if (index === active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  function scheduleUpdate() {
    if (pending) return;
    pending = true;
    window.requestAnimationFrame(updateCurrentSection);
  }

  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('hashchange', scheduleUpdate);
  window.addEventListener('load', scheduleUpdate);
  document.addEventListener('toggle', scheduleUpdate, true);
  updateCurrentSection();
})();
