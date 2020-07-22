# cadish_temp_RWD

レスポンシブ対応テンプレートパッケージ

* * *

## 各ディレクトリ説明

-   リキッドレイアウト用テンプレート：[base_temp/](base_temp/)
-   レスポンシブレイアウトテンプレート：[base_temp_new/](base_temp_new/)
-   wordpressテンプレート：[wp_temp/](wp_temp/)
-   各jsサンプル：[js_sample/](js_sample/)
-   ブログ等rss書き出し：[RSS_data/](RSS_data/)

* * *

## ChangeLog

### 2020-07-22

- wp_temp
    直下のメモ書きのファイル名を**_Tips.md**に変更し、WordPressテスト用データに関する記述を追加

### 2020-06-18

- js_sample/sessionModal<br>
  #modal_innerがウィンドウ幅より大きい場合のスクロールがおかしかったので修正

### 2020-06-16

-   js_sample 以下のサンプルを追加<br>
    -   jquery.sessionModal
    -   jquery.rwdImageMaps
    -   jquery.slick 枚数カウント

### 2020-06-02

-   各base_temp reset.cssの記述ミスを修正

### 2019-06-27

-   各base_temp メールフォームのディレクトリ構成を元に戻しました。

### 2019-06-18

-   各base_temp メールフォームのディレクトリ構成・設定を変更
    -   本体設置場所をformディレクトリに変更
    -   config_sampleに迷惑メール防止用の設定をいくつか追加

### 2019-04-17

-   各base_temp setting_option.js, js_sample jquery.navFix.js<br>
    ナビ固定を解除する際のしきい値判定を修正

### 2019-02-18

-   base_temp, base_temp_new<br>
    inquiry/config_sample/ipblock/check_sample.cgi<br>
    コメントがjs用になっていたので修正

### 2019-01-21

-   base_temp, base_temp_new の\_htaccess<br>
    SSL認証用ファイルの除外設定をディレクトリまでに変更

### 2018-12-13

-   base_temp, base_temp_new のお問い合わせフォーム<br>
    連続送信防止機能の設定サンプルを更新・追加

### 2018-11-28

-   base_temp, base_temp_new のお問い合わせフォーム<br>
    設定ファイルのサンプルを更新

### 2018-11-01

-   base_temp内html header箇所に構造化マークアップ用のrole等を追加
-   wp_temp/cadish_theme_ver1.1 タグ構造をbase_temp_newに合わせて変更
-   base_temp/\_htaccess, base_temp_new/\_htaccess 内のバックスペースを削除

### 2018-09-21

-   js_sample/jquery.slick/index.html 参考サイトを一件追加

### 2018-09-11

-   base_temp_newにreadme.md追加

### 2018-08-17

-   jquery-dropdown スムーススクロールを併用した時にページ内リンクで閉じる処理が効かなくなるバグを修正
-   js_sample サンプルスタイルを微修正

### 2018-08-10

-   base_temp, base_temp_new 各htmlページトップボタンのidを修正
-   jquery-dropdown.js PCサイズ時にナビの親要素が消えてしまう不具合があったため修正

### 2018-08-09

-   js_sample/jquery.smoothscroll 固定ヘッダーがある場合の処理を微調整
-   js_sample/jquery.loadmove サンプルを追加

### 2018-08-08

-   js_sample/jquery.navFix サンプルを追加
-   js_sample/jquery.pagetopFade サンプルを追加
-   js_sample/jquery.fbResize サンプルを追加

### 2018-08-07

-   js_sample/jquery.slick 左右矢印付きカルーセルのサンプルを追加
-   js_sample/scrollAnimation サンプルCSSを微修正
-   js_sample/jquery.tab 上下連動するタブのサンプルを追加・jsを改修
-   js_sample/jquery.smoothscroll 固定ヘッダー分ずらすサンプルを追加<br>
    （サンプル：js_sample/jquery.smoothscroll/index_02.html）
-   各setting_option.js smoothscrollに関する注意を追加
-   js_sample/jquery.tel-link サンプルを追加
-   js_sample/jquery.imgSize サンプルを追加

### 2018-08-06

-   jquery.tabを改修
    -   同一ページ内でパネルを開いて移動させる処理を追加<br>
        （サンプル：js_sample/jquery.tab/index.html）
    -   別ページからパネルを開いて移動させる処理を追加<br>
        （サンプル：js_sample/jquery.tab/index_04.html）
-   js_sample/jquery.smoothscroll サンプルを追加
    -   上記jsにアニメーションさせないようにするクラスを追加（setting_option.jsに組み込み済）
-   js_sample/scrollAnimation サンプルを追加

### 2018-08-03

-   全html内jsを`</body>`直前で読み込むように修正（セットで使用するcssはそのままhead内にあります）
-   base_temp_new/, js_sample/ 各html meta viewport から initial-scale=1.0 を削除
-   base_temp_new/ breakpointを600pxからに変更
-   jqueryを最新の3.3.1に変更
-   以下のプラグインを削除
    -   jquery-lineup.min.js
    -   jquery.heightLine
    -   jquery.jcarousel
    -   jquery.slide_panel
-   jquery.dropdown_menuを改修
    -   \#gnav領域外をタップで閉じる処理を実装
    -   開閉用のクラスを任意で設定できるように修正
    -   開閉時の挙動を若干修正
-   各jsに利用方法の説明文等を追記
