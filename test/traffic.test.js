const TrafficLight = require('../traffic.js');
const assert = require('assert');

describe('Traffic Light', () => {
  describe('Colors', () => {
    it('Has 3 colors', () => {
      assert.equal(TrafficLight.colors.length, 3);
    });

    it('Colors are in order', () => {
      const expected = ['green', 'yellow', 'red'];
      for (let i = 0; i < expected.length; i++) {
        assert.equal(TrafficLight.colors[i], expected[i]);
      }
    });
  });

  describe('Test next()', () => {
    it('Changes lights in order', () => {
      const traffic = new TrafficLight();
      for (let i = 0; i < TrafficLight.colors.length; i++) {
        assert.equal(traffic.light, TrafficLight.colors[i]);
        traffic.next();
      }
    });

    it('Loop back to green', () => {
      const traffic = new TrafficLight();
      for (let i = 0; i < TrafficLight.colors.length; i++) {
        traffic.next();
      }
      assert.equal(traffic.light, TrafficLight.colors[0]);
    });
  });
});
