# アバターに導入する

WigglePenAvatarは、Modular Avatarを使ってアバターに導入します。ここではPrefabの配置から描画の確認までを説明します。

## 1. パッケージを用意する

[導入前の準備](/guide/requirements)を確認し、アバター用プロジェクトにModular AvatarとWigglePenAvatarをインポートします。

## 2. 使いたい手のPrefabを配置する

Projectウィンドウで、次のフォルダーを開きます。

```text
Assets/TpLab/WigglePenAvatar/Prefabs/
```

| Prefab | 描画に使う手 |
| --- | --- |
| WigglePen_Right | 右手 |
| WigglePen_Left | 左手 |

使いたいPrefabを、Hierarchyの**アバター直下**にドラッグします。両手に導入する場合は、それぞれを配置します。

![アバター直下に左右のペンPrefabを配置する階層図](/illustrations/avatar-hierarchy.svg)

*Hierarchyの配置例*

::: tip 配置する場所
Prefabのルートはアバター直下に置きます。指のボーン配下へ手動で移動する必要はありません。
:::

## 3. 指先を確認して保存する

配置したPrefabを選ぶと、**Avatar Pen Auto Placement** で指先が自動検出されます。Sceneビューでペン先が人差し指の先端付近にあることを確認します。

位置がずれる場合は[指先の位置を合わせる](/avatar/placement)を参照してください。確認・調整が終わったら、**シーンを保存**します。配置は編集時に行われ、ビルド時には再計算されません。

## 4. 描画を試す

Gesture Managerを使う場合はPlayモードに入り、導入した手のWigglePenメニューを開きます。VRChatでも同じメニューから操作できます。

1. **ペン ON/OFF** をONにします。
2. 対応する手を **Point（人差し指を立てる形）** にします。
3. 標準の0.3秒間その形を保ち、手を動かして描きます。
4. Pointを解除して描画を止めます。
5. **全消去** で描いた線を消します。

続いて[描く・消す・色を変える](/avatar/usage)で各メニューの使い方を確認してください。
