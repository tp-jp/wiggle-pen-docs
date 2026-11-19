# Requirements

Please read the [Terms of use](/en/terms) before installing.

## QvPen extension

Prepare the following in your Unity world project:

- VRChat SDK - Worlds
- QvPen
- The WigglePen package

WigglePen's prefab inherits from QvPen's prefab. Install QvPen before importing WigglePen.

## Avatar version

Prepare the following in your Unity avatar project:

- VRChat SDK - Avatars
- Modular Avatar
- The WigglePenAvatar package
- An avatar configured as Humanoid

Automatic fingertip placement requires the index finger's Intermediate and Distal bones. You can use Gesture Manager to try the menu and gestures in Unity.

## Versions used for this guide

This guide is based on projects using the versions below. Minimum supported versions and compatibility with other versions have not been verified.

| Component | QvPen extension | Avatar version |
| --- | --- | --- |
| Unity | 2022.3.22f1 | 2022.3.22f1 |
| VRChat SDK | Worlds 3.10.6 | Avatars 3.10.6 |
| QvPen | 3.3.15 | Not used |
| Modular Avatar | Not used | 1.18.7 |
| NDMF | Not used | 1.14.8 |
| Gesture Manager | Not used | 3.9.9 (for testing in Unity) |

## Quest and desktop use

The QvPen extension includes PC and Quest ink materials. When switching platforms, check the [material settings](/en/world/settings). Rendering and synchronization on a Quest headset have not been verified.

The avatar controls in this guide use the Point gesture in VR. A dedicated desktop drawing prefab has not been implemented. Quest support for the avatar version has not been verified.

## Setup guides

- [Add the QvPen extension to a world](/en/world/)
- [Add the avatar version to an avatar](/en/avatar/)
