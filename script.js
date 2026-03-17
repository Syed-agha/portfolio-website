/* ═══════════════════════════════════════════
   Syed Agha Portfolio — script.js
   ═══════════════════════════════════════════ */

/* ── Cursor ── */
const cur  = document.getElementById('cur');
const cur2 = document.getElementById('cur2');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cur.style.left = mx + 'px';
  cur.style.top  = my + 'px';
});

(function loop() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  cur2.style.left = rx + 'px';
  cur2.style.top  = ry + 'px';
  requestAnimationFrame(loop);
})();

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cur.style.transform    = 'translate(-50%,-50%) scale(2.5)';
    cur2.style.borderColor = 'rgba(78,124,78,0.5)';
  });
  el.addEventListener('mouseleave', () => {
    cur.style.transform    = 'translate(-50%,-50%) scale(1)';
    cur2.style.borderColor = 'rgba(78,124,78,0.35)';
  });
});

/* ── Falling Leaves Canvas ── */
const canvas = document.getElementById('leaf-canvas');
const ctx    = canvas.getContext('2d');
let W, H;

function resize() {
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

class Leaf {
  constructor() { this.reset(true); }
  reset(init = false) {
    this.x          = Math.random() * W;
    this.y          = init ? Math.random() * H : -20;
    this.size       = Math.random() * 7 + 3;
    this.speedX     = (Math.random() - 0.5) * 0.6;
    this.speedY     = Math.random() * 0.7 + 0.25;
    this.rot        = Math.random() * Math.PI * 2;
    this.rotSpeed   = (Math.random() - 0.5) * 0.025;
    this.opacity    = Math.random() * 0.3 + 0.07;
    this.t          = 0;
    this.swayOffset = Math.random() * Math.PI * 2;
    const colors    = ['#4e7c4e','#7aab6e','#2d4a2d','#6a9860','#3d6b3d','#8aba7e'];
    this.color      = colors[Math.floor(Math.random() * colors.length)];
  }
  update() {
    this.t += 0.01;
    this.x += this.speedX + Math.sin(this.t + this.swayOffset) * 0.45;
    this.y += this.speedY;
    this.rot += this.rotSpeed;
    if (this.y > H + 20) this.reset();
  }
  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rot);
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle   = this.color;
    ctx.beginPath();
    ctx.ellipse(0, 0, this.size * 0.55, this.size, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle  = this.color;
    ctx.lineWidth    = 0.6;
    ctx.globalAlpha  = this.opacity * 0.5;
    ctx.beginPath();
    ctx.moveTo(0,  this.size);
    ctx.lineTo(0, -this.size);
    ctx.stroke();
    ctx.restore();
  }
}

const leaves = Array.from({ length: 30 }, () => new Leaf());

(function animLeaves() {
  ctx.clearRect(0, 0, W, H);
  leaves.forEach(l => { l.update(); l.draw(); });
  requestAnimationFrame(animLeaves);
})();

/* ── 3D Mouse Parallax on photo ── */
document.addEventListener('mousemove', e => {
  const el = document.getElementById('photo3d');
  if (!el) return;
  const ax = (e.clientX / window.innerWidth  - 0.5) * 18;
  const ay = (e.clientY / window.innerHeight - 0.5) * 12;
  el.style.transform = `rotateY(${ax}deg) rotateX(${-ay}deg)`;
});

/* ── Nav shrink on scroll ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
  document.getElementById('st').style.display = window.scrollY > 400 ? 'flex' : 'none';
});

/* ── Scroll Reveal ── */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

/* ── Skill bar animation ── */
const skillObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('.sk-row').forEach(row => {
        const fill = row.querySelector('.sk-fill');
        if (fill) fill.style.width = row.dataset.w + '%';
      });
      skillObs.disconnect();
    }
  });
}, { threshold: 0.3 });

const skillWrap = document.getElementById('skill-wrap');
if (skillWrap) skillObs.observe(skillWrap);

/* ── 3D tilt on project cards ── */
document.querySelectorAll('.pc').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 12;
    const y = ((e.clientY - r.top)  / r.height - 0.5) * -12;
    card.style.transform = `translateY(-12px) rotateX(${y}deg) rotateY(${x}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
  });
});

/* ── Scroll to top ── */
document.getElementById('st').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
