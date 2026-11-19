# ドキュメントの根拠と残作業

参照日：2026-11-19（JST）。このファイルはVitePressの `docs/` 外にあり、サイトには含まれません。

## ローカルで確認した資料

ワールド側はWigglePenプロジェクト、アバター側はWigglePenAvatarプロジェクトの実ファイルを読みました。製品アセット自体はこのリポジトリへコピーしていません。

| 記載内容 | 根拠となるファイル（各Unityプロジェクト相対） |
| --- | --- |
| QvPen依存、PC/Quest参照 | `Assets/TpLab/WigglePen/Prefabs/WigglePen Variant.prefab`、`Packages/net.ureishi.qvpen/QvPen.prefab.meta` |
| ワールドの揺れの項目・保存値 | `Assets/TpLab/WigglePen/Materials/WiggleInk_PC.mat`、`WiggleInk_Quest.mat`、`Shaders/WiggleInk.shader`、`WiggleInkQuest.shader`、`WiggleInkNoise.cginc` |
| QvPenの描画・消去・線幅上書き | `Packages/net.ureishi.qvpen/Runtime/UdonScript/QvPen_Pen.cs`、`QvPen_PenManager.cs`、`QvPen_Eraser.cs` |
| アバターのメニュー名・初期値・左右 | `Assets/TpLab/WigglePenAvatar/Prefabs/WigglePen_Right.prefab`、`WigglePen_Left.prefab` |
| 描画開始条件・待機・制御 | `Assets/TpLab/WigglePenAvatar/Animations/AvatarPenRight.controller`、`AvatarPenLeft.controller`、`PointPoseRight.controller`、`PointPoseLeft.controller` |
| 配置と描画設定のInspector | `Assets/TpLab/WigglePenAvatar/Scripts/AvatarPenAutoPlacement.cs`、`AvatarPenDrawingSettings.cs`、`Editor/AvatarPenAutoPlacementEditor.cs`、`AvatarPenDrawingSettingsEditor.cs`、`AvatarPenPlacement.cs` |
| マーカーの明るさ | `AvatarPenDrawingSettings.cs`、`AvatarPenDrawingSettingsEditor.cs`、左右のControllerの `TipEmission` レイヤー、右手Prefabの `WPA/TipEmissionStrength`、`Materials/PenTip.mat`、`PenTipTrail.mat` |
| 参照環境のバージョン | 両プロジェクトの `ProjectSettings/ProjectVersion.txt`、`Packages/vpm-manifest.json` |

## 引き継ぎと照合上の注意

- 虹色周期：InspectorのTooltipは6秒、右手Prefabの `WPA/GamingCycleSeconds` 保存値は1秒。左手Variantに周期overrideはない。本文はPrefabの保存値を採用し、表示差を記載した。
- メニューはGameObject名ではなく `label` に従い「ペン ON/OFF」「サイズ」「振幅」「色」「ゲーミング」「全消去」を使用。
- 削除済みの再配置ボタンやTransition設定は掲載しない。
- デスクトップ専用Prefabは未実装。アバター版のQuest対応は未確認。
- マーカーTrailの表示問題は引き継ぎで解決済み。未解決バグとして掲載しない。
- 更新履歴はアセットのリリース単位で管理する。開発中の変更履歴や説明書の編集履歴は掲載しない。製品のリリース日・版番号は推測しない。

## 公開後に補充できる資料

- BOOTHの正式な商品URL、最低対応バージョン。
- 配布パッケージとの最終照合。
- 実際のUnity Inspector・配置状態・VRChat操作のスクリーンショット。現在のSVGは説明用の概念図。
- Quest実機での表示、複数人での同期、遅れて参加した場合の実機確認。

サイトの初期制作ではUnityの実行状態やInspector画面の撮影は行わず、保存されたPrefab・Editor実装・Animator等を根拠に執筆しました。追加機能のUnity内検証は下記に記録しています。ウェブサイトのビルド検証はアセットの実機動作検証とは区別します。

### 2026-11-20：ペン先の発光強度

Drawing Settingsに「ペン先の発光強度」を追加。初期値0.5、範囲0〜5。共有マテリアルを変更せず、左右のAnimatorの `TipEmission` レイヤーでメッシュと短い軌跡を制御する。左手Variantは右手Prefabから設定項目を継承し、配置したインスタンスごとに値を変更できる。

この追加についてはUnity内でも検証した。一時的なアバター複製でNDMF/Modular Avatarの統合処理を通し、右0.25・左3.75がそれぞれのメッシュとTrailのRenderer値に反映されることをAnimator評価で確認。0・0.5・5、Inspectorの範囲制限・非数値拒否、Expressionパラメーターを増やさないこと、共有マテリアルと元のシーン設定が維持されることも確認した。VRChat実機での見え方は未検証。

## 更新履歴の管理

- ページ名・メニュー表示は「更新履歴」とする。
- リリース時に、対象アセット・バージョン・公開日・変更内容を確認して追加する。新しいリリースを上に掲載する。
- 開発中・未リリースの項目は作らず、コミット日を公開日として扱わない。
- ユーザーが指定したリリース予定日は2026年11月20日（金）。ページには予定として掲載する。公開済みのリリース情報は未確認のため、履歴の項目は空にしている。

## 利用規約の根拠

2026-11-20、このチャットでユーザーが採用した文案と、パブリックアバターへの組み込みを許可しないという追加指示を `docs/terms.md` に反映した。再配布・再販売禁止、VRChatのワールド・プライベートアバターへの組み込みとアップロードの許可、改変自由を記載し、第三者の素材には各ライセンスが適用される旨を付記している。

## サイトの検証

- Node.js 24.22.1 / npm 12.0.1で、lockfileからの `npm ci` とVitePressビルドに成功。
- 404ページを含む14 HTML、462件の内部リンク・アセット・アンカーを検査（2026-11-20更新）。
- ローカルのChromeで、1440 px幅・390 px幅を確認。日本語検索、ページ遷移、直接アクセス・再読み込み、ダークモード、モバイルの目次操作を確認。
- モバイル幅ですべての本文ページにページ全体の横はみ出しなし。長い表やファイルパスは各領域内で横スクロールする。
- Viteを6.4.6へoverride後、依存監査の指摘は0件。
- GitHub Actionsの実行・Pagesでの実公開は未実施。

プレビューサーバー起動後に再ビルドした場合は、サーバーも起動し直す。VitePressのプレビューが古いアセット一覧を保持した状態では、新しいハッシュ付きファイルが404になることを確認した。
