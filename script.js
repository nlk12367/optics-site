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
                    <iframe src="https://www.youtube.com/embed/ntxUHuC1Wmw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
    
    // --- 第二章的 HTML 內容與邏輯 ---
    "2": {
        html: `
            <h1 class="chapter-title">第二章：能量與動量 (Energy & Momentum)</h1>
            <section class="learning-module">
                <h2>🎓 核心公式</h2>
                <h3>Symbols</h3>
                <div class="ctr">
                    <div>\\(u_E\\) 電場能量密度</div>
                    <div>\\(u_B\\) 磁場能量密度</div>
                    <div>\\(\\vec{S}\\) 坡印廷向量 (Poynting Vector)</div>
                    <div>\\(I\\) 光強度 (Intensity)</div>
                    <div>\\(p\\) 動量 (Momentum)</div>
                    <div>\\(P_{rad}\\) 光壓 (Radiation Pressure)</div>
                </div>
                <h3>Formulas</h3>
                <p>電磁波的總能量密度 \\(u\\) 是電場與磁場能量密度的總和：</p>
                $$ u = u_E + u_B = \\frac{1}{2}\\epsilon_0 E^2 + \\frac{1}{2\\mu_0}B^2 $$
                <p>坡印廷向量 \\(\\vec{S}\\) 描述了能量流的方向與大小（單位面積的功率）：</p>
                $$ \\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B}) $$
                <p>光強度 \\(I\\) 是坡印廷向量大小的時間平均值：</p>
                $$ I = \\langle S \\rangle = \\frac{1}{2}c\\epsilon_0 E_{max}^2 $$
                <p>光壓 \\(P_{rad}\\) (完美吸收表面)：</p>
                $$ P_{rad} = \\frac{I}{c} $$
            </section>
            <section class="learning-module">
                <h2>🖥️ 教學影片：坡印廷向量 (Poynting Vector)</h2>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/Hd29jEaGERk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>
            <section class="learning-module">
                <h2>📝 隨堂複習</h2>
                <form class="quiz-form" id="chapter2-quiz" onsubmit="return false;">
                    <div class="quiz-question">
                        <p><strong>1. 哪一個物理量描述了電磁波的「能量流動方向」與「單位面積的功率」？</strong></p>
                        <div><input type="radio" id="q1a" name="q1" value="A"><label for="q1a">(A) 坡印廷向量 \\(\\vec{S}\\)</label></div>
                        <div><input type="radio" id="q1b" name="q1" value="B"><label for="q1b">(B) 電場能量密度 \\(u_E\\)</label></div>
                        <div><input type="radio" id="q1c" name="q1" value="C"><label for="q1c">(C) 光強度 \\(I\\)</label></div>
                    </div>
                    <div class="quiz-question">
                        <p><strong>2. 坡印廷向量 \\(\\vec{S}\\) 的正確定義是什麼？</strong></p>
                        <div><input type="radio" id="q2a" name="q2" value="A"><label for="q2a">(A) \\(\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})\\)</label></div>
                        <div><input type="radio" id="q2b" name="q2" value="B"><label for="q2b">(B) \\(\\vec{S} = \\mu_0 (\\vec{E} \\times \\vec{B})\\)</label></div>
                        <div><input type="radio" id="q2c" name="q2" value="C"><label for="q2c">(C) \\(\\vec{S} = \\frac{1}{\\epsilon_0} (\\vec{E} \\cdot \\vec{B})\\)</label></div>
                    </div>
                    <div class="quiz-question">
                        <p><strong>3. 光強度 \\(I\\) 被定義為坡印廷向量大小的...</strong></p>
                        <div><input type="radio" id="q3a" name="q3" value="A"><label for="q3a">(A) 瞬間最大值</label></div>
                        <div><input type="radio" id="q3b" name="q3" value="B"><label for="q3b">(B) 時間平均值</label></div>
                        <div><input type="radio" id="q3c" name="q3" value="C"><label for="q3c">(C) 空間最小值</label></div>
                    </div>
                    <button type="submit" id="submit-quiz-2">提交答案</button>
                    <p id="quiz-result-2" style="font-weight: bold; margin-top: 15px;"></p>
                </form>
            </section>
            <section class="learning-module">
                <h2>📇 字卡遊戲</h2>
                <div class="flashcard-container" id="flashcard-container-2">
                    <div class="flashcard" id="flashcard-2"><div class="flashcard-inner">
                        <div class="card-face card-front" id="flashcard-front-2"></div>
                        <div class="card-face card-back" id="flashcard-back-2"></div>
                    </div></div>
                    <div class="flashcard-nav">
                        <button id="prev-card-2">上一張</button>
                        <button id="next-card-2">下一張</button>
                    </div>
                </div>
            </section>
        `,
        initLogic: () => {
            const quizButton = document.getElementById('submit-quiz-2');
            if (quizButton) {
                quizButton.addEventListener('click', () => {
                    const quizResult = document.getElementById('quiz-result-2');
                    const answers = {
                        q1: document.querySelector('input[name="q1"]:checked'),
                        q2: document.querySelector('input[name="q2"]:checked'),
                        q3: document.querySelector('input[name="q3"]:checked')
                    };
                    let score = 0, totalQuestions = 3;
                    if (answers.q1 && answers.q1.value === 'A') score++;
                    if (answers.q2 && answers.q2.value === 'A') score++;
                    if (answers.q3 && answers.q3.value === 'B') score++;
                    quizResult.textContent = `您的得分: ${score} / ${totalQuestions}`;
                    quizResult.style.color = (score === totalQuestions) ? 'green' : 'red';
                });
            }
            const flashcards = [
                { front: "\\(\\vec{S}\\)", back: "坡印廷向量 (Poynting Vector)<br> 描述能量流" },
                { front: "\\(\\vec{S} = ?\\)", back: "$$\\large \\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$$" },
                { front: "\\(I\\)", back: "光強度 (Intensity)<br> \\(I = \\langle S \\rangle\\)" },
                { front: "\\(u_E\\)", back: "電場能量密度<br> $$\\large u_E = \\frac{1}{2}\\epsilon_0 E^2$$" },
                { front: "\\(P_{rad}\\) (吸收)", back: "光壓 (Radiation Pressure)<br> $$\\large P_{rad} = \\frac{I}{c}$$" }
            ];
            initFlashcards('2', flashcards);
        }
    },
    
    // --- 第三章的 HTML 內容與邏輯 ---
    "3": {
        html: `
            <h1 class="chapter-title">第三章：電磁波 (Maxwell's Equations)</h1>
            <section class="learning-module">
                <h2>🎓 核心公式：馬克士威方程式</h2>
                <p>馬克士威方程式是四條統整電磁學的基礎方程式。在真空中（沒有電荷 \\(\\rho\\) 和電流 \\(\\vec{J}\\)），它們的形式如下：</p>
                <p><strong>1. 高斯定律 (Gauss's Law):</strong></p>
                $$ \\nabla \cdot \\vec{E} = 0 $$
                <p><strong>2. 磁高斯定律 (Gauss's Law for Magnetism):</strong></p>
                $$ \\nabla \cdot \\vec{B} = 0 $$
                <p><strong>3. 法拉第定律 (Faraday's Law):</strong></p>
                $$ \\nabla \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t} $$
                <p><strong>4. 安培-馬克士威定律 (Ampère-Maxwell Law):</strong></p>
                $$ \\nabla \\times \\vec{B} = \\mu_0 \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t} $$
                <p style="margin-top: 20px;">第 4 條中的 \\(\\mu_0 \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}\\) 項稱為「位移電流」，這是馬克士威的關鍵補充，它預測了變動的電場可以產生磁場。</p>
                <p>從這些方程式可以推導出電磁波的波動方程式：</p>
                $$ \\nabla^2 \\vec{E} = \\mu_0 \\epsilon_0 \\frac{\\partial^2 \\vec{E}}{\\partial t^2} $$
                <p>並預測了波速 \\(c\\)，其值等於光速：</p>
                $$ c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}} $$
            </section>
            <section class="learning-module">
                <h2>🖥️ 教學影片：什麼是電磁波？</h2>
                <p>本影片 (Physics Made Easy) 清楚地解釋了振盪的電荷如何產生電磁波。</p>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/hk63uUhkZH4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>
            <section class="learning-module">
                <h2>📝 隨堂複習</h2>
                <form class="quiz-form" id="chapter3-quiz" onsubmit="return false;">
                    <div class="quiz-question">
                        <p><strong>1. 馬克士威在哪一條定律中加入了「位移電流」項，從而預測了電磁波的存在？</strong></p>
                        <div><input type="radio" id="q1a" name="q1" value="A"><label for="q1a">(A) 高斯定律</label></div>
                        <div><input type="radio" id="q1b" name="q1" value="B"><label for="q1b">(B) 法拉第定律</label></div>
                        <div><input type="radio" id="q1c" name="q1" value="C"><label for="q1c">(C) 安培定律 (安培-馬克士威定律)</label></div>
                    </div>
                    <div class="quiz-question">
                        <p><strong>2. 根據馬克士威方程式，光在真空中的速度 \\(c\\) 等於？</strong></p>
                        <div><input type="radio" id="q2a" name="q2" value="A"><label for="q2a">(A) \\(\\sqrt{\\mu_0 \\epsilon_0}\\)</label></div>
                        <div><input type="radio" id="q2b" name="q2" value="B"><label for="q2b">(B) \\(1 / \\sqrt{\\mu_0 \\epsilon_0}\\)</label></div>
                        <div><input type="radio" id="q2c" name="q2" value="C"><label for="q2c">(C) \\(\\mu_0 / \\epsilon_0\\)</label></div>
                    </div>
                    <div class="quiz-question">
                        <p><strong>3. 法拉第定律 (\\(\\nabla \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}\\)) 描述了什麼現象？</strong></p>
                        <div><input type="radio" id="q3a" name="q3" value="A"><label for="q3a">(A) 變動的磁場會產生電場</label></div>
                        <div><input type="radio" id="q3b" name="q3" value="B"><label for="q3b">(B) 變動的電場會產生磁場</label></div>
                        <div><input type="radio" id="q3c" name="q3" value="C"><label for="q3c">(C) 磁場沒有磁單極</label></div>
                    </div>
                    <button type="submit" id="submit-quiz-3">提交答案</button>
                    <p id="quiz-result-3" style="font-weight: bold; margin-top: 15px;"></p>
                </form>
            </section>
            <section class="learning-module">
                <h2>📇 字卡遊戲</h2>
                <div class="flashcard-container" id="flashcard-container-3">
                    <div class="flashcard" id="flashcard-3"><div class="flashcard-inner">
                        <div class="card-face card-front" id="flashcard-front-3"></div>
                        <div class="card-face card-back" id="flashcard-back-3"></div>
                    </div></div>
                    <div class="flashcard-nav">
                        <button id="prev-card-3">上一張</button>
                        <button id="next-card-3">下一張</button>
                    </div>
                </div>
            </section>
        `,
        initLogic: () => {
            const quizButton = document.getElementById('submit-quiz-3');
            if (quizButton) {
                quizButton.addEventListener('click', () => {
                    const quizResult = document.getElementById('quiz-result-3');
                    const answers = {
                        q1: document.querySelector('input[name="q1"]:checked'),
                        q2: document.querySelector('input[name="q2"]:checked'),
                        q3: document.querySelector('input[name="q3"]:checked')
                    };
                    let score = 0, totalQuestions = 3;
                    if (answers.q1 && answers.q1.value === 'C') score++;
                    if (answers.q2 && answers.q2.value === 'B') score++;
                    if (answers.q3 && answers.q3.value === 'A') score++;
                    quizResult.textContent = `您的得分: ${score} / ${totalQuestions}`;
                    quizResult.style.color = (score === totalQuestions) ? 'green' : 'red';
                });
            }
            const flashcards = [
                { front: "馬克士威方程式", back: "統整電磁學的四條方程式，<br>預測了光是電磁波。" },
                { front: "位移電流", back: "變動的電場等效於電流，<br>也能產生磁場。" },
                { front: "法拉第定律", back: "變動的磁場<br>會產生電場。" },
                { front: "真空中的光速 \\(c\\)", back: "$$\\large c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$$" }
            ];
            initFlashcards('3', flashcards);
        }
    },
    
    // --- 第四章的 HTML 內容與邏輯 ---
    "4": {
        html: `
            <h1 class="chapter-title">第四章：波的疊加 (Superposition)</h1>
            <section class="learning-module">
                <h2>🎓 核心公式：疊加與干涉</h2>
                
                <p><strong>1. 疊加原理 (Superposition Principle):</strong></p>
                <p>當兩個（或多個）波在空間中相遇時，總波函數 \\(\\psi\\) 是各個獨立波函數 \\(\\psi_1, \\psi_2, ...\\) 的向量和。</p>
                $$ \\psi = \\psi_1 + \\psi_2 + ... $$

                <p style="margin-top: 20px;"><strong>2. 干涉 (Interference):</strong></p>
                <p>當兩個同調光源（相同頻率、恆定相位差）發生疊加時，會產生干涉現象。</p>
                
                <p><strong>建設性干涉 (Constructive):</strong> (波峰遇波峰)</p>
                <p>相位差為 \\(2\\pi\\) 的整數倍 (\\(0, 2\\pi, 4\\pi, ...\\))。</p>
                
                <p><strong>破壞性干涉 (Destructive):</strong> (波峰遇波谷)</p>
                <p>相位差為 \\(\\pi\\) 的奇數倍 (\\(\pi, 3\\pi, 5\\pi, ...\\))。</p>

                <p style="margin-top: 20px;"><strong>3. 楊氏雙狹縫 (Young's Double Slit):</strong></p>
                <p>對於狹縫間距為 \\(d\\)，光程差 \\(\\Delta L = d \\sin \\theta\\)。</p>
                
                <p><strong>亮紋 (建設性) 條件:</strong></p>
                $$ d \\sin \\theta = m \\lambda \\quad (m = 0, \\pm 1, \\pm 2, ...) $$

                <p><strong>暗紋 (破壞性) 條件:</strong></p>
                $$ d \\sin \\theta = (m + \\frac{1}{2}) \\lambda \\quad (m = 0, \\pm 1, \\pm 2, ...) $$
            </section>
            
            <section class="learning-module">
                <h2>🖥️ 教學影片：波的疊加原理</h2>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/I6LplR1GsUM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>
            
            <section class="learning-module">
                <h2>📝 隨堂複習</h2>
                <form class="quiz-form" id="chapter4-quiz" onsubmit="return false;">
                    <div class="quiz-question">
                        <p><strong>1. 當兩個波相遇時，總擾動是各個波擾動的向量和。這個原理稱為什麼？</strong></p>
                        <div><input type="radio" id="q1a" name="q1" value="A"><label for="q1a">(A) 疊加原理 (Superposition Principle)</label></div>
                        <div><input type="radio" id="q1b" name="q1" value="B"><label for="q1b">(B) 偏振原理 (Polarization Principle)</label></div>
                        <div><input type="radio" id="q1c" name="q1" value="C"><label for="q1c">(C) 馬克士威原理 (Maxwell's Principle)</label></div>
                    </div>
                    <div class="quiz-question">
                        <p><strong>2. 在楊氏雙狹縫實驗中，亮紋（建設性干涉）的條件是什麼？ (\\(d\\) = 狹縫間距, \\(m\\) = 整數)</strong></p>
                        <div><input type="radio" id="q2a" name="q2" value="A"><label for="q2a">(A) \\(d \\sin \\theta = m \\lambda\\)</label></div>
                        <div><input type="radio" id="q2b" name="q2" value="B"><label for="q2b">(B) \\(d \\sin \\theta = (m + \\frac{1}{2}) \\lambda\\)</label></div>
                        <div><input type="radio" id="q2c" name="q2" value="C"><label for="q2c">(C) \\(d \\cos \\theta = m \\lambda\\)</label></div>
                    </div>
                    <div class="quiz-question">
                        <p><strong>3. 當兩個波的相位差為 \\(\\pi\\)（或 \\(3\\pi, 5\\pi ...\\)）時，會發生什麼干涉？</strong></p>
                        <div><input type="radio" id="q3a" name="q3" value="A"><label for="q3a">(A) 建設性干涉</label></div>
                        <div><input type="radio" id="q3b" name="q3" value="B"><label for="q3b">(B) 破壞性干涉</label></div>
                        <div><input type="radio" id="q3c" name="q3" value="C"><label for="q3c">(C) 完全不干涉</label></div>
                    </div>
                    <button type="submit" id="submit-quiz-4">提交答案</button>
                    <p id="quiz-result-4" style="font-weight: bold; margin-top: 15px;"></p>
                </form>
            </section>
            <section class="learning-module">
                <h2>📇 字卡遊戲</h2>
                <div class="flashcard-container" id="flashcard-container-4">
                    <div class="flashcard" id="flashcard-4"><div class="flashcard-inner">
                        <div class="card-face card-front" id="flashcard-front-4"></div>
                        <div class="card-face card-back" id="flashcard-back-4"></div>
                    </div></div>
                    <div class="flashcard-nav">
                        <button id="prev-card-4">上一張</button>
                        <button id="next-card-4">下一張</button>
                    </div>
                </div>
            </section>
        `,
        initLogic: () => {
            const quizButton = document.getElementById('submit-quiz-4');
            if (quizButton) {
                quizButton.addEventListener('click', () => {
                    const quizResult = document.getElementById('quiz-result-4');
                    const answers = {
                        q1: document.querySelector('input[name="q1"]:checked'),
                        q2: document.querySelector('input[name="q2"]:checked'),
                        q3: document.querySelector('input[name="q3"]:checked')
                    };
                    let score = 0, totalQuestions = 3;
                    if (answers.q1 && answers.q1.value === 'A') score++;
                    if (answers.q2 && answers.q2.value === 'A') score++;
                    if (answers.q3 && answers.q3.value === 'B') score++;
                    quizResult.textContent = `您的得分: ${score} / ${totalQuestions}`;
                    quizResult.style.color = (score === totalQuestions) ? 'green' : 'red';
                });
            }
            const flashcards = [
                { front: "疊加原理", back: "總波函數是<br>各個波函數的向量和。" },
                { front: "干涉 (Interference)", back: "兩個同調波疊加時<br>產生的現象。" },
                { front: "建設性干涉", back: "波峰遇波峰。<br>相位差為 \\(2m\\pi\\)。" },
                { front: "破壞性干涉", back: "波峰遇波谷。<br>相位差為 \\((2m+1)\\pi\\)。" },
                { front: "雙狹縫亮紋", back: "$$\\large d \\sin \\theta = m \\lambda$$" },
                { front: "雙狹縫暗紋", back: "$$\\large d \\sin \\theta = (m+\\frac{1}{2}) \\lambda$$" }
            ];
            initFlashcards('4', flashcards);
        }
    },
    
    // --- 第五章的 HTML 內容與邏輯 ---
    "5": {
        html: `
            <h1 class="chapter-title">第五章：偏振 (Polarization)</h1>
            <section class="learning-module">
                <h2>🎓 核心公式：偏振與定律</h2>
                
                <p><strong>1. 偏振 (Polarization):</strong></p>
                <p>偏振是**橫波**（例如光波）特有的現象。它描述的是波的振盪方向（對光而言，是電場 \\(\\vec{E}\\) 的振盪方向）被限制在特定平面內。</p>
                <ul style="margin-top: 10px;">
                    <li><strong>線性偏振 (Linear):</strong> 電場在單一固定平面上振盪。</li>
                    <li><strong>非偏振 (Unpolarized):</strong> 電場在所有方向上隨機振盪（例如太陽光）。</li>
                </ul>

                <p style="margin-top: 20px;"><strong>2. 馬呂斯定律 (Malus's Law):</strong></p>
                <p>當一束強度為 \\(I_0\\) 的線性偏振光，通過一個偏振軸與其夾角為 \\(\\theta\\) 的偏振片（檢偏器）時，穿透後的光強度 \\(I\\) 為：</p>
                $$ I = I_0 \\cos^2 \\theta $$
                <p><em>推論：</em> 當非偏振光通過第一個偏振片時，強度會減半 (\\(I = I_0 / 2\\))。</p>

                <p style="margin-top: 20px;"><strong>3. 布魯斯特角 (Brewster's Angle):</strong></p>
                <p>當非偏振光以特定角度 \\(\\theta_B\\)（布魯斯特角）入射到介面（例如空氣到玻璃）時，**反射光**將會是完全偏振的（偏振方向平行於介面）。</p>
                $$ \\tan \\theta_B = \\frac{n_2}{n_1} $$
            </section>
            
            <section class="learning-module">
                <h2>🖥️ 教學影片：光的偏振</h2>
                <p>本影片 (AAPT) 實際展示了偏振片如何運作。</p>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/FzJBjpqWrw8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>
            
            <section class="learning-module">
                <h2>📝 隨堂複習</h2>
                <form class="quiz-form" id="chapter5-quiz" onsubmit="return false;">
                    <div class="quiz-question">
                        <p><strong>1. 哪一種類型的波才能顯示出「偏振」現象？</strong></p>
                        <div><input type="radio" id="q1a" name="q1" value="A"><label for="q1a">(A) 橫波 (Transverse waves)</label></div>
                        <div><input type="radio" id="q1b" name="q1" value="B"><label for="q1b">(B) 縱波 (Longitudinal waves)</label></div>
                        <div><input type="radio" id="q1c" name="q1" value="C"><label for="q1c">(C) 兩種都可以</label></div>
                    </div>
                    <div class="quiz-question">
                        <p><strong>2. 一束非偏振光（強度 \\(I_0\\)）通過一個理想偏振片後，強度會變為多少？</strong></p>
                        <div><input type="radio" id="q2a" name="q2" value="A"><label for="q2a">(A) \\(I_0\\)</label></div>
                        <div><input type="radio" id="q2b" name="q2" value="B"><label for="q2b">(B) \\(I_0 / 2\\)</label></div>
                        <div><input type="radio" id="q2c" name="q2" value="C"><label for="q2c">(C) 0</label></div>
                    </div>
                    <div class="quiz-question">
                        <p><strong>3. 根據馬呂斯定律 \\(I = I_0 \\cos^2 \\theta\\)，一束偏振光（強度 \\(I_0\\)）通過一個與其偏振軸夾角 \\(\\theta = 90^\\circ\\) 的檢偏器，透射光強度 \\(I\\) 為何？</strong></p>
                        <div><input type="radio" id="q3a" name="q3" value="A"><label for="q3a">(A) \\(I_0\\) (強度不變)</label></div>
                        <div><input type="radio" id="q3b" name="q3" value="B"><label for="q3b">(B) \\(I_0 / 2\\)</label></div>
                        <div><input type="radio" id="q3c" name="q3" value="C"><label for="q3c">(C) 0 (完全阻擋)</label></div>
                    </div>
                    <button type="submit" id="submit-quiz-5">提交答案</button>
                    <p id="quiz-result-5" style="font-weight: bold; margin-top: 15px;"></p>
                </form>
            </section>
            <section class="learning-module">
                <h2>📇 字卡遊戲</h2>
                <div class="flashcard-container" id="flashcard-container-5">
                    <div class="flashcard" id="flashcard-5"><div class="flashcard-inner">
                        <div class="card-face card-front" id="flashcard-front-5"></div>
                        <div class="card-face card-back" id="flashcard-back-5"></div>
                    </div></div>
                    <div class="flashcard-nav">
                        <button id="prev-card-5">上一張</button>
                        <button id="next-card-5">下一張</button>
                    </div>
                </div>
            </section>
        `,
        initLogic: () => {
            const quizButton = document.getElementById('submit-quiz-5');
            if (quizButton) {
                quizButton.addEventListener('click', () => {
                    const quizResult = document.getElementById('quiz-result-5');
                    const answers = {
                        q1: document.querySelector('input[name="q1"]:checked'),
                        q2: document.querySelector('input[name="q2"]:checked'),
                        q3: document.querySelector('input[name="q3"]:checked')
                    };
                    let score = 0, totalQuestions = 3;
                    if (answers.q1 && answers.q1.value === 'A') score++;
                    if (answers.q2 && answers.q2.value === 'B') score++;
                    if (answers.q3 && answers.q3.value === 'C') score++;
                    quizResult.textContent = `您的得分: ${score} / ${totalQuestions}`;
                    quizResult.style.color = (score === totalQuestions) ? 'green' : 'red';
                });
            }
            const flashcards = [
                { front: "偏振 (Polarization)", back: "光波的電場振盪方向<br>被限制在特定平面的現象。" },
                { front: "馬呂斯定律 (Malus's Law)", back: "描述偏振光通過檢偏器後的強度。<br> $$\\large I = I_0 \\cos^2 \\theta$$" },
                { front: "布魯斯特角 (Brewster's Angle)", back: "反射光為完全偏振時的入射角。<br> $$\\large \\tan\\theta_B = \\frac{n_2}{n_1}$$" },
                { front: "橫波 (Transverse Wave)", back: "波的振盪方向<br>垂直於傳播方向。" }
            ];
            initFlashcards('5', flashcards);
        }
    },
    
    // --- (*** 新增 ***) 附錄的 HTML 內容與邏輯 ---
    "appendix": {
        html: `
            <h1 class="chapter-title">附錄：二色向性 (Dichroism)</h1>
            <section class="learning-module">
                <h2>🎓 <strong>二色向性 (Dichroism) 的基本原理</strong></h2>
                <p><strong>二向色性是指某些晶體或物質對於不同偏振方向的光，會表現出選擇性吸收的物理現象。</strong></p>
                <p>簡單來說，當一束非偏振光（含有各種隨機方向的振動電場）通過具有二色性的材料時，會發生以下情況：</p>
                <ol>
                    <li><p><strong>選擇性吸收 (Selective Absorption)</strong>：該材料會強烈吸收某個特定偏振方向的光（我們稱之為<u>吸收軸</u>），而對於與其垂直的偏振方向的光，則幾乎不吸收，讓其順利通過（我們稱之為<u>穿透軸</u>或 <u>偏振軸</u>）。</p></li>
                    <li><p><strong>產生偏振光 (Polarization)</strong>：因此，原本非偏振的光在穿過這種材料後，只剩下與「穿透軸」方向一致的偏振光，其餘方向的偏振光都被吸收掉了。最終，出射的光就變成了線偏振光。</p></li>
                </ol>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/SyY7cXjRgg.png" alt="Dichroism diagram 1"></p>
                <p><em>電氣石都是化學成分各不相同的矽酸硼化物</em></p>
                
                <p><strong>形象化比喻：</strong></p>
                <p>您可以將具有二色性的材料想像成一個「柵欄」。</p>
                <ul>
                    <li><strong>非偏振光</strong>：就像一群人從四面八方隨意跑向柵欄。</li>
                    <li><strong>二色性材料（柵欄）</strong>：只有身體側向與柵欄縫隙平行的人（特定偏振方向的光）才能通過。</li>
                    <li><strong>被吸收的光</strong>：身體方向與柵欄垂直的人（其他偏振方向的光）會被擋住。</li>
                    <li><strong>穿透的偏振光</strong>：最終通過柵欄的人群，都只能以同一個方向前進。</li>
                </ul>
                <p>這個現象的物理本質，與材料的分子或晶格結構有關。在這些材料中，其分子排列具有明顯的方向性，使得電子只能在特定方向上有效地與光的電場相互作用並吸收其能量。</p>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/rytttQo0ll.png" alt="Dichroism diagram 2"></p>
                <p><strong>Y方向：</strong>電場y分量沿導線長軸驅動傳導電子産生電流。電子和晶格原子碰撞，傳遞能量導線變熱。沿著y軸加速的電子向前向後都輻射電磁波，向前輻射的電磁波與入射波相抵消，從而y分量透過很少或者根本不透過。<br>
                <strong>Z方向：</strong>電子不能移動很遠，z分量不受影響。</p>
            </section>
            
            <section class="learning-module">
                <h2><strong>二色向性在偏振片 (Polarizer) 的應用</strong></h2>
                <p>二色性是製造現代最常見的<strong>吸收型偏振片（Absorptive Polarizer）</strong>的核心原理。這種類型的偏振片，也常被稱為「寶麗來（Polaroid）偏振片」，其發明大大降低了偏振光的生產成本，使其得以廣泛應用。</p>
                <p><strong>其結構與運作方式如下：</strong></p>
                <ol>
                    <li><p><strong>材料選擇</strong>：最經典的材料是聚乙烯醇（Polyvinyl Alcohol, PVA）薄膜。</p></li>
                    <li><p><strong>拉伸定向</strong>：首先，將PVA薄膜加熱並沿一個方向強力拉伸。這個過程會使得原本隨機排列的長鏈聚合物分子，沿著拉伸方向整齊排列。</p></li>
                    <li><p><strong>染色（摻雜）</strong>：接著，將拉伸後的薄膜浸泡在富含碘（Iodine）的溶液中。碘分子會附著在整齊排列的PVA長鏈上，形成導電的碘鏈。</p></li>
                    <li><p><strong>形成「吸收軸」</strong>：這些沿著PVA分子鏈排列的碘鏈，就像一根根微小的導線。當入射光的電場方向與這些碘鏈平行時，會驅動碘鏈中的電子產生電流，光的能量因此被吸收並轉化為熱能。這個方向就成了偏振片的<strong>吸收軸</strong>。</p></li>
                    <li><p><strong>形成「穿透軸」</strong>：當入射光的電場方向與碘鏈垂直時，電子無法在短軸方向上有效移動，因此光的能量不會被吸收，光線便能順利穿透。這個方向就是偏振片的<strong>穿透軸</strong>。</p></li>
                </ol>
                <p><strong>結論：</strong></p>
                <p>一片avidin的偏振片，就是利用其內部分子結構的有序排列，創造出一個特定的「吸收軸」。當自然光通過時，與吸收軸平行的電場分量被吸收，而與其垂直的電場分量則被允許通過，從而將非偏振的自然光轉變為線偏振光。</p>
            </section>
            
            <section class="learning-module">
                <h2>相關影片</h2>
                <div class="video-container">
                    <iframe frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" src="https://www.youtube.com/embed/cNJPzpMJfxI" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                </div>
                <div class="video-container" style="margin-top: 15px;">
                    <iframe src="https://player.bilibili.com/player.html?isOutside=true&aid=540074514&bvid=BV1vi4y1b7a3&cid=172339009&p=1" frameborder="no" allowfullscreen="true"></iframe>
                </div>
            </section>

            <section class="learning-module">
                <h2><strong>二色性偏振片的應用實例</strong></h2>
                <ul>
                    <li><strong>LCD 顯示器</strong>：液晶顯示器的每個像素前後都各有一片偏振片，通過控制液晶分子的旋轉來決定光的通過或阻擋，從而顯示圖像。</li>
                    <li><strong>太陽眼鏡</strong>：偏光太陽眼鏡可以過濾掉來自水面、路面等水平面的反射眩光（這些眩光主要是水平偏振光），讓視野更清晰舒適。</li>
                    <li><strong>攝影濾鏡</strong>：攝影師使用偏光鏡（CPL鏡）來消除反光、增加色彩飽和度，例如讓天空更藍、植物更翠綠。</li>
                    <li><strong>科學實驗</strong>：在光學實驗室中，用於產生和分析偏振光，研究材料的光学特性。</li>
                </ul>
                <p>總而言之，二色性是將特定方向光線「吸收掉」的原理，而偏振片則是利用此原理製造出來、用以產生線偏振光的關鍵光學元件。</p>
            </section>
        `,
        // --- 附錄沒有測驗或字卡，所以 initLogic 是空的 ---
        initLogic: () => {
            // 附錄頁面不需要 quiz 或 flashcard 邏輯
        }
    }
};

/* --- 
  SPA 核心邏輯 (保持不變)
--- */

// 檢查 MathJax 是否載入完成的函式
function checkMathJaxReady() {
    if (window.MathJax && window.MathJax.typesetPromise) {
        console.log("MathJax is ready. Initializing app...");
        initializeAppLogic();
    } else {
        console.log("Waiting for MathJax...");
        setTimeout(checkMathJaxReady, 100);
    }
}

// 應用程式的進入點
function initializeAppLogic() {
    const contentArea = document.getElementById('content-area');
    const navLinks = document.querySelectorAll('#main-nav a');

    // 導覽列點擊事件
    function setupNavigation() {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // 防止頁面跳轉
                const chapterId = link.dataset.chapter;
                
                // 檢查章節是否存在
                if (chapterData[chapterId]) {
                    renderChapter(chapterId);
                    
                    // 更新導覽列的 'active' 狀態
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                } else {
                    contentArea.innerHTML = `<h1 class="chapter-title">章節 ${chapterId} 尚未建立</h1><p>請稍候...</p>`;
                }
            });
        });
    }

    // 渲染章節內容的函式
    function renderChapter(chapterId) {
        const data = chapterData[chapterId];
        if (!data) return;

        // 1. 將 HTML 內容注入到頁面
        contentArea.innerHTML = data.html;

        // 2. 呼叫該章節特定的 JS 邏輯 (例如綁定測驗按鈕)
        if (data.initLogic) {
            data.initLogic();
        }

        // 3. 告訴 MathJax 重新渲染新載入的公式
        window.MathJax.typesetPromise([contentArea])
            .catch((err) => console.log('MathJax typeset error:', err));
    }

    // --- 啟動 APP ---
    setupNavigation();
    
    // 預設載入第一章
    navLinks[0].click();
}

// 通用的字卡邏輯函式
function initFlashcards(chapterId, flashcards) {
    let currentCardIndex = 0;
    const flashcard = document.getElementById(`flashcard-${chapterId}`);
    const cardFront = document.getElementById(`flashcard-front-${chapterId}`);
    const cardBack = document.getElementById(`flashcard-back-${chapterId}`);
    const prevButton = document.getElementById(`prev-card-${chapterId}`);
    const nextButton = document.getElementById(`next-card-${chapterId}`);

    function updateCard(index) {
        if (!flashcard || !cardFront || !cardBack) return;
        flashcard.classList.remove('is-flipped');
        
        setTimeout(() => {
            cardFront.innerHTML = `<p>${flashcards[index].front}</p>`;
            cardBack.innerHTML = `<p>${flashcards[index].back}</p>`;
            // 告訴 MathJax 重新渲染 "字卡"
            window.MathJax.typesetPromise([cardFront, cardBack]);
        }, 200); 
    }

    if (flashcard) {
        flashcard.addEventListener('click', () => {
            flashcard.classList.toggle('is-flipped');
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', (e) => {
            e.stopPropagation(); 
            currentCardIndex = (currentCardIndex + 1) % flashcards.length;
            updateCard(currentCardIndex);
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', (e) => {
            e.stopPropagation(); 
            currentCardIndex = (currentCardIndex - 1 + flashcards.length) % flashcards.length;
            updateCard(currentCardIndex);
        });
    }
    
    // 初始載入第一張卡片
    updateCard(0);
}

// --- 啟動檢查 ---
checkMathJaxReady();