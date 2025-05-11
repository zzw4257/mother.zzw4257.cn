// 图片轮播
const photos = [
  'images/mom1.jpg', 'images/mom2.jpg', 'images/mom3.jpg', 
  'images/mom4.jpg', 'images/mom5.jpg', 'images/mom6.jpg', 
  'images/mom7.jpg', 'images/mom8.jpg', 'images/mom9.jpg', 
  'images/mom10.jpg', 'images/mom11.jpg'
];
let current = 0;
function showPhoto(idx) {
  const img = document.getElementById('mom-photo');
  img.src = photos[idx];
}
function prevPhoto() {
  current = (current - 1 + photos.length) % photos.length;
  showPhoto(current);
}
function nextPhoto() {
  current = (current + 1) % photos.length;
  showPhoto(current);
}

// 红包音效
const redPacketSound = new Audio('sounds/red-packet.mp3');
redPacketSound.volume = 0.5; // 设置音量为50%

// 留言弹窗
function showMessageBox() {
  document.getElementById('message-box').classList.remove('hidden');
  redPacketSound.currentTime = 0; // 重置音频播放位置
  redPacketSound.play().catch(e => console.log('音频播放失败:', e)); // 添加错误处理
}
function hideMessageBox() {
  document.getElementById('message-box').classList.add('hidden');
}

// 花瓣飘落动画
function createPetal() {
  const petal = document.createElement('div');
  petal.className = 'petal';
  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.animationDuration = (4 + Math.random() * 3) + 's';
  document.querySelector('.petal-bg').appendChild(petal);
  setTimeout(() => petal.remove(), 7000);
}
setInterval(createPetal, 500);

// 花瓣样式
const style = document.createElement('style');
style.innerHTML = `
.petal {
  position: absolute;
  top: -40px;
  width: 24px; height: 24px;
  background: url('https://cdn.jsdelivr.net/gh/zzw4257/cdn/petal.svg') no-repeat center/contain;
  opacity: 0.7;
  pointer-events: none;
  animation: fall 6s linear forwards;
}
@keyframes fall {
  to {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0.2;
  }
}
`;
document.head.appendChild(style);
