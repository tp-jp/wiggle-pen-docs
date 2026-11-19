# Troubleshooting

## Avatar: the pen is on but does not draw

Turning the pen on is not enough to start drawing. Check the following in order:

1. Make Point with the hand that has the pen installed.
2. Hold Point for at least the drawing delay. The default is 0.3 seconds.
3. Move your hand while holding Point.
4. Check that Size and line width are not set to 0.

In Gesture Manager, set GestureRight to 3 (Point) for the right hand or GestureLeft to 3 for the left hand. See [Drawing controls](/en/avatar/usage) for details.

## Avatar: the menu is missing

Check that the prefab is directly under the avatar root, that Modular Avatar is installed, and that the Unity Console has no errors. Keep the MA components on the prefab root without deleting or moving them.

## Avatar: the pen tip is misaligned

Adjust the [fingertip offset](/en/avatar/placement). If automatic placement reports an error, check the Humanoid configuration and the index finger's Intermediate and Distal bones. Save the scene after editing.

## Avatar: the move handle is missing

Exit Play mode and select the pen prefab root with Auto Placement attached. Enable **Gizmos** in the Scene view and look near the pen tip.

## Avatar: the short pen tip trail is invisible

Turn the pen on and move your hand. The marker trail disappears quickly, so it becomes invisible while your hand is still. It is separate from the lines you draw.

## Avatar: turning the pen off does not erase lines

Turning the pen off stops drawing. To erase lines, use **全消去** (Clear all) in that pen's menu.

## Avatar: old lines change color or width

Changes to Color and Size also affect existing lines. You cannot keep separate colors or widths for individual lines.

## Avatar: Inspector changes are not visible

Exit Play mode, change the settings, save the scene, and enter Play mode again. The Inspector specifies the minimum and maximum for line width and amplitude. Also check **サイズ** (Size) and **振幅** (Amplitude) in the Expressions menu.

## Avatar: changing pen tip brightness

Adjust **ペン先の発光強度** (Pen tip emission strength) in Drawing Settings. The same value applies to the pen tip mesh and short trail. Each hand can have a different value, and the brightness of drawn lines is unaffected. See [Pen tip brightness](/en/avatar/settings#tip-emission).

## QvPen extension: the prefab does not display correctly

Check that QvPen was installed first. WigglePen inherits from QvPen's prefab. If references are missing, check the Unity Console errors and your QvPen installation.

## QvPen extension: lines do not wiggle

Check that you placed the **WigglePen** prefab. If either **Wiggle Amplitude (m)** or **Wiggle Frame Rate (fps)** is 0 on the ink material, increase it.

## QvPen extension: changing material Width has no effect

QvPen applies each pen's Ink Width. See [Line width](/en/world/settings#line-width).

## QvPen extension: lines disappear when viewed up close

Check **Near Clip Distance** on the ink material. The default is 0.1. This setting hides lines close to the camera, so move back slightly to check their appearance.

## Information to include when asking for help

Please include:

- Whether you use the QvPen extension or the avatar version
- Versions of the asset package, Unity, SDK, QvPen, Modular Avatar, and other relevant tools
- The steps that lead to the problem
- Errors shown in the Unity Console
- For the avatar version, which hand you used and whether the problem occurred in Unity or VRChat
