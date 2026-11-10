# NATION FRONTIER

日本を舞台にした国家運営・都市開発・産業・交通・研究・外交・防衛シミュレーションです。

## 現在の構成

- **舞台:** 日本（47都道府県）
- **マップ:** 全国戦略マップと都道府県別の都市開発マップ
- **時代:** 現代から近未来
- **ゲーム:** 経済・都市開発・物流・研究・外交・防衛を融合
- **実装:** ブラウザ向けHTML/CSS/JavaScript ES Modules

旧単一HTML版は削除し、NATION FRONTIERのソース一式を `source/nation-frontier.tar.gz` に格納しています。Pagesのデプロイ時に展開されます。

## GitHub Pages

mainへのpushでGitHub Actionsが次の処理を実行します。

1. ソースアーカイブを展開
2. Node.jsで自動テストと構文チェック
3. GitHub Pagesへ公開

Actionsの「Test and Deploy NATION FRONTIER to GitHub Pages」で実行結果を確認してください。

## ローカル起動

```bash
mkdir -p nation-frontier
tar -xzf source/nation-frontier.tar.gz --strip-components=1 -C nation-frontier
cd nation-frontier
npm test
npm run check
npm start
```

ブラウザで `http://localhost:8000` を開きます。

## 主な実装

- 47都道府県の戦略マップと地域運営
- 都道府県ごとに独立した都市区画データ
- 都市ゲートにつながる道路・鉄道ネットワーク
- 接続済み施設の判定と孤立防止
- 電力需給・物流容量・工場の実効生産
- 税率・財政・GDP・人口・地域支持
- 研究ツリーと技術解禁型の建設メニュー
- 外交協定、防衛・国土強靱化
- localStorageセーブと旧セーブの移行
- 11項目の自動テスト

## 開発ドキュメント

ソースアーカイブ内の `README.md`、`docs/GAME_DESIGN.md`、`docs/SIMUTRANS_POLICY.md`、`THIRD_PARTY_NOTICES.md` を参照してください。

## ライセンスと参考作品

HOI4、Simutrans、47国志、iOS 27 Design Systemは設計上の参考です。現行ソースアーカイブにはSimutrans由来コードや各作品の画像・音源・専有素材は含めていません。Simutransのコードを取り込む場合は、Artistic License 1.0の条件とファイルごとの由来・変更履歴を確認してから別途実装します。
