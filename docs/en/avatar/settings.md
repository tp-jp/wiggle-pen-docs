# Drawing settings

Exit Play mode and select **WigglePen_Right** or **WigglePen_Left** directly under the avatar root. Use **Avatar Pen Drawing Settings** in the Inspector. Settings can be adjusted separately for each hand.

Japanese field names below match the labels in the Inspector.

## Drawing delay

**描画開始待機時間（秒）** (Drawing start delay, in seconds) is how long you must hold Point before drawing begins. The default is **0.3 seconds**. Set it to 0 for no delay.

Increase the delay if lines appear while your fingers are still changing pose. Lower it to start drawing sooner.

## Line width and amplitude ranges

| Inspector field | Default |
| --- | --- |
| 線幅の最小値 (mm) — Minimum line width | 3 |
| 線幅の最大値 (mm) — Maximum line width | 16 |
| 振幅の最小値 (mm) — Minimum amplitude | 0 |
| 振幅の最大値 (mm) — Maximum amplitude | 20 |

On the Expressions menu's radial controls, **0% is the minimum and 100% is the maximum**. To keep line width or amplitude fixed, set its minimum and maximum to the same value.

The allowed range is 0–1000 mm. Make small changes from the defaults. Lines with a width of 0 are invisible, so if you cannot see your lines, check the menu's Size setting and the minimum line width.

::: tip Units
Line width and amplitude use **mm**, while the fingertip offset uses **m**. For example, 6 mm equals 0.006 m.
:::

## Rainbow speed

**虹色の一周時間（秒）** (Rainbow cycle duration, in seconds) controls how long one full color cycle takes in Gaming mode. Lower values cycle faster; higher values cycle more slowly. The range is **0.1–120 seconds**.

The prefab default is **1 second**. The Inspector tooltip may say that the default is 6 seconds, but the value in the input field is the one used.

## Pen tip brightness {#tip-emission}

Use **ペン先の発光強度** (Pen tip emission strength) in Drawing Settings to adjust the brightness of both the pen tip mesh and its short trail. The default is **0.5** and the range is **0–5**.

You can set this separately on the right and left hand prefabs. You do not need to edit the materials directly.

Higher values make the pen tip brighter. At 0, the emission is disabled but the pen tip remains visible. **This does not affect the brightness of the drawn lines (Ink).**

## Check your changes

Save the scene, then re-enter Play mode with Gesture Manager. Turn the pen on to check its brightness. Move your hand to see the short trail.

Color, Size, Amplitude, and Gaming settings changed in the menu are saved, so check the menu values as well.
