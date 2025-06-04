document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.getElementById("gallery");

  // ▼ 自動で画像を追加
  const imageCount = 11; // IMG_1.jpg ～ IMG_11.jpg
  for (let i = 1; i <= imageCount; i++) {
    const div = document.createElement("div");
    div.className = "gallery-item";

    const img = document.createElement("img");
    img.src = `assets/images/IMG_${i}.jpg`;
    img.alt = `イメージ写真 ${i}`;
    img.className = "gallery-item_img";

    div.appendChild(img);
    gallery.appendChild(div);
  }

  // ▼ 自動で動画を追加
  const videoCount = 1; // MOV_1.MOV ～（必要に応じて増やす）
  for (let i = 1; i <= videoCount; i++) {
    const div = document.createElement("div");
    div.className = "gallery-item";

    const video = document.createElement("video");
    video.src = `assets/movies/MOV_${i}.mp4`;
    video.muted = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.className = "gallery-item_video";

    div.appendChild(video);
    gallery.appendChild(div);
  }

  // 画像クリックで全画面表示 + class追加
  document.querySelectorAll(".gallery-item_img").forEach(img => {
    img.addEventListener("click", () => {
      if (img.requestFullscreen) {
        img.requestFullscreen();
      } else if (img.webkitRequestFullscreen) {
        img.webkitRequestFullscreen();
      } else if (img.msRequestFullscreen) {
        img.msRequestFullscreen();
      }
      img.classList.add("fullscreen-image");
    });
  });

  // 動画クリックで全画面表示 +再生
  document.querySelectorAll(".gallery-item_video").forEach(video => {
    video.addEventListener("click", () => {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
      video.play();
    });

    // Hover で再生／停止
    video.addEventListener("mouseenter", () => {
      video.play();
    });

    video.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
  });
});
