import Proxy from '../utils/Proxify.js';

export default class Footer {
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
    <div class="container">
      <h6>Footer</h6>
    </div>
    `;
  }
}
