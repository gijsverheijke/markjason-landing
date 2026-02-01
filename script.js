// markjason landing page interactions
// Minimal, just like the app

(function() {
    'use strict';

    // ============================================
    // Floating particles background
    // ============================================
    function createParticles() {
        const canvas = document.createElement('canvas');
        canvas.id = 'particles';
        canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
            opacity: 0.4;
        `;
        document.body.insertBefore(canvas, document.body.firstChild);

        const ctx = canvas.getContext('2d');
        let particles = [];
        
        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        // Create particles - mix of green (#) and amber ({})
        for (let i = 0; i < 30; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                char: Math.random() > 0.5 ? '#' : (Math.random() > 0.5 ? '{' : '}'),
                color: Math.random() > 0.5 ? '#22c55e' : '#f59e0b',
                size: Math.random() * 12 + 8,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.3,
                opacity: Math.random() * 0.3 + 0.1,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.01
            });
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(p => {
                p.x += p.speedX;
                p.y += p.speedY;
                p.rotation += p.rotationSpeed;
                
                // Wrap around edges
                if (p.x < -20) p.x = canvas.width + 20;
                if (p.x > canvas.width + 20) p.x = -20;
                if (p.y < -20) p.y = canvas.height + 20;
                if (p.y > canvas.height + 20) p.y = -20;
                
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rotation);
                ctx.font = `${p.size}px "JetBrains Mono", monospace`;
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.opacity;
                ctx.fillText(p.char, 0, 0);
                ctx.restore();
            });
            
            requestAnimationFrame(animate);
        }
        animate();
    }
    createParticles();

    // ============================================
    // Terminal typing effect
    // ============================================
    function initTerminalTyping() {
        const terminalLines = document.querySelectorAll('.terminal-output');
        
        // Initially hide lines
        terminalLines.forEach((line) => {
            line.style.opacity = '0';
            line.style.transform = 'translateX(-10px)';
            line.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        });
        
        const terminalObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Reveal lines one by one
                    terminalLines.forEach((line, i) => {
                        setTimeout(() => {
                            line.style.opacity = '1';
                            line.style.transform = 'translateX(0)';
                        }, i * 150);
                    });
                    terminalObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2, rootMargin: '50px' });
        
        const terminal = document.querySelector('.never-terminal');
        if (terminal) {
            terminalObserver.observe(terminal);
            
            // Fallback: if observer doesn't trigger within 3s, show content anyway
            setTimeout(() => {
                terminalLines.forEach((line) => {
                    if (line.style.opacity === '0') {
                        line.style.opacity = '1';
                        line.style.transform = 'translateX(0)';
                    }
                });
            }, 3000);
        }
    }
    initTerminalTyping();

    // ============================================
    // VS Code comparison strike-through effect
    // ============================================
    function initComparisonAnimation() {
        const vscodeItems = document.querySelectorAll('.comparison-col--vscode li');
        const comparisonObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    vscodeItems.forEach((item, i) => {
                        setTimeout(() => {
                            item.classList.add('crossed-out');
                        }, 800 + i * 200);
                    });
                    comparisonObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        const comparison = document.querySelector('.comparison');
        if (comparison) comparisonObserver.observe(comparison);
    }
    initComparisonAnimation();

    // ============================================
    // Smooth reveal on scroll using Intersection Observer
    // ============================================
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe animated elements
    document.querySelectorAll('.feature, .comparison-col, .download-box, .never-terminal').forEach(el => {
        observer.observe(el);
    });

    // Download button - show "coming soon" (waiting for Apple notarization)
    const downloadBtn = document.getElementById('download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const originalHTML = downloadBtn.innerHTML;
            downloadBtn.innerHTML = '<span class="btn-icon">⏳</span> Coming soon — waiting for Apple';
            downloadBtn.style.pointerEvents = 'none';
            
            setTimeout(() => {
                downloadBtn.innerHTML = originalHTML;
                downloadBtn.style.pointerEvents = 'auto';
            }, 3000);
        });
    }

    // Keyboard shortcuts easter egg
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                // Easter egg: Briefly show a fun message
                const hero = document.querySelector('.hero-description');
                if (hero) {
                    const original = hero.innerHTML;
                    hero.innerHTML = '🎮 You found the secret! Here\'s a cookie: 🍪<br>(Just kidding, we don\'t use those either.)';
                    hero.style.color = '#22c55e';
                    setTimeout(() => {
                        hero.innerHTML = original;
                        hero.style.color = '';
                    }, 3000);
                }
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    // Add subtle parallax to the app window
    const appWindow = document.querySelector('.app-window');
    if (appWindow && window.innerWidth > 1024) {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 10;
            const y = (e.clientY / window.innerHeight - 0.5) * 10;
            
            requestAnimationFrame(() => {
                appWindow.style.transform = `rotateY(${-5 + x}deg) rotateX(${2 - y}deg)`;
            });
        });
    }

    // Type effect in the editor (subtle)
    const editorLines = document.querySelectorAll('.editor-line');
    if (editorLines.length > 0) {
        let currentLine = 0;
        
        const typeNextLine = () => {
            if (currentLine < editorLines.length) {
                editorLines[currentLine].style.opacity = '1';
                currentLine++;
            }
        };

        // Already visible, just add subtle entrance
        editorLines.forEach((line, i) => {
            line.style.opacity = '0';
            line.style.transition = 'opacity 0.3s ease';
            setTimeout(() => {
                line.style.opacity = '1';
            }, 100 + i * 80);
        });
    }

    // Console Easter egg for developers
    console.log('%c# { } markjason', 'font-size: 24px; font-weight: bold; color: #22c55e;');
    console.log('%cYou\'re inspecting a landing page. Classic developer move. 😏', 'color: #a1a1aa;');
    console.log('%cWant to contribute? This is just HTML/CSS/JS. No framework drama.', 'color: #a1a1aa;');

})();
