import assert from 'node:assert/strict';
import {questions,types,score,classify,clarity} from '../data.js';
assert.equal(questions.length,48);assert.equal(types.length,16);
for(let a=0;a<4;a++){const qs=questions.filter(q=>q.axis===a);assert.equal(qs.length,12);assert.equal(qs.filter(q=>q.sign===1).length,6);}
for(const t of types){const answers=questions.map(q=>(t.bits[q.axis]?3:-3)*q.sign);const s=score(answers);assert.equal(classify(s).id,t.id);assert.equal(clarity(s),100);}
for(const v of [-3,0,3]){const s=score(Array(48).fill(v));assert.deepEqual(s,[0,0,0,0]);assert.equal(classify(s),null);assert.equal(clarity(s),0);assert.equal(classify(s,{0:0,1:0,2:0,3:0}).id,0);}
const mixed=questions.map(q=>q.sign);assert.deepEqual(score(mixed),[1/3,1/3,1/3,1/3]);assert.equal(clarity(score(mixed)),33);
assert.equal(new Set(types.map(t=>t.bits.join(''))).size,16);console.log('PASS: 48 items, balanced direction, all 16 profiles, ties, clarity, score bounds.');
