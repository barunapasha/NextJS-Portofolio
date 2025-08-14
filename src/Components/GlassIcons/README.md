# GlassIcons Component

Komponen GlassIcons adalah komponen React yang menampilkan icon dengan efek glass morphism yang menarik. Komponen ini cocok untuk menampilkan skills dan teknologi dalam portfolio.

## Update Terbaru

- ✅ **Icon Size**: Ukuran icon diperbesar dari `w-6 h-6` menjadi `w-8 h-8`
- ✅ **Grid Layout**: Grid disesuaikan untuk distribusi yang lebih rata (3-6 kolom)
- ✅ **Container Size**: Container icon diperbesar untuk mengakomodasi icon yang lebih besar
- ✅ **Removed Icons**: Docker dan Netlify dihapus dari daftar icon
- ✅ **Better Spacing**: Gap antar icon disesuaikan untuk tampilan yang lebih rapi

## Cara Penggunaan

```tsx
import GlassIcons from '@/Components/GlassIcons/GlassIcons';
import { SiJavascript, SiReact } from 'react-icons/si';

const skillsIcons = [
  { 
    icon: <SiJavascript className="w-6 h-6" />, 
    color: 'yellow', 
    label: 'JavaScript' 
  },
  { 
    icon: <SiReact className="w-6 h-6" />, 
    color: 'cyan', 
    label: 'React.js' 
  },
];

// Penggunaan dalam komponen
<GlassIcons items={skillsIcons} className="custom-class" />
```

## Props

### GlassIconsProps
- `items: GlassIconsItem[]` - Array berisi item icon
- `className?: string` - Class CSS tambahan (opsional)

### GlassIconsItem
- `icon: React.ReactElement` - Icon React component
- `color: string` - Warna gradient untuk icon (blue, purple, red, indigo, orange, green, yellow, cyan, black, pink)
- `label: string` - Label yang akan ditampilkan saat hover
- `customClass?: string` - Class CSS tambahan untuk item tertentu (opsional)

## Warna yang Tersedia

- `blue` - Biru
- `purple` - Ungu
- `red` - Merah
- `indigo` - Indigo
- `orange` - Oranye
- `green` - Hijau
- `yellow` - Kuning
- `cyan` - Cyan
- `black` - Hitam
- `pink` - Pink

## Fitur

- ✅ Efek glass morphism
- ✅ Animasi hover 3D
- ✅ Responsive design
- ✅ Dark/Light mode support
- ✅ Customizable colors
- ✅ Smooth transitions
- ✅ Accessibility support

## Contoh Implementasi Lengkap

```tsx
import GlassIcons from '@/Components/GlassIcons/GlassIcons';
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs,
  SiNodedotjs,
  SiFlutter,
  SiDart,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiCss3,
  SiHtml5,
  SiGit,
  SiGithub,
  SiFigma,
  SiAdobexd,
  SiGraphql,
  SiAmazon,
  SiVercel
} from 'react-icons/si';
import { 
  MdDevices, 
  MdApi 
} from 'react-icons/md';

const skillsIcons = [
  { icon: <SiJavascript className="w-8 h-8" />, color: 'yellow', label: 'JavaScript' },
  { icon: <SiTypescript className="w-8 h-8" />, color: 'blue', label: 'TypeScript' },
  { icon: <SiReact className="w-8 h-8" />, color: 'cyan', label: 'React.js' },
  { icon: <SiNextdotjs className="w-8 h-8" />, color: 'black', label: 'Next.js' },
  { icon: <SiNodedotjs className="w-8 h-8" />, color: 'green', label: 'Node.js' },
  { icon: <SiFlutter className="w-8 h-8" />, color: 'blue', label: 'Flutter' },
  { icon: <SiDart className="w-8 h-8" />, color: 'blue', label: 'Dart' },
  { icon: <SiPhp className="w-8 h-8" />, color: 'purple', label: 'PHP' },
  { icon: <SiLaravel className="w-8 h-8" />, color: 'red', label: 'Laravel' },
  { icon: <SiMysql className="w-8 h-8" />, color: 'blue', label: 'MySQL' },
  { icon: <SiMongodb className="w-8 h-8" />, color: 'green', label: 'MongoDB' },
  { icon: <SiFirebase className="w-8 h-8" />, color: 'orange', label: 'Firebase' },
  { icon: <SiTailwindcss className="w-8 h-8" />, color: 'cyan', label: 'TailwindCSS' },
  { icon: <SiCss3 className="w-8 h-8" />, color: 'blue', label: 'CSS3' },
  { icon: <SiHtml5 className="w-8 h-8" />, color: 'orange', label: 'HTML5' },
  { icon: <SiGit className="w-8 h-8" />, color: 'orange', label: 'Git' },
  { icon: <SiGithub className="w-8 h-8" />, color: 'black', label: 'GitHub' },
  { icon: <SiFigma className="w-8 h-8" />, color: 'purple', label: 'Figma' },
  { icon: <SiAdobexd className="w-8 h-8" />, color: 'pink', label: 'Adobe XD' },
  { icon: <MdDevices className="w-8 h-8" />, color: 'green', label: 'Responsive Design' },
  { icon: <MdApi className="w-8 h-8" />, color: 'blue', label: 'RESTful APIs' },
  { icon: <SiGraphql className="w-8 h-8" />, color: 'pink', label: 'GraphQL' },
  { icon: <SiAmazon className="w-8 h-8" />, color: 'orange', label: 'AWS' },
  { icon: <SiVercel className="w-8 h-8" />, color: 'black', label: 'Vercel' },
];

// Dalam komponen
<section className="py-16 relative z-10">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
      Skills & Technologies
    </h2>
    <div className="bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200 dark:border-blue-800">
      <GlassIcons items={skillsIcons} className="max-w-6xl mx-auto" />
    </div>
  </div>
</section>
```

## Styling

Komponen ini menggunakan Tailwind CSS dan mendukung:
- Responsive grid layout
- Dark/Light mode
- Smooth animations
- Glass morphism effects
- 3D hover effects

## Dependencies

- React
- Tailwind CSS
- react-icons (untuk icon)
