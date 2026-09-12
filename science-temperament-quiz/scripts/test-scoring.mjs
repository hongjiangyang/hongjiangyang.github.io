import assert from 'node:assert/strict';
import {dimensions,questions,scoreAnswers,rankScores,profile} from '../data.js';
assert.equal(questions.length,24);
for(const d of dimensions){const items=questions.filter(q=>q.dimension===d.id);assert.equal(items.length,4);assert.equal(items.filter(q=>q.reverse).length,2);}
for(let choice=0;choice<5;choice++){const scores=scoreAnswers(Array(24).fill(choice));assert.ok(scores.every(d=>d.score===50));assert.equal(profile(scores).title,'多面探索者');assert.equal(profile(scores).art,'multifaceted');}
const preference=(dim,value)=>questions.map(q=>{const score=q.dimension===dim?value:1;return q.reverse?4-score:score;});
for(const d of dimensions){const scores=scoreAnswers(preference(d.id,4));assert.equal(rankScores(scores)[0].id,d.id);assert.equal(rankScores(scores)[0].score,100);assert.equal(profile(scores).title,d.title);}
const low=questions.map(q=>q.reverse?4:0);assert.ok(scoreAnswers(low).every(d=>d.score===0));assert.equal(profile(scoreAnswers(low)).title,'多面探索者');
const skipped=Array(24).fill(-1);assert.ok(scoreAnswers(skipped).every(d=>d.score===null));assert.equal(profile(scoreAnswers(skipped)).title,'待探索的你');
const mixed=Array(24).fill(2),items=questions.map((q,i)=>q.dimension==='observe'?i:-1).filter(i=>i>=0);mixed[items[0]]=-1;assert.equal(scoreAnswers(mixed)[0].score,50);mixed[items[1]]=-1;assert.equal(scoreAnswers(mixed)[0].score,null);
console.log('PASS: 2+2 direction balance, all five uniform answer sets, six distinct profiles, reversed scoring, skips and no-data result.');
