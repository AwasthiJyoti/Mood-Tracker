# Mood-Tracker
Users express their mood each day not just by words or numbers but via creating an abstract visual with custom colors and simple shapes on a canvas.
Core Idea:
Users express their mood each day not just by words or numbers but via creating an abstract visual with custom colors and simple shapes on a canvas.

Each "Mood Canvas" entry is saved with metadata (date, optional notes).

Users can view a gallery of their past mood canvases as colorful abstract artwork.
The app blends creative self-expression and emotional tracking with a striking visual experience.

Key Features & Creativity Highlights:

1. Interactive Painting Canvas UI
Users paint simple shapes (circles, squares), choose colors from a palette, and build an abstract piece reflecting their mood. Minimalistic, intuitive design with smooth animations.

2. Color and Shape Palette
Creative control with color pickers and shape selectors, enabling users to customize each paint stroke, resulting in unique daily visual mood art.

3. Save and Retrieve
The canvas graphic (as a JSON vector description or image data URL) along with date and note is sent to a backend, stored in MySQL.

4. Mood Gallery
A responsive gallery view displaying all saved canvases as mini artworks with date and notes, offering a personal visual diary.

5. Modern Aesthetics
Dynamic gradient backgrounds; glassmorphism UI panels; smooth micro-animations on interaction; vibrant but soothing color palettes for emotional harmony.

Tech Stack:
Frontend: Single HTML file with inline CSS (modern design) and JavaScript (Canvas API and fetch for backend).
Backend: Node.js with Express for API routes.
Database: MySQL storing:
id
date
note
canvas_data (JSON text or base64 image)
created_at
Quick Project Walkthrough:
Canvas Area: User draws simple shapes with chosen color/shape repeated by clicking.
Inputs: Date picker (default today), textual mood note.
Save Button: Saves the canvas data + metadata.
Gallery: Fetches saved entries, displays thumbnails and notes below.
Delete option on each saved mood canvas.
