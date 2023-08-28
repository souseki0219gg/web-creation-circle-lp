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

//任意のタブにURLからリンクするための設定
function GethashID (hashIDName){
    if(hashIDName){
      //タブ設定
      $('.tab li').find('a').each(function() { //タブ内のaタグ全てを取得
        var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得 
        if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
          var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
          $('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
          $(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
          //表示させるエリア設定
          $(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
          $(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加 
        }
      });
    }
  }
  
  //タブをクリックしたら
  $('.tab a').on('click', function() {
    var idName = $(this).attr('href'); //タブ内のリンク名を取得  
    GethashID (idName);//設定したタブの読み込みと
    return false;//aタグを無効にする
  });
  
  
  // 上記の動きをページが読み込まれたらすぐに動かす
  $(window).on('load', function () {
      $('.tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
      $('.area:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
    var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
    GethashID (hashName);//設定したタブの読み込み
  });

  const buttons = document.querySelectorAll('.accordion-button');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    // 他のすべてのアコーディオンコンテンツを閉じる
    document.querySelectorAll('.accordion-content').forEach(content => {
      if (this.nextElementSibling !== content) {
        content.style.opacity = "0";
        content.style.transform = "scaleY(0)";
      }
    });
    document.querySelectorAll('.accordion-button').forEach(btn => {
      btn.classList.remove('active');
    });

    // クリックされたアコーディオンの内容を切り替える
    const content = this.nextElementSibling;
    if (content.style.opacity === "1") {
      content.style.opacity = "0";
      content.style.transform = "scaleY(0)";
      this.classList.remove('active');
    } else {
      content.style.opacity = "1";
      content.style.transform = "scaleY(1)";
      this.classList.add('active');
    }
  });
});

