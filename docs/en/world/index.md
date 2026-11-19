# World setup

To use WigglePen, the QvPen extension, place its prefab in your world.

## 1. Import the packages

Check the [Requirements](/en/guide/requirements), then import QvPen and WigglePen into your world project.

## 2. Place the prefab

Find this prefab in the Project window and drag it into your world's Hierarchy:

```text
Assets/TpLab/WigglePen/Prefabs/WigglePen.prefab
```

Place it where players can reach it. Start by adjusting only its position, leaving the prefab's internal references and material settings unchanged.

::: tip If your world already has QvPen
Lines drawn with a regular QvPen will not start wiggling automatically. Place the **WigglePen** prefab shown above.
:::

## 3. Save and test

Save the scene and use **Build & Test** in the VRChat SDK.

1. Pick up a pen.
2. Hold the Use button and move the pen to draw.
3. Release Use and check that drawing stops.
4. Check that the lines wiggle and that you can erase them with the eraser.

See [Drawing and erasing](/en/world/usage) for controls and [Wiggle settings](/en/world/settings) for adjustments.
