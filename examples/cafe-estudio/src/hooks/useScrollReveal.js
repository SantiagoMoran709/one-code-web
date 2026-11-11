import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const elements = [
      ...document.querySelectorAll(
        ".about-photo, .about-copy, .section-heading, .gallery-grid > button, .visit-card",
      ),
    ];
    if (!("IntersectionObserver" in window) || preference.matches) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target }) => {
          if (isIntersecting) {
            target.classList.add("is-visible");
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.08 },
    );
    elements.forEach((element) => {
      element.classList.add("scroll-reveal");
      observer.observe(element);
    });
    function showAll() {
      if (preference.matches)
        elements.forEach((element) => element.classList.add("is-visible"));
    }
    preference.addEventListener("change", showAll);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", showAll);
      elements.forEach((element) =>
        element.classList.remove("scroll-reveal", "is-visible"),
      );
    };
  }, []);
}
