# NATION FRONTIER

日本を舞台にした国家運営・都市開発・産業・交通・研究・外交・防衛シミュレーションです。

旧単一HTML版は削除済みです。実行対象は `source/archive.part*` の分割ソースです。GitHub Actionsが小分けファイルを連結・解凍して、テスト後にGitHub Pagesへ公開します。

## ローカル起動

```bash
cat source/archive.part* | base64 -d > /tmp/nation-frontier.tar.gz
gzip -t /tmp/nation-frontier.tar.gz
mkdir -p nation-frontier
tar -xzf /tmp/nation-frontier.tar.gz -C nation-frontier --strip-components=1
cd nation-frontier
npm test
npm run check
npm start
```

ブラウザで `http://localhost:8000` を開きます。

## 現在のゲーム機能
- 47都道府県の戦略マップ
- 都道府県ごとに独立した都市区画
- 道路・鉄道接続とゲートからの接続判定
- 接続済み施設の判定と孤立防止
- 電力需給・物流容量に基づく工場生産
- 税率・財政・GDP・人口・地域支持
- 研究ツリーと技術解禁型の建設メニュー
- 外交協定、防衛・国土強靱化
- localStorageセーブと旧セーブ移行
- 11項目の自動テスト

Simutrans由来コードや各参考作品の素材は含めていません。Simutransコードを採用する場合はArtistic License 1.0の条件とファイルごとの由来・改変履歴を管理します。
