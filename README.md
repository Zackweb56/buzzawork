# BUZZWORK - Printing Services Landing Page

A modern, responsive landing page for BUZZWORK printing services built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🌐 Multi-language support (French/Arabic)
- 📱 Fully responsive design
- 🎨 Modern UI with gradient backgrounds
- 📞 WhatsApp integration
- 💼 Service calculator
- 📋 Order form modal
- ⚡ Fast performance with static export

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd buzzawork
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment to GitHub Pages

### Automatic Deployment (Recommended)

This repository is configured with GitHub Actions for automatic deployment. Simply push to the `main` branch and your site will be automatically deployed to GitHub Pages.

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **The static files will be generated in the `out` directory**

3. **Deploy to GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

## Repository Setup

1. **Create a new repository on GitHub**
2. **Push your code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Set source to "GitHub Actions"

## Configuration

### Next.js Configuration
The project is configured for static export in `next.config.mjs`:
- `output: 'export'` - Enables static export
- `trailingSlash: true` - Adds trailing slashes for GitHub Pages compatibility
- `images: { unoptimized: true }` - Required for static export

### GitHub Actions
The `.github/workflows/deploy.yml` file handles:
- Automatic builds on push to main branch
- Static file generation
- Deployment to GitHub Pages

## Project Structure

```
buzzawork/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/             # React components
│   ├── ui/               # UI components
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section
│   └── ...               # Other components
├── lib/                   # Utilities and data
│   ├── data.ts           # Content data
│   └── utils.ts          # Utility functions
├── hooks/                 # Custom React hooks
├── public/                # Static assets
└── .github/workflows/     # GitHub Actions
```

## Customization

### Content
Edit `lib/data.ts` to modify the website content for both French and Arabic languages.

### Styling
Modify `app/globals.css` and component styles to customize the appearance.

### Components
All components are in the `components/` directory and can be customized as needed.

## Performance

- Static export ensures fast loading
- Optimized images and assets
- Minimal JavaScript bundle
- Responsive design for all devices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary to BUZZWORK.

---

**BUZZWORK** - Your Creative Printing Partner