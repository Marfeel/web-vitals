import {describe, it} from 'node:test';
import assert from 'assert';
import {
  onCLS,
  onFCP,
  onINP,
  onLCP,
  onTTFB,
  CLSThresholds,
  FCPThresholds,
  INPThresholds,
  LCPThresholds,
  TTFBThresholds,
} from '@marfeel/web-vitals/attribution';

describe('index', () => {
  it('exports Web Vitals metrics functions', () => {
    [onCLS, onFCP, onINP, onLCP, onTTFB].forEach((onFn) =>
      assert(typeof onFn === 'function'),
    );
  });

  it('exports Web Vitals metric thresholds', () => {
    assert.deepEqual(CLSThresholds, [0.1, 0.25]);
    assert.deepEqual(FCPThresholds, [1800, 3000]);
    assert.deepEqual(INPThresholds, [200, 500]);
    assert.deepEqual(LCPThresholds, [2500, 4000]);
    assert.deepEqual(TTFBThresholds, [800, 1800]);
  });
});
