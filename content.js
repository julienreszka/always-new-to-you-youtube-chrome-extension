const work = () => {
  // console.log('work')
  var element = null

  var elInEN = document.querySelector('[title="New to you"]');
  var elInFR = document.querySelector('[title="Nouveautés"]');
  if (elInEN) {
    element = elInEN;
  }
  if (elInFR) {
    element = elInFR;
  }
  if (element && element.parentElement.getAttribute('aria-selected') !== 'true') {
    element.click();
    // console.log('clicked')
    setTimeout(() => {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: "end"
      });
      // console.log('scrolled')
    }, 0);
  }
}

work();

setTimeout(() => {
  setInterval(work, 1000);
}, 500);
