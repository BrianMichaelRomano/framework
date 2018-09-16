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
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="#home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    `;
  }
}
