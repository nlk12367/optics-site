/* --- 
  儲存所有章節內容的地方
--- */
const chapterData = {
    // --- 第一章的 HTML 內容與邏輯 ---
    "1": {
        html: `
            <h1 class="chapter-title">第一章：波動 (Traveling Wave)</h1>
            <section class="learning-module">
                <h2>🎓 核心公式</h2>
                <h3>Symbols</h3>
                <div class="ctr">
                    <div>\\(A\\) amplitude (振幅)</div>
                    <div>\\(T = \\frac{1}{f} \\) period (週期, in seconds)</div>
                    <div>\\(f = \\frac{1}{T} \\) frequency (頻率, in Hertz)</div>
                    <div>\\(v \\) propagation velocity (傳播速度, in m/s)</div>
                    <div>\\(\\lambda \\) wavelength (波長, in meters)</div>
                    <div>\\(k \\) wave number (波數)</div>
                    <div>\\(\\omega \\) angular frequency (角頻率)</div>
                </div>
                <h3>Formulas</h3>
                <p>行進波的通用公式：</p>
                $$ y(x,t)=A \\sin \\Big[ \\frac{2\\pi}{\\lambda} (x \\pm v t) \\Big] $$
                <p>透過變數代換：</p>
                $$\\begin{align*}
                k &= \\frac{2\\pi}{\\lambda} \\\\
                \\omega &= 2\\pi f = \\frac{2\\pi}{T}
                \\end{align*}$$
                <p>我們可以將公式轉換為更簡潔的形式：</p>
                $$ y(x,t) = A \\sin(kx \\pm \\omega t) $$
            </section>
            <section class="learning-module">
                <h2>🖥️ 教學影片：波動基礎</h2>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/ntx6hY6zsd0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>
            <section class="learning-module">
                <h2>📝 隨堂複習</h2>
                <form class="quiz-form" id="chapter1-quiz" onsubmit="return false;">
                    <div class="quiz-question">
                        <p><strong>1. 「波數」(Wave Number) \\(k\\) 的定義是什麼？</strong></p>
                        <div><input type="radio" id="q1a" name="q1" value="A"><label for="q1a">(A) \\(k = 2\\pi \\lambda\\)</label></div>
                        <div><input type="radio" id="q1b" name="q1" value="B"><label for="q1b">(B) \\(k = \\frac{2\\pi}{\\lambda}\\)</label></div>
                        <div><input type="radio" id="q1c" name="q1" value="C"><label for="q1c">(C) \\(k = \\frac{\\lambda}{2\\pi}\\)</label></div>
                    </div>
                    <div class="quiz-question">
                        <p><strong>2. 「角頻率」(Angular Frequency) \\(\\omega\\) 的正確公式是什麼？</strong></p>
                        <div><input type="radio" id="q2a" name="q2" value="A"><label for="q2a">(A) \\(\\omega = 2\\pi f\\)</label></div>
                        <div><input type="radio" id="q2b" name="q2" value="B"><label for="q2b">(B) \\(\\omega = \\frac{2\\pi}{f}\\)</label></div>
                        <div><input type="radio" id="q2c" name="q2" value="C"><label for="q2c">(C) \\(\\omega = \\frac{f}{2\\pi}\\)</label></div>
                    </div>
                    <div class="quiz-question">
                        <p><strong>3. 公式 \\(y(x,t) = A \\sin(kx - \\omega t)\\) 描述的波是往哪個方向傳播？</strong></p>
                        <div><input type="radio" id="q3a" name="q3" value="A"><label for="q3a">(A) 正 x 方向</label></div>
                        <div><input type="radio" id="q3b" name="q3" value="B"><label for="q3b">(B) 負 x 方向</label></div>
                    </div>
                    <button type="submit" id="submit-quiz-1">提交答案</button>
                    <p id="quiz-result-1" style="font-weight: bold; margin-top: 15px;"></p>
                </form>
            </section>
            <section class="learning-module">
                <h2>📇 字卡遊戲</h2>
                <div class="flashcard-container" id="flashcard-container-1">
                    <div class="flashcard" id="flashcard-1"><div class="flashcard-inner">
                        <div class="card-face card-front" id="flashcard-front-1"></div>
                        <div class="card-face card-back" id="flashcard-back-1"></div>
                    </div></div>
                    <div class="flashcard-nav">
                        <button id="prev-card-1">上一張</button>
                        <button id="next-card-1">下一張</button>
                    </div>
                </div>
            </section>
        `,
        initLogic: () => {
            const quizButton = document.getElementById('submit-quiz-1');
            if (quizButton) {
                quizButton.addEventListener('click', () => {
                    const quizResult = document.getElementById('quiz-result-1');
                    const answers = {
                        q1: document.querySelector('input[name="q1"]:checked'),
                        q2: document.querySelector('input[name="q2"]:checked'),
                        q3: document.querySelector('input[name="q3"]:checked')
                    };
                    let score = 0, totalQuestions = 3;
                    if (answers.q1 && answers.q1.value === 'B') score++;
                    if (answers.q2 && answers.q2.value === 'A') score++;
                    if (answers.q3 && answers.q3.value === 'A') score++;
                    quizResult.textContent = `您的得分: ${score} / ${totalQuestions}`;
                    quizResult.style.color = (score === totalQuestions) ? 'green' : 'red';
                });
            }
            const flashcards = [
                { front: "\\(k\\)", back: "Wave Number (波數)<br> $$\\large k = \\frac{2\\pi}{\\lambda}$$" },
                { front: "\\(\\omega\\)", back: "Angular Frequency (角頻率)<br> $$\\large \\omega = 2\\pi f$$" },
                { front: "\\(A\\)", back: "Amplitude (振幅)" },
                { front: "\\(T\\)", back: "Period (週期)<br> $$\\large T = 1/f$$" },
                { front: "\\(f\\)", back: "Frequency (頻率)<br> $$\\large f = 1/T$$" }
            ];
            initFlashcards('1', flashcards);
        }
    },
    
    // 其他章節內容... (保持原樣)
};

// 手機漢堡選單
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('show');
    });

    // 點選選項後自動關閉
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
      });
    });
  }
});

// 黑暗模式切換邏輯
function setupThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.classList.toggle('dark-mode', savedTheme === 'dark');
  themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

  themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

// 其他 script.js 內容... (如 renderChapter 等)

initializeAppLogic();  // 假設你有這個函數