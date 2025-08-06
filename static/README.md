# REDROAD Hero Component

A modern, animated hero section component built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Exact Design Match**: Replicates the REDROAD hero section with precise styling
- ✨ **Smooth Animations**: Framer Motion animations for text typing, element entrance, and hover effects
- 📱 **Responsive Design**: Fully responsive across all device sizes
- 🎯 **Interactive Elements**: Hover effects and smooth transitions
- 🎭 **Typewriter Effect**: Animated text typing for the tagline
- 🎨 **Custom Graphics**: Animated red shape and diagonal line patterns

## Tech Stack

- **Next.js 14** - React framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **TypeScript** - Type safety
- **Heroicons** - Icon library

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Component Structure

- `components/Header.tsx` - Navigation header with logo and menu
- `components/HeroSection.tsx` - Main hero section with animations
- `app/page.tsx` - Main page that combines all components

## Key Features

### Animations
- **Header**: Slides in from top with staggered navigation items
- **Hero Text**: Typewriter effect for tagline
- **Headline**: Slides up with fade-in effect
- **CTA Button**: Hover animations with scale and shadow effects
- **Graphics**: Red shape rotates and scales in, diagonal lines fade in

### Responsive Design
- Mobile-first approach
- Collapsible navigation for mobile
- Responsive typography and spacing
- Adaptive layout for different screen sizes

### Interactive Elements
- Hover effects on navigation items
- Button hover animations
- Smooth transitions throughout

## Customization

The component uses custom Tailwind colors defined in `tailwind.config.js`:
- `dark-blue`: `#0f172a`
- `accent-red`: `#dc2626`

You can easily modify colors, animations, and content by editing the respective component files.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project is optimized for Vercel deployment. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "New Project" and import your repository
4. Vercel will automatically detect it's a Next.js project
5. Click "Deploy" - your site will be live in minutes!

## License

MIT License - feel free to use this component in your projects! 