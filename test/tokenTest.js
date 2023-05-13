import { createPairs } from '../src/token.js'
import { expect } from 'chai';
import { performance } from 'perf_hooks';

const pairs = createPairs()

describe('Pair search', () => {
  it('should find last generated pair in an array', () => {
    const uuidToSearch = pairs[pairs.length - 1].uuid;
    const start = performance.now();
    const result = pairs.find(pair => pair.uuid === uuidToSearch);
    const end = performance.now();
    const searchTime = (end - start) / 1000; // Convert to seconds
    expect(result).to.not.be.undefined;
    console.log(`Array search time: ${searchTime} seconds`);
  });

  it('should find last generated pair in a map', () => {
    const map = new Map(pairs.map(pair => [pair.uuid, pair.token]));
    const uuidToSearch = pairs[pairs.length - 1].uuid;
    const start = performance.now();
    const result = map.get(uuidToSearch);
    const end = performance.now();
    const searchTime = (end - start) / 1000; // Convert to seconds
    expect(result).to.not.be.undefined;
    console.log(`Map search time: ${searchTime} seconds`);
  });
});