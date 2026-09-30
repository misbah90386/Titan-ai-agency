import sharp from 'sharp';
import fs from 'fs';

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <!-- Background Gradients -->
    <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020814"/>
      <stop offset="45%" stop-color="#06152B"/>
      <stop offset="85%" stop-color="#081A38"/>
      <stop offset="100%" stop-color="#0A224A"/>
    </linearGradient>

    <!-- Brand Cyan-Blue Gradients -->
    <linearGradient id="cyan-blue-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00D1FF"/>
      <stop offset="50%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#3BA9FF"/>
    </linearGradient>

    <linearGradient id="card-bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#081E40" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#041226" stop-opacity="0.98"/>
    </linearGradient>

    <linearGradient id="laptop-screen-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#06162E"/>
      <stop offset="100%" stop-color="#030C1C"/>
    </linearGradient>

    <!-- Authentic TITAN Emblem Metallic Gradients -->
    <linearGradient id="wingGradLeft" x1="0%" y1="0%" x2="100%" y2="80%">
      <stop offset="0%" stop-color="#3BA9FF"/>
      <stop offset="35%" stop-color="#00D1FF"/>
      <stop offset="70%" stop-color="#0B3C78"/>
      <stop offset="100%" stop-color="#04142E"/>
    </linearGradient>

    <linearGradient id="wingGradRight" x1="100%" y1="0%" x2="0%" y2="80%">
      <stop offset="0%" stop-color="#00D1FF"/>
      <stop offset="40%" stop-color="#2563EB"/>
      <stop offset="85%" stop-color="#04142E"/>
    </linearGradient>

    <linearGradient id="stemLeft" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00D1FF"/>
      <stop offset="30%" stop-color="#0080FF"/>
      <stop offset="100%" stop-color="#071A33"/>
    </linearGradient>

    <linearGradient id="stemRight" x1="100%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3BA9FF"/>
      <stop offset="40%" stop-color="#0052CC"/>
      <stop offset="100%" stop-color="#04142E"/>
    </linearGradient>

    <linearGradient id="outerRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00B4D8"/>
      <stop offset="50%" stop-color="#0077B6"/>
      <stop offset="100%" stop-color="#023E8A"/>
    </linearGradient>

    <!-- Shadows & Glow Filters -->
    <filter id="subtle-shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="10" stdDeviation="16" flood-color="#000000" flood-opacity="0.6"/>
    </filter>

    <filter id="card-cyan-glow" x="-15%" y="-15%" width="130%" height="130%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#00D1FF" flood-opacity="0.22"/>
    </filter>

    <filter id="laptop-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#00D1FF" flood-opacity="0.18"/>
    </filter>

    <!-- Subtle Tech Grid Pattern -->
    <pattern id="tech-grid" width="36" height="36" patternUnits="userSpaceOnUse">
      <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#00D1FF" stroke-width="0.7" stroke-opacity="0.06"/>
    </pattern>
  </defs>

  <!-- 1. Background Base -->
  <rect width="1200" height="675" fill="url(#bg-grad)"/>
  <rect width="1200" height="675" fill="url(#tech-grid)"/>

  <!-- Ambient Light Orbs -->
  <circle cx="220" cy="180" r="280" fill="#00D1FF" fill-opacity="0.10" filter="blur(90px)"/>
  <circle cx="980" cy="380" r="320" fill="#3BA9FF" fill-opacity="0.09" filter="blur(100px)"/>
  <circle cx="600" cy="620" r="240" fill="#00D1FF" fill-opacity="0.07" filter="blur(80px)"/>

  <!-- Subtle Network Lines in Background -->
  <g opacity="0.18" stroke="#00D1FF" stroke-width="1" stroke-dasharray="4 6">
    <line x1="70" y1="110" x2="320" y2="70"/>
    <line x1="320" y1="70" x2="520" y2="130"/>
    <line x1="840" y1="80" x2="1060" y2="130"/>
    <line x1="1060" y1="130" x2="1140" y2="240"/>
    <line x1="90" y1="530" x2="280" y2="590"/>
    <line x1="910" y1="590" x2="1120" y2="530"/>
  </g>
  <g fill="#00D1FF" opacity="0.35">
    <circle cx="320" cy="70" r="3"/>
    <circle cx="520" cy="130" r="2.5"/>
    <circle cx="840" cy="80" r="3"/>
    <circle cx="1060" cy="130" r="3"/>
  </g>

  <!-- 2. Header: Authentic TITAN AI AGENCY Brand Mark (Top Left) -->
  <g transform="translate(60, 42)">
    <!-- Container pill -->
    <rect width="250" height="42" rx="21" fill="#041226" fill-opacity="0.9" stroke="#00D1FF" stroke-width="1.2" stroke-opacity="0.5"/>
    
    <!-- Authentic Emblem Miniaturized -->
    <g transform="translate(14, 5) scale(0.065)">
      <path d="M 480 148 C 360 160 270 260 270 380 C 270 470 320 546 395 586 C 365 520 355 450 365 375 C 372 315 408 248 460 200 Z" fill="url(#wingGradLeft)"/>
      <path d="M 395 586 C 350 530 330 450 330 380 C 330 280 390 200 480 160 C 470 190 410 250 395 340 C 385 410 405 510 440 560 Z" fill="url(#outerRingGrad)" opacity="0.6"/>
      <path d="M 520 148 C 640 160 730 260 730 380 C 730 470 680 546 605 586 C 635 520 645 450 635 375 C 628 315 592 248 540 200 Z" fill="url(#wingGradRight)"/>
      <path d="M 605 586 C 650 530 670 450 670 380 C 670 280 610 200 520 160 C 530 190 590 250 605 340 C 615 410 595 510 560 560 Z" fill="url(#outerRingGrad)" opacity="0.6"/>
      <path d="M 500 145 L 470 195 L 530 195 Z" fill="#00D1FF" opacity="0.9"/>
      <path d="M 500 270 L 320 270 L 260 275 L 360 325 L 500 325 Z" fill="url(#wingGradLeft)"/>
      <path d="M 360 325 L 435 480 L 495 510 L 495 325 Z" fill="url(#stemLeft)"/>
      <path d="M 500 270 L 680 270 L 740 275 L 640 325 L 500 325 Z" fill="url(#wingGradRight)"/>
      <path d="M 640 325 L 565 480 L 505 510 L 505 325 Z" fill="url(#stemRight)"/>
      <path d="M 495 270 L 435 325 L 435 490 L 495 595 Z" fill="url(#stemLeft)"/>
      <path d="M 505 270 L 565 325 L 565 490 L 505 595 Z" fill="url(#stemRight)"/>
    </g>

    <!-- TITAN Wordmark with Cyan A chevron & Subtitle -->
    <text x="56" y="22" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="14" letter-spacing="3.5">
      TIT<tspan fill="#00D1FF">A</tspan>N
    </text>
    <text x="56" y="34" fill="#00D1FF" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="8.5" letter-spacing="2.2">
      AI AGENCY
    </text>
  </g>

  <!-- Category / Year Badge (Top Right) -->
  <g transform="translate(970, 42)">
    <rect width="170" height="38" rx="19" fill="#00D1FF" fill-opacity="0.12" stroke="#00D1FF" stroke-width="1.2"/>
    <circle cx="24" cy="19" r="4.5" fill="#00D1FF"/>
    <text x="38" y="24" fill="#00D1FF" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="11.5" letter-spacing="1.5">2026 STRATEGY</text>
  </g>

  <!-- 3. Main Headline & Subtitle Block -->
  <g transform="translate(60, 115)">
    <text x="0" y="28" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="36" fill="#FFFFFF" letter-spacing="-0.5">
      WHY EVERY BUSINESS NEEDS
    </text>
    <text x="0" y="70" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="38" fill="url(#cyan-blue-grad)" letter-spacing="-0.5">
      A PROFESSIONAL WEBSITE IN 2026
    </text>

    <!-- Subtitle Pill Bar -->
    <g transform="translate(0, 90)">
      <rect width="540" height="32" rx="16" fill="#041226" fill-opacity="0.85" stroke="#3BA9FF" stroke-width="1" stroke-opacity="0.4"/>
      <text x="20" y="21" fill="#EAF7FF" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="12" letter-spacing="0.8">
        <tspan fill="#00D1FF">Build Trust</tspan> • <tspan fill="#FFFFFF">Google Visibility</tspan> • <tspan fill="#00D1FF">Lead Capture</tspan> • <tspan fill="#3BA9FF">AI Automation</tspan>
      </text>
    </g>
  </g>

  <!-- 4. Central Visual: Realistic High-Tech Enterprise Laptop Mockup -->
  <g transform="translate(425, 235)" filter="url(#laptop-glow)">
    <!-- Outer Laptop Lid Frame -->
    <rect x="50" y="20" width="560" height="340" rx="14" fill="#020A16" stroke="#3BA9FF" stroke-width="2.5" stroke-opacity="0.7"/>
    
    <!-- Inner Screen Display -->
    <rect x="60" y="30" width="540" height="310" rx="8" fill="url(#laptop-screen-grad)"/>

    <!-- Browser Chrome Bar -->
    <rect x="60" y="30" width="540" height="30" fill="#030E1F"/>
    <circle cx="78" cy="45" r="4.5" fill="#EF4444"/>
    <circle cx="92" cy="45" r="4.5" fill="#F59E0B"/>
    <circle cx="106" cy="45" r="4.5" fill="#10B981"/>
    
    <!-- Browser URL Bar -->
    <rect x="130" y="37" width="280" height="18" rx="9" fill="#081E40" stroke="#00D1FF" stroke-width="0.8" stroke-opacity="0.5"/>
    <text x="146" y="50" fill="#EAF7FF" font-family="monospace" font-size="9.5">https://yourbusiness.com</text>
    <rect x="420" y="38" width="60" height="16" rx="4" fill="#00D1FF" fill-opacity="0.15"/>
    <text x="428" y="50" fill="#00D1FF" font-family="system-ui, sans-serif" font-weight="700" font-size="8">SSL SECURE</text>

    <!-- Website Inside Screen: Hero Section Mockup -->
    <g transform="translate(60, 60)">
      <!-- Navbar inside site -->
      <rect width="540" height="32" fill="#061933"/>
      <rect x="20" y="10" width="70" height="12" rx="3" fill="#00D1FF"/>
      <rect x="350" y="9" width="45" height="14" rx="4" fill="#0B2B57"/>
      <rect x="405" y="9" width="45" height="14" rx="4" fill="#0B2B57"/>
      <rect x="460" y="7" width="60" height="18" rx="9" fill="url(#cyan-blue-grad)"/>

      <!-- Site Content -->
      <g transform="translate(25, 45)">
        <rect width="115" height="15" rx="7.5" fill="#00D1FF" fill-opacity="0.2"/>
        <text x="8" y="11" fill="#00D1FF" font-family="system-ui, sans-serif" font-weight="700" font-size="8">ENTERPRISE SOLUTIONS</text>
        <rect x="0" y="24" width="250" height="18" rx="4" fill="#FFFFFF"/>
        <rect x="0" y="48" width="210" height="12" rx="3" fill="#EAF7FF" fill-opacity="0.85"/>
        <rect x="0" y="66" width="170" height="8" rx="2" fill="#8FA0BA"/>
        
        <!-- CTA buttons inside site -->
        <rect x="0" y="86" width="95" height="24" rx="6" fill="url(#cyan-blue-grad)"/>
        <rect x="105" y="86" width="85" height="24" rx="6" fill="#0A244A" stroke="#3BA9FF" stroke-width="1"/>

        <!-- Mini Feature Cards inside site -->
        <g transform="translate(0, 126)">
          <rect x="0" y="0" width="78" height="52" rx="6" fill="#041226" stroke="#00D1FF" stroke-width="0.8" stroke-opacity="0.4"/>
          <circle cx="16" cy="16" r="6" fill="#00D1FF" fill-opacity="0.3"/>
          <rect x="8" y="28" width="45" height="6" rx="2" fill="#FFFFFF"/>
          <rect x="8" y="38" width="58" height="4" rx="2" fill="#8FA0BA"/>

          <rect x="88" y="0" width="78" height="52" rx="6" fill="#041226" stroke="#00D1FF" stroke-width="0.8" stroke-opacity="0.4"/>
          <circle cx="104" cy="16" r="6" fill="#3BA9FF" fill-opacity="0.3"/>
          <rect x="96" y="28" width="48" height="6" rx="2" fill="#FFFFFF"/>
          <rect x="96" y="38" width="58" height="4" rx="2" fill="#8FA0BA"/>

          <rect x="176" y="0" width="78" height="52" rx="6" fill="#041226" stroke="#00D1FF" stroke-width="0.8" stroke-opacity="0.4"/>
          <circle cx="192" cy="16" r="6" fill="#25D366" fill-opacity="0.3"/>
          <rect x="184" y="28" width="45" height="6" rx="2" fill="#FFFFFF"/>
          <rect x="184" y="38" width="58" height="4" rx="2" fill="#8FA0BA"/>
        </g>
      </g>

      <!-- Right Side Visual inside site (Interactive dashboard preview) -->
      <g transform="translate(310, 45)">
        <rect width="205" height="185" rx="8" fill="#030E1F" stroke="#3BA9FF" stroke-width="1" stroke-opacity="0.35"/>
        <text x="14" y="24" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="700" font-size="10.5">Automated Sales Pipeline</text>
        
        <!-- Mini Analytics curve inside laptop -->
        <path d="M 20 120 L 55 95 L 95 110 L 135 70 L 175 50" fill="none" stroke="#00D1FF" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="175" cy="50" r="4.5" fill="#00D1FF"/>
        <rect x="20" y="142" width="75" height="20" rx="4" fill="#25D366" fill-opacity="0.2"/>
        <text x="27" y="156" fill="#25D366" font-family="system-ui, sans-serif" font-weight="700" font-size="9.5">● CRM Synced</text>
      </g>
    </g>

    <!-- Laptop Base / Hinge -->
    <path d="M 10 360 L 650 360 L 675 376 L -15 376 Z" fill="#081C38" stroke="#00D1FF" stroke-width="1" stroke-opacity="0.5"/>
    <rect x="290" y="360" width="80" height="5" rx="2" fill="#00D1FF" fill-opacity="0.6"/>
    <!-- Desk Surface Glow Reflection -->
    <ellipse cx="330" cy="382" rx="340" ry="12" fill="#00D1FF" fill-opacity="0.16" filter="blur(10px)"/>
  </g>

  <!-- 5. Floating Google Search & SEO Visibility Badge (Left Side) -->
  <g transform="translate(60, 275)" filter="url(#card-cyan-glow)">
    <rect width="320" height="96" rx="14" fill="url(#card-bg-grad)" stroke="#00D1FF" stroke-width="1.4"/>
    <g transform="translate(16, 16)">
      <!-- Google 'G' icon representation -->
      <circle cx="14" cy="14" r="14" fill="#FFFFFF"/>
      <text x="9" y="19" fill="#4285F4" font-family="system-ui, sans-serif" font-weight="900" font-size="15">G</text>
      <rect x="36" y="2" width="180" height="24" rx="12" fill="#041226" stroke="#3BA9FF" stroke-width="1" stroke-opacity="0.5"/>
      <text x="46" y="17" fill="#EAF7FF" font-family="system-ui, sans-serif" font-size="9.5">website design company Riyadh</text>
      <rect x="224" y="5" width="60" height="18" rx="4" fill="#10B981"/>
      <text x="232" y="17" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="700" font-size="8.5">RANK #1</text>
      
      <!-- SERP Subtext -->
      <g transform="translate(0, 38)">
        <text x="4" y="14" fill="#00D1FF" font-family="system-ui, sans-serif" font-weight="700" font-size="11">Google Search Visibility &amp; SEO</text>
        <text x="4" y="28" fill="#8FA0BA" font-family="system-ui, sans-serif" font-size="9.5">Direct organic customer discovery 24/7</text>
      </g>
    </g>
  </g>

  <!-- 6. Floating WhatsApp Direct Integration Badge (Bottom Left) -->
  <g transform="translate(60, 395)" filter="url(#subtle-shadow)">
    <rect width="320" height="92" rx="14" fill="url(#card-bg-grad)" stroke="#25D366" stroke-width="1.4"/>
    <g transform="translate(16, 16)">
      <!-- Official WhatsApp Green Circle -->
      <circle cx="24" cy="24" r="22" fill="#25D366"/>
      <!-- WhatsApp Phone Path -->
      <path d="M 24 10 C 16.3 10 10 16.3 10 24 C 10 26.6 10.7 29.1 12 31.2 L 10.5 37 L 16.5 35.5 C 18.7 36.7 21.3 37.5 24 37.5 C 31.7 37.5 38 31.2 38 24 C 38 16.3 31.7 10 24 10 Z" fill="#FFFFFF"/>
      <path d="M 28 26.5 C 27.5 27.8 25.5 29 24.2 29 C 22.8 29 20 27.5 18 24 C 16.5 21.3 17.5 19.5 18.5 18.8 C 18.8 18.5 19.3 18.5 19.6 19.1 C 20.2 20.3 20.8 21.6 20.8 21.8 C 20.9 22.1 20.7 22.4 20.4 22.7 C 20.1 23 19.8 23.3 20.3 24.1 C 20.8 25 21.8 25.8 22.8 26.3 C 23.5 26.7 24 26.4 24.3 26 C 24.6 25.6 25.3 24.7 25.7 24.9 C 26.1 25.1 27.5 25.8 27.8 26 C 28.1 26.2 28.1 26.3 28 26.5 Z" fill="#25D366"/>

      <g transform="translate(56, 4)">
        <text x="0" y="16" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="700" font-size="12">Direct WhatsApp Lead Capture</text>
        <text x="0" y="32" fill="#EAF7FF" font-family="system-ui, sans-serif" font-size="9.5">Zero dropped leads • Instant engagement</text>
        <rect x="0" y="38" width="130" height="16" rx="4" fill="#25D366" fill-opacity="0.18"/>
        <text x="6" y="50" fill="#25D366" font-family="monospace" font-weight="700" font-size="8.5">+966 Direct Inquiries</text>
      </g>
    </g>
  </g>

  <!-- 7. Floating Analytics & Conversion Growth Card (Top Right) -->
  <g transform="translate(860, 160)" filter="url(#card-cyan-glow)">
    <rect width="280" height="125" rx="14" fill="url(#card-bg-grad)" stroke="#00D1FF" stroke-width="1.4"/>
    <g transform="translate(18, 16)">
      <text x="0" y="14" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="700" font-size="12">Lead Conversion Growth</text>
      <text x="0" y="36" fill="#00D1FF" font-family="system-ui, sans-serif" font-weight="800" font-size="22">+340%</text>
      <text x="90" y="34" fill="#10B981" font-family="system-ui, sans-serif" font-weight="700" font-size="11">▲ Qualified Enquiries</text>
      
      <!-- Mini Chart -->
      <path d="M 0 75 Q 50 65 100 45 T 200 20 T 240 10" fill="none" stroke="#00D1FF" stroke-width="3" stroke-linecap="round"/>
      <path d="M 0 75 Q 50 65 100 45 T 200 20 T 240 10 L 240 85 L 0 85 Z" fill="#00D1FF" fill-opacity="0.1"/>
      <circle cx="240" cy="10" r="5" fill="#00D1FF" stroke="#FFFFFF" stroke-width="2"/>
    </g>
  </g>

  <!-- 8. Floating AI Automation & 24/7 Agent Badge (Bottom Right) -->
  <g transform="translate(860, 460)" filter="url(#subtle-shadow)">
    <rect width="280" height="105" rx="14" fill="url(#card-bg-grad)" stroke="#3BA9FF" stroke-width="1.4"/>
    <g transform="translate(16, 16)">
      <circle cx="20" cy="20" r="16" fill="#00D1FF" fill-opacity="0.15" stroke="#00D1FF" stroke-width="1"/>
      <!-- Neural network / AI Icon -->
      <circle cx="14" cy="16" r="2.5" fill="#00D1FF"/>
      <circle cx="26" cy="14" r="2.5" fill="#3BA9FF"/>
      <circle cx="20" cy="25" r="2.5" fill="#FFFFFF"/>
      <line x1="14" y1="16" x2="26" y2="14" stroke="#00D1FF" stroke-width="1"/>
      <line x1="14" y1="16" x2="20" y2="25" stroke="#00D1FF" stroke-width="1"/>
      <line x1="26" y1="14" x2="20" y2="25" stroke="#3BA9FF" stroke-width="1"/>

      <g transform="translate(48, 4)">
        <text x="0" y="14" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="700" font-size="12">AI Chatbot &amp; Voice Agents</text>
        <text x="0" y="30" fill="#8FA0BA" font-family="system-ui, sans-serif" font-size="9.5">Answers questions &amp; qualifies leads</text>
        <rect x="0" y="38" width="95" height="16" rx="4" fill="#00D1FF" fill-opacity="0.15"/>
        <text x="8" y="50" fill="#00D1FF" font-family="monospace" font-weight="700" font-size="8.5">24/7/365 ACTIVE</text>
      </g>
    </g>
  </g>

  <!-- 9. Bottom Trust Strip -->
  <g transform="translate(60, 608)">
    <rect width="1080" height="36" rx="8" fill="#041226" fill-opacity="0.9" stroke="#3BA9FF" stroke-width="0.8" stroke-opacity="0.25"/>
    <text x="24" y="23" fill="#8FA0BA" font-family="system-ui, sans-serif" font-size="11">
      <tspan fill="#00D1FF" font-weight="700">TITAN AI AGENCY</tspan> — Web Architecture • Google Search Visibility • AI Assistants • WhatsApp Automation
    </text>
    <text x="960" y="23" fill="#3BA9FF" font-family="system-ui, sans-serif" font-weight="700" font-size="11">
      SAUDI ARABIA &amp; GLOBAL
    </text>
  </g>
</svg>
`;

async function build() {
  const targetDir = 'public/images/blog';
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // 1. Write SVG file
  fs.writeFileSync(`${targetDir}/why-every-business-needs-a-professional-website-2026.svg`, svgContent.trim());
  console.log('Saved SVG');

  // 2. Render high-res WebP (1920x1080) for instant loading & crisp quality
  await sharp(Buffer.from(svgContent), { density: 150 })
    .resize(1920, 1080)
    .webp({ quality: 92 })
    .toFile(`${targetDir}/why-every-business-needs-a-professional-website-2026.webp`);
  console.log('Generated WebP (1920x1080)');

  // 3. Render high-res PNG (1920x1080) as fallback
  await sharp(Buffer.from(svgContent), { density: 150 })
    .resize(1920, 1080)
    .png({ quality: 90 })
    .toFile(`${targetDir}/why-every-business-needs-a-professional-website-2026.png`);
  console.log('Generated PNG (1920x1080)');

  console.log('All featured image assets successfully generated in 16:9 format!');
}

build().catch(err => {
  console.error(err);
  process.exit(1);
});
