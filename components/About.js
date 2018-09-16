import Proxy from '../utils/Proxify.js';

export default class About {
  constructor() {
    this.state = Proxy({
      firstName: 'Brian',
      lastName: 'Romano'
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
      <h1>About</h1>
      <h3>${this.state.firstName} ${this.state.lastName}</h3>
      <button id="changeNameBtn">Change Name</button>
    </div>
    `;
  }
}
