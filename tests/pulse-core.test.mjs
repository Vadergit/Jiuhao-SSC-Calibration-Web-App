import test from 'node:test';import assert from 'node:assert/strict';import {parseProfile,decodeMemory,decodeMeasurement,plan,parseResponse} from '../pulse-core.mjs';
const fixture={schema:1,model:'fixture',protocol:'pwm-owi-v1',source:'synthetic',baud:10000,parity:'even',duty:[20,50,80],gapUs:50,memoryBytes:2,readCommand:'0102',ack:'03',enterCommand:null,startDelayUs:100,powerOffMs:100,measureBytes:2,fields:[{name:'test',byte:1,shift:2,width:3}],measurement:{bridgeBits:12,tempBits:0,tempShift:0}};
test('memory decode',()=>assert.equal(decodeMemory('001C',parseProfile(fixture,'fixture')).fields[0].value,7));
test('measurement decode',()=>assert.equal(decodeMeasurement('F123',fixture).bridge,291));
test('no unconfirmed startup',()=>assert.throws(()=>plan(fixture,'read')));
test('response size',()=>assert.throws(()=>parseResponse('OK 12',2)));
test('wrong model',()=>assert.throws(()=>parseProfile(fixture,'other')));
