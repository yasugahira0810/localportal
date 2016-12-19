localportal（Ver.0.0.4）
====

localportalは、HTML5のlocalstorageを使ったリンク集作成アプリです。  

## Description

- ブラウザからリンクデータの登録ができます。登録したリンクデータはlocalstorageに保存されます。
- タグ機能により、ブラウザのブックマーク機能より容易にリンクの管理・検索ができます。
- Windows上でInternet Explorerを使うと、ファイルサーバなどで使われるUNC表記のパス（例. ¥¥filesrv¥share¥）をブラウザから開くことができます。

## Demo

### リンクデータの登録

![登録](img/Demo1_register.gif)

### タグ検索

![検索](img/Demo2_search.gif)

### タグ追加

![タグ追加](img/Demo3_tag_add.gif)

## Requirement

- 特になし

## Usage

|項目|手順|
|---|---|
|リンクデータの登録|1.「登録欄表示」のチェックボックスにチェックをつける。</br>2.「登録名」「URL」「タグ」を入力して「Submit」をクリックする。|
|リンクデータの検索|1.「タグ検索」欄に文字列を入力する。</br>*※検索ワードは3つまで指定可能。*|
|リンクデータの削除|1. 削除対象のリンクデータの「削除ボタン」をクリックする。|
|リンクデータの編集|1. 編集対象のセルをダブルクリックする。</br>2. セルが編集可能になるので、編集する。</br>3. 編集対象のセル以外をクリックする。</br>*※編集可能なのは「登録名」と「タグ」のみ。*|
|ソート順変更|1. テーブルのカラム名をクリックする。</br>※*ソート可能なのは「登録名」「URL」「日付」「クリック回数」のみ。*</br>*※逆順ソートしたい場合はソート済みのカラム名をもう一度クリックする。*|
|リンクデータのバックアップ|1. 「登録済JSON表示」を表示して、表示されたJSONをコピーする。2. テキストエディタを開いてコピーしたJSONをペーストする。|
|リンクデータの一括登録|1. 「リンクデータのバックアップ」で作成したJSONを「JSON登録欄表示」にペーストする。</br>※*この機能はリンクデータのブラウザ間での共有や移行での利用を想定している。*|


## Install

[GitHubのページ](https://github.com/yasugahira0810/localportal)からファイルをダウンロードして、「index.html」をブラウザで開いてください。  
データは各ブラウザのlocalstorageに保存されるので、データを保存するためにDBを準備する必要はありません。

## Contribution

- GitHubでIssueを立てるかTwitter(yasugahira0810)でコメントをください。

## Licence

localportal is released under the [MIT License](http://www.opensource.org/licenses/MIT).

## Author

[yasugahira0810](https://github.com/yasugahira0810)
