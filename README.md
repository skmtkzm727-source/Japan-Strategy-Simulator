# NATION FRONTIER

日本を舞台にした国家運営・都市開発・産業・交通・研究・外交・防衛シミュレーションです。

## ゲームの仕様

- 舞台：日本（47都道府県）
- マップ：全国戦略マップと都道府県別の都市開発マップ
- 時代：現代から近未来
- ゲーム：経済・都市開発・物流・研究・外交・防衛を融合
- 実装：HTML / CSS / JavaScript ES Modules。ビルド不要のWebゲーム

## 旧版からの移行

旧単一HTML版は削除済みです。GitHub Pagesは `source/nation-frontier.tar.xz` の内容だけを展開して公開します。リポジトリのトップレベルにある旧 `index.html` は使用しません。

## GitHub Pages

mainブランチへのpushでGitHub Actionsが起動し、次の順で実行します。

1. 新版ソースの展開
2. Node.jsによる11件の自動テスト
3. JavaScript構文チェック
4. テスト合格後にGitHub Pagesへ公開

[Actionsの実行状況](https://github.com/skmtkzm727-source/Japan-Strategy-Simulator/actions)

## ローカル起動

```bash
tar -xJf source/nation-frontier.tar.xz --strip-components=1 -C nation-frontier
cd nation-frontier
npm test
npm run check
npm start
```

ブラウザで `http://localhost:8000` を開きます。

## 現在の実装

- 47都道府県の戦略マップと都道府県ごとの独立した都市
- 道路・鉄道ネットワークと都市ゲートからの接続判定
- 住宅・商業・工場・発電所・駅・倉庫・蓄電所・港・貨物空港
- 電力需給・物流容量に連動する工場生産
- 税率・国家予算・GDP・人口・地域支持
- 技術研究・国家方針・外交協定・防衛政策
- 月次進行・一時停止・速度変更
- localStorageセーブと旧v1セーブの移行

詳細はアーカイブ内の `README.md`、`docs/GAME_DESIGN.md`、`docs/SIMUTRANS_POLICY.md`、`THIRD_PARTY_NOTICES.md` を参照してください。

## ライセンス

HOI4、Simutrans、47国志、iOS 27 Design Systemは設計上の参考です。現行アーカイブにはSimutransのコード・素材は含まれていません。将来Simutransコードを利用する場合はArtistic License 1.0の条件を確認し、由来・改変内容・ライセンス文書を保全します。
