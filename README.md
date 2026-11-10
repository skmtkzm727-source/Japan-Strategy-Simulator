# NATION FRONTIER

日本を舞台にした国家運営・都市開発・産業・交通・研究・外交・防衛シミュレーションです。

## ゲーム仕様
- 舞台：日本（47都道府県）
- マップ：全国戦略マップと、都道府県ごとの都市開発マップ
- 時代：現代から近未来
- ゲーム：経済・都市開発・物流・研究・外交・防衛を融合
- 実装：HTML / CSS / JavaScript ES Modules

## 旧版からの移行とリリース構成
旧単一HTML版および作業途中の分割アーカイブは削除しました。基礎ソースは `source/nation-frontier.tar.xz` にあり、`scripts/patch-release.mjs` が公開前に小さな修正を適用して最新版を構成します。GitHub Pagesへはパッチ適用後のアプリのみを公開します。

## GitHub Pages
mainへのpushでGitHub Actionsが次の順に実行します。
1. 基礎ソースを展開
2. リリースパッチを適用（現在 v0.2.1）
3. Node.jsで13件のシミュレーションテスト
4. JavaScript構文チェック
5. テストに合格した場合のみPagesへ公開

## ローカル起動
```bash
mkdir -p nation-frontier
tar -xJf source/nation-frontier.tar.xz --strip-components=1 -C nation-frontier
node scripts/patch-release.mjs nation-frontier
cd nation-frontier
npm test
npm run check
npm start
```
ブラウザで `http://localhost:8000` を開きます。

## 現在の実装
- 47都道府県の戦略マップ
- 都道府県ごとに独立した都市区画
- 道路・鉄道ネットワークと都市ゲートからの接続判定
- 住宅・商業・工場・発電所・駅・倉庫・蓄電所・港・貨物空港
- 電力需給と物流容量が工場の実効生産に連動
- 税率・財政・GDP・人口・地域支持
- 研究ツリー・技術解禁・国家方針・外交・防衛
- 月次進行・一時停止・速度変更
- 操作後の自動保存、手動保存、旧v1セーブの移行
- 人口の万人・億人単位の換算修正

## ライセンス
HOI4、Simutrans、47国志、iOS 27 Design Systemは設計上の参考です。現行アーカイブにSimutrans由来コードや参考作品の専有素材は含めていません。Simutransコードを追加する場合はArtistic License 1.0の条件に従い、由来・改変履歴・ライセンス文書を管理します。
