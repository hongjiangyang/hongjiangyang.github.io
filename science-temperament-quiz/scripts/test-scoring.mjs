import assert from 'node:assert/strict';
import {dimensions,questions,scoreAnswers,rankScores} from '../data.js';
assert.equal(questions.length,24);
for(const d of dimensions)assert.equal(questions.filter(q=>q.dimension===d.id).length,4);
for(let choice=0;choice<5;choice++)for(const d of scoreAnswers(Array(24).fill(choice)))assert.equal(d.score,choice*25);
assert.ok(scoreAnswers(Array(24).fill(-1)).every(d=>d.score===null&&d.count===0));
const mixed=Array(24).fill(2),items=questions.map((q,i)=>q.dimension==='observe'?i:-1).filter(i=>i>=0);
mixed[items[0]]=-1;assert.equal(scoreAnswers(mixed)[0].score,50);assert.equal(scoreAnswers(mixed)[0].count,3);
mixed[items[1]]=-1;assert.equal(scoreAnswers(mixed)[0].score,null);
for(const d of dimensions){const a=questions.map(q=>q.dimension===d.id?4:1);assert.equal(rankScores(scoreAnswers(a))[0].id,d.id);assert.equal(rankScores(scoreAnswers(a))[1].score,25);}
assert.equal(rankScores(scoreAnswers(Array(24).fill(-1))).length,0);
console.log('Passed: coverage, independent scaling, omissions, minimum evidence, all six leading profiles.');
