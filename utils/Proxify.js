export default function(target) {
  return new Proxy(target, {
    set(target, prop, value) {
      const oldValue = target[prop];
      target[prop] = value;
      // console.log(`${prop} changed from ${oldValue} to ${target[prop]}`);
      target.router.route();
      return true;
    }
  });
}
