document.addEventListener('DOMContentLoaded', function() {
    let btns = document.querySelectorAll(".btn");
    btns.forEach(function(btn) {
        // clear previous spans if any
        btn.querySelectorAll('span.bar').forEach(s => s.remove());

        const btnWidth = btn.clientWidth || 240;
        const spacing = 4; // px between bars
        const count = Math.floor(btnWidth / spacing);
        for (let i = 0; i < count; i++){
            let span = document.createElement("span");
            span.className = 'bar';
            span.style.left = `${i * spacing}px`;
            span.style.position = 'absolute';
            span.style.top = '0';
            span.style.height = '100%';
            span.style.width = '2px';
            span.style.background = '#e50914';
            span.style.transform = 'scaleY(0)';
            span.style.transformOrigin = 'bottom';
            span.style.transition = 'transform 0.2s ease-in-out';
            btn.appendChild(span);
            let randomDelay = (Math.random() * 0.6).toFixed(2);
            span.style.transitionDelay = randomDelay + "s";
        }

        // show on hover via JS as well (in case CSS hover misses)
        btn.addEventListener('mouseenter', () => {
            btn.querySelectorAll('span.bar').forEach((s, idx) => {
                s.style.transform = 'scaleY(1)';
            });
        });
        btn.addEventListener('mouseleave', () => {
            btn.querySelectorAll('span.bar').forEach((s) => {
                s.style.transform = 'scaleY(0)';
            });
        });
    });
});