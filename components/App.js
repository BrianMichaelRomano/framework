import Router from '../Router/Router.js';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';

export default class App {
  constructor(rootView, selector) {
    this.selector = selector;
    this.rootView = rootView;
    this.components = {
      home: new Home(),
      contact: new Contact(),
      about: new About()
    };
    this.router = new Router(this.rootView, this.components, this.selector);
    this.inject();
  }

  inject() {
    this.components.home.inject(this.router);
    this.components.contact.inject(this.router);
    this.components.about.inject(this.router);
  }
}
