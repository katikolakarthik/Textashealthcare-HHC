# TEXTAS Healthcare Hero Component

A modern, responsive hero section component built with Next.js, TypeScript, and Framer Motion.

## Features

- 🎨 **Exact Design Match**: Replicates the TEXTAS Healthcare hero section with precise styling
- 📱 **Fully Responsive**: Optimized for all device sizes
- ⚡ **Performance Optimized**: Built with Next.js 14 and optimized for speed
- 🎭 **Smooth Animations**: Powered by Framer Motion for engaging interactions
- 🎯 **TypeScript**: Full type safety and better development experience
- 🎨 **Tailwind CSS**: Utility-first CSS framework for rapid styling

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd textas-healthcare
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── homepage/
│       ├── Header.tsx
│       ├── HeroSection.tsx
│       ├── PowerOfMoreSection.tsx
│       ├── PainPointsSection.tsx
│       ├── OurServicesSection.tsx
│       ├── ScrollAnimationSection.tsx
│       ├── ScrollAnimationSection2.tsx
│       ├── ScrollAnimationSection3.tsx
│       ├── WhoWeAreSection.tsx
│       ├── TeamSection.tsx
│       ├── ThreeColumnSection.tsx
│       └── Footer.tsx
├── public/
└── package.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Heroicons** - Icon library

## Customization

### Colors
The component uses a custom color palette defined in `tailwind.config.js`:

```javascript
colors: {
  'dark-blue': '#0f172a',
  'accent-red': '#dc2626',
  // ... other colors
}
```

### Animations
All animations are powered by Framer Motion and can be customized in each component file.

## Deployment

This project is optimized for Vercel deployment. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "New Project" and import your repository
4. Vercel will automatically detect it's a Next.js project
5. Click "Deploy" - your site will be live in minutes!

## License

This project is licensed under the MIT License. 