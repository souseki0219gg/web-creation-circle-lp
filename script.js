document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('お問い合わせ内容を送信しました。返信までしばらくお待ちください。');
        // 実際のフォーム送信処理を実施する場合は以下のようなコードも追加することが考えられます。
        // form.submit();
    });
});

// jQueryが読み込まれていることを確認
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();  // デフォルトの動作をキャンセル

        var target = $(this.getAttribute('href'));

        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);  // 1000ミリ秒（1秒）のアニメーション
        }
    });
});

let lastScrollTop = 0; // 前回のスクロール位置を保持する変数

window.addEventListener('scroll', function() {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScrollTop > lastScrollTop){
        // 下にスクロールした場合
        document.getElementById('mainHeader').classList.add('hide');
    } else {
        // 上にスクロールした場合
        document.getElementById('mainHeader').classList.remove('hide');
    }
    
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // モバイルブラウザでの負のスクロール値を防ぐための条件
});

$(document).ready(function() {
    let currentSlide = 0;
    const slides = $('#slideshow .slide');
    const slideCount = slides.length;

    // 最初のスライドを表示
    slides.eq(currentSlide).addClass('active');

    setInterval(function() {
        slides.eq(currentSlide).removeClass('active');

        // 次のスライドへ移動
        currentSlide = (currentSlide + 1) % slideCount;

        slides.eq(currentSlide).addClass('active');
    }, 5000); // 5秒ごとにスライドを切り替え
});

$(document).ready(function() {
    const aboutImage = $('#about .about-image');  // 写真の要素を取得
    aboutImage.addClass('initial');  // 初期状態のクラスを追加

    $(window).on('scroll', function() {
        const triggerPosition = aboutImage.offset().top - $(window).height() + 100;  // スクロール位置のトリガーとなる位置を計算

        if ($(window).scrollTop() > triggerPosition) {  
            aboutImage.addClass('animate');  // トリガー位置を超えたらアニメーションを発火
        }
    });
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 600
    });
  });
  