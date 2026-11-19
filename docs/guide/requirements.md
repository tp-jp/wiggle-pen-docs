# 導入前の準備

導入前に[利用規約](/terms)をご確認ください。

## QvPen拡張版

次のものをワールド用Unityプロジェクトに用意します。

- VRChat SDK - Worlds
- QvPen
- WigglePenの配布パッケージ

WigglePenのPrefabはQvPenのPrefabを継承しています。先にQvPenを導入してから、WigglePenをインポートしてください。

## アバター版

次のものをアバター用Unityプロジェクトに用意します。

- VRChat SDK - Avatars
- Modular Avatar
- WigglePenAvatarの配布パッケージ
- Humanoidとして設定されたアバター

指先への自動配置には、人差し指のIntermediate（中間）とDistal（末端）ボーンが必要です。Gesture ManagerはUnity内でメニューやジェスチャーを試す場合に使えます。

## 使用しているバージョン

この説明書は、以下のバージョンを使用したプロジェクトをもとにしています。最低対応バージョンや、ほかのバージョンでの動作は未確認です。

| 項目 | QvPen拡張版 | アバター版 |
| --- | --- | --- |
| Unity | 2022.3.22f1 | 2022.3.22f1 |
| VRChat SDK | Worlds 3.10.6 | Avatars 3.10.6 |
| QvPen | 3.3.15 | 使用しません |
| Modular Avatar | 使用しません | 1.18.7 |
| NDMF | 使用しません | 1.14.8 |
| Gesture Manager | 使用しません | 3.9.9（Unity内での動作確認用） |

## Quest・デスクトップでの使用

QvPen拡張版にはPC用とQuest用のインクマテリアルが含まれています。プラットフォームを切り替える場合は、[マテリアルの調整](/world/settings)も確認してください。Quest実機での表示・同期は未確認です。

アバター版の操作説明は、VRでPointジェスチャーを使う場合を対象としています。デスクトップ専用の描画Prefabは未実装です。アバター版のQuest対応は未確認です。

## 導入手順

- [QvPen拡張版をワールドに導入](/world/)
- [アバター版をアバターに導入](/avatar/)
