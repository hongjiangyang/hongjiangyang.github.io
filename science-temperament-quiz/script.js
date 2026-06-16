const dimensions = [
  { key: "observation", label: "观察力", color: "#214d6b" },
  { key: "math", label: "数学化", color: "#7d4f8a" },
  { key: "experiment", label: "实验精神", color: "#9b3f35" },
  { key: "skepticism", label: "怀疑精神", color: "#4f6f52" },
  { key: "imagination", label: "跨界想象", color: "#b98037" },
  { key: "tools", label: "技术工具", color: "#3b7285" }
];

const questions = [
  {
    text: "面对一个陌生现象，你第一反应是？",
    options: [
      ["先观察很多次，找稳定规律", { observation: 3, skepticism: 1 }],
      ["尝试写成一个可计算的模型", { math: 3, imagination: 1 }],
      ["设计一个装置或实验去测它", { experiment: 3, tools: 1 }],
      ["先怀疑已有解释哪里不够好", { skepticism: 3, observation: 1 }]
    ]
  },
  {
    text: "如果你生活在科学革命时期，你最可能沉迷于？",
    options: [
      ["改进望远镜并画下天体位置", { observation: 2, tools: 2 }],
      ["寻找能统一很多现象的方程", { math: 3, imagination: 1 }],
      ["反复做落体、摆和光学实验", { experiment: 3, skepticism: 1 }],
      ["收集航海、植物和地理记录", { observation: 3, imagination: 1 }]
    ]
  },
  {
    text: "你最欣赏哪类突破？",
    options: [
      ["一个漂亮实验推翻旧观念", { experiment: 3, skepticism: 2 }],
      ["一个公式统一一大片现象", { math: 3, imagination: 2 }],
      ["一个工具打开新世界", { tools: 3, observation: 2 }],
      ["长期数据积累后的洞见", { observation: 3, skepticism: 1 }]
    ]
  },
  {
    text: "团队遇到争议时，你通常扮演？",
    options: [
      ["证据管理员：先看数据质量", { observation: 2, skepticism: 2 }],
      ["模型建筑师：搭一个解释框架", { math: 2, imagination: 2 }],
      ["实验修理工：换条件再试一次", { experiment: 2, tools: 2 }],
      ["反方辩手：专找隐藏假设", { skepticism: 3, math: 1 }]
    ]
  },
  {
    text: "你更容易被哪种图像打动？",
    options: [
      ["显微镜下第一次看见新结构", { observation: 2, tools: 2 }],
      ["曲线拟合后突然出现的规律", { math: 2, observation: 1 }],
      ["实验台上一个关键对照组", { experiment: 3, skepticism: 1 }],
      ["跨学科概念连成一张大图", { imagination: 3, math: 1 }]
    ]
  },
  {
    text: "如果只能带一样东西去研究未知世界，你选？",
    options: [
      ["一本耐用的观察笔记本", { observation: 3 }],
      ["一套可改造的测量工具", { tools: 3, experiment: 1 }],
      ["一块黑板和足够多粉笔", { math: 3 }],
      ["一串大胆问题", { skepticism: 2, imagination: 2 }]
    ]
  },
  {
    text: "你怎么看待错误结果？",
    options: [
      ["它可能揭示了仪器或方法问题", { tools: 2, experiment: 2 }],
      ["它提醒我模型边界在哪里", { math: 2, skepticism: 2 }],
      ["它是下一轮观察的线索", { observation: 2, imagination: 1 }],
      ["它可能正是新现象的入口", { imagination: 3, skepticism: 1 }]
    ]
  },
  {
    text: "你最喜欢的科学工作节奏是？",
    options: [
      ["长时间跟踪一个系统的变化", { observation: 3 }],
      ["短周期实验和快速迭代", { experiment: 3 }],
      ["安静推导，直到结构闭合", { math: 3 }],
      ["把远处领域的想法搬过来", { imagination: 3 }]
    ]
  },
  {
    text: "如果一个理论很美但证据不足，你会？",
    options: [
      ["暂时保留，等更多观察", { observation: 2, skepticism: 2 }],
      ["先看它是否能产生可检验预测", { math: 2, experiment: 2 }],
      ["设计实验去挑战它", { experiment: 3, skepticism: 1 }],
      ["把它当作启发，而不是结论", { imagination: 2, skepticism: 2 }]
    ]
  },
  {
    text: "你最想和哪种历史人物共事？",
    options: [
      ["细致记录自然变化的人", { observation: 3 }],
      ["能把世界写进方程的人", { math: 3 }],
      ["在实验室里坚持多年的人", { experiment: 3 }],
      ["发明新机器或新算法的人", { tools: 3, imagination: 1 }]
    ]
  },
  {
    text: "你的研究笔记最像？",
    options: [
      ["大量时间、地点、条件和例外", { observation: 3, skepticism: 1 }],
      ["公式、图形和变量关系", { math: 3 }],
      ["实验条件、失败记录和改进", { experiment: 3, tools: 1 }],
      ["类比、草图和跨界灵感", { imagination: 3 }]
    ]
  },
  {
    text: "你最想留下的科学贡献是？",
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
    keywords: "观察、实验、证据、反直觉",
    summary: "你擅长把日常现象变成可检验的问题，用观察和实验把世界从直觉里解放出来。",
    advice: "你的优势是证据感强。继续保留怀疑，但别让完美实验阻止你提出大胆解释。"
  },
  {
    name: "牛顿型数学统一者",
    lead: ["math", "observation"],
    keywords: "统一、方程、秩序、抽象",
    summary: "你倾向于寻找隐藏在复杂现象背后的共同结构，喜欢把世界压缩成清晰的原则。",
    advice: "你的优势是结构化能力。记得让模型不断接受真实数据的打磨。"
  },
  {
    name: "达尔文型长期综合者",
    lead: ["observation", "imagination"],
    keywords: "积累、比较、演化、综合",
    summary: "你能忍受长时间的材料积累，并在大量细节之间看见缓慢形成的模式。",
    advice: "你的优势是耐心和综合力。适当引入定量模型，会让洞见更锋利。"
  },
  {
    name: "居里型坚韧实验家",
    lead: ["experiment", "tools"],
    keywords: "坚持、实验、材料、可靠性",
    summary: "你相信结果来自反复操作、校准和坚持，愿意在艰苦细节里守住发现。",
    advice: "你的优势是执行力。别忘了定期退后一步，问问这些结果正在指向什么大问题。"
  },
  {
    name: "图灵型模型机器想象者",
    lead: ["math", "tools"],
    keywords: "算法、机器、形式化、可能性",
    summary: "你习惯把问题转化为可计算的结构，并愿意借助工具扩展思想边界。",
    advice: "你的优势是形式化和工具思维。多和实验数据相遇，会让抽象更有生命。"
  },
  {
    name: "费曼型直觉解释者",
    lead: ["imagination", "experiment"],
    keywords: "图像、解释、玩心、物理直觉",
    summary: "你喜欢把复杂问题变成可感知的图像，用直觉、类比和实验感抓住本质。",
    advice: "你的优势是解释力。把直觉写成可检验步骤，会让它更有穿透力。"
  },
  {
    name: "麦克斯韦型跨域统一者",
    lead: ["imagination", "math"],
    keywords: "场、类比、统一、结构",
    summary: "你善于把远处的概念连接起来，在不同领域之间寻找同一个深层结构。",
    advice: "你的优势是跨界联想。注意保留足够细节，避免过早追求统一。"
  },
  {
    name: "波普尔型怀疑检验者",
    lead: ["skepticism", "experiment"],
    keywords: "反证、边界、检验、清醒",
    summary: "你对漂亮说法保持警惕，最关心一个观点如何被挑战、被检验、被修正。",
    advice: "你的优势是清醒。也给新想法一点生长时间，不必一开始就把它推上审判台。"
  }
];

let current = 0;
let answers = Array(questions.length).fill(null);

const questionCounter = document.getElementById("questionCounter");
const questionText = document.getElementById("questionText");
const optionsEl = document.getElementById("options");
const progressBar = document.getElementById("progressBar");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const restartBtn = document.getElementById("restartBtn");
const copyBtn = document.getElementById("copyBtn");

function renderQuestion() {
  const q = questions[current];
  questionCounter.textContent = `第 ${current + 1} / ${questions.length} 题`;
  questionText.textContent = q.text;
  progressBar.style.width = `${(current / questions.length) * 100}%`;
  optionsEl.innerHTML = "";

  q.options.forEach(([label], idx) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `option${answers[current] === idx ? " selected" : ""}`;
    button.innerHTML = `<span class="option-marker"></span><span>${label}</span>`;
    button.addEventListener("click", () => {
      answers[current] = idx;
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
  return Object.fromEntries(Object.entries(raw).map(([key, value]) => [key, Math.round((value / max) * 100)]));
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

function showResult() {
  const scores = getScores();
  const persona = pickPersona(scores);
  document.getElementById("personaTitle").textContent = persona.name;
  document.getElementById("personaSummary").textContent = persona.summary;
  document.getElementById("personaKeywords").textContent = persona.keywords;
  document.getElementById("personaAdvice").textContent = persona.advice;
  renderScores(scores);
  drawRadar(scores);
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
  resultEl.hidden = true;
  renderQuestion();
  document.getElementById("quiz").scrollIntoView({ behavior: "smooth" });
});

copyBtn.addEventListener("click", async () => {
  const scores = getScores();
  const persona = pickPersona(scores);
  const text = `我的科学气质：${persona.name}\n${persona.keywords}\n${persona.summary}`;
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
