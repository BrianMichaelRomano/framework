import Proxy from '../utils/Proxify.js';

export default class Home {
  constructor() {
    this.state = Proxy({
      title: 'Home'
    });
    this.listener();
  }

  listener() {
    document.addEventListener('click', this.onClick.bind(this));
  }

  onClick(e) {
    if (e.target.id === 'changeNameBtn') {
      this.state.firstName = 'Bob';
    }
  }

  inject(router) {
    this.state.router = router;
  }

  render() {
    return `
      <div class="container">
        <h1>${this.state.title}</h1>
      </div>
    `;
  }
}
