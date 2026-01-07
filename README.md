![Normal Map Editor](https://normalmap.app/og-image.png)

*Built with ❤️ for the game development community*

A free, open-source browser-based normal map editor designed specifically for pixel art and 2D games. Create realistic lighting effects with real-time preview and intuitive controls. No signup required. Works with Phaser, Unity, Godot, and more.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/jadhaidar/normal-map-app/pulls)

## 🌟 Features

- **🎨 Real-time Normal Map Generation** - Instantly see your changes as you adjust parameters
- **💡 Interactive Lighting Preview** - Drag and drop light source to preview how your normal map responds
- **🎯 Pixel-Perfect Rendering** - Optimized for pixel art with crisp edges
- **⚡ Fast Performance** - Pure JavaScript implementation with optimized algorithms
- **🔧 Adjustable Parameters** - Control bevel width, height strength, smoothness, and detail
- **🎭 Multiple View Modes** - Switch between original, normal map, and lit 3D preview
- **📱 Touch Support** - Works on tablets and mobile devices
- **💾 No Server Required** - Everything runs in your browser, your images never leave your device
- **🆓 100% Free** - No ads, no tracking, no registration

## 🚀 Quick Start

### For Users

Simply visit [https://normalmap.app/](https://normalmap.app/) and start creating!

1. Click "Load Image" and select your pixel art PNG (with transparency)
2. Adjust the parameters to get your desired effect
3. Switch to "Lit 3D" mode to preview the lighting
4. Click "Save Normal Map" to download your result

### For Developers

#### Prerequisites

- Node.js 14+ (for build process)
- npm or pnpm

#### Installation

```bash
# Clone the repository
git clone https://github.com/jadhaidar/normal-map-app.git
cd normal-map-app

# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build
```

#### Project Structure

```
normal-map-editor/
├── src/
│   └── index.html          # Source HTML with all code
├── public/                 # Build output directory
├── build.js                # Minification build script
├── package.json            # Dependencies and scripts
├── vercel.json             # Vercel deployment config
├── LICENSE                 # MIT License
└── README.md               # This file
```

## 📖 How It Works

### Normal Maps Explained

Normal maps are special textures that store surface direction information. Each pixel's RGB values represent the X, Y, and Z components of the surface normal vector at that point. When rendered with dynamic lighting, these normals create the illusion of 3D depth and detail on flat 2D surfaces.

### Algorithm

The editor uses a multi-step process to generate normal maps from pixel art:

1. **Alpha Analysis** - Detects opaque pixels from the alpha channel
2. **Distance Transform** - Calculates distance from edges using a two-pass Manhattan distance algorithm
3. **Height Map Generation** - Combines distance transform with luminance data to create a height field
4. **Gaussian Blur** - Applies separable box blur for smoothing (optional)
5. **Normal Calculation** - Uses Sobel filter to compute surface normals from the height map
6. **Normalization** - Converts normal vectors to RGB color space (0-255)

## 🎮 Use Cases

Perfect for:

- **2D Game Development** - Add depth and lighting to sprites in Phaser, Godot, Unity, etc.
- **Pixel Art** - Enhance retro-style graphics with modern lighting
- **UI Elements** - Create dynamic buttons and interface components
- **Web Graphics** - Add WebGL lighting effects to your websites
- **Texture Creation** - Generate normal maps for any 2D texture

## 🎛️ Parameters Guide

### Bevel Width
Controls the distance from the edge to the flat center. Higher values create wider, more gradual slopes.
- **Range**: 0-50px
- **Recommended**: 3-8px for crisp edges, 10-20px for softer shapes

### Height Strength
Adjusts how pronounced the slopes are in the normal map. Higher values create more dramatic lighting effects.
- **Range**: 0.1-10.0
- **Recommended**: 2-4 for subtle effects, 5-8 for dramatic lighting

### Smoothness
Applies blur to the height map before generating normals, creating softer transitions.
- **Range**: 0-10
- **Recommended**: 0-2 for sharp details, 3-6 for smooth surfaces

### Detail Weight
Mixes the original image's luminance into the height map, preserving color-based details.
- **Range**: 0-1
- **Recommended**: 0.1-0.3 for subtle texture, 0.4-0.7 for pronounced details

### Flip Horizontal/Vertical
Inverts the normal map direction. Use these if lighting appears from the wrong direction in your game engine.

## ⌨️ Keyboard Shortcuts

- `Cmd/Ctrl + Z` - Undo
- `Cmd/Ctrl + Shift + Z` or `Ctrl + Y` - Redo
- `Cmd/Ctrl + Scroll` - Zoom in/out

## 🔌 Integration Examples

### Phaser 3

```javascript
// Load the normal map
this.load.image('sprite', 'sprite.png');
this.load.image('sprite-normal', 'sprite_normal.png');

// Create sprite with normal map
const sprite = this.add.sprite(400, 300, 'sprite');
sprite.setPipeline('Light2D');

// Add the normal map
this.textures.addNormalMap('sprite-normal', 'sprite');
```

### Unity 2D

```csharp
// Assign normal map to sprite material
Material spriteMaterial = spriteRenderer.material;
spriteMaterial.SetTexture("_BumpMap", normalMapTexture);
spriteMaterial.EnableKeyword("_NORMALMAP");
```

### Godot

```gdscript
# In sprite's material:
# Set 'normal_texture' to your normal map
material.set_texture(CanvasItemMaterial.LIGHT_MODE_NORMAL, normal_map)
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Ideas for Contributions

- [ ] Add more normal map generation algorithms
- [ ] Export to different formats (TGA, DDS, etc.)
- [ ] Batch processing multiple images
- [ ] Custom lighting presets
- [ ] Animation preview mode
- [ ] Advanced edge detection options
- [ ] More blur algorithms (Gaussian, bilateral)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Jad Haidar**
- Website: [jad.land](https://jad.land)
- GitHub: [@jadhaidar](https://github.com/jadhaidar)

## ⭐ Support

If you find this tool useful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 📢 Sharing with fellow developers
