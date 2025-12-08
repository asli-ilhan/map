# MA Internet Equalities — Winter Festival Exhibition

Interactive floor-plan exhibition website for iPad mini.

## Setup Instructions

1. **Copy the map image:**
   ```bash
   cp /Users/aslico/Desktop/map/map/map.png public/map.png
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## Configuration

### Adjust Coordinates

Edit normalized coordinates (0-1 range) in `src/main.js`:

- **ENTRANCE**: Entrance marker position
- **STUDENTS array**: Each student's `x`, `y`, and `path` coordinates

### Edit Content

In `src/main.js`, update the `STUDENTS` array with:
- Student names
- Project titles
- Brief HTML descriptions

## File Structure

```
├── index.html          # Main HTML structure
├── src/
│   ├── main.js        # Application logic & configuration
│   └── styles.css     # All styling
├── public/
│   └── map.png        # Floorplan image (copy from map/map.png)
└── package.json       # Vite configuration
```

## Features

- Landing screen with fade transition
- Interactive map with SVG overlay
- Normalized coordinate system (0-1)
- Entrance marker
- Student markers with dashed paths
- Legend panel with clickable items
- Project detail panel
- Zoom/pan functionality
- iPad mini responsive design

