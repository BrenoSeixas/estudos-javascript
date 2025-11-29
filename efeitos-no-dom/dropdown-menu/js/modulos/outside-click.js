export default function clickOutside(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      html.addEventListener(userEvent, handeOutsideClick);
    });
    element.setAttribute(outside, "");
  }
  function handeOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handeOutsideClick);
      });
      callback();
    }
  }
}
