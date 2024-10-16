// Khởi tạo ẩn nút "Hết gòi" khi trang tải
window.onload = function() {
    const closeButton = document.querySelectorAll('button')[1]; // Chọn nút "Hết gòi"
    closeButton.style.display = 'none'; // Ẩn nút "Hết gòi" khi tải trang
};

function showMessage() {
    const message = document.getElementById("hiddenMessage");
    const showButton = document.querySelector('button'); // Chọn nút "Xem lời chúc"
    const closeButton = document.querySelectorAll('button')[1]; // Chọn nút "Hết gòi"
    const music = document.getElementById("backgroundMusic"); // Chọn đoạn nhạc

    message.classList.add('show'); // Hiển thị lời chúc với hiệu ứng
    showButton.style.display = 'none'; // Ẩn nút "Xem lời chúc" sau khi nhấn
    closeButton.style.display = 'inline-block'; // Hiển thị nút "Hết gòi" sau khi hiển thị lời chúc
    createRoses(); // Tạo hoa hồng bay
    music.play(); // Phát nhạc khi hiển thị lời chúc
}

function closeWindow() {
    alert('Bái baiiiii!'); // Hiển thị thông báo trước khi đóng cửa sổ
    window.close(); // Đóng cửa sổ trình duyệt
}

function createRoses() {
    const rosesContainer = document.getElementById('rosesContainer');
    
    // Tạo 68 hoa hồng bay ngẫu nhiên
    for (let i = 0; i < 68; i++) {
        const rose = document.createElement('div');
        rose.classList.add('rose');
        
        // Thiết lập vị trí ngẫu nhiên cho mỗi hoa hồng
        rose.style.left = Math.random() * window.innerWidth + 'px';
        rose.style.animationDuration = Math.random() * 5 + 5 + 's'; // Thời gian bay ngẫu nhiên (từ 5s đến 10s)
        
        // Thêm hiệu ứng rơi cho hoa
        rose.style.animationName = 'fall'; 
        rosesContainer.appendChild(rose);
    }
}
