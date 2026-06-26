import { useEffect, useState } from 'react';
import { BookOpenText, X } from 'lucide-react';
import HomeTab from './components/HomeTab';
import ProjectsTab from './components/ProjectsTab';
import RubricTable from './components/RubricTable';
import Summary from './components/Summary';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const { student } = portfolioData;

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

  return (
    <div className="min-h-screen overflow-x-hidden bg-academic-background text-academic-ink">
      <header className="sticky top-0 z-50 border-b border-academic-border/80 bg-academic-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-3 py-3 sm:flex-nowrap sm:gap-4 sm:px-5 md:px-10">
          <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Về đầu trang">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white p-1 ring-1 ring-academic-border">
              <img src="/logo.png" alt="Logo ULIS" className="h-full w-full object-contain" />
            </span>
            <span className="hidden min-w-0 sm:block">
              <span className="block text-[10px] font-extrabold uppercase tracking-[0.18em] text-academic-strong">
                Korean Language Portfolio
              </span>
              <span className="block truncate text-xs text-academic-muted">Công nghệ số & AI · ULIS - VNU</span>
            </span>
          </a>

          <div className="contents sm:flex sm:items-center sm:gap-5">
            <nav className="order-3 flex w-full items-center justify-center gap-6 border-t border-academic-border/60 pt-2 text-xs font-bold sm:order-none sm:w-auto sm:justify-start sm:gap-5 sm:border-0 sm:pt-0 sm:text-sm" aria-label="Điều hướng chính">
              <a className="nav-link" href="#ho-so">Hồ sơ</a>
              <a className="nav-link" href="#bai-tap">Bài tập</a>
              <a className="nav-link" href="#tong-ket">Tổng kết</a>
            </nav>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-7xl space-y-24 px-5 pb-24 pt-10 md:px-10 md:pt-16 lg:space-y-32">
        <HomeTab />
        <ProjectsTab />
        <section id="tong-ket" className="section-anchor space-y-12">
          <RubricTable />
          <Summary />
        </section>
      </main>

      <footer className="border-t border-academic-border bg-academic-ivory px-5 py-14 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-1.5 ring-1 ring-academic-border">
            <img src="/logo.png" alt="Logo ULIS" className="h-full w-full object-contain" />
          </div>
          <p className="text-lg font-bold text-academic-ink">{student.name}</p>
          <p className="text-sm text-academic-muted">Trường Đại học Ngoại ngữ - Đại học Quốc gia Hà Nội</p>
          <div className="flex items-center gap-2 text-xs text-academic-muted">
            <BookOpenText size={14} className="text-academic-accent" />
            <span>Ngôn ngữ và Văn Hóa Hàn Quốc · ULIS - VNU</span>
          </div>
          <p className="mt-5 border-t border-academic-border/60 pt-5 text-xs text-academic-muted">
            Korean Language & Culture Learning Portfolio · 2025-2026
          </p>
        </div>
      </footer>
    </div>
  );
}
