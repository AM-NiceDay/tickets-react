export default function withValue(fn) {
  return e => fn(e.target.value);
}
