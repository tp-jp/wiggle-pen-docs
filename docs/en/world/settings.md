# Wiggle settings

The default settings are ready to use. To change the wiggle, edit these materials:

```text
Assets/TpLab/WigglePen/Materials/WiggleInk_PC.mat
Assets/TpLab/WigglePen/Materials/WiggleInk_Quest.mat
```

## Wiggle properties

Select a material in the Project window and adjust its values in the Inspector.

| Property | Default | Description |
| --- | --- | --- |
| Wiggle Amplitude (m) | 0.006 (6 mm) | Amount of wiggle. Set to 0 for no wiggle |
| Wiggle Detail (cells/m) | 24 | How fine the wiggle pattern is |
| Wiggle Frame Rate (fps) | 8 | How often the line shape updates |
| Near Clip Distance | 0.1 | Hides lines closer to the camera than this distance |
| Far Clip Distance | 100 | Hides lines farther from the camera than this distance |

### Reduce the wiggle

Lower **Wiggle Amplitude (m)**. For example, 0.003 is 3 mm. If you also change Detail or Frame Rate, change one property at a time to compare the results.

### Change the update frequency

Lower **Wiggle Frame Rate (fps)** to increase the interval between changes in the line's shape. At 0, the line keeps its deformed shape but stops moving. To remove the deformation as well, set Amplitude to 0.

## Line width {#line-width}

QvPen applies each pen's **Ink Width** when drawing. Changing only Width on the PC material has no effect because QvPen overwrites it. To change the line width, find the target pen inside the prefab and adjust **Ink Width** on its **QvPen Pen Manager** component. The unit is meters.

## PC and Quest

PC and Quest use separate materials. To use the same wiggle settings on both, edit both materials.

The PC material uses the `TpLab/WiggleInk/rounded_trail` shader; the Quest material uses `TpLab/WiggleInk/Quest`. The prefab already has references to both. Do not replace the Quest material reference with the PC material.

::: info Shared materials
Changes affect every pen using the same material. After adjusting the settings, build for the target platform and check the appearance.
:::
