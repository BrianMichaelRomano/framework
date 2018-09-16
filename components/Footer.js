export default class Footer {
  constructor() {
    this.listener();
  }

  listener() {
    document.addEventListener('click', this.onClick.bind(this));
  }

  onClick(e) {}

  inject() {}

  render() {
    return `
    <div class="container">
      <h6>Footer</h6>
    </div>
    `;
  }
}
