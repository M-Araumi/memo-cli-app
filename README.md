# CLIメモ管理アプリ

TypeScriptで作成したCLI形式のメモ管理アプリです。

コマンドラインからメモの追加・一覧表示・更新・削除・検索を行うことができます。また、入力値のバリデーションやJSONファイルへのデータ保存にも対応しています。

---

## 機能

* メモ追加（Create）
* メモ一覧表示（Read）
* メモ更新（Update）
* メモ削除（Delete）
* メモ検索
* メモ統計表示
* 入力値バリデーション
* JSONファイルへのデータ永続化

### 更新機能について

更新コマンドでは以下の操作が可能です。

* タイトルのみ更新
* 本文のみ更新
* タイトルと本文を同時更新

---

## 使用技術

* TypeScript
* Node.js
* ts-node

---

## ディレクトリ構成

```text
src/
├── commands/
├── services/
├── validators/
├── utils/
├── constants/
├── storage.ts
├── type.ts
└── index.ts
```

---

## 実行方法

### 依存パッケージのインストール

```bash
npm install
```

### コマンド実行

```bash
npx ts-node ./dist/index.js [コマンド]
```

---

## コマンド一覧

### メモ追加

```bash
npx ts-node ./dist/index.js add "タイトル" "本文"
```

### メモ一覧表示

```bash
npx ts-node ./dist/index.js display
```

### メモ更新

#### タイトルのみ更新

```bash
npx ts-node ./dist/index.js update -i 1 -t "新しいタイトル"
```

#### 本文のみ更新

```bash
npx ts-node ./dist/index.js update -i 1 -m "新しい本文"
```

#### タイトルと本文を同時更新

```bash
npx ts-node ./dist/index.js update -i 1 -t "新しいタイトル" -m "新しい本文"
```

### メモ削除

```bash
npx ts-node ./dist/index.js del 1
```

### メモ検索

```bash
npx ts-node ./dist/index.js search "キーワード"
```

### メモ統計表示

```bash
npx ts-node ./dist/index.js stats
```

---

## 設計

責務分離を意識し、機能ごとに役割を分けて実装しています。

### commands層

* コマンドごとの処理を管理
* 入力内容を受け取り適切な処理へ振り分け

### services層

* メモのCRUD処理を実装
* ビジネスロジックを管理

### validators層

* コマンド入力値の検証を担当
* 不正な入力時にエラーを返却

### utils層

* 共通処理を管理
* コマンド解析などの補助処理を実装

### constants層

* コマンド解析で利用する定義情報を管理
* オプション名と入力項目の対応関係を一元管理
* マジックストリングの重複を防止

### storage.ts

* JSONファイルの読み込み・保存を担当
* データ永続化処理を管理

---

## 工夫した点

* Command型を利用した型安全なコマンド管理
* CRUD処理とコマンド処理の責務分離
* バリデーション処理を独立させ保守性を向上
* オプション定義を定数化しコマンド解析処理を簡潔化
* 更新コマンドで部分更新と同時更新の両方に対応
* JSONファイルを利用したデータ永続化
* レイヤー構成を意識したディレクトリ設計

---

## 学んだこと

* TypeScriptの型定義とUnion型の活用
* レイヤー構成による責務分離
* CRUD処理の設計
* JSONファイルを利用したデータ管理
* バリデーション設計
* 保守性を意識したコード構成
* オプション形式のコマンド解析

---

## 今後の改善点

* エラーハンドリングの強化
* テストコードの追加
* ソート機能の追加
* タグ機能の追加
* ヘルプコマンドの追加
