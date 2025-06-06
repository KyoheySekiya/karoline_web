document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.getElementById("gallery");

  // ▼ 自動で画像を追加
  const imageCount = 95;
  for (let i = 1; i <= imageCount; i++) {
    const div = document.createElement("div");
    div.className = "gallery-item";

    const img = document.createElement("img");
    img.src = `assets/images/LINE_ALBUM_Photos (work)_250605_${i}.jpg`;
    img.alt = `イメージ写真 ${i}`;
    img.className = "gallery-item_img";

    div.appendChild(img);
    gallery.appendChild(div);
  }

document.querySelectorAll(".gallery-item_img").forEach(img => {
  img.addEventListener("click", () => {
    // ラッパーを作る
    const wrapper = document.createElement("div");
    wrapper.className = "fullscreen-wrapper";

    const clone = img.cloneNode();
    clone.classList.add("fullscreen-image");
    wrapper.appendChild(clone);
    document.body.appendChild(wrapper);

    // 閉じるボタン
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "✕ 閉じる";
    closeBtn.className = "fullscreen-close";
    wrapper.appendChild(closeBtn);

    closeBtn.addEventListener("click", () => {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
      document.body.removeChild(wrapper);
    });

    // 全画面へ
    if (wrapper.requestFullscreen) {
      wrapper.requestFullscreen().catch(err => {
        console.error("フルスクリーンに失敗:", err);
      });
    } else if (wrapper.webkitRequestFullscreen) {
      wrapper.webkitRequestFullscreen();
    } else if (wrapper.msRequestFullscreen) {
      wrapper.msRequestFullscreen();
    }
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

  // ここから閉じるボタン作成
  const closeBtn = document.createElement("button");
  closeBtn.textContent = "✕ 閉じる";
  closeBtn.className = "fullscreen-close-btn";
  closeBtn.style.display = "none";
  document.body.appendChild(closeBtn);

  closeBtn.addEventListener("click", () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  });

  // 全画面変化の監視
  function onFullscreenChange() {
    const isFullscreen = !!document.fullscreenElement;
    closeBtn.style.display = isFullscreen ? "block" : "none";

    if (!isFullscreen) {
      document.querySelectorAll(".fullscreen-image").forEach(img => {
        img.classList.remove("fullscreen-image");
      });
    }
  }

  document.addEventListener("fullscreenchange", onFullscreenChange);
  document.addEventListener("webkitfullscreenchange", onFullscreenChange);
  document.addEventListener("msfullscreenchange", onFullscreenChange);
});
