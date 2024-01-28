# Export Automation for Adobe Premiere Pro
**Save about 7 clicks per export (it really adds up)** 🤘😎

## Overview

This extension automates the rendering process in Adobe Premiere Pro using Media Encoder.
The active sequence is exported to a user-defined folder (defaults to the project folder). 
The extension includes two high quality presets (H.264 and ProRes 422), which are installed during the setup process.

## Prerequisites

- Adobe Premiere Pro.
- Media Encoder.

## Download

Download the latest release from the [Releases](https://github.com/AviramV/export-automation/releases) section.

## Installation
The easiest way to install this extension is by using a ZXP installer. Either [ZXPInstaller](https://zxpinstaller.com/) or [aescripts ZXP/UXP Installer](https://aescripts.com/learn/zxp-installer/) will do the trick.

### Manual installation
If for some reason you need to manually install the extension:
1. Change the file extension form .zxp to .zip
2. Go to the Adobe CEP extensions folder:
    - Mac: */Library/Application Support/Adobe/CEP/extensions*
    - Win: *C:\Program Files\Common Files\Adobe\CEP\extensions*
3. Create a folder named Export Automation.
4. Extract the contents of the zip file to the Export Automation folder.

## Usage
Launch Adobe Premiere Pro, and you should find the "Export Automation" extension in the Extensions menu.

### Interface
![Export Automation UI](https://github.com/AviramV/export-automation/assets/20142618/57a44017-cdd3-4081-b1c3-2e72a704f911)


- **Export To**: Click the "Browse" button to select the export location.
- **Format**: Choose the desired export preset from the dropdown menu.
- **Export**: Click the "Export" button to initiate the rendering process. At this point Media Encoder will launch, load and apply the selected preset, and start the render cue to export your video. The created file will have the same name as the sequence.

### Presets

1. **HQ H.264 50Mbps**
2. **ProRes 422 HQ**
