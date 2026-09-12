export const VERSION = '2.0';
export const dimensions = [
 {id:'observe', name:'细节观察', title:'细节发现者', english:'Detail Discoverer', color:'#467d74', scientist:'珍妮·古道尔', initials:'JG', line:'在别人习以为常的地方，你仍会停下来看看。', strength:'你愿意回到事情发生的现场，从重复出现的细节中发现线索。', blind:'记录可能越来越多，但迟迟没有一个准备验证的解释。', action:'下次观察后，写下一条猜想，再写出什么现象会让你改变它。', partner:'和喜欢建模的人交流，试着把你看到的细节整理成关系。', history:'以长期观察为灵感。科学家形象是历史参照，不代表对其人格的测量。'},
 {id:'model', name:'抽象建模', title:'规律解码者', english:'Pattern Decoder', color:'#7661a8', scientist:'艾伦·图灵', initials:'AT', line:'你喜欢把复杂的事情，变成可以理解的结构。', strength:'你习惯整理关系、寻找规律，让零散的信息形成一个可推演的框架。', blind:'一个整齐的模型有时会让你暂时忽略不符合它的细节。', action:'给你最喜欢的解释找一个例外，看看模型需要在哪里修改。', partner:'和喜欢现场观察的人合作，让框架始终能回到真实情境。', history:'以形式化与计算的研究传统为灵感。这里的关联不是人格相似度。'},
 {id:'test', name:'动手验证', title:'实证探索者', english:'Empirical Explorer', color:'#bd7854', scientist:'玛丽·居里', initials:'MC', line:'比起一直猜想，你更想动手看看会发生什么。', strength:'你愿意把想法变成一个小尝试，用实际反馈决定下一步。', blind:'连续尝试容易变成同时改变很多条件，反而难以解释结果。', action:'开始下次尝试前，只写一个问题，并确定这次只改变什么。', partner:'和善于提出不同解释的人讨论，挑选真正能区分解释的尝试。', history:'以持续实验的研究实践为灵感，不意味着测试衡量了科研能力。'},
 {id:'check', name:'审慎求证', title:'证据追问者', english:'Evidence Seeker', color:'#657b9f', scientist:'伽利略·伽利莱', initials:'GG', line:'你想知道的不只是结论，还有它为什么值得相信。', strength:'你会追问信息来自哪里、比较是否公平，以及有没有别的解释。', blind:'过早检视每一个漏洞，可能让还没成形的想法很难继续生长。', action:'先把一个新想法发展完整，再挑最关键的一处进行检验。', partner:'与联想丰富的人约定：先一起产生想法，再一起审视证据。', history:'以观察、质疑与检验相结合的科学实践为灵感，不是历史人物定型。'},
 {id:'connect', name:'联想探索', title:'跨界连接者', english:'Cross-disciplinary Connector', color:'#a26b8b', scientist:'查尔斯·达尔文', initials:'CD', line:'看似无关的线索，在你眼里可能通向同一个问题。', strength:'你常把不同情境中的经验连接起来，为熟悉的问题提出新解释。', blind:'新方向不断出现，可能挤占了把一个想法验证到底的时间。', action:'记下三个解释，选一个最容易与其他解释区分的先验证。', partner:'请偏好动手验证的伙伴，帮你把一个联想变成小而具体的行动。', history:'以材料之间的综合联系为灵感；人物仅帮助理解这种探索方式。'},
 {id:'build', name:'工具创造', title:'方法创造者', english:'Method Maker', color:'#5b899d', scientist:'格蕾丝·霍珀', initials:'GH', line:'你不只想解决眼前的问题，也想让下一次更容易。', strength:'你愿意改进步骤、制作辅助工具，把重复的麻烦变成可复用的方法。', blind:'打磨工具可能变成新的目标，迟迟没有回到最初要解决的问题。', action:'给下一次工具改进限定一个时间，到点就用它解决一个真实问题。', partner:'与关注具体问题的人定期核对：这次改进实际帮到了什么？', history:'以计算工具与方法创新为灵感；并不表示人物具有单一研究风格。'}
];
// Four concrete, single-focus items per dimension. Interleaved to reduce repetitive response sets.
export const questions = [
 ['observe','看见一个不熟悉的事物时，我会先花一点时间留意它的细节，再去查它是什么。','面对陌生事物'],
 ['model','要理解一件复杂的事时，我会画出关系、列出步骤，或把信息分成几类。','整理复杂信息'],
 ['test','不确定一个办法有没有用时，我会先做一个成本很小的尝试。','开始解决问题'],
 ['check','看到一个很有说服力的结论时，我会去找它依据的原始信息。','面对新信息'],
 ['connect','遇到新问题时，我会想到另一个领域里可能相似的事情。','寻找线索'],
 ['build','一件事情需要重复做时，我会花时间做一个模板或辅助工具。','重复的任务'],
 ['model','几次事情发生的情况不同时，我会把它们列在一起，寻找变化之间的关系。','比较不同情况'],
 ['observe','同一件小事反复发生时，我会留意每次发生的时间、环境或其他差别。','日常的小变化'],
 ['check','听到两个事物有关联时，我会想一想有没有第三个因素同时影响它们。','理解一个解释'],
 ['test','尝试改进一个做法时，我会一次只改一个地方，看看有什么变化。','调整做法'],
 ['build','现成的方法用起来别扭时，我会试着调整它的步骤，让它更顺手。','方法不顺手时'],
 ['connect','一个思路走不通时，我会换一种比喻或视角重新描述问题。','遇到瓶颈'],
 ['test','听到一个可行的新建议后，我通常会实际试一次，再决定是否采用。','听到新建议'],
 ['check','即使一个解释符合我的想法，我也会寻找可能不支持它的例子。','面对喜欢的解释'],
 ['observe','回想一次有趣的经历时，我会翻看照片或记录，确认当时容易忽略的细节。','回顾一次经历'],
 ['build','别人遇到我解决过的问题时，我会把自己的方法整理成可以直接使用的步骤。','分享解决办法'],
 ['connect','接触与工作或学习无关的内容时，我会想到它可能如何用到手头的问题上。','偶然的新发现'],
 ['model','接触一个新系统或游戏时，我会尝试总结少数几条规则，预测接下来会怎样。','理解运行规律'],
 ['check','比较两种选择的优劣时，我会确认它们是不是在相近的条件下被比较。','作出比较'],
 ['connect','对一个暂时无法解释的现象，我会列出几种不同的可能解释。','暂时没有答案'],
 ['build','做完一件费力的事后，我会改进流程，让下次不必从头摸索。','完成一项任务'],
 ['observe','别人描述一件让我好奇的事时，我会想亲自看看它发生的样子。','听到有趣的描述'],
 ['model','学习一个新概念时，我会把它简化成一个示意图或几个关键关系。','学习新概念'],
 ['test','拿不准两个办法哪个更适合时，我会分别试用，再比较体验。','选择合适的方法']
].map(([dimension,text,context],i)=>({id:i+1,dimension,text,context}));
export const scale = ['很少如此','偶尔如此','有时如此','经常如此','几乎总是'];
export function scoreAnswers(answers){
 return dimensions.map(d=>{const values=questions.flatMap((q,i)=>q.dimension===d.id&&Number.isInteger(answers[i])&&answers[i]>=0&&answers[i]<=4?[answers[i]]:[]);return {...d,count:values.length,score:values.length>=3?Math.round(values.reduce((a,b)=>a+b,0)/values.length/4*100):null};});
}
export function rankScores(scores){return scores.filter(d=>d.score!==null).sort((a,b)=>b.score-a.score);}
