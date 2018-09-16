export default function(target) {
  return new Proxy(target, {
    set(target, prop, value) {
      const oldValue = target[prop];
      target[prop] = value;
      target.router.route();
      return true;
    }
  });
}
