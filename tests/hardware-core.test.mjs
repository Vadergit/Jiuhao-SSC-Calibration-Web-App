import test from 'node:test';import assert from 'node:assert/strict';import {validateProfile,command,parseReply,decode,compareDumps} from '../hardware-core.mjs';
const p={schema:1,model:'test',protocol:'i2c-read-v1',source:'test fixture, not real chip',address:32,registers:[{id:'a',name:'A',prefix:'01',length:2,area:'otp',endian:'le',signed:true}]};
test('validate and construct',()=>{const x=validateProfile(p,'test');assert.equal(command(1,x.address,x.registers[0].prefix,2),'READ 1 20 01 2\n')});
test('wrong model and reserved address',()=>{assert.throws(()=>validateProfile(p,'other'));assert.throws(()=>validateProfile({...p,address:0},'test'))});
test('wrong response ID and size',()=>{assert.throws(()=>parseReply('OK 2 1234',1,2));assert.throws(()=>parseReply('OK 1 12',1,2));assert.equal(parseReply('OK 1 1234',1,2),'1234')});
test('signed little endian',()=>assert.equal(decode('FEFF',validateProfile(p,'test').registers[0]),-2));
test('diff',()=>{const a={model:'test',address:32,profile:p,values:[{id:'a',hex:'0000'}]};assert.equal(compareDumps(a,{...a,values:[{id:'a',hex:'0001'}]}).length,1)});
