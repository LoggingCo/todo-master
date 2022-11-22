export function createAtcion(type) {
  return function (payload) {
    return { type, payload };
  };
}
