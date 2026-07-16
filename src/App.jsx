import { useEffect } from 'react';
import { BookOpenText } from 'lucide-react';
import HomeTab from './components/HomeTab';
import ProjectsTab from './components/ProjectsTab';
import RubricTable from './components/RubricTable';
import Summary from './components/Summary';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const { student } = portfolioData;

  // Reveal elements on scroll effect
  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll('[data-reveal]'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    revealItems.forEach((item, index) => {
      item.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 70}ms`);
    });

    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px' },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  // Active navigation highlight scroll listener
  useEffect(() => {
    const sections = ['ho-so', 'bai-tap', 'tong-ket'];
    
    const handleScroll = () => {
      let activeSection = '';
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Trigger when section top is near navigation bar bottom
          if (rect.top <= 140) {
            activeSection = sectionId;
          }
        }
      }

      const navLinks = document.querySelectorAll('nav a');
      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href === `#${activeSection}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run immediately on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-academic-background text-academic-ink">
      <header className="sticky top-0 z-50 border-b border-academic-border bg-academic-background/90 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-4 sm:flex-nowrap sm:gap-4 sm:px-6 md:px-10">
          <a href="#top" className="flex min-w-0 items-center gap-3.5" aria-label="Về đầu trang">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white p-1 border border-academic-border shadow-sm">
              <img src="/logo.png" alt="Logo ULIS" className="h-full w-full object-contain" />
            </span>
            <span className="hidden min-w-0 sm:block">
              <span className="block text-[10px] font-extrabold uppercase tracking-[0.2em] text-academic-strong">
                Korean Language Portfolio
              </span>
              <span className="block truncate text-[11px] font-bold text-academic-muted/90">Công nghệ số & AI · ULIS - VNU</span>
            </span>
          </a>

          <div className="contents sm:flex sm:items-center sm:gap-5">
            <nav className="order-3 flex w-full items-center justify-center gap-8 border-t border-academic-border/50 pt-3 text-xs font-bold sm:order-none sm:w-auto sm:justify-start sm:gap-6 sm:border-0 sm:pt-0 sm:text-sm" aria-label="Điều hướng chính">
              <a className="nav-link" href="#ho-so">Hồ sơ</a>
              <a className="nav-link" href="#bai-tap">Bài tập</a>
              <a className="nav-link" href="#tong-ket">Tổng kết</a>
            </nav>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-7xl space-y-24 px-5 pb-24 pt-12 md:px-10 md:pt-16 lg:space-y-32">
        <HomeTab />
        <ProjectsTab />
        <section id="tong-ket" className="section-anchor space-y-12">
          <RubricTable />
          <Summary />
        </section>
      </main>

      <footer className="border-t border-academic-border bg-academic-ivory/50 px-5 py-16 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-1.5 border border-academic-border shadow-sm">
            <img src="/logo.png" alt="Logo ULIS" className="h-full w-full object-contain" />
          </div>
          <p className="text-xl font-black text-academic-ink tracking-tight">{student.name}</p>
          <p className="text-sm font-bold text-academic-muted">Trường Đại học Ngoại ngữ - Đại học Quốc gia Hà Nội</p>
          
          <div className="flex items-center gap-2 text-xs font-semibold text-academic-muted/90 bg-white border border-academic-border/75 px-4 py-2 rounded-full shadow-sm">
            <BookOpenText size={14} className="text-academic-strong shrink-0" />
            <span>Ngôn ngữ và Văn Hóa Hàn Quốc · ULIS - VNU</span>
          </div>

          <div className="mt-10 pt-8 border-t border-academic-border/55 w-full flex flex-col md:flex-row justify-between items-center text-xs text-academic-muted/80 gap-4">
            <p>© 2026 Korean Language & Culture Learning Portfolio. All rights reserved.</p>
            <div className="flex gap-6 font-semibold">
              <a className="hover:text-academic-strong transition-all underline underline-offset-4" href="#ho-so">Hồ sơ</a>
              <a className="hover:text-academic-strong transition-all underline underline-offset-4" href="#bai-tap">Bài tập</a>
              <a className="hover:text-academic-strong transition-all underline underline-offset-4" href="#tong-ket">Tổng kết</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
