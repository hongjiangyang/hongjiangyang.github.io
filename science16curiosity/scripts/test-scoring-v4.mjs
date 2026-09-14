import assert from 'node:assert/strict';
import {questions,types,score,classify,clarity,endpointWords,endpointLetters,typeCode} from '../data.js';
assert.deepEqual(endpointLetters,[['R','D'],['O','E'],['C','M'],['B','F']]);
for(let axis=0;axis<4;axis++)for(let bit=0;bit<2;bit++)assert.equal(endpointLetters[axis][bit],endpointWords[axis][bit][0]);
assert.equal(new Set(types.map(typeCode)).size,16);
for(const t of types)assert.equal(typeCode(t),t.bits.map((bit,axis)=>endpointWords[axis][bit][0]).join(''));
assert.equal(questions.length,36);assert.equal(types.length,16);
for(let a=0;a<4;a++){const qs=questions.filter(q=>q.axis===a);assert.equal(qs.length,9);assert.ok([4,5].includes(qs.filter(q=>q.sign===1).length));}
for(const t of types){const answers=questions.map(q=>(t.bits[q.axis]?3:-3)*q.sign);const s=score(answers);assert.equal(classify(s).id,t.id);assert.equal(clarity(s),100);}
const zero=score(Array(36).fill(0));assert.deepEqual(zero,[0,0,0,0]);assert.equal(classify(zero),null);assert.equal(clarity(zero),0);assert.equal(classify(zero,{0:0,1:0,2:0,3:0}).id,0);
for(const v of [-3,3]){const s=score(Array(36).fill(v));assert.ok(classify(s));assert.equal(clarity(s),11);}
assert.throws(()=>score(Array(36).fill(null)));
const mixed=questions.map(q=>q.sign);assert.deepEqual(score(mixed),[1/3,1/3,1/3,1/3]);assert.equal(clarity(score(mixed)),33);
assert.equal(new Set(types.map(t=>t.bits.join(''))).size,16);console.log('PASS: 36 items, balanced direction, all 16 profiles, ties, clarity, score bounds.');
