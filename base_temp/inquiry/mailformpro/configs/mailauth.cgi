## Mail auth config
## コメントの先頭に!の付いている箇所を編集してください。

## 認証トークンの有効期限（秒数）
$config{'mailauth.expire'} = 3600;

## 認証トークン有効期限切れ時のエラーメッセージ
$lang{'ErrorCode11'} = '認証トークンの有効期限が切れています。';

## 認証トークンの保存ディレクトリ
$config{'mailauth.dir'} = "$config{'data.dir'}mailauth/";

## !認証用URL
## URLが[ https:// 〜 ]の場合は、下記の[http://]を[https://]に変更して下さい。
$config{'mailauth.uri'} = "http://$ENV{'HTTP_HOST'}$ENV{'REQUEST_URI'}";

## !認証前のサンクスページURL
$config{'mailauth.thanks'} = '../add_check.html';

## !メールアドレス確認メールの件名
$config{'mailauth.subject'} = '【施設名】メールアドレス確認';

## !メールアドレス確認メールの本文
$config{'mailauth.body'} = <<'__return_body__';
【お問い合わせは、完了しておりません】

お問い合わせありがとうございます。
メールアドレス確認のため、以下のURLにアクセスしてください。

<_mailauth_uri_>

上記URLへアクセスいただいた後、お問い合わせ完了となります。
お手数をお掛けしますが、よろしくお願い致します。

※このメールにお心当たりのない方は、
大変お手数ではございますが本メールを削除して下さい。

━━━━━━━━━━━━━━━━━━━━━━━━━━
　※この署名はサンプルです。必ず変更してください※　
　株式会社キャディッシュ
　〒506-0045 岐阜県高山市赤保木町1169-7
　TEL / 0577-36-3604　FAX / 0577-35-0202
　http://www.cadish.co.jp
━━━━━━━━━━━━━━━━━━━━━━━━━━
__return_body__

1;
