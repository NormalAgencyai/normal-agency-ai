// ==========================================
// صور تصورية (Concept) — SVG نصي عادي (بدون Base64) لسهولة النسخ
// استبدل مفتاح svg في portfolioData بـ img ومسار صورة حقيقية متى جهزت مشاريعكم
// ==========================================
const CONCEPT_SVGS = {
  office1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0B1424"/>
      <stop offset="1" stop-color="#16345c"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#bg)"/>
  <g transform="rotate(-4 500 355)">
  <rect x="300" y="70" width="400" height="570" rx="14" fill="#fff" opacity="1" />
  <rect x="300" y="70" width="400" height="150" rx="14" fill="#1E78BD" opacity="1" />
  <rect x="300" y="190" width="400" height="30" rx="0" fill="#1E78BD" opacity="1" />
  <text x="335" y="150" font-family="Helvetica,Arial,sans-serif" font-size="46" font-weight="700" fill="#fff" text-anchor="start" opacity="1">AURA</text>
  <text x="335" y="192" font-family="Helvetica,Arial,sans-serif" font-size="18" font-weight="700" fill="#fff" text-anchor="start" opacity="0.85">Company Profile</text>
  <rect x="335" y="270" width="330" height="10" rx="5" fill="#D5DCE6" opacity="1" />
  <rect x="335" y="296" width="280" height="10" rx="5" fill="#D5DCE6" opacity="1" />
  <rect x="335" y="322" width="230" height="10" rx="5" fill="#D5DCE6" opacity="1" />
  <rect x="335" y="348" width="330" height="10" rx="5" fill="#D5DCE6" opacity="1" />
  <rect x="335" y="374" width="280" height="10" rx="5" fill="#D5DCE6" opacity="1" />
  <rect x="335" y="400" width="230" height="10" rx="5" fill="#D5DCE6" opacity="1" />
  <rect x="335" y="540" width="38" height="60" rx="6" fill="#1E78BD" opacity="0.35" />
  <rect x="393" y="500" width="38" height="100" rx="6" fill="#1E78BD" opacity="0.48" />
  <rect x="451" y="520" width="38" height="80" rx="6" fill="#1E78BD" opacity="0.61" />
  <rect x="509" y="470" width="38" height="130" rx="6" fill="#1E78BD" opacity="0.74" />
  <rect x="567" y="490" width="38" height="110" rx="6" fill="#1E78BD" opacity="0.87" />
  </g>
</svg>`,
  office2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0f2d33"/>
      <stop offset="1" stop-color="#1e5a5f"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#bg)"/>
  <g transform="rotate(-4 500 355)">
  <rect x="300" y="70" width="400" height="570" rx="14" fill="#fff" opacity="1" />
  <rect x="300" y="70" width="400" height="150" rx="14" fill="#0E9F8E" opacity="1" />
  <rect x="300" y="190" width="400" height="30" rx="0" fill="#0E9F8E" opacity="1" />
  <text x="335" y="150" font-family="Helvetica,Arial,sans-serif" font-size="46" font-weight="700" fill="#fff" text-anchor="start" opacity="1">NOVA</text>
  <text x="335" y="192" font-family="Helvetica,Arial,sans-serif" font-size="18" font-weight="700" fill="#fff" text-anchor="start" opacity="0.85">Company Profile</text>
  <rect x="335" y="270" width="330" height="10" rx="5" fill="#D5DCE6" opacity="1" />
  <rect x="335" y="296" width="280" height="10" rx="5" fill="#D5DCE6" opacity="1" />
  <rect x="335" y="322" width="230" height="10" rx="5" fill="#D5DCE6" opacity="1" />
  <rect x="335" y="348" width="330" height="10" rx="5" fill="#D5DCE6" opacity="1" />
  <rect x="335" y="374" width="280" height="10" rx="5" fill="#D5DCE6" opacity="1" />
  <rect x="335" y="400" width="230" height="10" rx="5" fill="#D5DCE6" opacity="1" />
  <rect x="335" y="540" width="38" height="60" rx="6" fill="#0E9F8E" opacity="0.35" />
  <rect x="393" y="500" width="38" height="100" rx="6" fill="#0E9F8E" opacity="0.48" />
  <rect x="451" y="520" width="38" height="80" rx="6" fill="#0E9F8E" opacity="0.61" />
  <rect x="509" y="470" width="38" height="130" rx="6" fill="#0E9F8E" opacity="0.74" />
  <rect x="567" y="490" width="38" height="110" rx="6" fill="#0E9F8E" opacity="0.87" />
  </g>
</svg>`,
  studio1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0b1020"/>
      <stop offset="1" stop-color="#182036"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#bg)"/>
  <defs>
    <linearGradient id="sk" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#2b1d4a"/>
      <stop offset="1" stop-color="#ff7a45"/>
    </linearGradient>
    <clipPath id="cl"><rect x="120" y="70" width="960" height="540" rx="18"/></clipPath>
  </defs>
  <g clip-path="url(#cl)">
    <rect x="120" y="70" width="960" height="540" rx="0" fill="url(#sk)" opacity="1" />
    <circle cx="780" cy="340" r="72" fill="#ffd166"/>
    <circle cx="780" cy="340" r="130" fill="#ffd166" opacity=".18"/>
    <polygon points="120,610 330,390 480,510 650,340 860,545 1080,420 1080,610" fill="#0b1020" opacity=".88"/>
  </g>
  <circle cx="600" cy="330" r="50" fill="#fff" opacity=".92"/>
  <polygon points="585,306 585,354 626,330" fill="#0b1020"/>
  <rect x="120" y="640" width="960" height="76" rx="12" fill="#000" opacity="0.45" />
  <rect x="140" y="656" width="130" height="44" rx="8" fill="#ffd166" opacity="0.9" /><rect x="290" y="656" width="110" height="44" rx="8" fill="#4DA3F0" opacity="0.9" /><rect x="440" y="656" width="140" height="44" rx="8" fill="#2b1d4a" opacity="0.9" /><rect x="590" y="656" width="120" height="44" rx="8" fill="#ffd166" opacity="0.9" /><rect x="740" y="656" width="130" height="44" rx="8" fill="#7FC0FF" opacity="0.9" /><rect x="890" y="656" width="110" height="44" rx="8" fill="#2b1d4a" opacity="0.9" />
  <rect x="560" y="632" width="4" height="92" rx="2" fill="#fff" opacity="1" />
</svg>`,
  studio2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0b1020"/>
      <stop offset="1" stop-color="#182036"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#bg)"/>
  <defs>
    <linearGradient id="sk" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#12305a"/>
      <stop offset="1" stop-color="#4dc3ff"/>
    </linearGradient>
    <clipPath id="cl"><rect x="120" y="70" width="960" height="540" rx="18"/></clipPath>
  </defs>
  <g clip-path="url(#cl)">
    <rect x="120" y="70" width="960" height="540" rx="0" fill="url(#sk)" opacity="1" />
    <circle cx="780" cy="340" r="72" fill="#e8f6ff"/>
    <circle cx="780" cy="340" r="130" fill="#e8f6ff" opacity=".18"/>
    <polygon points="120,610 330,390 480,510 650,340 860,545 1080,420 1080,610" fill="#0b1020" opacity=".88"/>
  </g>
  <circle cx="600" cy="330" r="50" fill="#fff" opacity=".92"/>
  <polygon points="585,306 585,354 626,330" fill="#0b1020"/>
  <rect x="120" y="640" width="960" height="76" rx="12" fill="#000" opacity="0.45" />
  <rect x="140" y="656" width="130" height="44" rx="8" fill="#e8f6ff" opacity="0.9" /><rect x="290" y="656" width="110" height="44" rx="8" fill="#4DA3F0" opacity="0.9" /><rect x="440" y="656" width="140" height="44" rx="8" fill="#12305a" opacity="0.9" /><rect x="590" y="656" width="120" height="44" rx="8" fill="#e8f6ff" opacity="0.9" /><rect x="740" y="656" width="130" height="44" rx="8" fill="#7FC0FF" opacity="0.9" /><rect x="890" y="656" width="110" height="44" rx="8" fill="#12305a" opacity="0.9" />
  <rect x="560" y="632" width="4" height="92" rx="2" fill="#fff" opacity="1" />
</svg>`,
  art1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#F4F7FB"/>
      <stop offset="1" stop-color="#DDE8F4"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#bg)"/>
  <rect x="90" y="90" width="470" height="570" rx="24" fill="#fff" opacity="1" />
  <circle cx="290" cy="290" r="95" fill="#1E78BD"/><circle cx="360" cy="290" r="95" fill="#7FC0FF" opacity=".85"/>
  <text x="325" y="470" font-family="Helvetica,Arial,sans-serif" font-size="50" font-weight="800" fill="#1E2A3B" text-anchor="middle" opacity="1">Lumen</text>
  <text x="325" y="510" font-family="Helvetica,Arial,sans-serif" font-size="18" font-weight="600" fill="#64748B" text-anchor="middle" opacity="1">Brand identity</text>
  <rect x="610" y="110" width="100" height="150" rx="16" fill="#1E78BD" opacity="1" />
  <rect x="728" y="110" width="100" height="150" rx="16" fill="#7FC0FF" opacity="1" />
  <rect x="846" y="110" width="100" height="150" rx="16" fill="#1E2A3B" opacity="1" />
  <rect x="964" y="110" width="100" height="150" rx="16" fill="#E5EAF1" opacity="1" />
  <rect x="610" y="290" width="460" height="190" rx="22" fill="#fff" opacity="1" />
  <text x="650" y="420" font-family="Helvetica,Arial,sans-serif" font-size="120" font-weight="800" fill="#1E2A3B" text-anchor="start" opacity="1">Aa</text>
  <text x="860" y="360" font-family="Helvetica,Arial,sans-serif" font-size="20" font-weight="700" fill="#64748B" text-anchor="start" opacity="1">Typography</text>
  <text x="860" y="400" font-family="Helvetica,Arial,sans-serif" font-size="16" font-weight="600" fill="#94A3B8" text-anchor="start" opacity="1">Regular · Bold · Black</text>
  <rect x="610" y="510" width="210" height="130" rx="14" fill="#1E78BD" opacity="1" transform="rotate(-5 715 575)"/><text transform="rotate(-5 715 575)" x="640" y="590" font-family="Helvetica,Arial,sans-serif" font-size="26" font-weight="800" fill="#fff">Lumen</text>
  <rect x="850" y="520" width="220" height="130" rx="14" fill="#fff" opacity="1" />
  <circle cx="890" cy="560" r="16" fill="#7FC0FF"/>
  <rect x="880" y="600" width="140" height="10" rx="5" fill="#D5DCE6" opacity="1" />
  <rect x="880" y="620" width="100" height="10" rx="5" fill="#D5DCE6" opacity="1" />
</svg>`,
  art2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#FBF3E8"/>
      <stop offset="1" stop-color="#F2E1C8"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#bg)"/>
  <rect x="90" y="90" width="470" height="570" rx="24" fill="#fff" opacity="1" />
  <circle cx="290" cy="290" r="95" fill="#C8552B"/><circle cx="360" cy="290" r="95" fill="#F2B84B" opacity=".85"/>
  <text x="325" y="470" font-family="Helvetica,Arial,sans-serif" font-size="50" font-weight="800" fill="#1E2A3B" text-anchor="middle" opacity="1">Saffra</text>
  <text x="325" y="510" font-family="Helvetica,Arial,sans-serif" font-size="18" font-weight="600" fill="#64748B" text-anchor="middle" opacity="1">Brand identity</text>
  <rect x="610" y="110" width="100" height="150" rx="16" fill="#C8552B" opacity="1" />
  <rect x="728" y="110" width="100" height="150" rx="16" fill="#F2B84B" opacity="1" />
  <rect x="846" y="110" width="100" height="150" rx="16" fill="#1E2A3B" opacity="1" />
  <rect x="964" y="110" width="100" height="150" rx="16" fill="#E5EAF1" opacity="1" />
  <rect x="610" y="290" width="460" height="190" rx="22" fill="#fff" opacity="1" />
  <text x="650" y="420" font-family="Helvetica,Arial,sans-serif" font-size="120" font-weight="800" fill="#1E2A3B" text-anchor="start" opacity="1">Aa</text>
  <text x="860" y="360" font-family="Helvetica,Arial,sans-serif" font-size="20" font-weight="700" fill="#64748B" text-anchor="start" opacity="1">Typography</text>
  <text x="860" y="400" font-family="Helvetica,Arial,sans-serif" font-size="16" font-weight="600" fill="#94A3B8" text-anchor="start" opacity="1">Regular · Bold · Black</text>
  <rect x="610" y="510" width="210" height="130" rx="14" fill="#C8552B" opacity="1" transform="rotate(-5 715 575)"/><text transform="rotate(-5 715 575)" x="640" y="590" font-family="Helvetica,Arial,sans-serif" font-size="26" font-weight="800" fill="#fff">Saffra</text>
  <rect x="850" y="520" width="220" height="130" rx="14" fill="#fff" opacity="1" />
  <circle cx="890" cy="560" r="16" fill="#F2B84B"/>
  <rect x="880" y="600" width="140" height="10" rx="5" fill="#D5DCE6" opacity="1" />
  <rect x="880" y="620" width="100" height="10" rx="5" fill="#D5DCE6" opacity="1" />
</svg>`,
  digital1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#eef4fb"/>
      <stop offset="1" stop-color="#c9def5"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#bg)"/>
  <rect x="110" y="80" width="980" height="590" rx="20" fill="#fff" opacity="1" />
  <rect x="110" y="80" width="980" height="56" rx="20" fill="#EEF2F7" opacity="1" />
  <rect x="110" y="110" width="980" height="26" rx="0" fill="#EEF2F7" opacity="1" />
  <circle cx="146" cy="108" r="8" fill="#F87171"/>
  <circle cx="172" cy="108" r="8" fill="#FBBF24"/>
  <circle cx="198" cy="108" r="8" fill="#34D399"/>
  <rect x="330" y="94" width="520" height="28" rx="14" fill="#fff" opacity="1" />
  <rect x="110" y="136" width="980" height="250" rx="0" fill="#1E78BD" opacity="0.1" />
  <text x="170" y="240" font-family="Helvetica,Arial,sans-serif" font-size="52" font-weight="800" fill="#1E2A3B" text-anchor="start" opacity="1">Orbit Studio</text>
  <rect x="170" y="272" width="360" height="12" rx="6" fill="#B8C4D3" opacity="1" />
  <rect x="170" y="296" width="280" height="12" rx="6" fill="#B8C4D3" opacity="1" />
  <rect x="170" y="330" width="170" height="48" rx="24" fill="#1E78BD" opacity="1" />
  <text x="255" y="362" font-family="Helvetica,Arial,sans-serif" font-size="18" font-weight="700" fill="#fff" text-anchor="middle" opacity="1">Get started</text>
  <circle cx="900" cy="262" r="96" fill="#1E78BD"/><circle cx="968" cy="306" r="62" fill="#1E78BD" opacity=".35"/>
  <rect x="150" y="420" width="280" height="220" rx="16" fill="#F3F6FA" opacity="1" />
  <circle cx="190" cy="470" r="22" fill="#1E78BD" opacity="0.5"/>
  <rect x="180" y="520" width="200" height="12" rx="6" fill="#C6D0DC" opacity="1" />
  <rect x="180" y="548" width="150" height="12" rx="6" fill="#C6D0DC" opacity="1" />
  <rect x="180" y="590" width="90" height="26" rx="13" fill="#1E78BD" opacity="0.85" />
  <rect x="460" y="420" width="280" height="220" rx="16" fill="#F3F6FA" opacity="1" />
  <circle cx="500" cy="470" r="22" fill="#1E78BD" opacity="0.7"/>
  <rect x="490" y="520" width="200" height="12" rx="6" fill="#C6D0DC" opacity="1" />
  <rect x="490" y="548" width="150" height="12" rx="6" fill="#C6D0DC" opacity="1" />
  <rect x="490" y="590" width="90" height="26" rx="13" fill="#1E78BD" opacity="0.85" />
  <rect x="770" y="420" width="280" height="220" rx="16" fill="#F3F6FA" opacity="1" />
  <circle cx="810" cy="470" r="22" fill="#1E78BD" opacity="0.9"/>
  <rect x="800" y="520" width="200" height="12" rx="6" fill="#C6D0DC" opacity="1" />
  <rect x="800" y="548" width="150" height="12" rx="6" fill="#C6D0DC" opacity="1" />
  <rect x="800" y="590" width="90" height="26" rx="13" fill="#1E78BD" opacity="0.85" />
</svg>`,
  digital2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#e9f7f4"/>
      <stop offset="1" stop-color="#c3ebe4"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#bg)"/>
  <rect x="110" y="80" width="980" height="590" rx="20" fill="#fff" opacity="1" />
  <rect x="110" y="80" width="980" height="56" rx="20" fill="#EEF2F7" opacity="1" />
  <rect x="110" y="110" width="980" height="26" rx="0" fill="#EEF2F7" opacity="1" />
  <circle cx="146" cy="108" r="8" fill="#F87171"/>
  <circle cx="172" cy="108" r="8" fill="#FBBF24"/>
  <circle cx="198" cy="108" r="8" fill="#34D399"/>
  <rect x="330" y="94" width="520" height="28" rx="14" fill="#fff" opacity="1" />
  <rect x="110" y="136" width="980" height="250" rx="0" fill="#0E9F8E" opacity="0.1" />
  <text x="170" y="240" font-family="Helvetica,Arial,sans-serif" font-size="52" font-weight="800" fill="#1E2A3B" text-anchor="start" opacity="1">Verde Studio</text>
  <rect x="170" y="272" width="360" height="12" rx="6" fill="#B8C4D3" opacity="1" />
  <rect x="170" y="296" width="280" height="12" rx="6" fill="#B8C4D3" opacity="1" />
  <rect x="170" y="330" width="170" height="48" rx="24" fill="#0E9F8E" opacity="1" />
  <text x="255" y="362" font-family="Helvetica,Arial,sans-serif" font-size="18" font-weight="700" fill="#fff" text-anchor="middle" opacity="1">Get started</text>
  <circle cx="900" cy="262" r="96" fill="#0E9F8E"/><circle cx="968" cy="306" r="62" fill="#0E9F8E" opacity=".35"/>
  <rect x="150" y="420" width="280" height="220" rx="16" fill="#F3F6FA" opacity="1" />
  <circle cx="190" cy="470" r="22" fill="#0E9F8E" opacity="0.5"/>
  <rect x="180" y="520" width="200" height="12" rx="6" fill="#C6D0DC" opacity="1" />
  <rect x="180" y="548" width="150" height="12" rx="6" fill="#C6D0DC" opacity="1" />
  <rect x="180" y="590" width="90" height="26" rx="13" fill="#0E9F8E" opacity="0.85" />
  <rect x="460" y="420" width="280" height="220" rx="16" fill="#F3F6FA" opacity="1" />
  <circle cx="500" cy="470" r="22" fill="#0E9F8E" opacity="0.7"/>
  <rect x="490" y="520" width="200" height="12" rx="6" fill="#C6D0DC" opacity="1" />
  <rect x="490" y="548" width="150" height="12" rx="6" fill="#C6D0DC" opacity="1" />
  <rect x="490" y="590" width="90" height="26" rx="13" fill="#0E9F8E" opacity="0.85" />
  <rect x="770" y="420" width="280" height="220" rx="16" fill="#F3F6FA" opacity="1" />
  <circle cx="810" cy="470" r="22" fill="#0E9F8E" opacity="0.9"/>
  <rect x="800" y="520" width="200" height="12" rx="6" fill="#C6D0DC" opacity="1" />
  <rect x="800" y="548" width="150" height="12" rx="6" fill="#C6D0DC" opacity="1" />
  <rect x="800" y="590" width="90" height="26" rx="13" fill="#0E9F8E" opacity="0.85" />
</svg>`,
  print1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#dfe8f3"/>
      <stop offset="1" stop-color="#b9cde3"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#bg)"/>
  <ellipse cx="560" cy="650" rx="290" ry="24" fill="#000" opacity=".22"/>
  <polygon points="330,270 460,215 800,215 670,270" fill="#1E2A3B"/><polygon points="330,270 460,215 800,215 670,270" fill="#fff" opacity=".28"/>
  <polygon points="670,270 800,215 800,555 670,610" fill="#1E2A3B"/><polygon points="670,270 800,215 800,555 670,610" fill="#000" opacity=".28"/>
  <rect x="330" y="270" width="340" height="340" rx="0" fill="#1E2A3B" opacity="1" />
  <rect x="330" y="470" width="340" height="8" rx="0" fill="#fff" opacity="0.55" />
  <text x="500" y="388" font-family="Helvetica,Arial,sans-serif" font-size="58" font-weight="800" fill="#fff" text-anchor="middle" opacity="1">Elan</text>
  <text x="500" y="432" font-family="Helvetica,Arial,sans-serif" font-size="18" font-weight="600" fill="#fff" text-anchor="middle" opacity="0.8">PREMIUM PACKAGING</text>
  <circle cx="500" cy="540" r="26" fill="none" stroke="#fff" stroke-width="3" opacity=".7"/>
  <rect x="90" y="430" width="210" height="124" rx="10" fill="#fff" opacity="1" transform="rotate(-9 195 490)"/>
  <rect x="110" y="470" width="210" height="124" rx="10" fill="#1E2A3B" opacity="1" transform="rotate(-3 215 530)"/>
  <text transform="rotate(-3 215 530)" x="135" y="540" font-family="Helvetica,Arial,sans-serif" font-size="26" font-weight="800" fill="#fff">Elan</text>
</svg>`,
  print2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#fbeee1"/>
      <stop offset="1" stop-color="#f3d3b5"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#bg)"/>
  <ellipse cx="560" cy="650" rx="290" ry="24" fill="#000" opacity=".22"/>
  <polygon points="330,270 460,215 800,215 670,270" fill="#C8552B"/><polygon points="330,270 460,215 800,215 670,270" fill="#fff" opacity=".28"/>
  <polygon points="670,270 800,215 800,555 670,610" fill="#C8552B"/><polygon points="670,270 800,215 800,555 670,610" fill="#000" opacity=".28"/>
  <rect x="330" y="270" width="340" height="340" rx="0" fill="#C8552B" opacity="1" />
  <rect x="330" y="470" width="340" height="8" rx="0" fill="#fff" opacity="0.55" />
  <text x="500" y="388" font-family="Helvetica,Arial,sans-serif" font-size="58" font-weight="800" fill="#fff" text-anchor="middle" opacity="1">Miel</text>
  <text x="500" y="432" font-family="Helvetica,Arial,sans-serif" font-size="18" font-weight="600" fill="#fff" text-anchor="middle" opacity="0.8">PREMIUM PACKAGING</text>
  <circle cx="500" cy="540" r="26" fill="none" stroke="#fff" stroke-width="3" opacity=".7"/>
  <rect x="90" y="430" width="210" height="124" rx="10" fill="#fff" opacity="1" transform="rotate(-9 195 490)"/>
  <rect x="110" y="470" width="210" height="124" rx="10" fill="#C8552B" opacity="1" transform="rotate(-3 215 530)"/>
  <text transform="rotate(-3 215 530)" x="135" y="540" font-family="Helvetica,Arial,sans-serif" font-size="26" font-weight="800" fill="#fff">Miel</text>
</svg>`
};

// يحوّل نص SVG إلى رابط صورة صالح لعنصر <img> (بدون أي ترميز يدوي)
const _svgUrlCache = {};
function svgUrl(key) {
    if (_svgUrlCache[key]) return _svgUrlCache[key];
    const blob = new Blob([CONCEPT_SVGS[key]], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    _svgUrlCache[key] = url;
    return url;
}

// ==========================================
// وكالة نورمال الإبداعية - النظام الكامل والمنظم (5 أقسام مع الترجمة الفورية)
// ==========================================

const servicesData = {
    'Digital': {
        titleAr: 'نورمال ديجيتال',
        titleEn: 'Normal Digital',
        titleFr: 'Normal Digital',
        items: [
            { ar: 'إدارة حسابات التواصل', en: 'Social Media Management', fr: 'Gestion des réseaux sociaux', price: '1300' },
            { ar: 'إطلاق الحملات الإعلانية', en: 'Ad Campaigns Launch', fr: 'Lancement publicitaire', price: '500' },
            { ar: 'كتابة المحتوى والسيناريو', en: 'Content & Scriptwriting', fr: 'Rédaction de contenu', price: '150' },
            { ar: 'إنشاء المواقع والمتاجر', en: 'Web & E-Commerce Dev', fr: 'Création de sites', price: '1000' },
            { ar: 'تحسين محركات البحث SEO', en: 'SEO Optimization', fr: 'Optimisation SEO', price: '700' },
            { ar: 'استراتيجية التسويق الرقمي', en: 'Digital Marketing Strategy', fr: 'Stratégie digitale', price: '800' },
            { ar: 'تحليل البيانات والتقارير', en: 'Data Analytics & Reports', fr: 'Analyse de données', price: '400' },
            { ar: 'التسويق عبر البريد', en: 'Email Marketing', fr: 'Email marketing', price: '300' },
            { ar: 'إدارة حملات المشاهير', en: 'Influencer Campaigns', fr: 'Campagnes d’influenceurs', price: '1000' },
            { ar: 'إعادة بناء الهوية الرقمية', en: 'Rebranding Strategy', fr: 'Stratégie de rebranding', price: '900' },
            { ar: 'استشارات تسويقية', en: 'Marketing Consultation', fr: 'Conseil en marketing', price: '300' },
            { ar: 'إدارة سمعة العلامة التجارية', en: 'Brand Reputation Mgmt', fr: 'Gestion de réputation', price: '600' },
            { ar: 'ربط البوابات والأدوات', en: 'API & Tool Integration', fr: 'Intégration d’API', price: '500' },
            { ar: 'إدارة الحملات التفاعلية', en: 'Interactive Campaigns', fr: 'Campagnes interactives', price: '600' },
            { ar: 'إعداد خطط نشر المحتوى', en: 'Content Calendar Planning', fr: 'Planification', price: '250' }
        ]
    },
    'Studio': {
        titleAr: 'نورمال ستوديو',
        titleEn: 'Normal Studio',
        titleFr: 'Normal Studio',
        items: [
            { ar: 'مونتاج وتعديل الفيديو', en: 'Video Editing', fr: 'Montage vidéo', price: '300' },
            { ar: 'تصحيح وتدرج الألوان', en: 'Color Grading', fr: 'Étalonnage couleur', price: '225' },
            { ar: 'إنتاج فيديو إعلاني كامل', en: 'Commercial Video Production', fr: 'Production commerciale', price: '950' },
            { ar: 'المؤثرات البصرية Visual Effects', en: 'VFX & Visual Effects', fr: 'Effets visuels (VFX)', price: '450' },
            { ar: 'تصوير منتجات ميداني', en: 'Product Photography', fr: 'Photographie produits', price: '850' },
            { ar: 'المونتاج السينمائي', en: 'Cinematic Editing', fr: 'Montage cinématographique', price: '600' },
            { ar: 'المؤثرات الصوتية والهندسة', en: 'Sound Design & Engineering', fr: 'Design sonore', price: '250' },
            { ar: 'تصوير وتسجيل ستوديو', en: 'Studio Shooting & Recording', fr: 'Tournage studio', price: '950' },
            { ar: 'إنتاج فيديو موشن جرافيك', en: 'Motion Graphics Video', fr: 'Motion Design', price: '550' },
            { ar: 'مونتاج الريلز والشورتس', en: 'Reels & Shorts Editing', fr: 'Montage Reels', price: '150' },
            { ar: 'تأجير معدات إضاءة واستوديو', en: 'Studio Equipment Rental', fr: 'Location d’équipement', price: '700' },
            { ar: 'إخراج كليبات وإعلانات', en: 'Directing Services', fr: 'Réalisation', price: '1450' },
            { ar: 'تغطية الفعاليات والمؤتمرات', en: 'Event Coverage', fr: 'Couverture d’événements', price: '1200' },
            { ar: 'البث المباشر الاحترافي', en: 'Professional Live Streaming', fr: 'Streaming en direct', price: '1100' },
            { ar: 'معالجة ومكساج الصوت', en: 'Audio Post-Production', fr: 'Post-production audio', price: '300' }
        ]
    },
    'Art': {
        titleAr: 'نورمال آرت',
        titleEn: 'Normal Art',
        titleFr: 'Normal Art',
        items: [
            { ar: 'تصميم هوية بصرية كاملة', en: 'Full Brand Identity Design', fr: 'Design d’identité visuelle', price: '1100' },
            { ar: 'تصميم شعار Logo Design', en: 'Logo Design', fr: 'Conception de logo', price: '450' },
            { ar: 'تصاميم السوشيال ميديا', en: 'Social Media Designs', fr: 'Design réseaux sociaux', price: '100' },
            { ar: 'تصميم البكجات والتغليف', en: 'Packaging Design', fr: 'Design d’emballage', price: '550' },
            { ar: 'تصميم الملف التعريفي Profile', en: 'Company Profile Design', fr: 'Profile d’entreprise', price: '500' },
            { ar: 'رسم واختيار الشخصيات', en: 'Character Design', fr: 'Design de personnages', price: '600' },
            { ar: 'تصميم العروض التقديمية', en: 'Presentation Deck Design', fr: 'Design de présentation', price: '400' },
            { ar: 'تصميم لوحات وإعلانات', en: 'Banner & Sign Design', fr: 'Design de bannières', price: '300' },
            { ar: 'تصميم المطبوعات والكتالوجات', en: 'Brochure & Catalog Design', fr: 'Design de brochures', price: '400' },
            { ar: 'تصميم واجهات المستخدم UI/UX', en: 'UI/UX Interface Design', fr: 'UI/UX Design', price: '1000' },
            { ar: 'تصميم القوائم والمنيو', en: 'Menu Design', fr: 'Design de menu', price: '275' },
            { ar: 'تصميم كروت الأعمال', en: 'Business Cards Design', fr: 'Cartes de visite', price: '125' },
            { ar: 'تطوير ودليل العلامة التجارية', en: 'Brand Guidelines Manual', fr: 'Guide de marque', price: '700' },
            { ar: 'تصميم ملصقات واستيكرات', en: 'Sticker Design', fr: 'Design d’autocollants', price: '100' },
            { ar: 'تعديل ومعالجة الصور', en: 'Photo Retouching', fr: 'Retouche photo', price: '75' }
        ]
    },
    'Print': {
        titleAr: 'نورمال برينت',
        titleEn: 'Normal Print',
        titleFr: 'Normal Print',
        items: [
            { ar: 'طباعة كروت وأوراق رسمية', en: 'Business Cards Printing', fr: 'Impression cartes de visite', price: '100' },
            { ar: 'طباعة التغليف والأكياس', en: 'Packaging Printing', fr: 'Impression d’emballages', price: '275' },
            { ar: 'طباعة الهدايا الدعائية', en: 'Promo Gifts Printing', fr: 'Cadeaux promotionnels', price: '175' },
            { ar: 'طباعة اللوحات الإعلانية', en: 'Signboards Printing', fr: 'Impression d’enseignes', price: '225' },
            { ar: 'طباعة البروشورات والمنشورات', en: 'Flyers Printing', fr: 'Impression de flyers', price: '125' },
            { ar: 'طباعة الكتب والكتالوجات', en: 'Catalog Printing', fr: 'Impression de catalogues', price: '400' },
            { ar: 'طباعة المنسوجات والزي', en: 'Apparel & Uniform Printing', fr: 'Impression textile', price: '200' },
            { ar: 'طباعة الاستيكرات والملصقات', en: 'Stickers Roll Printing', fr: 'Impression d’autocollants', price: '100' },
            { ar: 'طباعة العلب الكرتونية', en: 'Carton Box Printing', fr: 'Impression de boîtes', price: '350' },
            { ar: 'طباعة الأجنحة والمعارض', en: 'Exhibition Booth Printing', fr: 'Impression pour stands', price: '900' },
            { ar: 'طباعة التقاويم والمذكرات', en: 'Diaries Printing', fr: 'Impression d’agendas', price: '175' },
            { ar: 'طباعة المنيو البلاستيكي', en: 'Menu Board Printing', fr: 'Impression de menus', price: '125' },
            { ar: 'طباعة الأظرف والوسائل', en: 'Envelope Printing', fr: 'Impression d’enveloppes', price: '100' },
            { ar: 'طباعة الأوراق الذهبية', en: 'Gold Foil Printing', fr: 'Impression dorure', price: '275' },
            { ar: 'طباعة الأعلام والرولات Roll-up', en: 'Roll-up Banners Printing', fr: 'Impression de Roll-up', price: '200' }
        ]
    },
    'Office': {
        titleAr: 'نورمال أوفيس',
        titleEn: 'Normal Office',
        titleFr: 'Normal Office',
        items: [
            { ar: 'تصميم السيرة الذاتية CV الاحترافية', en: 'Professional CV Design', fr: 'Design de CV professionnel', price: '150' },
            { ar: 'تصميم عروض الأسعار للشركات Quotation', en: 'Corporate Quotation Design', fr: 'Design de devis d’entreprise', price: '225' },
            { ar: 'إعداد الملف التعريفي Company Profile', en: 'Company Profile Creation', fr: 'Création de profil d’entreprise', price: '350' },
            { ar: 'كتابة الخطابات الرسمية والإدارية', en: 'Official Administrative Letters', fr: 'Lettres administratives officielles', price: '100' },
            { ar: 'ترجمة المستندات والوثائق الرسمية', en: 'Document Translation Services', fr: 'Services de traduction de documents', price: '150' },
            { ar: 'تنسيق وعمل العروض التقديمية PPT', en: 'Presentation Formatting (PPT)', fr: 'Mise en page de présentations', price: '225' },
            { ar: 'صياغة العقود واتفاقيات العمل', en: 'Contracts & Work Agreements', fr: 'Rédaction de contrats de travail', price: '450' },
            { ar: 'تفريغ النصوص والملفات الصوتية', en: 'Transcription & Typing Services', fr: 'Services de transcription', price: '100' },
            { ar: 'إعداد دراسات الجدوى المبسطة', en: 'Simplified Feasibility Studies', fr: 'Études de faisabilité simplifiées', price: '650' },
            { ar: 'إعداد التقارير المالية والإدارية', en: 'Financial & Administrative Reports', fr: 'Rapports financiers et administratifs', price: '300' },
            { ar: 'تصميم النماذج والفواتير المعتمدة', en: 'Invoice & Form Templates Design', fr: 'Design de factures et formulaires', price: '125' },
            { ar: 'كتابة المحتوى الإداري للمراسلات', en: 'Business Correspondence Content', fr: 'Contenu de correspondance d’affaires', price: '125' },
            { ar: 'تنظيم وتدقيق الجداول الإحصائية Excel', en: 'Excel Data Organization & Sheets', fr: 'Organisation de données Excel', price: '175' },
            { ar: 'إعداد خطط العمل التشغيلية Operations', en: 'Operational Business Plans', fr: 'Plans d’affaires opérationnels', price: '400' },
            { ar: 'خدمة أعمال مكتبية أخرى (مخصصة)', en: 'Other Custom Office Services', fr: 'Autres services de bureau personnalisés', price: '175' }
        ]
    },
};

// ==========================================
// بيانات آراء العملاء (تحكم كامل: أضف/عدّل/احذف أي تقييم من هنا مباشرة)
// ⚠️ هذه بيانات تجريبية/نموذجية فقط — استبدلها بتقييمات عملائك الحقيقية قبل النشر.
// نظرًا لأن الموقع ثابت (Static) بدون قاعدة بيانات، فإن أبسط وأدق طريقة للتحكم بما
// يظهر (بما في ذلك حذف أي تقييم سلبي) هي تعديل هذه القائمة مباشرة بدل نظام تعليقات حي.
// ==========================================
const testimonialsData = [
    { sample: true, nameAr: "عميل من قطاع التجزئة", nameEn: "Retail client", nameFr: "Client du commerce", roleAr: '', roleEn: '', roleFr: '', rating: 5,
      textAr: "تنفيذ سريع وتصاميم رفعت مستوى متجرنا بشكل واضح.", textEn: "Fast delivery and designs that clearly lifted our store.", textFr: "Livraison rapide et des designs qui ont élevé notre boutique." },
    { sample: true, nameAr: "عميل من قطاع المطاعم", nameEn: "Restaurant client", nameFr: "Client restauration", roleAr: '', roleEn: '', roleFr: '', rating: 5,
      textAr: "المنيو والهوية الجديدة لفتت انتباه الزبائن من أول أسبوع.", textEn: "The new menu and identity caught customers’ attention from week one.", textFr: "Le nouveau menu et l’identité ont séduit dès la première semaine." },
    { sample: true, nameAr: "عميل من قطاع العقارات", nameEn: "Real-estate client", nameFr: "Client immobilier", roleAr: '', roleEn: '', roleFr: '', rating: 4,
      textAr: "ملف تعريفي أنيق ساعدنا في عرض مشاريعنا بثقة.", textEn: "An elegant profile that helped us present our projects with confidence.", textFr: "Un profil élégant pour présenter nos projets avec confiance." },
    { sample: true, nameAr: "صاحب شركة ناشئة", nameEn: "Startup founder", nameFr: "Fondateur de start-up", roleAr: '', roleEn: '', roleFr: '', rating: 5,
      textAr: "فريق متفاهم قدّم لنا موقعًا وهوية متكاملة في وقت قياسي.", textEn: "A responsive team that delivered a site and identity in record time.", textFr: "Une équipe réactive : site et identité livrés en un temps record." },
    { sample: true, nameAr: "عميل من التجارة الإلكترونية", nameEn: "E-commerce client", nameFr: "Client e-commerce", roleAr: '', roleEn: '', roleFr: '', rating: 5,
      textAr: "حملاتنا الإعلانية تحسنت نتائجها بعد التعاون معهم.", textEn: "Our ad campaigns performed noticeably better after working with them.", textFr: "Nos campagnes publicitaires ont nettement mieux performé." },
    { sample: true, nameAr: "عميل من القطاع الصحي", nameEn: "Healthcare client", nameFr: "Client du secteur santé", roleAr: '', roleEn: '', roleFr: '', rating: 4,
      textAr: "التزام بالمواعيد وجودة طباعة ممتازة لموادنا التعريفية.", textEn: "On-time delivery and excellent print quality for our materials.", textFr: "Respect des délais et excellente qualité d’impression." }
];



function assetUrl(p) { return (window.__ASSETS && window.__ASSETS[p]) || p; }
let ownerMode = false;
let portfolioFilter = 'all';

function langKey() { return currentLang === 'ar' ? 'Ar' : (currentLang === 'en' ? 'En' : 'Fr'); }

function setPortfolioFilter(cat) {
    portfolioFilter = cat;
    renderPortfolio();
}

function renderPortfolio() {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;
    const L = langKey();
    const emptyText = { Ar: 'يُضاف مشروع قريبًا', En: 'Project coming soon', Fr: 'Projet à venir' }[L];
    const sampleLbl = { Ar: 'نموذج ببيانات وهمية', En: 'Sample · fictional data', Fr: 'Exemple · données fictives' }[L];
    const conceptLbl = { Ar: 'تصور تصميمي', En: 'Design concept', Fr: 'Concept' }[L];

    document.querySelectorAll('.filter-chip').forEach(c =>
        c.classList.toggle('active', c.getAttribute('data-cat') === portfolioFilter));

    grid.innerHTML = '';
    portfolioData.forEach((p, i) => {
        if (p.hidden && !ownerMode) return;
        if (portfolioFilter !== 'all' && p.cat !== portfolioFilter) return;
        const cat = servicesData[p.cat];
        const badge = cat ? cat['title' + L] : p.cat;
        const src = p.svgKey ? svgUrl(p.svgKey) : assetUrl(p.img);
        const playIcon = p.video ? '<span class="play-badge">▶</span>' : '';
        const media = src
            ? `<img src="${src}" alt="${p['title' + L]}" loading="lazy">${playIcon}`
            : `<div class="p-empty"><img src="logo-mark.png" alt="" class="light-only"><img src="logo-mark-dark.png" alt="" class="dark-only"><span>${emptyText}</span></div>`;
        const card = document.createElement('div');
        card.className = 'portfolio-card' + (src ? '' : ' is-empty');
        if (src) { card.onclick = () => openPortfolioItem(i); card.tabIndex = 0; card.setAttribute('role', 'button'); card.onkeydown = ev => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); openPortfolioItem(i); } }; }
        if (p.hidden) card.style.opacity = '.45';
        card.innerHTML = `
            <div class="p-card-img-wrap">${media}<span class="p-badge">${badge}</span></div>
            <div class="p-card-content"><h3>${p['title' + L]}</h3><p>${p['desc' + L]}</p></div>`;
        grid.appendChild(card);
    });
}

// ==========================================
// الوضع الصباحي / الليلي (يُحفظ اختيار الزائر)
// ==========================================
function toggleTheme() {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
}

let currentCategory = null;
let currentLang = 'ar';

function toggleLangMenu(event) {
    event.stopPropagation();
    document.querySelector('.lang-selector').classList.toggle('open');
}

document.addEventListener('click', function() {
    const selector = document.querySelector('.lang-selector');
    if (selector && selector.classList.contains('open')) {
        selector.classList.remove('open');
    }
});

function selectLanguage(lang) {
    if (currentLang === lang) return;
    currentLang = lang;

    const langNames = { 'ar': 'العربية', 'en': 'English', 'fr': 'Français' };
    document.getElementById('currentLangText').innerText = langNames[lang];

    document.querySelectorAll('.lang-option').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    document.querySelectorAll('[data-ar]').forEach(el => {
        if (currentLang === 'ar') el.innerText = el.getAttribute('data-ar');
        else if (currentLang === 'en') el.innerText = el.getAttribute('data-en');
        else if (currentLang === 'fr') el.innerText = el.getAttribute('data-fr');
    });

    document.querySelectorAll('[data-ar-placeholder]').forEach(input => {
        if (currentLang === 'ar') input.placeholder = input.getAttribute('data-ar-placeholder');
        else if (currentLang === 'en') input.placeholder = input.getAttribute('data-en-placeholder');
        else if (currentLang === 'fr') input.placeholder = input.getAttribute('data-fr-placeholder');
    });

    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('lang', currentLang);
    document.title = { ar: 'Normal Agency | وكالة نورمال الإبداعية', en: 'Normal Agency | Creative Digital Agency', fr: 'Normal Agency | Agence créative' }[currentLang];
    document.querySelectorAll('.modal-lang-btn').forEach(b => b.classList.toggle('active', b.getAttribute('data-lang') === currentLang));
    try { localStorage.setItem('lang', currentLang); } catch (e) {}

    if (document.getElementById('modal').style.display === 'flex' && currentCategory) {
        openModal(currentCategory);
    }

    renderTestimonials();
    renderPortfolio();
    renderMarquee();
}

function openModal(category) {
    currentCategory = category;
    const data = servicesData[category];
    if (!data) return;

    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImg = document.getElementById('modalWorkSample');
    const container = document.getElementById('subServicesContainer');
    
    modalTitle.innerText = currentLang === 'ar' ? data.titleAr : (currentLang === 'en' ? data.titleEn : data.titleFr);
    const sample = portfolioData.find(p => p.cat === category && (p.img || p.svgKey));
    const sampleBox = modalImg.parentElement;
    if (sample) { modalImg.src = sample.svgKey ? svgUrl(sample.svgKey) : assetUrl(sample.img); sampleBox.style.display = 'block'; }
    else { modalImg.removeAttribute('src'); sampleBox.style.display = 'none'; }

    container.innerHTML = '';
    data.items.forEach(item => {
        const btn = document.createElement('div');
        btn.className = 'sub-service-item';
        
        let itemName = item.ar;
        let priceTag = `(تبدأ من ${item.price} ر.س)`;
        
        if (currentLang === 'en') {
            itemName = item.en;
            priceTag = `(From ${item.price} SAR)`;
        } else if (currentLang === 'fr') {
            itemName = item.fr || item.en;
            priceTag = `(À partir de ${item.price} SAR)`;
        }
        
        btn.innerHTML = `<span>${itemName}</span><span class="service-price-tag">${priceTag}</span>`;
        
        btn.onclick = function() {
            document.querySelectorAll('.sub-service-item').forEach(el => el.classList.remove('selected-item'));
            btn.classList.add('selected-item');
            document.getElementById('serviceName').value = `${itemName} - [${priceTag}]`;
        };

        container.appendChild(btn);
    });

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = 'auto';
    document.getElementById('requestForm').reset();
}

// فتح مشروع من المعرض (يدعم العربية والإنجليزية والفرنسية)
function openPortfolioItem(index) {
    const p = portfolioData[index];
    const lightbox = document.getElementById('portfolioLightbox');
    const src = p && (p.svgKey ? svgUrl(p.svgKey) : assetUrl(p.img));
    if (!p || !src || !lightbox) return;
    const L = langKey();
    const img = document.getElementById('lightboxImg');
    const vid = document.getElementById('lightboxVideo');
    if (p.video) {
        vid.querySelector('source').src = assetUrl(p.video);
        vid.load();
        vid.style.display = 'block';
        const pp = vid.play(); if (pp && pp.catch) pp.catch(() => {});
        img.style.display = 'none';
    } else {
        vid.pause();
        vid.style.display = 'none';
        img.style.display = 'block';
        img.src = src;
    }
    document.getElementById('lightboxTitle').innerText = p['title' + L];
    document.getElementById('lightboxDesc').innerText = p['desc' + L];
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closePortfolioLightbox(event) {
    const lightbox = document.getElementById('portfolioLightbox');
    const vid = document.getElementById('lightboxVideo');
    if (vid) vid.pause();
    if (lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// عرض تقييمات العملاء — يعيد الرسم عند تبديل اللغة
function renderTestimonials() {
    const grid = document.getElementById('testimonialsGrid');
    if (!grid) return;
    const section = document.getElementById('testimonials-section');
    if (section) section.style.display = testimonialsData.length ? '' : 'none';

    grid.innerHTML = '';
    testimonialsData.forEach(t => {
        const name = currentLang === 'ar' ? t.nameAr : (currentLang === 'en' ? t.nameEn : t.nameFr);
        const role = currentLang === 'ar' ? t.roleAr : (currentLang === 'en' ? t.roleEn : t.roleFr);
        const text = currentLang === 'ar' ? t.textAr : (currentLang === 'en' ? t.textEn : t.textFr);
        const stars = '★'.repeat(t.rating) + '☆'.repeat(5 - t.rating);
        const sampleLbl = { Ar: 'مثال توضيحي', En: 'Sample', Fr: 'Exemple' }[langKey()];

        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <div class="testimonial-stars">${stars}${t.sample ? `<em class="sample-pill">${sampleLbl}</em>` : ''}</div>
            <p class="testimonial-text">"${text}"</p>
            <div class="testimonial-author">
                <div class="testimonial-avatar">${name.charAt(0)}</div>
                <div>
                    <div class="testimonial-name">${name}</div>
                    ${role ? `<div class="testimonial-role">${role}</div>` : ''}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function sendViaWhatsApp() {
    const service = document.getElementById('serviceName').value;
    const name = document.getElementById('clientName').value || (currentLang === 'ar' ? 'عميل جديد' : 'New Client');
    const details = document.getElementById('orderDetails').value;

    if (!service) {
        alert(currentLang === 'ar' ? 'يرجى اختيار إحدى الخدمات الفرعية أولاً' : (currentLang === 'en' ? 'Please select a sub-service first' : 'Veuillez d\'abord sélectionner un service'));
        return;
    }

    const phoneNumber = "966543262920";
    const message = `مرحباً وكالة نورمال 👋%0A%0A*طلب خدمة جديد / New Order:*%0A• *الخدمة والسعر:* ${encodeURIComponent(service)}%0A• *الاسم:* ${encodeURIComponent(name)}%0A• *التفاصيل:* ${encodeURIComponent(details)}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

// تهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    try { const sl = localStorage.getItem('lang'); if (sl && sl !== 'ar') selectLanguage(sl); } catch (e) {}
    renderMarquee();
    renderPortfolio();
    renderTestimonials();
    const yearEl = document.getElementById('footerYear');
    if (yearEl) yearEl.innerText = new Date().getFullYear();
});

// شريط أسماء الأقسام المتحرك
function renderMarquee() {
    const t = document.getElementById('marqueeTrack');
    if (!t) return;
    const L = langKey();
    const names = Object.values(servicesData).map(d => d['title' + L]);
    let out = '';
    for (let half = 0; half < 2; half++)
        for (let k = 0; k < 3; k++)
            names.forEach(n => out += `<span class="mq-item"><img src="logo-mark.png" alt="" class="light-only"><img src="logo-mark-dark.png" alt="" class="dark-only">${n}</span>`);
    t.innerHTML = out;
}

// توهج البطاقات يتبع المؤشر + شريط تقدم التمرير
document.addEventListener('mousemove', function(e) {
    const el = e.target.closest && e.target.closest('.card, .portfolio-card, .testimonial-card');
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    el.style.setProperty('--my', (e.clientY - r.top) + 'px');
});
window.addEventListener('scroll', function() {
    const bar = document.getElementById('scrollProgress');
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (bar && max > 0) bar.style.width = (window.scrollY / max * 100) + '%';
}, { passive: true });

// ==========================================
// شاركنا رأيك — يصلك الرأي على بريدك (Formspree) وأنت تقرر إضافته أو لا
// ==========================================
function openReviewModal() { document.getElementById('reviewMsg').innerText = ''; document.getElementById('reviewModal').style.display = 'flex'; document.body.style.overflow = 'hidden'; }
function closeReviewModal() { document.getElementById('reviewModal').style.display = 'none'; document.body.style.overflow = 'auto'; }
async function submitReview(e) {
    e.preventDefault();
    const f = e.target, msg = document.getElementById('reviewMsg'), L = currentLang;
    const t = { ar: ['جارٍ الإرسال...', 'شكرًا لك! سيظهر رأيك بعد مراجعته.', 'تعذّر الإرسال، حاول مرة أخرى.'], en: ['Sending...', 'Thank you! Your review will appear after it is reviewed.', 'Could not send, please try again.'], fr: ['Envoi...', 'Merci ! Votre avis apparaîtra après vérification.', 'Échec de l’envoi, réessayez.'] }[L];
    msg.innerText = t[0];
    try {
        const res = await fetch('https://formspree.io/f/xykvqjek', { method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({ Type: 'Customer review', Name: f.rName.value, Role: f.rRole.value, Rating: f.rRating.value, Comment: f.rComment.value }) });
        if (!res.ok) throw new Error('bad');
        msg.innerText = t[1]; f.reset(); setTimeout(closeReviewModal, 2600);
    } catch (err) { msg.innerText = t[2]; }
}


// ===== شريط التنقل السفلي: واتساب جاهز الرسالة + تمييز القسم الحالي =====
function openWa(kind) {
    const m = {
        consult: { ar: 'مرحباً وكالة نورمال، أرغب بحجز استشارة.', en: 'Hello Normal Agency, I would like to book a consultation.', fr: 'Bonjour Normal Agency, je souhaite réserver une consultation.' },
        support: { ar: 'مرحباً وكالة نورمال، أحتاج مساعدة من خدمة العملاء.', en: 'Hello Normal Agency, I need help from customer support.', fr: 'Bonjour Normal Agency, j’ai besoin d’aide du service client.' }
    };
    window.open('https://wa.me/966543262920?text=' + encodeURIComponent(m[kind][currentLang]), '_blank');
}
(function () {
    const map = [['home', null], ['work', 'portfolio-gallery'], ['grid', 'services-section']];
    function spy() {
        let cur = 'home';
        map.forEach(([k, id]) => {
            if (!id) return;
            const el = document.getElementById(id);
            if (el && el.getBoundingClientRect().top < window.innerHeight * 0.45) cur = k;
        });
        document.querySelectorAll('.bn-item[data-nav]').forEach(a => {
            if (a.classList.contains('bn-cta')) return;
            if (['home', 'grid', 'work'].includes(a.dataset.nav)) a.classList.toggle('active', a.dataset.nav === cur);
        });
    }
    window.addEventListener('scroll', spy, { passive: true });
    window.addEventListener('load', spy);
})();


// ===== إحصائيات حركية: عدّاد + حلقات تمتلئ عند ظهور القسم =====
(function () {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function run(card) {
        if (card.classList.contains('in')) return;
        card.classList.add('in');
        const p = parseFloat(card.dataset.p) / 100;
        const fg = card.querySelector('.ring-fg');
        const num = card.querySelector('.count');
        const target = parseInt(num.dataset.count, 10);
        requestAnimationFrame(() => { fg.style.strokeDashoffset = (326.7 * (1 - p)).toFixed(1); });
        if (reduce) { num.textContent = target; return; }
        const t0 = performance.now(), dur = 1900;
        (function tick(now) {
            const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
            num.textContent = Math.round(target * e);
            if (k < 1) requestAnimationFrame(tick);
        })(t0);
    }
    document.addEventListener('DOMContentLoaded', function () {
        const cards = document.querySelectorAll('.stat-card');
        if (!('IntersectionObserver' in window)) { cards.forEach(run); return; }
        const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } }), { threshold: 0.35 });
        cards.forEach(c => io.observe(c));
    });
})();


// ===== إحصائيات (تصميم ب): عدّاد + منحنى يُرسم + أشرطة متدرجة =====
(function () {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function countUp(el, dur) {
        const target = parseInt(el.dataset.count, 10);
        const from = parseInt(el.dataset.from || '0', 10);
        if (reduce) { el.textContent = target.toLocaleString('en'); return; }
        const t0 = performance.now();
        (function tick(now) {
            const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
            el.textContent = Math.round(from + (target - from) * e).toLocaleString('en');
            if (k < 1) requestAnimationFrame(tick);
        })(t0);
    }
    function run(panel) {
        panel.classList.add('in');
        panel.querySelectorAll('.sb-bar').forEach((b, i) => {
            setTimeout(() => { b.querySelector('.sb-fill').style.width = b.dataset.p + '%'; }, 500 + i * 180);
        });
        panel.querySelectorAll('.count').forEach(el => {
            const big = !!el.closest('.sb-big');
            countUp(el, big ? 2600 : 1800);
            if (big && !reduce) setTimeout(() => liveTick(el), 2900);
        });
    }
    document.addEventListener('DOMContentLoaded', function () {
        const panel = document.querySelector('.sb-panel');
        if (!panel) return;
        if (!('IntersectionObserver' in window)) { run(panel); return; }
        const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } }), { threshold: 0.3 });
        io.observe(panel);
    });
})();


// بعد الوصول إلى 1,000 يستمر الرقم بالارتفاع تدريجيًا دون توقف (حركة عرض فقط)
function liveTick(el) {
    let v = parseInt(el.textContent.replace(/,/g, ''), 10) || 1000;
    (function loop() {
        v += 1;
        el.textContent = v.toLocaleString('en');
        el.classList.remove('tick'); void el.offsetWidth; el.classList.add('tick');
        setTimeout(loop, 1100 + Math.random() * 1900);
    })();
}

// =====================================================================
// لوحة المالك — تظهر فقط عند فتح الموقع بالرابط: ...#owner
// التعديلات هنا تظهر لك أنت فقط؛ لتثبيتها للجميع: انسخ ملف works.js الناتج والصقه في GitHub.
// الأمان الحقيقي: لا يستطيع أحد تغيير الموقع العام إلا من يملك صلاحية الكتابة على المستودع.
// =====================================================================
(function () {
    const CATS = { Office: 'أوفيس', Studio: 'ستوديو', Art: 'آرت', Digital: 'ديجيتال', Print: 'برينت' };
    let panel = null;
    function el(tag, props, kids) {
        const e = document.createElement(tag);
        Object.keys(props || {}).forEach(k => { if (k === 'text') e.textContent = props[k]; else if (k === 'class') e.className = props[k]; else if (k.startsWith('on')) e[k] = props[k]; else e[k] = props[k]; });
        (kids || []).forEach(c => e.appendChild(c)); return e;
    }
    function field(label, obj, key, rtl) {
        const inp = el('input', { type: 'text', value: obj[key] || '', dir: rtl ? 'rtl' : 'ltr', placeholder: label });
        inp.oninput = () => { obj[key] = inp.value; renderPortfolio(); };
        return el('label', { class: 'op-f' }, [el('span', { text: label }), inp]);
    }
    function toFile() {
        return '// ملف الأعمال — يُنشأ من لوحة المالك\n// hidden: true = إخفاء العمل دون حذفه\nconst portfolioData = ' + JSON.stringify(portfolioData, null, 2) + ';\n';
    }
    function copyText(t, btn) {
        const done = () => { const o = btn.textContent; btn.textContent = 'تم النسخ ✓'; setTimeout(() => btn.textContent = o, 1800); };
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(done, () => fallback());
        else fallback();
        function fallback() { const ta = el('textarea', { value: t }); document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); done(); } catch (e) {} ta.remove(); }
    }
    function move(i, d) { const k = i + d; if (k < 0 || k >= portfolioData.length) return; const t = portfolioData[i]; portfolioData[i] = portfolioData[k]; portfolioData[k] = t; build(); renderPortfolio(); }
    function row(w, i) {
        const thumb = el('img', { src: assetUrl(w.img), alt: '' });
        const title = el('input', { type: 'text', value: w.titleAr || '', class: 'op-title' }); title.oninput = () => { w.titleAr = title.value; renderPortfolio(); };
        const cat = el('select', {}, Object.keys(CATS).map(k => { const o = el('option', { value: k, text: CATS[k] }); if (w.cat === k) o.selected = true; return o; })); cat.onchange = () => { w.cat = cat.value; renderPortfolio(); };
        const hid = el('input', { type: 'checkbox' }); hid.checked = !!w.hidden; hid.onchange = () => { w.hidden = hid.checked; build(); renderPortfolio(); };
        const det = el('div', { class: 'op-det', style: 'display:none' }, [
            field('العنوان بالإنجليزي', w, 'titleEn'), field('العنوان بالفرنسي', w, 'titleFr'),
            field('الوصف بالعربي', w, 'descAr', true), field('الوصف بالإنجليزي', w, 'descEn'), field('الوصف بالفرنسي', w, 'descFr'),
            field('مسار الغلاف (images/...)', w, 'img'), field('مسار الفيديو (videos/...) — اتركه فارغًا للصور', w, 'video')]);
        const edit = el('button', { text: '✎ تفاصيل', onclick: () => { det.style.display = det.style.display === 'none' ? 'grid' : 'none'; } });
        const del = el('button', { text: '🗑 حذف', class: 'op-del', onclick: () => { if (confirm('حذف «' + (w.titleAr || 'هذا العمل') + '» نهائيًا من القائمة؟ (يمكنك بدل الحذف أن تخفيه)')) { portfolioData.splice(i, 1); build(); renderPortfolio(); } } });
        return el('div', { class: 'op-row' + (w.hidden ? ' is-hidden' : '') }, [
            el('div', { class: 'op-main' }, [thumb, title, cat, el('label', { class: 'op-hid' }, [hid, el('span', { text: 'مخفي' })]),
                el('button', { text: '↑', onclick: () => move(i, -1) }), el('button', { text: '↓', onclick: () => move(i, 1) }), edit, del]), det]);
    }
    function build() {
        if (panel) panel.remove();
        const copyBtn = el('button', { class: 'op-primary', text: 'نسخ ملف works.js' }); copyBtn.onclick = () => copyText(toFile(), copyBtn);
        const dl = el('button', { text: 'تنزيل works.js', onclick: () => { const a = el('a', { href: URL.createObjectURL(new Blob([toFile()], { type: 'text/javascript' })), download: 'works.js' }); document.body.appendChild(a); a.click(); a.remove(); } });
        const add = el('button', { text: '＋ إضافة عمل', onclick: () => { portfolioData.unshift({ cat: 'Studio', img: 'images/new.webp', video: '', titleAr: 'عمل جديد', titleEn: 'New work', titleFr: 'Nouveau travail', descAr: '', descEn: '', descFr: '' }); build(); renderPortfolio(); } });
        const close = el('button', { text: '✕ إغلاق', onclick: () => { ownerMode = false; panel.remove(); panel = null; history.replaceState(null, '', location.pathname + location.search); renderPortfolio(); } });
        panel = el('div', { id: 'ownerPanel', class: 'owner-panel', dir: 'rtl' }, [el('div', { class: 'op-box' }, [
            el('div', { class: 'op-head' }, [el('h3', { text: 'لوحة المالك — إدارة الأعمال' }), close]),
            el('p', { class: 'op-note', text: 'عدّل أو أخفِ أو احذف أو رتّب أي عمل، وستراه يتغير في المعرض فورًا (عندك أنت فقط). ولتثبيت التغيير للجميع: اضغط «نسخ ملف works.js» ثم الصقه مكان محتوى works.js في GitHub واضغط Commit. هذا يستطيعه فقط من يملك صلاحية الكتابة على المستودع، وهو الذي يحمي موقعك.' }),
            el('div', { class: 'op-bar' }, [add, copyBtn, dl]),
            el('div', { class: 'op-list' }, portfolioData.map(row))])]);
        document.body.appendChild(panel);
    }
    function check() { if (location.hash === '#owner') { ownerMode = true; build(); renderPortfolio(); } }
    window.addEventListener('hashchange', check);
    document.addEventListener('DOMContentLoaded', check);
    document.addEventListener('keydown', ev => { if (ev.key === 'Escape') { const lb = document.getElementById('portfolioLightbox'); if (lb && lb.style.display === 'flex') closePortfolioLightbox(); } });
})();
