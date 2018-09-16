import Proxy from '../utils/Proxify.js';

export default class Home {
  constructor() {
    this.state = Proxy({
      title: 'Home'
    });
    this.listener();
  }

  listener() {
    document.addEventListener('click', this.onClickHome.bind(this));
  }

  onClickHome(e) {
    if (e.target.id === 'changeNameBtn') {
      this.state.firstName = 'Bob';
    }
  }

  inject(router) {
    this.state.router = router;
  }

  render() {
    return `
      <h1>${this.state.title}</h1>
    `;
  }
}
