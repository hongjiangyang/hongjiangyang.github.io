export const VERSION = '3.0';
export const dimensions = [
 {id:'observe', name:'细节观察', title:'细节发现者', english:'Detail Discoverer', color:'#467d74', scientist:'珍妮·古道尔', initials:'JG', line:'在别人习以为常的地方，你仍会停下来看看。', strength:'你愿意回到事情发生的现场，从重复出现的细节中发现线索。', blind:'记录可能越来越多，但迟迟没有一个准备验证的解释。', action:'下次观察后，写下一条猜想，再写出什么现象会让你改变它。', partner:'和喜欢建模的人交流，试着把你看到的细节整理成关系。', history:'以长期观察为灵感。科学家形象是历史参照，不代表对其人格的测量。'},
 {id:'model', name:'抽象建模', title:'规律解码者', english:'Pattern Decoder', color:'#7661a8', scientist:'艾伦·图灵', initials:'AT', line:'你喜欢把复杂的事情，变成可以理解的结构。', strength:'你习惯整理关系、寻找规律，让零散的信息形成一个可推演的框架。', blind:'一个整齐的模型有时会让你暂时忽略不符合它的细节。', action:'给你最喜欢的解释找一个例外，看看模型需要在哪里修改。', partner:'和喜欢现场观察的人合作，让框架始终能回到真实情境。', history:'以形式化与计算的研究传统为灵感。这里的关联不是人格相似度。'},
 {id:'test', name:'动手验证', title:'实证探索者', english:'Empirical Explorer', color:'#bd7854', scientist:'玛丽·居里', initials:'MC', line:'比起一直猜想，你更想动手看看会发生什么。', strength:'你愿意把想法变成一个小尝试，用实际反馈决定下一步。', blind:'连续尝试容易变成同时改变很多条件，反而难以解释结果。', action:'开始下次尝试前，只写一个问题，并确定这次只改变什么。', partner:'和善于提出不同解释的人讨论，挑选真正能区分解释的尝试。', history:'以持续实验的研究实践为灵感，不意味着测试衡量了科研能力。'},
 {id:'check', name:'审慎求证', title:'证据追问者', english:'Evidence Seeker', color:'#657b9f', scientist:'伽利略·伽利莱', initials:'GG', line:'你想知道的不只是结论，还有它为什么值得相信。', strength:'你会追问信息来自哪里、比较是否公平，以及有没有别的解释。', blind:'过早检视每一个漏洞，可能让还没成形的想法很难继续生长。', action:'先把一个新想法发展完整，再挑最关键的一处进行检验。', partner:'与联想丰富的人约定：先一起产生想法，再一起审视证据。', history:'以观察、质疑与检验相结合的科学实践为灵感，不是历史人物定型。'},
 {id:'connect', name:'联想探索', title:'跨界连接者', english:'Cross-disciplinary Connector', color:'#a26b8b', scientist:'查尔斯·达尔文', initials:'CD', line:'看似无关的线索，在你眼里可能通向同一个问题。', strength:'你常把不同情境中的经验连接起来，为熟悉的问题提出新解释。', blind:'新方向不断出现，可能挤占了把一个想法验证到底的时间。', action:'记下三个解释，选一个最容易与其他解释区分的先验证。', partner:'请偏好动手验证的伙伴，帮你把一个联想变成小而具体的行动。', history:'以材料之间的综合联系为灵感；人物仅帮助理解这种探索方式。'},
 {id:'build', name:'工具创造', title:'方法创造者', english:'Method Maker', color:'#5b899d', scientist:'格蕾丝·霍珀', initials:'GH', line:'你不只想解决眼前的问题，也想让下一次更容易。', strength:'你愿意改进步骤、制作辅助工具，把重复的麻烦变成可复用的方法。', blind:'打磨工具可能变成新的目标，迟迟没有回到最初要解决的问题。', action:'给下一次工具改进限定一个时间，到点就用它解决一个真实问题。', partner:'与关注具体问题的人定期核对：这次改进实际帮到了什么？', history:'以计算工具与方法创新为灵感；并不表示人物具有单一研究风格。'}
];
// Two direct and two alternative-preference items per dimension.
// Alternative behaviors are legitimate approaches, not failures or double negatives.
export const questions = [
 ['observe',false,'到一个陌生地方时，我会先停下来看看周围的细节，再决定往哪里走。','初到一个地方'],
 ['model',true,'学习一种新玩法时，我更常直接跟着玩几轮，边玩边理解规则。','学习新玩法'],
 ['test',false,'遇到一个陌生的新功能时，我会先试着操作一次，看看会发生什么。','面对新功能'],
 ['check',true,'面对一条与日常经验相符的信息时，我通常会先用它理解眼前的情况。','接触新信息'],
 ['connect',false,'听到一个新想法时，我会联想到其他领域里见过的类似事情。','听到新想法'],
 ['build',true,'遇到一件只需完成的日常任务时，我通常会直接沿用现成的方法。','完成日常任务'],
 ['model',false,'面对几个相互关联的信息时，我会把它们列出来，看看之间有什么关系。','整理信息'],
 ['observe',true,'了解一个新事物时，我通常先抓住整体印象，等用到时再看具体细节。','认识新事物'],
 ['check',false,'看到一个让我感兴趣的说法时，我会去看它的依据来自哪里。','遇到有趣的说法'],
 ['test',true,'有两种可行的办法时，我通常会先在脑中比较它们，再选一种去做。','选择做法'],
 ['build',false,'同一种事情反复出现时，我会做个模板或清单，让下一次更顺手。','重复的事情'],
 ['connect',true,'处理一个新问题时，我通常会先把注意力放在这个问题本身的条件上。','面对新问题'],
 ['test',true,'开始一种陌生的活动前，我会先看别人怎么做，再决定自己的做法。','尝试新活动'],
 ['check',false,'比较两个建议时，我会先看看它们各自在什么条件下适用。','比较建议'],
 ['observe',false,'同一件小事再次发生时，我会留意这次和上次有哪些差别。','事情再次发生'],
 ['build',true,'同一项任务再次出现时，我通常愿意重新做一遍，按这次的情况处理。','再次处理任务'],
 ['connect',false,'一个问题暂时卡住时，我会换个比喻，看看能不能想到新的方向。','思路暂时卡住'],
 ['model',true,'了解一个复杂的故事时，我更常顺着具体经过理解它，而不是先整理出框架。','理解复杂经过'],
 ['check',true,'一个解释已经能帮助我往下进行时，我通常会先继续，等出现新情况再回头检查。','解释暂时够用时'],
 ['connect',true,'处理一个熟悉领域的问题时，我通常会先从这个领域已有的思路中寻找办法。','寻找可用思路'],
 ['build',false,'现成的步骤用起来不顺手时，我会尝试调整步骤本身。','步骤不顺手时'],
 ['observe',true,'别人讲述一段经历时，我通常先理解事情的大致走向，再决定要不要追问细节。','听别人讲经历'],
 ['model',false,'接触一件复杂的事时，我会试着用几个关键关系概括它。','理解复杂事物'],
 ['test',false,'拿不准一个小调整有没有用时，我会改变一个地方，看看效果。','考虑一个小调整']
].map(([dimension,reverse,text,context],i)=>({id:i+1,dimension,reverse,text,context}));
export const scale = ['很少如此','偶尔如此','有时如此','经常如此','几乎总是'];
export function scoreAnswers(answers){
 return dimensions.map(d=>{const values=questions.flatMap((q,i)=>q.dimension===d.id&&Number.isInteger(answers[i])&&answers[i]>=0&&answers[i]<=4?[q.reverse?4-answers[i]:answers[i]]:[]);return {...d,count:values.length,score:values.length>=3?Math.round(values.reduce((a,b)=>a+b,0)/values.length/4*100):null};});
}
export function rankScores(scores){return scores.filter(d=>d.score!==null).sort((a,b)=>b.score-a.score);}
export function profile(scores){
 const ranked=rankScores(scores),top=ranked[0];
 if(!top)return {title:'待探索的你',english:'An Open Exploration',line:'可用的回答还不够，暂时不判断你的主导风格。',art:'multifaceted',top:null,ranked,balanced:true};
 const close=ranked.filter(d=>top.score-d.score<=12.5),balanced=close.length>=3,low=top.score<38;
 if(balanced||low)return {title:'多面探索者',english:'Multifaceted Explorer',line:'这次回答没有区分出清晰的主导倾向，可以先看看六种方式的整体轮廓。',art:'multifaceted',top,ranked,balanced:true,low};
 return {title:top.title,english:top.english,line:top.line,art:top.id,top,ranked,balanced:false,low:false};
}
