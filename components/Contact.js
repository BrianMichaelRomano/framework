import Proxy from '../utils/Proxify.js';

export default class Contact {
  constructor() {
    this.state = Proxy({
      title: 'Contact'
    });
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
      <div class="container">
        <h1>${this.state.title}
      </div>
    `;
  }
}
