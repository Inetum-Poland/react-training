// Returns a lorem ipsum string with up to maxWords words
export function getLoremIpsum(maxWords = 50) {
  const LOREM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, urna erat dictum enim, nec dictum urna erat ut nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam euismod, nunc ut laoreet dictum, urna erat dictum enim, nec dictum urna erat ut nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`;
  const words = LOREM.split(/\s+/);
  const count = Math.floor(Math.random() * maxWords) + 1;
  return words.slice(0, count).join(" ");
}
