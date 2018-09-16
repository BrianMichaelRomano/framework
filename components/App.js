import Router from '../Router/Router.js';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Nav from './Nav.js';
import Footer from './Footer.js';

export default class App {
  constructor(rootView, dynamicView, views) {
    this.dynamicView = dynamicView;
    this.rootView = rootView;
    this.views = views;
    this.components = {
      home: new Home(),
      contact: new Contact(),
      about: new About(),
      nav: new Nav(),
      footer: new Footer()
    };
    this.router = new Router(
      this.rootView,
      this.components,
      this.dynamicView,
      this.views
    );
    this.inject();
  }

  inject() {
    this.components.home.inject(this.router);
    this.components.contact.inject(this.router);
    this.components.about.inject(this.router);
    this.components.nav.inject(this.router);
    this.components.footer.inject(this.router);
  }
}
