export default class Router {
  constructor(rootRoute, components, selector) {
    this.rootRoute = rootRoute;
    this.components = components;
    this.selector = selector;

    document.addEventListener('DOMContentLoaded', () => {
      location.hash = rootRoute;
      this.route();
    });

    window.addEventListener('hashchange', this.route.bind(this));
  }

  route() {
    const currentRoute = location.hash.substring(1, location.hash.length);

    if (this.components[currentRoute]) {
      document.querySelector(this.selector).innerHTML = this.components[
        currentRoute
      ].render();
    } else {
      document.querySelector(this.selector).innerHTML = `<h1>Page not found!`;
    }
  }
}
