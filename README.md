# 🚀 Baruna's Portfolio Website (Readme Generated)

A modern, responsive portfolio website built with Next.js 15, featuring stunning animations, glass morphism effects, and a beautiful dark/light theme toggle. This portfolio showcases my skills, projects, and experience as a full-stack developer.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15.4.6-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎨 **Modern Design**
- **Glass Morphism Effects** - Beautiful translucent components with backdrop blur
- **Dark/Light Theme Toggle** - Seamless theme switching with smooth transitions
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations** - Powered by Framer Motion and GSAP

### 🎯 **Interactive Components**
- **Animated Navigation** - Gooey navigation with smooth hover effects
- **Glass Icons** - Skills showcase with 3D hover animations
- **Card Swap Animations** - Dynamic project cards with flip effects
- **Text Type Animations** - Typing effect for dynamic content
- **Magnetic Effects** - Interactive cursor effects

### 📱 **Pages & Sections**
- **Home** - Hero section with animated introduction
- **About** - Detailed skills, experience, and education
- **Projects** - Portfolio showcase with project details
- **Contact** - Contact form with EmailJS integration

## 🛠️ Technologies Used

### **Frontend**
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework

### **Animations & Effects**
- **Framer Motion** - Production-ready motion library
- **GSAP** - Professional-grade animations
- **OGL** - WebGL graphics library

### **UI/UX**
- **React Icons** - Comprehensive icon library
- **Next Themes** - Theme management
- **EmailJS** - Contact form functionality

### **Development Tools**
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/barunapasha/NextJS-Portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
porto-next/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Home page
│   │   ├── about/             # About page
│   │   ├── projects/          # Projects page
│   │   ├── contact/           # Contact page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── Components/            # Reusable components
│   │   ├── GlassIcons/        # Skills showcase component
│   │   ├── DockNav/           # Navigation component
│   │   ├── GooeyNav/          # Animated navigation
│   │   ├── CardSwap/          # Project cards
│   │   ├── Header.tsx         # Header component
│   │   └── Footer.tsx         # Footer component
│   ├── Backgrounds/           # Background effects
│   │   └── DarkVeil/          # Dark theme background
│   └── TextAnimations/        # Text effects
│       └── TextType/          # Typing animations
├── public/                    # Static assets
│   └── images/               # Project images
├── tailwind.config.js        # Tailwind configuration
└── package.json              # Dependencies
```

## 🎨 Customization

### **Theme Colors**
The project uses a sophisticated color scheme with dark/light mode support:

```css
/* Dark Mode Colors */
--dark-bg: black
--dark-accent: blue
--dark-text: white

/* Light Mode Colors */
--light-bg: white
--light-accent: gray
--light-text: black
```

### **Adding New Skills**
To add new skills to the GlassIcons component:

```tsx
import { SiYourIcon } from 'react-icons/si';

const newSkill = {
  icon: <SiYourIcon className="w-8 h-8" />,
  color: 'blue', // Available: blue, purple, red, indigo, orange, green, yellow, cyan, black, pink
  label: 'Your Skill'
};
```

### **Customizing Animations**
Modify animation parameters in the component files:

```tsx
// Example: Adjusting Framer Motion animations
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### **Netlify**
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### **Other Platforms**
The project can be deployed to any platform that supports Next.js static exports.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: [your-email@example.com]
- **LinkedIn**: [your-linkedin]
- **GitHub**: [@yourusername]

## 🙏 Acknowledgments

- **Framer Motion** for smooth animations
- **Tailwind CSS** for utility-first styling
- **React Icons** for beautiful icons
- **Next.js** for the amazing framework

---

⭐ **Star this repository if you found it helpful!**
