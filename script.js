// 1. Xử lý nút bấm menu trên điện thoại
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

if (menuBtn && navMenu) {
  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// 2. Xử lý nút cuộn lên đầu trang (topBtn)
const topBtn = document.getElementById('topBtn');

if (topBtn) {
  // Tự động hiện nút khi cuộn xuống quá 300px, ẩn nút khi ở đầu trang
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      topBtn.classList.add('show');
    } else {
      topBtn.classList.remove('show');
    }
  });

  // Sự kiện cuộn mượt lên đầu trang khi bấm nút
  topBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
