import test from 'node:test';import assert from 'node:assert/strict';import {fitTemperature,predict} from '../temperature.mjs';
const rows=(t,g,o)=>[0,100,200].map(raw=>({temperature:t,raw,reference:g*raw+o}));
test('single temperature',()=>{const f=fitTemperature(rows(25,.5,10));assert.equal(predict(f,100,25),60)});
test('linear temperature interpolation',()=>{const f=fitTemperature([...rows(0,1,0),...rows(100,2,10)]);assert.equal(predict(f,100,50),155)});
test('quadratic interpolation',()=>{const f=fitTemperature([...rows(0,1,0),...rows(50,2,0),...rows(100,5,0)]);assert.equal(predict(f,100,25),125)});
test('reject extrapolation',()=>assert.throws(()=>predict(fitTemperature([...rows(0,1,0),...rows(100,2,10)]),100,101)));
test('reject changing polarity',()=>assert.throws(()=>fitTemperature([...rows(0,1,0),...rows(100,-1,0)])));
