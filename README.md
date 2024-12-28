# Digi Solo - Agency Website

A modern, responsive website for Digi Solo agency built with React and Tailwind CSS.

## Customization Guide

### 1. Content Updates

#### Hero Section
- Update the main heading and subheading in the header section
- Modify the CTA button text and link

#### About Section
- Update the company description in the About section
- Add more paragraphs or content as needed

#### Services Section
- Modify the service cards
- Add or remove services as needed
- Update icons by importing different ones from `lucide-react`

#### Contact Section
- Update contact information (email, phone, social media links)
- Modify the contact form fields if needed

### 2. Styling Updates

The website uses Tailwind CSS for styling. To modify the look:

- Colors: Update the gradient colors in the header and sections
- Spacing: Modify padding and margin using Tailwind classes
- Typography: Change font sizes and weights using Tailwind classes
- Components: Adjust the design of cards, buttons, and forms

### 3. Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### 4. Deployment

The site can be easily deployed to Netlify:

1. Push your code to a Git repository
2. Connect your repository to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

## File Structure

```
src/
├── App.tsx        # Main application component
├── index.css      # Global styles
└── main.tsx       # Application entry point
```

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Lucide React (for icons)