# ワールドに導入する

QvPen拡張版のWigglePenは、Prefabをワールドに配置して使います。

## 1. パッケージを用意する

[導入前の準備](/guide/requirements)を確認し、ワールド用プロジェクトにQvPenとWigglePenをインポートします。

## 2. Prefabを配置する

Projectウィンドウで次のPrefabを探し、ワールドのHierarchyへドラッグします。

```text
Assets/TpLab/WigglePen/Prefabs/WigglePen Variant.prefab
```

シーン内で、プレイヤーが手を伸ばせる位置に置きます。最初は配置位置だけを調整し、Prefab内部の参照やマテリアル設定はそのまま使ってください。

::: tip すでに通常のQvPenを置いている場合
通常のQvPenの線は、自動では揺れる線に変わりません。上記の **WigglePen Variant** を配置してください。
:::

## 3. 保存して試す

シーンを保存し、VRChat SDKのBuild & Testで確認します。

1. ペンを持ちます。
2. Useボタンを押したままペンを動かして、線を描きます。
3. Useボタンを離し、描画が止まることを確認します。
4. 描いた線が揺れることと、消しゴムで消せることを確認します。

操作方法は[描く・消す](/world/usage)、設定方法は[揺れを調整する](/world/settings)をご覧ください。
