# NATION FRONTIER
### Japan Grand Strategy & City Builder

日本を舞台に、国家運営・都市開発・産業・交通・研究・外交・防衛を融合するブラウザ向けシミュレーションゲームです。

## ゲームの方針

- **舞台:** 日本
- **マップ:** 全国戦略マップと、選択地域の都市開発マップを切り替え
- **時代:** 現代から近未来へ
- **ゲーム性:** 経済・都市開発・物流・研究・外交・安全保障を一体化
- **実行環境:** HTML / CSS / JavaScript。ビルド工程なしでGitHub Pagesに配置できる構成

## 現在のプロトタイプ

現在の `index.html` は、既存のゲーム実装を引き継いだ初期プロトタイプです。

- 日本全国の地域選択
- 地域ごとの都市開発画面
- 24×16区画への道路・鉄道・住宅・商業施設・工場・発電所の配置
- 研究項目と国家方針
- 月次時間進行、速度切り替え、一時停止
- localStorageによるブラウザ内セーブ

現時点の全国マップや地域データはゲーム用の簡略表現です。実際の行政界、地形、人口・産業統計と一致する完成版データではありません。経済・研究等の数値も初期バランス用の仮データです。

## 起動

GitHub Pages公開URL、またはローカルの静的HTTPサーバーで起動できます。

```bash
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000` を開きます。HTMLを直接 `file://` で開くより、HTTPサーバー経由での確認を推奨します。

## GitHub Pages

`.github/workflows/pages.yml` が `main` ブランチへのpushを検知してPagesへデプロイします。Actionsの `Deploy Japan Strategy Simulator to GitHub Pages` の実行結果で公開状態を確認してください。

## 開発ドキュメント

- [ゲーム設計](docs/GAME_DESIGN.md)
- [実装ロードマップ](docs/IMPLEMENTATION_ROADMAP.md)
- [Simutransコード利用方針](docs/SIMUTRANS_POLICY.md)
- [第三者ライセンス一覧](THIRD_PARTY_NOTICES.md)

## ライセンス・参考作品

HOI4、Simutrans、47国志はゲームデザイン上の参考です。各作品のコード、画像、音源、フォント、ゲームデータを無断でコピーしません。Simutrans由来コードを採用する場合は、対象コードを特定し、適用ライセンスと配布条件を個別に確認したうえで、著作権表示・ライセンス文書・改変履歴を保全します。詳細は上記ドキュメントを参照してください。
