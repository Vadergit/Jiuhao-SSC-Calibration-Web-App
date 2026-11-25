import test from 'node:test';import assert from 'node:assert/strict';import {afePlan,quantize,verificationSummary,parseHexDump,crc8,chartSeries} from '../lab-core.mjs';
test('AFE excludes clipping and chooses increasing signal',()=>{const a=afePlan({low:100,high:-100,adcMin:-1000,adcMax:1000,target:.8,options:[{gain:8,offset:0,polarity:1},{gain:8,offset:0,polarity:-1},{gain:12,offset:0,polarity:-1}]});assert.equal(a.best.gain,8);assert.equal(a.best.polarity,-1);assert.equal(a.candidates[2].clipped,true)});
test('no feasible AFE',()=>assert.equal(afePlan({low:0,high:10,adcMin:0,adcMax:1,options:[{gain:1,offset:0,polarity:1}]}).best,null));
test('signed quantization and overflow',()=>{assert.equal(quantize(-1.25,{bits:8,fraction:2,signed:true}).encoded,251);assert.throws(()=>quantize(100,{bits:8,fraction:4,signed:true}))});
test('verification metrics',()=>{let a=verificationSummary([{reference:0,temperature:25,errorFS:0.3},{reference:1,temperature:25,errorFS:-0.4}],0.35);assert.equal(a.failed,1);assert.equal(a.passed,false);assert.equal(a.maxAbs,.4)});
test('CRC-8 check vector',()=>assert.equal(crc8([...Buffer.from('123456789')],{poly:7,init:0,xorOut:0}),0xF4));
test('strict hex dump',()=>{assert.equal(parseHexDump('ab 01',2),'AB01');assert.throws(()=>parseHexDump('AB',2))});
test('bounded live chart',()=>assert.deepEqual(chartSeries([{time:1,value:1},{time:2,value:2},{time:3,value:NaN}],1),[{time:2,value:2}]));
