window.onload = function() {
    document.getElementById("closeBtn").style.display = "none";
};

function showMessage() {
    const message = document.getElementById("hiddenMessage");
    const agreeBtn = document.getElementById("agreeBtn");
    const closeBtn = document.getElementById("closeBtn");
    const music = document.getElementById("backgroundMusic");

    // Hiển thị lời nhắn
    message.classList.add("show");
    agreeBtn.style.display = "none";
    closeBtn.style.display = "inline-block";

    // Bắt đầu nhạc
    music.play();

    // Tạo hoa hồng rơi
    createRoses();
}

function closeWindow() {
    alert("Bái baiiiii! ❤️");
    window.close();
}

function createRoses() {
    const rosesContainer = document.getElementById("rosesContainer");
    const roseCount = 40; // Giảm số lượng để nhẹ hơn

    for (let i = 0; i < roseCount; i++) {
        const rose = document.createElement("div");
        rose.classList.add("rose");

        rose.style.left = Math.random() * window.innerWidth + "px";
        rose.style.animationDuration = Math.random() * 5 + 5 + "s";
        rosesContainer.appendChild(rose);

        // Xóa hoa sau khi hoàn thành animation để giảm lag
        setTimeout(() => rose.remove(), 10000);
    }
}
