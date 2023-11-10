
// 前回のスクロール位置を記録する変数を初期化
let lastScrollTop = 0; 

// window（ブラウザのビューポート）のスクロールイベントをリッスンする
window.addEventListener('scroll', function() {
    // 現在のスクロール位置を取得（異なるブラウザでも対応できるように）
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // 現在のスクロール位置が前回のスクロール位置よりも大きい場合（下にスクロールした場合）
    if (currentScrollTop > lastScrollTop){
        // 'mainHeader'のIDを持つ要素に'hide'クラスを追加
        document.getElementById('mainHeader').classList.add('hide');
    } else {
        // そうでない場合（上にスクロールした場合）、'hide'クラスを削除
        document.getElementById('mainHeader').classList.remove('hide');
    }
    
    // 現在のスクロール位置を更新。ただし、現在のスクロール位置が0以下の場合は0とする（モバイルブラウザのバグ対策）
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
});



// ドキュメントが完全に読み込まれたら実行する
$(document).ready(function() {
  // 現在表示しているスライドのインデックスを保持する変数を初期化
  let currentSlide = 0;

  // '#slideshow'内の'.slide'クラスの要素（スライド）を取得
  const slides = $('#slideshow .slide');

  // スライドの総数を取得
  const slideCount = slides.length;

  // 初期状態で最初のスライドをアクティブにする（表示する）
  slides.eq(currentSlide).addClass('active');

  // 5秒ごとに指定した関数を繰り返し実行
  setInterval(function() {
      // 現在アクティブなスライドの'active'クラスを削除（非表示にする）
      slides.eq(currentSlide).removeClass('active');

      // 次のスライドのインデックスを計算（最後のスライドの次は最初のスライドに戻る）
      currentSlide = (currentSlide + 1) % slideCount;

      // 次のスライドをアクティブにする（表示する）
      slides.eq(currentSlide).addClass('active');
  }, 5000); // 上記の関数を5000ミリ秒（5秒）ごとに実行
});



// ドキュメントが完全に読み込まれたら実行する
$(document).ready(function() {
  // '#about'の中の'.about-image'クラスの要素（写真）を取得
  const aboutImage = $('#about .about-image');  

  // 写真に'initial'クラスを追加して初期スタイルを適用
  aboutImage.addClass('initial');  

  // ウィンドウのスクロールイベントをリッスン
  $(window).on('scroll', function() {
      // 写真の上端の位置から、ウィンドウの高さを引き、100を加算して、トリガーとなるスクロール位置を計算
      const triggerPosition = aboutImage.offset().top - $(window).height() + 100;  

      // 現在のスクロール位置が計算したトリガー位置を超えたら
      if ($(window).scrollTop() > triggerPosition) {  
          // 写真に'animate'クラスを追加してアニメーションを開始
          aboutImage.addClass('animate');  
      }
  });
});



// ドキュメントが完全に読み込まれたときに実行する関数を指定
$(document).ready(function(){

  // .owl-carouselクラスを持つ要素にOwl Carouselを適用
  $(".owl-carousel").owlCarousel({

      items: 2.5,                // 画面に表示するスライドの数（非整数も指定可能）
      loop: true,                // スライドのループ再生を有効化
      nav: true,                 // 前後のナビゲーションボタンを表示
      dots: true,                // スライド下部のドットナビゲーションを表示
      autoplay: true,            // スライドの自動再生を有効化
      autoplayTimeout: 5000,     // 自動再生時のスライド切替間隔（ミリ秒）
      smartSpeed: 600,           // スライドのアニメーション速度（ミリ秒）
      margin: 20                 // スライド間のマージン（ピクセル）

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

 // '.accordion-button'クラスを持つすべての要素を取得
const buttons = document.querySelectorAll('.accordion-button');

// 各ボタンに対して処理を行う
buttons.forEach(button => {
  // ボタンがクリックされたときのイベントリスナーを追加
  button.addEventListener('click', function() {
    // 他のすべてのアコーディオンコンテンツを閉じる
      // '.accordion-content'クラスを持つすべての要素に対して処理を行う
      document.querySelectorAll('.accordion-content').forEach(content => {
        // クリックされたボタンの次の要素（アコーディオンの内容）が現在のコンテンツと異なる場合
        if (this.nextElementSibling !== content) {
          // そのコンテンツの透明度を0に設定（見えなくする）
          content.style.opacity = "0";
          // そのコンテンツのY軸方向のスケールを0に設定（縮小）
          content.style.transform = "scaleY(0)";
        }
      });
     // '.accordion-button'クラスを持つすべてのボタンに対して処理を行う
    document.querySelectorAll('.accordion-button').forEach(btn => {
      // それぞれのボタンから'active'クラスを削除
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

let hasAnimatedHome = false;  // #homeのアニメーションが再生されたかをチェック
let hasAnimatedAbout = false;  // #aboutのアニメーションが再生されたかをチェック

/**
 * 指定されたセレクタの要素にアニメーションを適用する関数。
 * @param {string} selector - アニメーションを適用する要素のセレクタ。
 * @param {boolean} triggerFlag - アニメーションを実行するかどうかを制御するフラグ。
 * @returns {boolean} - アニメーションが実行された場合はtrue、そうでない場合はfalseを返す。
 */
function playAnimation(selector, triggerFlag) {
  // triggerFlagがfalseの場合にアニメーションを実行
  if (!triggerFlag) {
      // 指定されたセレクタに一致するすべての要素を取得
      const elements = document.querySelectorAll(selector);
      
      // 取得した各要素に対して処理を行う
      elements.forEach(el => {
          // 要素のアニメーションを実行状態に設定
          el.style.animationPlayState = 'running';
      });
      
      // アニメーションが実行されたことを示すためにtrueを返す
      return true;
  }
  
  // アニメーションが実行されなかったことを示すためにfalseを返す
  return false;
}


// スクロール時のイベントリスナーを追加
window.addEventListener('scroll', function() {
  // ページのスクロール位置が0より大きい場合
  if (window.scrollY > 0) {
      // '#home h1, #home p' に対してアニメーションを再生（既にアニメーションが再生されていない場合）
      hasAnimatedHome = playAnimation('#home h1, #home p', hasAnimatedHome);
  }
  
  // '#about' セクションの要素を取得
  const aboutSection = document.querySelector('#about');
  
  // 現在のスクロール位置から'#about'セクションの上辺の位置までの距離を取得
  const aboutTop = aboutSection.getBoundingClientRect().top;
  
  // ウィンドウの高さを取得
  const windowHeight = window.innerHeight;

  // '#about'セクションの上辺がウィンドウ内に入った場合
  if (aboutTop < windowHeight) {
      // '#about h3, #about p' に対してアニメーションを再生（既にアニメーションが再生されていない場合）
      hasAnimatedAbout = playAnimation('#about h3, #about p', hasAnimatedAbout);
  }
});

$(document).ready(function () {
  // スクロールイベントの追加
  $(window).scroll(function () {
      // 各リスト項目をループ
      $('.join-steps li').each(function (index) {
          // ウィンドウのトップとリスト項目の位置を比較
          if ($(window).scrollTop() + $(window).height() > $(this).offset().top + $(this).height() / 2) {
              // ディレイを追加して順番にアニメーション
              var delay = index * 150;
              $(this).delay(delay).queue(function (next) {
                  $(this).addClass('active');
                  next();
              });
          }
      });
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
      $('.join-notes li').each(function (index) {
          if ($(window).scrollTop() + $(window).height() > $(this).offset().top + $(this).height() / 2) {
              var delay = index * 150; // 各項目にディレイを追加して順番にアニメーション
              $(this).delay(delay).queue(function (next) {
                  $(this).addClass('active');
                  next();
              });
          }
      });
  });
});

function toggleMenu() {
  var menu = document.getElementById('hamburger');
  if (menu) {
      menu.classList.toggle('show');
      console.log('toggleMenu')
  }
}

// ナビゲーションリンクのクリックイベントに対してもメニューを閉じる
function closeMenu() {
  var menu = document.querySelector('nav ul');
  if (menu.classList.contains('show')) {
      menu.classList.remove('show');
  }
}

// ナビゲーションリンクにイベントリスナーを追加
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// タップされたときにスタイルを変更する関数
function onLinkTap(event) {
  const link = event.currentTarget;
  link.classList.add('active-tap');

  // 一定時間後にクラスを削除し、元のスタイルに戻す
  setTimeout(() => {
      link.classList.remove('active-tap');
  }, 500); // ここでは500ミリ秒後にクラスを削除
}

// すべてのナビゲーションリンクにイベントリスナーを追加
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('touchstart', function() {
      this.classList.add('active-tap');
  });
  link.addEventListener('touchend', function() {
      this.classList.remove('active-tap');
  });
});



