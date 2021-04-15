export function isInViewport(element) {
  const revealSection = (entries, observer) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section-hidden");
    entry.target.classList.add("bottom-to-top");
    observer.unobserve(entry.target);
  };
  const sectionObesrver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.05,
  });
  document.querySelectorAll(element).forEach((section) => {
    sectionObesrver.observe(section);
    section.classList.add("section-hidden");
  });
}
