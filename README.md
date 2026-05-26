# 高度セキュリティ試験問題集

世界的に認められたセキュリティ認定試験の学習支援アプリケーションです。複数の試験に対応した統合ポータルサイトです。

## 対応試験

- **CISSP** (Certified Information Systems Security Professional)
  - 情報システムセキュリティ認定資格
  - 8つのドメイン、250問以上

- **CCSP** (Certified Cloud Security Professional)
  - クラウドセキュリティ認定資格
  - 3つのドメイン、108問

- **CEH** (Certified Ethical Hacker)
  - 倫理的ハッキング認定資格
  - 複数ドメイン対応

## 主な機能

### 🎯 統合ポータル
- 全試験を一元管理
- わかりやすい選択画面
- 各試験専用アプリへの即座的遷移

### 📚 試験別機能
各試験には以下の学習モードが提供されています：
- 順序通り学習
- ランダム学習
- 制限時間練習（模擬試験）
- ドメイン別学習

### 💡 学習支援機能
- 詳細な解説付き
- 正解率の可視化
- 進捗トラッキング
- ドメイン別成績表示

## 技術スタック

- **フレームワーク**: React 19
- **ビルドツール**: Vite
- **スタイリング**: CSS (カスタム変数使用)
- **デプロイ**: Vercel
- **言語**: JavaScript

## セットアップ

### 必要な環境
- Node.js 20.x 以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/yama3133/advanced-security-quiz.git
cd advanced-security-quiz

# 依存パッケージをインストール
npm install
```

## 開発

```bash
# 開発サーバーを起動
npm run dev

# ブラウザで http://localhost:5173 にアクセス
```

## ビルド

```bash
# 本番用ビルド
npm run build

# ビルド結果をプレビュー
npm run preview
```

## デプロイ

### Vercel へのデプロイ

```bash
# Vercel CLI をインストール
npm i -g vercel

# デプロイ
vercel

# 本番環境へデプロイ
vercel --prod
```

## ディレクトリ構成

```
advanced-security-quiz/
├── src/
│   ├── App.jsx          # メインアプリケーション
│   ├── App.css          # スタイル定義
│   ├── main.jsx         # エントリーポイント
│   └── index.css        # グローバルスタイル
├── index.html           # HTML テンプレート
├── package.json         # パッケージ設定
├── vite.config.js       # Vite 設定
└── README.md            # このファイル
```

## 各試験へのリンク

### CISSP問題集
- **URL**: https://cissp-quiz-pi.vercel.app
- **GitHub**: https://github.com/yama3133/cissp-quiz
- **問題数**: 250問以上
- **ドメイン**: 8つ

### CCSP問題集
- **URL**: https://ccsp-quiz-vite.vercel.app
- **GitHub**: https://github.com/yama3133/ccsp-quiz
- **問題数**: 108問
- **ドメイン**: 3つ

### CEH問題集
- **URL**: https://ceh-quiz.vercel.app
- **GitHub**: https://github.com/yama3133/ceh-quiz
- **対応ドメイン**: 複数

## デザイン

### カラースキーム
- **背景**: 白系 (#fafbff)
- **アクセント**: グリーン系
- **パネル**: ホワイト (#ffffff) + ガラスモーフィズム

### UI/UX特徴
- モダンなガラスモーフィズムデザイン
- レスポンシブレイアウト対応
- スムーズなアニメーション
- アクセシビリティを重視した配色

## 試験別学習ガイド

### CISSP
- **対象**: 情報システムセキュリティの専門家
- **推奨学習時間**: 40時間以上
- **内容**: セキュリティ管理、アクセス制御、システム開発など

### CCSP
- **対象**: クラウドセキュリティの専門家
- **推奨学習時間**: 20時間以上
- **内容**: クラウドの概念、データセキュリティ、インフラセキュリティ

### CEH
- **対象**: 倫理的ハッキングの実践者
- **推奨学習時間**: 30時間以上
- **内容**: ペネトレーションテスト、セキュリティツール、攻撃技法

## 学習のコツ

1. **基礎知識の習得**: 順序通りモードで体系的に学ぶ
2. **弱点補強**: ドメイン別モードで苦手分野に集中
3. **実践練習**: ランダムモードで問題形式に慣れる
4. **本番対策**: 制限時間モードで試験環境をシミュレート

## ベストプラクティス

- 毎日継続的に学習する（推奨: 1時間/日）
- 解説をしっかり読んで理解する
- 間違えた問題を復習する
- 複数回同じ問題に挑戦して定着を確認

## トラブルシューティング

### ページが表示されない場合
- ブラウザキャッシュをクリア（Ctrl+Shift+R）
- JavaScript が有効か確認
- ネットワーク接続を確認

### リンク先のアプリが表示されない場合
- Vercel の デプロイステータスを確認
- ブラウザの互換性を確認

## 貢献

改善案やバグ報告は GitHub Issues で受け付けています。

## ライセンス

This project is provided as-is for educational purposes.

## 関連リンク

- [ISC² 公式サイト](https://www.isc2.org/)
- [CISSP 認定資格](https://www.isc2.org/Certifications/CISSP)
- [CCSP 認定資格](https://www.isc2.org/Certifications/CCSP)
- [EC-Council CEH](https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/)

## サポート

問題や質問がある場合は、以下の方法でサポートを受けられます：

- **GitHub Issues**: バグ報告や機能提案
- **リポジトリ**: https://github.com/yama3133/advanced-security-quiz

---

**更新日**: 2026年5月26日  
**バージョン**: 1.0.0
