export default class Router {
  constructor(rootRoute, components, selector, views) {
    this.rootRoute = rootRoute;
    this.components = components;
    this.selector = selector;
    this.views = views;
    console.log(this.views);
    document.addEventListener('DOMContentLoaded', () => {
      location.hash = rootRoute;
      this.route();
    });

    window.addEventListener('hashchange', this.route.bind(this));
  }

  route() {
    const currentRoute = location.hash.substring(1, location.hash.length);

    if (this.components[currentRoute]) {
      this.views.forEach(view => {
        if (view === this.selector) {
          document.querySelector(view).innerHTML = this.components[
            currentRoute
          ].render();
        } else {
          const staticView = view.substring(1, view.length);
          document.querySelector(view).innerHTML = this.components[
            staticView
          ].render();
        }
      });
    } else {
      document.querySelector(this.selector).innerHTML = `<h1>Page not found!`;
    }
  }
}
