import test from 'node:test';import assert from 'node:assert/strict';import {fit} from '../calibration.mjs';
test('linear',()=>{const r=fit([{raw:100,reference:10},{raw:900,reference:90}]);assert.equal(r.gain,.1);assert.equal(r.offset,0)});
test('inverted',()=>assert.equal(fit([{raw:100,reference:90},{raw:900,reference:10}]).gain,-.1));
test('singular',()=>assert.throws(()=>fit([{raw:1,reference:0},{raw:1,reference:100}])));
test('missing',()=>assert.throws(()=>fit([{raw:NaN,reference:0},{raw:1,reference:100}])));
