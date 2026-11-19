# Fingertip placement

When you place the prefab directly under the avatar root, the index fingertip is detected automatically. Adjust the offset if the pen tip is inside the finger or too far away from it.

## Adjust the values

1. Exit Play mode.
2. Select **WigglePen_Right** or **WigglePen_Left** in the Hierarchy.
3. Open **Avatar Pen Auto Placement** in the Inspector.
4. Adjust **指先オフセット XYZ (m)** (Fingertip offset XYZ, in meters).
5. Check the position in the Scene view and save the scene.

The unit is meters. To move the tip by about 1 mm, start with a small change of 0.001. XYZ uses the index finger's distal bone local coordinates, so the axis pointing toward the fingertip depends on the avatar.

## Adjust in the Scene view

With the same prefab selected, a move handle appears at the pen tip. Dragging it also updates the XYZ offset values.

- **Local**: Move along the finger bone's axes.
- **Global**: Move along the world axes.

The saved XYZ values always use the distal bone's local coordinates. If the handle is missing, enable **Gizmos** in the Scene view.

## Inspector fields

Japanese field names are shown as they appear in the Inspector.

| Field | Description |
| --- | --- |
| Hand Anchor | The MA Bone Proxy specifying the hand. Normally no change is needed |
| Pen Tip | The pen tip to place automatically. Normally no change is needed |
| 対象 (Target) | The detected index finger distal bone |
| 位置の算出方法 (Position calculation method) | Uses an End bone, skinned vertices, or an estimate based on joint spacing |
| 末端ボーン基準 (Relative to distal bone) | The calculated local position |

## Save your changes

Placement updates in Edit mode. It is not recalculated during the build, so save the scene after making adjustments. If you are testing with Gesture Manager, exit Play mode before adjusting, then enter Play mode again.
