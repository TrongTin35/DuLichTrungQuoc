// Xử lý nút bấm menu trên điện thoại
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

if (menuBtn && navMenu) {
  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Xử lý nút cuộn lên đầu trang (topBtn)
const topBtn = document.getElementById('topBtn');
if (topBtn) {
  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
