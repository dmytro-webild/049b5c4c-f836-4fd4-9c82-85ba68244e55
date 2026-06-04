"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SplitAbout from '@/components/sections/about/SplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="medium"
        sizing="mediumLargeSizeLargeTitles"
        background="noiseDiagonalGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Beranda",
          id: "#hero",
        },
        {
          name: "Tentang Kami",
          id: "#about",
        },
        {
          name: "Layanan",
          id: "#services",
        },
        {
          name: "Galeri",
          id: "#gallery",
        },
        {
          name: "Kontak",
          id: "#contact",
        },
      ]}
      button={{
        text: "Hubungi Sekarang",
        href: "https://wa.me/6285321155411",
      }}
      brandName="Toko Jasa Gordyn Cileunyi"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Toko Jasa Gordyn Cileunyi"
      description="Menghadirkan keindahan sekaligus fungsi dalam setiap elemen ruangan."
      testimonials={[
        {
          name: "Budi Santoso",
          handle: "@budi.interior",
          testimonial: "Gordynnya sangat mewah dan pelayanannya profesional. Sangat direkomendasikan!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/casual-smile-street-style-background-spring_1139-777.jpg",
          imageAlt: "Foto Budi Santoso",
        },
        {
          name: "Siti Aminah",
          handle: "@siti.home",
          testimonial: "Hasil pemasangan rapi, membuat rumah saya jadi lebih indah. Terima kasih Jasa Gordyn Cileunyi!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-wearing-casual-black-tshirt-standing-isolated-red-background-looking-away-side-with-smile-face-natural-expression-laughing-confident_839833-32367.jpg",
          imageAlt: "Foto Siti Aminah",
        },
        {
          name: "Yoga Pratama",
          handle: "@yoga.design",
          testimonial: "Desain custom yang sesuai keinginan, kualitas bahan tidak diragukan lagi. Puas sekali!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/surprised-young-beautiful-girl-looking-straight-ahead-wearing-white-t-shirt-isolated-pink_141793-86225.jpg",
          imageAlt: "Foto Yoga Pratama",
        },
        {
          name: "Dewi Lestari",
          handle: "@dewi.residence",
          testimonial: "Pelayanan cepat dan ramah, gordyn terpasang sempurna. Pasti akan pesan lagi!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-sexy-smiling-handsome-fashion-businessman-model-dressed-elegant-blue-suit-posing-street-background-metrosexual_158538-10421.jpg",
          imageAlt: "Foto Dewi Lestari",
        },
        {
          name: "Rian Hidayat",
          handle: "@rian.office",
          testimonial: "Untuk kantor, mereka memberikan solusi terbaik. Profesional dan tepat waktu.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-expressive-woman-posing-studio_344912-641.jpg",
          imageAlt: "Foto Rian Hidayat",
        },
      ]}
      testimonialRotationInterval={5000}
      buttons={[
        {
          text: "Hubungi Sekarang",
          href: "https://wa.me/6285321155411",
        },
        {
          text: "Lihat Layanan",
          href: "#services",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/office-desk-still-life_23-2148111390.jpg"
      imageAlt="Interior rumah mewah dengan gordyn premium"
      showDimOverlay={false}
      showBlur={true}
      textPosition="bottom"
    />
  </div>

  <div id="why-choose-us" data-section="why-choose-us">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Pelayanan Responsif & Rapih",
          description: "Layanan cepat dan sigap dengan hasil kerja rapi, presisi, dan mempercantik setiap ruangan Anda.",
          imageSrc: "http://img.b2bpic.net/free-photo/elections-concept-with-wooden-sign_23-2148499986.jpg",
          imageAlt: "Icon pelayanan responsif",
          buttonIcon: "CheckCircle",
        },
        {
          title: "Kualitas Bahan Premium",
          description: "Menggunakan bahan pilihan berkualitas tinggi yang tahan lama, lembut, dan memberikan sentuhan mewah pada setiap ruangan.",
          imageSrc: "http://img.b2bpic.net/free-vector/exclusive-benefit-line-icons-with-reward-symbol-vip-member-card-discount-voucher-sale-coupon_88138-1863.jpg",
          imageAlt: "Icon kualitas premium",
          buttonIcon: "Shield",
        },
        {
          title: "Desain Custom",
          description: "Desain menyesuaikan kebutuhan dan gaya interior Anda, menciptakan tampilan yang harmonis dan elegan.",
          imageSrc: "http://img.b2bpic.net/free-photo/interior-design-concept_23-2152014665.jpg",
          imageAlt: "Icon desain custom",
          buttonIcon: "Palette",
        },
        {
          title: "Harga Kompetitif",
          description: "Menawarkan harga terbaik tanpa mengorbankan kualitas, menjamin investasi Anda bernilai tinggi.",
          imageSrc: "http://img.b2bpic.net/free-vector/gift-voucher_23-2147971981.jpg",
          imageAlt: "Icon harga kompetitif",
          buttonIcon: "DollarSign",
        },
      ]}
      title="Mengapa Memilih Jasa Gordyn?"
      description="Solusi dekorasi interior elegan dan modern untuk rumah, kantor, dan berbagai properti Anda."
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      imagePosition="left"
      title="Tentang Kami"
      description="Kami tidak hanya menjual produk, tetapi menciptakan ruang yang menginspirasi tempat Anda merasa nyaman, bangga, dan betah setiap saat. Kami percaya bahwa setiap ruangan memiliki cerita dan keunikan tersendiri. Karena itu, layanan kami dirancang menyeluruh mulai dari penjualan hingga pemasangan profesional dengan hasil akhir yang presisi dan rapi."
      buttons={[
        {
          text: "Hubungi Sekarang",
          href: "https://wa.me/6285321155411",
        },
      ]}
      bulletPoints={[
        {
          title: "Solusi Desain Komprehensif",
          description: "Dari konsultasi hingga instalasi, kami hadir untuk setiap langkah.",
        },
        {
          title: "Tim Profesional Berpengalaman",
          description: "Pemasangan rapi dan presisi oleh tim ahli.",
        },
        {
          title: "Material Berkualitas Tinggi",
          description: "Hanya menggunakan bahan terbaik untuk daya tahan dan estetika.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/curtain-with-sunlight_1339-4051.jpg"
      imageAlt="Pemasangan gordyn profesional"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          brand: "Jasa Gordyn Cileunyi",
          name: "Gordyn Premium",
          price: "Mulai Rp 100rb/m",
          rating: 5,
          reviewCount: "120",
          imageSrc: "http://img.b2bpic.net/free-photo/luxury-velvet-couch-room-pillows_1203-4465.jpg",
          imageAlt: "Gordyn Premium",
        },
        {
          id: "p2",
          brand: "Jasa Gordyn Cileunyi",
          name: "Roller Blind",
          price: "Mulai Rp 150rb/m",
          rating: 5,
          reviewCount: "95",
          imageSrc: "http://img.b2bpic.net/free-photo/interior-cafe-with-brick-walls_53876-42534.jpg",
          imageAlt: "Roller Blind",
        },
        {
          id: "p3",
          brand: "Jasa Gordyn Cileunyi",
          name: "Vertical Blind",
          price: "Mulai Rp 130rb/m",
          rating: 5,
          reviewCount: "80",
          imageSrc: "http://img.b2bpic.net/free-photo/set-pastel-dense-fabrics-uniform-texture-choice-materials-beige-colors_169016-15232.jpg",
          imageAlt: "Vertical Blind",
        },
        {
          id: "p4",
          brand: "Jasa Gordyn Cileunyi",
          name: "Wallpaper Dinding",
          price: "Mulai Rp 75rb/m",
          rating: 5,
          reviewCount: "110",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-background-with-lines-frames_1203-1738.jpg",
          imageAlt: "Wallpaper Dinding",
        },
        {
          id: "p5",
          brand: "Jasa Gordyn Cileunyi",
          name: "Lantai Vinyl",
          price: "Mulai Rp 90rb/m",
          rating: 5,
          reviewCount: "60",
          imageSrc: "http://img.b2bpic.net/free-photo/installing-ceramic-floor-tiles-construction-site-construction-workers-workers-laying-tiles-floor-with-cement-adhesive-renovating-floor-vertical-frame_166373-2129.jpg",
          imageAlt: "Lantai Vinyl",
        },
        {
          id: "p6",
          brand: "Jasa Gordyn Cileunyi",
          name: "WPC Wallpanel",
          price: "Mulai Rp 180rb/m",
          rating: 5,
          reviewCount: "70",
          imageSrc: "http://img.b2bpic.net/free-photo/ai-generated-modern-styled-entryway_23-2150692167.jpg",
          imageAlt: "WPC Wallpanel",
        },
      ]}
      title="Layanan Kami"
      description="Kami melayani rumah tinggal, kantor, hotel, apartemen, rumah sakit, dan berbagai jenis properti lainnya yang Anda butuhkan."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <BlogCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Galeri Proyek"
      description="Lihat hasil instalasi dan desain interior kami yang menginspirasi, menciptakan suasana yang indah dan fungsional."
      blogs={[
        {
          id: "g1",
          category: "Gordyn",
          title: "Project Gordyn Mewah Ruang Tamu",
          excerpt: "Gordyn dengan bahan premium untuk sentuhan kemewahan.",
          imageSrc: "http://img.b2bpic.net/free-photo/cute-girl-wear-warm-sweaters-black-pants-against-old-piano-with-christmas-decoration-white-room_627829-8800.jpg",
          imageAlt: "Galeri Gordyn 1",
          authorName: "Admin",
          authorAvatar: "http://img.b2bpic.net/free-photo/young-beautiful-business-woman-wearing-id-card-smiling-confident-with-crossed-arms_839833-18875.jpg",
          date: "10 Apr 2024",
        },
        {
          id: "g2",
          category: "Gordyn",
          title: "Pemasangan Gordyn Minimalis Kamar Tidur",
          excerpt: "Desain minimalis yang elegan untuk kamar tidur Anda.",
          imageSrc: "http://img.b2bpic.net/free-photo/nice-portrait-beautiful-gentle-bride-morning_1304-4945.jpg",
          imageAlt: "Galeri Gordyn 2",
          authorName: "Admin",
          authorAvatar: "http://img.b2bpic.net/free-photo/black-businessman-happy-expression_1194-2551.jpg",
          date: "08 Apr 2024",
        },
        {
          id: "g3",
          category: "Gordyn",
          title: "Gordyn Kantor Modern",
          excerpt: "Solusi gordyn fungsional untuk ruang kerja modern.",
          imageSrc: "http://img.b2bpic.net/free-photo/steel-door-storage-warehouse_53876-74720.jpg",
          imageAlt: "Galeri Gordyn 3",
          authorName: "Admin",
          authorAvatar: "http://img.b2bpic.net/free-photo/seriously-engineer-girl-is-looking-camera-by-holding-tablet-computer-white-background_176474-116383.jpg",
          date: "05 Apr 2024",
        },
        {
          id: "g4",
          category: "Gordyn",
          title: "Gordyn Sheer untuk Cahaya Alami",
          excerpt: "Menciptakan suasana lembut dengan gordyn transparan.",
          imageSrc: "http://img.b2bpic.net/free-photo/hands-putting-up-decorative-vinyl-with-tool_23-2149728657.jpg",
          imageAlt: "Galeri Gordyn 4",
          authorName: "Admin",
          authorAvatar: "http://img.b2bpic.net/free-photo/view-3d-practicing-lawyer_23-2151023399.jpg",
          date: "03 Apr 2024",
        },
        {
          id: "r1",
          category: "Roller Blind",
          title: "Roller Blind Blackout untuk Privasi",
          excerpt: "Privasi maksimal dan kontrol cahaya optimal.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-paper-texture-detail_23-2151893292.jpg",
          imageAlt: "Galeri Roller Blind 1",
          authorName: "Admin",
          authorAvatar: "http://img.b2bpic.net/free-photo/attractive-blond-business-woman-white-shirt-grey-background_613910-3695.jpg",
          date: "01 Apr 2024",
        },
        {
          id: "r2",
          category: "Roller Blind",
          title: "Roller Blind Motif Modern",
          excerpt: "Tambahkan sentuhan artistik dengan motif pilihan.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-workplace-chair-window_23-2148727523.jpg",
          imageAlt: "Galeri Roller Blind 2",
          authorName: "Admin",
          authorAvatar: "http://img.b2bpic.net/free-photo/medium-shot-smiley-stewardess-posing_23-2150197260.jpg",
          date: "29 Mar 2024",
        },
        {
          id: "r3",
          category: "Roller Blind",
          title: "Roller Blind Minimalis Dapur",
          excerpt: "Desain bersih untuk area dapur yang fungsional.",
          imageSrc: "http://img.b2bpic.net/free-photo/venetian-blinds-background-sun-protection-creating-pleasant-atmosphere-idea-backdrop-backdrop_166373-2774.jpg",
          imageAlt: "Galeri Roller Blind 3",
          authorName: "Admin",
          authorAvatar: "http://img.b2bpic.net/free-photo/close-up-executive-with-white-shirt-blue-suit_1139-135.jpg",
          date: "27 Mar 2024",
        },
        {
          id: "r4",
          category: "Roller Blind",
          title: "Roller Blind Ruang Anak Ceria",
          excerpt: "Pilihan warna cerah untuk kamar anak.",
          imageSrc: "http://img.b2bpic.net/free-photo/two-cute-happy-woman-sitting-balcony-drinking-coffee-chatting-with-stretched-legs-that-leaned-window-womanfriends-talk-about-plans-today-wanting-skip-work-stay-home_176420-11949.jpg",
          imageAlt: "Galeri Roller Blind 4",
          authorName: "Admin",
          authorAvatar: "http://img.b2bpic.net/free-photo/woman-glasses-holding-mug_23-2147767655.jpg",
          date: "25 Mar 2024",
        },
        {
          id: "w1",
          category: "Wallpaper",
          title: "Wallpaper Motif Bunga Klasik",
          excerpt: "Sentuhan klasik dengan motif bunga yang timeless.",
          imageSrc: "http://img.b2bpic.net/free-photo/fabric-texture-background_1385-1987.jpg",
          imageAlt: "Galeri Wallpaper 1",
          authorName: "Admin",
          authorAvatar: "http://img.b2bpic.net/free-photo/confident-indian-business-man-sitting-armchair_1262-3183.jpg",
          date: "23 Mar 2024",
        },
        {
          id: "w2",
          category: "Wallpaper",
          title: "Wallpaper Geometris Ruang Keluarga",
          excerpt: "Desain modern geometris untuk ruang keluarga.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-modern-three-white-shelves-abstract-wall_169016-6266.jpg",
          imageAlt: "Galeri Wallpaper 2",
          authorName: "Admin",
          authorAvatar: "http://img.b2bpic.net/free-photo/young-painter-desk-joyfully-choosing-paint-brush-with-big-pattern-canvas-background-home_574295-3722.jpg",
          date: "21 Mar 2024",
        },
        {
          id: "w3",
          category: "Wallpaper",
          title: "Wallpaper Tekstur Industrial",
          excerpt: "Memberi nuansa urban dan industrial yang unik.",
          imageSrc: "http://img.b2bpic.net/free-photo/home-indoor-design-concept_23-2148811461.jpg",
          imageAlt: "Galeri Wallpaper 3",
          authorName: "Admin",
          authorAvatar: "http://img.b2bpic.net/free-photo/portrait-corporate-woman-looking-outside-window-her-office-smiling-with-confidence_1258-194662.jpg",
          date: "19 Mar 2024",
        },
        {
          id: "w4",
          category: "Wallpaper",
          title: "Wallpaper Alam untuk Suasana Tenang",
          excerpt: "Hadirkan ketenangan alam di dalam ruangan.",
          imageSrc: "http://img.b2bpic.net/free-vector/luxury-watercolor-leaves-seamless-pattern-design_44538-11297.jpg",
          imageAlt: "Galeri Wallpaper 4",
          authorName: "Admin",
          authorAvatar: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1613.jpg",
          date: "17 Mar 2024",
        },
        {
          id: "v1",
          category: "Vertical Blind",
          title: "Vertical Blind Kantor Minimalis",
          excerpt: "Ideal untuk jendela besar di lingkungan kantor.",
          imageSrc: "http://img.b2bpic.net/free-photo/sheets-filing-cabinet_116123-1.jpg",
          imageAlt: "Galeri Vertical Blind 1",
          authorName: "Admin",
          authorAvatar: "http://img.b2bpic.net/free-photo/woman-portrait_1296-429.jpg",
          date: "15 Mar 2024",
        },
        {
          id: "v2",
          category: "Vertical Blind",
          title: "Vertical Blind Rumah Elegan",
          excerpt: "Kontrol cahaya fleksibel dengan gaya elegan.",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-contemporary-living-room-interior-modern-furniture_1048-17747.jpg",
          imageAlt: "Galeri Vertical Blind 2",
          authorName: "Admin",
          authorAvatar: "http://img.b2bpic.net/free-photo/smiling-successful-middle-aged-business-leader_1262-5690.jpg",
          date: "13 Mar 2024",
        },
        {
          id: "v3",
          category: "Vertical Blind",
          title: "Vertical Blind Warna Cerah",
          excerpt: "Tambahkan sentuhan warna ceria pada interior.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-kid-with-cardboard-rocket_52683-100059.jpg",
          imageAlt: "Galeri Vertical Blind 3",
          authorName: "Admin",
          authorAvatar: "http://img.b2bpic.net/free-photo/smiling-successful-architect-working-building-plan_1262-18702.jpg",
          date: "11 Mar 2024",
        },
        {
          id: "v4",
          category: "Vertical Blind",
          title: "Vertical Blind Motif Kayu",
          excerpt: "Nuansa hangat dengan tampilan motif kayu alami.",
          imageSrc: "http://img.b2bpic.net/free-vector/gradient-art-deco-pattern-with-blue-golden-details_23-2149164170.jpg",
          imageAlt: "Galeri Vertical Blind 4",
          authorName: "Admin",
          authorAvatar: "http://img.b2bpic.net/free-photo/headshot-lovely-young-pretty-woman-with-curly-bushy-hair-smiles-gently-keeps-hands-chin-looks-directly-camera-wears-casual-jumper-isolated-pink-background-human-face-expressions_273609-57340.jpg",
          date: "09 Mar 2024",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient",
      }}
      tag="Percantik Ruangan Anda Sekarang"
      title="Konsultasi Gratis dan Survey Lokasi."
      description="Dapatkan penawaran terbaik untuk kebutuhan gordyn dan interior Anda dengan menghubungi kami sekarang. Tim kami siap membantu Anda."
      buttons={[
        {
          text: "Chat WhatsApp",
          href: "https://wa.me/6285321155411?text=Halo,%20saya%20ingin%20konsultasi%20mengenai%20jasa%20gordyn.",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Tentang Kami",
          items: [
            {
              label: "Percantik ruangan Anda bersama Jasa Gordyn. Solusi interior modern dan elegan dengan kualitas premium.",
              href: "#",
            },
          ],
        },
        {
          title: "Link Cepat",
          items: [
            {
              label: "Beranda",
              href: "#hero",
            },
            {
              label: "Tentang Kami",
              href: "#about",
            },
            {
              label: "Layanan",
              href: "#services",
            },
            {
              label: "Galeri Proyek",
              href: "#gallery",
            },
          ],
        },
        {
          title: "Layanan",
          items: [
            {
              label: "Gordyn Premium",
              href: "#services",
            },
            {
              label: "Wallpaper Dinding",
              href: "#services",
            },
            {
              label: "Blinds & Vinyl",
              href: "#services",
            },
            {
              label: "WPC Wallpanel",
              href: "#services",
            },
          ],
        },
        {
          title: "Kontak",
          items: [
            {
              label: "📍 Jl. Raya Cileunyi No.243, Bandung",
              href: "#",
            },
            {
              label: "📧 jasagordynjago@gmail.com",
              href: "mailto:jasagordynjago@gmail.com",
            },
            {
              label: "📞 0853-2115-5411",
              href: "tel:+6285321155411",
            },
          ],
        },
      ]}
      logoText="Toko Jasa Gordyn Cileunyi"
      copyrightText="© 2024 Toko Jasa Gordyn Cileunyi. Hak Cipta Dilindungi."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
