// markjason landing page interactions
// Minimal, just like the app

(function() {
    'use strict';

    // Smooth reveal on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe animated elements
    document.querySelectorAll('.feature, .comparison-col, .download-box').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });

    // Download button - show "coming soon" message
    const downloadBtn = document.getElementById('download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Temporarily change button text
            const originalHTML = downloadBtn.innerHTML;
            downloadBtn.innerHTML = '<span class="btn-icon">⏳</span> Coming soon!';
            downloadBtn.style.pointerEvents = 'none';
            
            setTimeout(() => {
                downloadBtn.innerHTML = originalHTML;
                downloadBtn.style.pointerEvents = 'auto';
            }, 2000);
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
