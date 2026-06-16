const dimensions = [
  { key: "observation", label: "观察力", color: "#214d6b" },
  { key: "math", label: "数学化", color: "#7d4f8a" },
  { key: "experiment", label: "实验精神", color: "#9b3f35" },
  { key: "skepticism", label: "怀疑精神", color: "#4f6f52" },
  { key: "imagination", label: "跨界想象", color: "#b98037" },
  { key: "tools", label: "技术工具", color: "#3b7285" }
];

const SHEETS_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxXZPp3x8eBaKaERnWPikWa67wFy3vPOXgFkfOs_n0TPegw-Esr5y6PSG1N7QvA-1Xp/exec";

const questions = [
  {
    text: "面对一个陌生现象，你最自然的第一步是？",
    focus: "observation",
    options: [
      ["先反复观察，记录它在什么条件下出现", { observation: 3, skepticism: 1 }],
      ["把它写成变量关系，看看能不能建模", { math: 3, imagination: 1 }],
      ["设计一个小实验，主动改变关键条件", { experiment: 3, tools: 1 }],
      ["先问：有没有更简单的解释或隐藏假设？", { skepticism: 3, observation: 1 }]
    ]
  },
  {
    text: "如果研究结果和预期相反，你会更倾向于？",
    focus: "skepticism",
    options: [
      ["检查样本、仪器和记录是否可靠", { skepticism: 2, tools: 2 }],
      ["把反常点保留下来，继续追踪它是否重复出现", { observation: 3, skepticism: 1 }],
      ["重新安排对照组，看差异是否仍然存在", { experiment: 3, skepticism: 1 }],
      ["把它当成新理论的入口，尝试换一个解释框架", { imagination: 3, math: 1 }]
    ]
  },
  {
    text: "你最喜欢哪一种科学突破？",
    focus: "imagination",
    options: [
      ["一个公式突然统一了很多分散现象", { math: 3, imagination: 2 }],
      ["一种新仪器让过去看不见的结构显现出来", { tools: 3, observation: 2 }],
      ["一个关键实验推翻了长期流行的观念", { experiment: 3, skepticism: 2 }],
      ["把两个原本无关的领域连接成新的问题", { imagination: 3, observation: 1 }]
    ]
  },
  {
    text: "你在团队讨论中最常扮演什么角色？",
    focus: "tools",
    options: [
      ["证据管理员：先看数据质量和采集条件", { observation: 2, skepticism: 2 }],
      ["模型建筑师：把想法整理成变量和结构", { math: 2, imagination: 2 }],
      ["实验修理工：换条件、补对照、再试一次", { experiment: 2, tools: 2 }],
      ["工具搭建者：写脚本、改装置、自动化流程", { tools: 3, experiment: 1 }]
    ]
  },
  {
    text: "如果只能带一样东西去研究未知世界，你会选？",
    focus: "math",
    options: [
      ["一本耐用的观察笔记本", { observation: 3 }],
      ["一套可改造的测量工具", { tools: 3, experiment: 1 }],
      ["一块黑板和足够多的粉笔", { math: 3 }],
      ["一串大胆但可被挑战的问题", { skepticism: 2, imagination: 2 }]
    ]
  },
  {
    text: "你怎样判断一个解释是否足够好？",
    focus: "experiment",
    options: [
      ["它能预测下一次观察会发生什么", { math: 2, observation: 2 }],
      ["它经得起对照实验和重复检验", { experiment: 3, skepticism: 1 }],
      ["它能解释例外，而不是只解释平均趋势", { skepticism: 3, observation: 1 }],
      ["它能把分散现象放进一个更大的图景", { imagination: 3, math: 1 }]
    ]
  },
  {
    text: "你最容易被哪种图像打动？",
    focus: "observation",
    options: [
      ["显微镜下第一次看见的新结构", { observation: 2, tools: 2 }],
      ["拟合曲线后突然浮现的规律", { math: 2, observation: 1 }],
      ["实验台上清楚分开的对照组", { experiment: 3, skepticism: 1 }],
      ["跨学科概念连成的一张大图", { imagination: 3, math: 1 }]
    ]
  },
  {
    text: "如果一个理论很漂亮但证据不足，你会？",
    focus: "skepticism",
    options: [
      ["暂时保留，等更多观察积累", { observation: 2, skepticism: 2 }],
      ["先看它能否产生可检验预测", { math: 2, experiment: 2 }],
      ["设计实验去挑战它最脆弱的地方", { experiment: 3, skepticism: 1 }],
      ["把它当作启发，而不是结论", { imagination: 2, skepticism: 2 }]
    ]
  },
  {
    text: "你最喜欢的研究节奏是？",
    focus: "experiment",
    options: [
      ["长时间追踪一个系统的变化", { observation: 3 }],
      ["短周期实验和快速迭代", { experiment: 3 }],
      ["安静推导，直到结构闭合", { math: 3 }],
      ["把远处领域的想法搬过来试试看", { imagination: 3 }]
    ]
  },
  {
    text: "面对一堆杂乱数据，你首先想做什么？",
    focus: "math",
    options: [
      ["画出分布、趋势和异常点", { observation: 2, math: 1 }],
      ["建立指标，把复杂情况压缩成可比较的量", { math: 3, tools: 1 }],
      ["检查采集流程，排除系统误差", { tools: 2, skepticism: 2 }],
      ["问这些数据背后可能有哪种机制", { imagination: 2, experiment: 1 }]
    ]
  },
  {
    text: "你更愿意把时间花在哪类工作上？",
    focus: "tools",
    options: [
      ["整理长期记录，让细节变得可靠", { observation: 3, skepticism: 1 }],
      ["写分析代码，让重复工作自动化", { tools: 3, math: 1 }],
      ["调试实验流程，让结果更稳定", { experiment: 3, tools: 1 }],
      ["读不同领域的文章，寻找新连接", { imagination: 3, observation: 1 }]
    ]
  },
  {
    text: "如果你能加入一次科学史现场，你更想去哪里？",
    focus: "imagination",
    options: [
      ["达尔文整理物种材料的书房", { observation: 3, imagination: 1 }],
      ["居里夫人分离放射性物质的实验室", { experiment: 3, tools: 1 }],
      ["图灵思考机器与算法的房间", { math: 2, tools: 2 }],
      ["卡森把生态证据写成公共议题的时刻", { imagination: 2, skepticism: 2 }]
    ]
  },
  {
    text: "你对“好问题”的直觉是？",
    focus: "skepticism",
    options: [
      ["它能被观察到的事实逐步回答", { observation: 3 }],
      ["它能被拆成清楚的变量关系", { math: 3 }],
      ["它能通过实验设计被推进", { experiment: 3 }],
      ["它能暴露一个领域默认相信的前提", { skepticism: 3, imagination: 1 }]
    ]
  },
  {
    text: "当一个系统太复杂时，你会怎样靠近它？",
    focus: "observation",
    options: [
      ["先分类和标注，建立稳定的观察语言", { observation: 3, tools: 1 }],
      ["抽象出最少变量，先做一个简化模型", { math: 3 }],
      ["做局部干预，看系统如何响应", { experiment: 3, skepticism: 1 }],
      ["寻找不同层级之间的连接关系", { imagination: 3, observation: 1 }]
    ]
  },
  {
    text: "你最看重一套科学工具的哪一点？",
    focus: "tools",
    options: [
      ["能稳定记录微小变化", { tools: 2, observation: 2 }],
      ["能让实验条件可控、可重复", { tools: 2, experiment: 2 }],
      ["能把复杂数据转成可计算对象", { tools: 2, math: 2 }],
      ["能帮助发现以前没法问的问题", { tools: 2, imagination: 2 }]
    ]
  },
  {
    text: "如果你负责一个新课题，最想先确认什么？",
    focus: "experiment",
    options: [
      ["现象是否真实稳定，而不是偶然波动", { observation: 2, skepticism: 2 }],
      ["核心变量之间可能是什么关系", { math: 3, observation: 1 }],
      ["最小可行实验应该怎样设计", { experiment: 3, tools: 1 }],
      ["这个问题会不会改变原来的研究框架", { imagination: 2, skepticism: 2 }]
    ]
  },
  {
    text: "你处理失败实验的方式更像？",
    focus: "skepticism",
    options: [
      ["把失败条件完整记下来，之后比较", { observation: 3, skepticism: 1 }],
      ["回到假设，寻找哪一步推理不成立", { math: 2, skepticism: 2 }],
      ["逐个排查试剂、仪器和参数", { tools: 2, experiment: 2 }],
      ["思考失败是否暗示另一个问题更重要", { imagination: 3, skepticism: 1 }]
    ]
  },
  {
    text: "你更喜欢哪种科学表达？",
    focus: "math",
    options: [
      ["一张包含关键观察细节的图谱", { observation: 3 }],
      ["一个简洁但有解释力的方程", { math: 3 }],
      ["一套别人可以复现实验的流程", { experiment: 3, tools: 1 }],
      ["一个让人重新理解世界的类比", { imagination: 3 }]
    ]
  },
  {
    text: "你最希望自己的研究被别人怎样使用？",
    focus: "tools",
    options: [
      ["成为后来者可靠引用的事实记录", { observation: 3 }],
      ["成为可迁移的模型或分析框架", { math: 3, tools: 1 }],
      ["成为可以直接复用的方法或平台", { tools: 3, experiment: 1 }],
      ["成为打开新方向的概念种子", { imagination: 3, skepticism: 1 }]
    ]
  },
  {
    text: "看到一个非常流行的说法，你会先做什么？",
    focus: "skepticism",
    options: [
      ["找原始数据和最早的观察来源", { observation: 2, skepticism: 2 }],
      ["看它的推理链条是否自洽", { math: 2, skepticism: 2 }],
      ["想一个能区分它和替代解释的实验", { experiment: 3, skepticism: 1 }],
      ["问它为什么会在这个时代变得流行", { imagination: 2, skepticism: 2 }]
    ]
  },
  {
    text: "你对跨学科合作最感兴趣的是？",
    focus: "imagination",
    options: [
      ["不同领域观察到同一类模式", { observation: 2, imagination: 2 }],
      ["一个数学结构能在多个领域复用", { math: 3, imagination: 1 }],
      ["一个实验范式迁移到新对象上", { experiment: 2, tools: 1, imagination: 1 }],
      ["一种工具让两个领域终于能对话", { tools: 2, imagination: 2 }]
    ]
  },
  {
    text: "如果让你改进一项研究，你会优先改进？",
    focus: "experiment",
    options: [
      ["采样范围，让观察更完整", { observation: 3 }],
      ["统计模型，让结论更清楚", { math: 3 }],
      ["实验对照，让因果更可信", { experiment: 3, skepticism: 1 }],
      ["数据流程，让分析更可复现", { tools: 3, skepticism: 1 }]
    ]
  },
  {
    text: "你最享受哪种“发现前夜”的感觉？",
    focus: "observation",
    options: [
      ["连续几天记录后，一个模式慢慢浮现", { observation: 3, imagination: 1 }],
      ["推导到最后，所有项突然对齐", { math: 3, imagination: 1 }],
      ["关键参数终于调对，结果稳定出现", { experiment: 3, tools: 1 }],
      ["一个漏洞被发现，整个问题变得更清醒", { skepticism: 3, math: 1 }]
    ]
  },
  {
    text: "你最想留下的科学贡献是？",
    focus: "imagination",
    options: [
      ["发现一个别人忽视的真实现象", { observation: 3, skepticism: 1 }],
      ["建立一个能解释很多事的框架", { math: 2, imagination: 2 }],
      ["发明一种可靠的新方法", { tools: 3, experiment: 2 }],
      ["提出一个改变问题方向的疑问", { skepticism: 3, imagination: 1 }]
    ]
  }
];

const personas = [
  {
    name: "伽利略型实验观察者",
    lead: ["observation", "experiment"],
    keywords: "物理天文、观察、实验、反直觉",
    summary: "你擅长把日常现象变成可检验的问题，用观察和实验把世界从直觉里解放出来。",
    advice: "你的优势是证据感强。继续保留怀疑，也给大胆解释留下生长空间。"
  },
  {
    name: "达尔文型生命综合者",
    lead: ["observation", "imagination"],
    keywords: "生命科学、演化、比较、长期积累",
    summary: "你能忍受长时间的材料积累，并在大量细节之间看见缓慢形成的生命模式。",
    advice: "你的优势是耐心和综合力。适当引入定量模型，会让洞见更锋利。"
  },
  {
    name: "居里型化学实验家",
    lead: ["experiment", "tools"],
    keywords: "化学材料、实验、分离、可靠性",
    summary: "你相信发现来自反复操作、校准和坚持，愿意在艰苦细节里守住微弱但真实的信号。",
    advice: "你的优势是执行力。别忘了定期退后一步，问问这些结果正在指向什么大问题。"
  },
  {
    name: "南丁格尔型数据医学者",
    lead: ["math", "observation"],
    keywords: "医学、统计、可视化、公共健康",
    summary: "你善于把真实世界中的混乱记录转化为可比较的数据，并用清晰证据推动改变。",
    advice: "你的优势是把数据和现实问题连在一起。继续注意样本、偏差和解释边界。"
  },
  {
    name: "图灵型计算建模者",
    lead: ["math", "tools"],
    keywords: "计算科学、算法、形式化、机器",
    summary: "你习惯把问题转化为可计算的结构，并愿意借助工具扩展思想边界。",
    advice: "你的优势是形式化和工具思维。多和实验数据相遇，会让抽象更有生命。"
  },
  {
    name: "古道尔型行为田野者",
    lead: ["observation", "skepticism"],
    keywords: "行为科学、田野、个体差异、耐心观察",
    summary: "你愿意靠近真实行为本身，在长时间观察中识别个体、情境和关系的细微变化。",
    advice: "你的优势是对复杂行为的敏感度。把观察协议固定下来，会让发现更容易被别人验证。"
  },
  {
    name: "卡森型生态连接者",
    lead: ["imagination", "skepticism"],
    keywords: "生态环境、系统联系、风险、责任",
    summary: "你擅长看见局部变化背后的系统连锁反应，也会追问科学发现如何进入公共生活。",
    advice: "你的优势是系统感和责任感。继续把关切落到证据链上，会让判断更有力量。"
  },
  {
    name: "波普尔型怀疑检验者",
    lead: ["skepticism", "experiment"],
    keywords: "科学哲学、反证、边界、检验",
    summary: "你对漂亮说法保持警惕，最关心一个观点如何被挑战、被检验、被修正。",
    advice: "你的优势是清醒。也给新想法一点生长时间，不必一开始就把它推上审判台。"
  }
];

let current = 0;
let answers = Array(questions.length).fill(null);
let hasSubmittedResult = false;
const optionOrders = [
  [1, 2, 3, 0],
  [1, 0, 3, 2],
  [3, 2, 0, 1],
  [0, 2, 3, 1],
  [0, 1, 2, 3],
  [0, 3, 2, 1],
  [1, 0, 2, 3],
  [3, 0, 1, 2],
  [0, 2, 1, 3],
  [1, 0, 2, 3],
  [0, 3, 1, 2],
  [1, 3, 0, 2],
  [1, 2, 0, 3],
  [2, 1, 3, 0],
  [3, 2, 1, 0],
  [2, 0, 3, 1],
  [2, 3, 0, 1],
  [2, 1, 3, 0],
  [3, 1, 2, 0],
  [2, 3, 0, 1],
  [3, 0, 1, 2],
  [3, 2, 0, 1],
  [1, 0, 2, 3],
  [3, 0, 1, 2]
];

const questionCounter = document.getElementById("questionCounter");
const questionText = document.getElementById("questionText");
const optionsEl = document.getElementById("options");
const progressBar = document.getElementById("progressBar");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const restartBtn = document.getElementById("restartBtn");
const copyBtn = document.getElementById("copyBtn");
const completionCountEl = document.getElementById("completionCount");

function renderQuestion() {
  const q = questions[current];
  const order = optionOrders[current];
  questionCounter.textContent = `第 ${current + 1} / ${questions.length} 题`;
  questionText.textContent = q.text;
  progressBar.style.width = `${(current / questions.length) * 100}%`;
  optionsEl.innerHTML = "";

  order.forEach(optionIndex => {
    const [label] = q.options[optionIndex];
    const button = document.createElement("button");
    button.type = "button";
    button.className = `option${answers[current] === optionIndex ? " selected" : ""}`;
    button.innerHTML = `<span class="option-marker"></span><span>${label}</span>`;
    button.addEventListener("click", () => {
      answers[current] = optionIndex;
      renderQuestion();
    });
    optionsEl.appendChild(button);
  });

  prevBtn.disabled = current === 0;
  nextBtn.textContent = current === questions.length - 1 ? "查看结果" : "下一题";
  nextBtn.disabled = answers[current] === null;
}

function getScores() {
  const raw = Object.fromEntries(dimensions.map(d => [d.key, 0]));
  answers.forEach((answerIndex, questionIndex) => {
    if (answerIndex === null) return;
    const scores = questions[questionIndex].options[answerIndex][1];
    Object.entries(scores).forEach(([key, value]) => {
      raw[key] += value;
    });
  });

  const max = Math.max(...Object.values(raw), 1);
  return Object.fromEntries(
    Object.entries(raw).map(([key, value]) => [key, Math.round((value / max) * 100)])
  );
}

function pickPersona(scores) {
  let best = personas[0];
  let bestScore = -1;
  personas.forEach(persona => {
    const score = persona.lead.reduce((sum, key) => sum + scores[key], 0);
    if (score > bestScore) {
      best = persona;
      bestScore = score;
    }
  });
  return best;
}

function getTypicality(scores) {
  const values = Object.values(scores).sort((a, b) => b - a);
  const top = values[0];
  const second = values[1];
  const bottom = values[values.length - 1];
  const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
  const std = Math.sqrt(values.reduce((sum, value) => sum + ((value - mean) ** 2), 0) / values.length);

  const marginComponent = Math.min((top - second) / 35, 1);
  const spreadComponent = Math.min(std / 35, 1);
  const rangeComponent = Math.min((top - bottom) / 70, 1);
  const typicality = Math.round(1 + 99 * ((0.4 * marginComponent) + (0.4 * spreadComponent) + (0.2 * rangeComponent)));

  let label = "混合型";
  let text = "你的六个维度比较均衡，当前类型更像是一种主要倾向，而不是非常尖锐的单一类型。";

  if (typicality >= 75) {
    label = "很典型";
    text = "你的维度轮廓比较集中，当前科学气质类型具有较高代表性。";
  } else if (typicality >= 50) {
    label = "中等典型";
    text = "你的结果有清楚的主导方向，同时保留了一些其他研究风格。";
  } else if (typicality < 25) {
    label = "低典型性";
    text = "你的各项维度很接近，类型判断的置信度较低，更适合看雷达图整体形状。";
  }

  return {
    score: Math.max(1, Math.min(100, typicality)),
    label,
    text
  };
}

async function loadCompletionCount() {
  if (!completionCountEl) return;
  try {
    const response = await fetch(`${SHEETS_WEB_APP_URL}?t=${Date.now()}`);
    if (!response.ok) throw new Error("Count request failed");
    const data = await response.json();
    const count = Number(data.count);
    if (Number.isFinite(count)) {
      completionCountEl.textContent = `已有 ${count} 人完成测试`;
      return;
    }
    throw new Error("Invalid count");
  } catch {
    completionCountEl.textContent = "匿名结果统计已连接";
  }
}

function submitResult(scores, persona, typicality) {
  if (hasSubmittedResult) return;
  hasSubmittedResult = true;

  const payload = {
    persona: persona.name,
    typicality: typicality.score,
    observation: scores.observation,
    math: scores.math,
    experiment: scores.experiment,
    skepticism: scores.skepticism,
    imagination: scores.imagination,
    tools: scores.tools
  };

  fetch(SHEETS_WEB_APP_URL, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(payload)
  })
    .then(() => {
      if (completionCountEl) completionCountEl.textContent = "你的匿名结果已记录";
    })
    .catch(() => {
      hasSubmittedResult = false;
    });
}

function showResult() {
  const scores = getScores();
  const persona = pickPersona(scores);
  const typicality = getTypicality(scores);
  document.getElementById("personaTitle").textContent = persona.name;
  document.getElementById("personaSummary").textContent = persona.summary;
  document.getElementById("personaKeywords").textContent = persona.keywords;
  document.getElementById("personaAdvice").textContent = persona.advice;
  document.getElementById("typicalityScore").textContent = typicality.score;
  document.getElementById("typicalityBar").style.width = `${typicality.score}%`;
  document.getElementById("typicalityText").textContent = `${typicality.label}：${typicality.text}`;
  renderScores(scores);
  drawRadar(scores);
  submitResult(scores, persona, typicality);
  resultEl.hidden = false;
  progressBar.style.width = "100%";
  resultEl.scrollIntoView({ behavior: "smooth" });
}

function renderScores(scores) {
  const scoreList = document.getElementById("scoreList");
  scoreList.innerHTML = "";
  dimensions.forEach(dim => {
    const row = document.createElement("div");
    row.className = "score-row";
    row.innerHTML = `
      <dt>${dim.label}</dt>
      <dd class="score-bar"><span style="width:${scores[dim.key]}%; background:${dim.color}"></span></dd>
      <dd>${scores[dim.key]}</dd>
    `;
    scoreList.appendChild(row);
  });
}

function drawRadar(scores) {
  const canvas = document.getElementById("radarCanvas");
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  const cx = w / 2;
  const cy = h / 2;
  const radius = 190;
  ctx.clearRect(0, 0, w, h);
  ctx.lineWidth = 1;
  ctx.font = "20px Microsoft YaHei, Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  for (let ring = 1; ring <= 5; ring++) {
    const r = (radius * ring) / 5;
    ctx.beginPath();
    dimensions.forEach((_, i) => {
      const angle = -Math.PI / 2 + (i * 2 * Math.PI) / dimensions.length;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.strokeStyle = "#d9d4c9";
    ctx.stroke();
  }

  dimensions.forEach((dim, i) => {
    const angle = -Math.PI / 2 + (i * 2 * Math.PI) / dimensions.length;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius);
    ctx.strokeStyle = "#d9d4c9";
    ctx.stroke();
    ctx.fillStyle = "#16202a";
    ctx.fillText(dim.label, cx + Math.cos(angle) * (radius + 48), cy + Math.sin(angle) * (radius + 42));
  });

  ctx.beginPath();
  dimensions.forEach((dim, i) => {
    const angle = -Math.PI / 2 + (i * 2 * Math.PI) / dimensions.length;
    const r = radius * (scores[dim.key] / 100);
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = "rgba(155, 63, 53, 0.26)";
  ctx.strokeStyle = "#9b3f35";
  ctx.lineWidth = 3;
  ctx.fill();
  ctx.stroke();
}

prevBtn.addEventListener("click", () => {
  current = Math.max(0, current - 1);
  renderQuestion();
});

nextBtn.addEventListener("click", () => {
  if (current < questions.length - 1) {
    current += 1;
    renderQuestion();
  } else {
    showResult();
  }
});

restartBtn.addEventListener("click", () => {
  answers = Array(questions.length).fill(null);
  current = 0;
  hasSubmittedResult = false;
  resultEl.hidden = true;
  renderQuestion();
  document.getElementById("quiz").scrollIntoView({ behavior: "smooth" });
});

copyBtn.addEventListener("click", async () => {
  const scores = getScores();
  const persona = pickPersona(scores);
  const typicality = getTypicality(scores);
  const text = `我的科学气质：${persona.name}\n典型性分数：${typicality.score}/100\n${persona.keywords}\n${persona.summary}`;
  try {
    await navigator.clipboard.writeText(text);
    copyBtn.textContent = "已复制";
    setTimeout(() => { copyBtn.textContent = "复制结果"; }, 1400);
  } catch {
    copyBtn.textContent = "复制失败";
    setTimeout(() => { copyBtn.textContent = "复制结果"; }, 1400);
  }
});

renderQuestion();
loadCompletionCount();
