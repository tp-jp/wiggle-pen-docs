# 揺れを調整する

初期設定のままでも使えます。揺れ方を変えたい場合は、次のマテリアルを編集します。

```text
Assets/TpLab/WigglePen/Materials/WiggleInk_PC.mat
Assets/TpLab/WigglePen/Materials/WiggleInk_Quest.mat
```

## 揺れの設定

Projectウィンドウで対象マテリアルを選び、Inspectorから値を調整します。

| 項目 | 初期値 | 説明 |
| --- | --- | --- |
| Wiggle Amplitude (m) | 0.006（6 mm） | 揺れの大きさ。0で揺れなし |
| Wiggle Detail (cells/m) | 24 | 揺れの形の細かさ |
| Wiggle Frame Rate (fps) | 8 | 揺れの形を更新する頻度 |
| Near Clip Distance | 0.1 | この距離よりカメラに近い線は表示しません |
| Far Clip Distance | 100 | この距離よりカメラから遠い線は表示しません |

### 揺れを小さくする

**Wiggle Amplitude (m)** を小さくします。例えば0.003なら3 mmです。DetailやFrame Rateも変更する場合は、1項目ずつ変更して違いを確認してください。

### 揺れの更新頻度を変える

**Wiggle Frame Rate (fps)** を小さくすると、線の形が切り替わる間隔が長くなります。0にすると変形した形のまま動きが止まります。変形もなくしたい場合はAmplitudeを0にします。

## 線幅

QvPenはペンごとの **Ink Width** を描画に反映します。PCマテリアルのWidthだけを変更しても、QvPen側の値で上書きされます。線幅を変える場合は、Prefab内の対象ペンの **QvPen Pen Manager** にある **Ink Width** を確認してください。単位はmです。

## PCとQuest

PC用とQuest用は別のマテリアルです。両方に同じ揺れ設定を使いたい場合は、両方を編集します。

PC用は `TpLab/WiggleInk/rounded_trail`、Quest用は `TpLab/WiggleInk/Quest` シェーダーを使います。Prefabにはそれぞれの参照が設定されています。Quest用の参照をPC用に置き換えないでください。

::: info 共有マテリアル
同じマテリアルを使うすべてのペンに変更が反映されます。調整後は対象プラットフォームでビルドし、見え方を確認してください。
:::
