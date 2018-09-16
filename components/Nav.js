import Proxy from '../utils/Proxify.js';

export default class Nav {
  constructor() {
    this.state = Proxy({});
    this.listener();
  }

  listener() {
    document.addEventListener('click', this.onClick.bind(this));
  }

  onClick(e) {}

  inject(router) {
    this.state.router = router;
  }

  render() {
    return `
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    `;
  }
}
