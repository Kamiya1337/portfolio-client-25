import { portfolioData } from '../data/portfolioData';
import { Languages, Quote, Sparkles, ArrowRight, BookOpen, GraduationCap, Award, BrainCircuit } from 'lucide-react';
import avatarImage from '../../docs/avatar.png';

export default function HomeTab() {
  const { student, overview } = portfolioData;

  // Icons array matching each of the 7 overview topics
  const overviewIcons = [
    GraduationCap,
    BookOpen,
    BrainCircuit,
    Award,
    Sparkles,
    Languages,
    Languages
  ];

  return (
    <div className="space-y-24 lg:space-y-32">
      {/* Hero Banner Section */}
      <section data-reveal className="reveal soft-card rounded-3xl bg-white p-8 md:p-12 lg:p-16 border border-academic-border shadow-soft relative overflow-hidden">
        {/* Abstract shapes in background */}
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-academic-ivory/40 border border-academic-border/30" />
        <div className="absolute -left-16 bottom-10 h-40 w-40 rounded-full bg-academic-blush/20" />
        
        <div className="relative max-w-4xl">
          <span className="section-kicker text-academic-strong tracking-widest font-extrabold text-xs mb-5 block">
            Portfolio / Digital & AI Learning
          </span>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-academic-ink sm:text-5xl md:text-6xl">
            Portfolio học phần —<br />
            <span className="text-academic-strong">{student.name}</span>
          </h1>
          <p className="mt-5 text-xl font-bold text-academic-strong/90 sm:text-2xl">
            Korean Language & Culture Learning Portfolio
          </p>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-academic-muted md:text-lg">
            {student.bio}
          </p>
        </div>

        <div className="relative mt-12 grid gap-6 border-t border-academic-border/60 pt-8 sm:grid-cols-2 lg:grid-cols-5">
          {[
            ['Trường', 'ULIS - VNU'],
            ['Ngành', 'Ngôn ngữ và Văn Hóa Hàn Quốc'],
            ['Học phần', 'Công nghệ số & Ứng dụng AI'],
            ['Sinh viên', student.name],
            ['Mã sinh viên', '25042403'],
          ].map(([label, value]) => (
            <div key={label} className="group">
              <span className="section-kicker text-[10px] text-academic-strong/80 block tracking-wider uppercase">{label}</span>
              <p className="mt-2 text-sm font-bold leading-snug text-academic-ink group-hover:text-academic-strong transition-colors duration-200">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Student Profile & Stats */}
      <section id="ho-so" className="section-anchor grid items-start gap-8 lg:grid-cols-12">
        {/* Left Side: Avatar Box */}
        <div data-reveal className="reveal lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-academic-border bg-white shadow-soft group">
            <img
              src={avatarImage}
              alt={`Ảnh chân dung ${student.name}`}
              className="h-full w-full object-cover object-[58%_center] transition-transform duration-700 group-hover:scale-105"
            />
            {/* Glassmorphic Overlay Tag */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-academic-pastel/30 shadow-md">
              <span className="section-kicker text-[10px] tracking-widest text-academic-strong mb-1 block">STUDENT PROFILE</span>
              <h2 className="text-xl font-extrabold text-academic-ink">{student.name}</h2>
              <p className="text-xs text-academic-muted mt-1">{student.id} · ULIS - VNU</p>
            </div>
          </div>
        </div>

        {/* Right Side: Detail Cards & Stats */}
        <div className="lg:col-span-7 space-y-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <article data-reveal className="reveal soft-card hover-lift rounded-2xl bg-white p-7 border border-academic-border">
              <span className="section-kicker text-academic-strong text-xs mb-3 block">Global learning</span>
              <h3 className="text-xl font-bold text-academic-ink">Ngôn ngữ và Văn Hóa Hàn Quốc</h3>
              <p className="mt-3 text-sm leading-relaxed text-academic-muted">
                Học ngôn ngữ là quá trình đi từ cách dùng từ, đặt câu đến việc hiểu con người và văn hóa phía sau ngôn ngữ đó. Khi có nền tảng văn hóa, việc giao tiếp trở nên tự nhiên và có chiều sâu hơn.
              </p>
            </article>

            <article data-reveal className="reveal soft-card hover-lift rounded-2xl bg-white p-7 border border-academic-border">
              <span className="section-kicker text-academic-strong text-xs mb-3 block">Digital learning</span>
              <h3 className="text-xl font-bold text-academic-ink">Công nghệ số & AI</h3>
              <p className="mt-3 text-sm leading-relaxed text-academic-muted">
                Công cụ số hỗ trợ người học tìm kiếm tài liệu, ghi chép, hệ thống hóa thông tin và trình bày ý tưởng rõ ràng hơn. Điều quan trọng không chỉ là biết dùng công cụ, mà là biết chọn lọc và sử dụng đúng mục đích.
              </p>
            </article>
          </div>

          <blockquote data-reveal className="reveal soft-card hover-lift relative rounded-2xl bg-academic-ivory p-8 border border-academic-border flex items-center justify-between gap-6">
            <div className="relative z-10 max-w-2xl">
              <span className="section-kicker text-academic-strong text-xs block mb-3">A note</span>
              <p className="text-base italic leading-relaxed text-academic-ink">
                “Công nghệ không thay thế quá trình tự học, nhưng nếu được sử dụng một cách tỉnh táo, nó có thể giúp người học hiểu vấn đề nhanh hơn, chủ động hơn và biết nhìn lại cách mình học.”
              </p>
            </div>
            <Quote className="text-academic-pastel/30 shrink-0 self-end mb-1" size={54} strokeWidth={1.5} />
          </blockquote>

          {/* Stats Chips Row */}
          <div data-reveal className="reveal flex flex-wrap gap-3 pt-2">
            {[
              ['06', 'Bài thực hành'],
              ['ULIS', 'VNU-ULIS'],
              ['AI', 'Kỹ năng số'],
              ['KR', 'Ngôn ngữ Hàn'],
            ].map(([num, text]) => (
              <div key={text} className="px-5 py-3 rounded-full border border-academic-border bg-white flex items-center gap-3 shadow-sm hover:border-academic-accent transition-colors duration-200">
                <span className="text-lg font-black text-academic-strong">{num}</span>
                <span className="text-xs font-semibold text-academic-muted">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Index Map */}
      <section id="bai-tap" data-reveal className="reveal section-anchor space-y-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end border-b border-academic-border/60 pb-6">
          <div>
            <span className="section-kicker text-academic-strong text-xs">Learning index</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">Bản đồ học tập</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-academic-muted md:text-right">
            Lộ trình rèn luyện 7 năng lực nền tảng định hướng hành trình học tập và sáu bài thực hành trong portfolio.
          </p>
        </div>

        <div className="space-y-4">
          {overview.map((item, index) => {
            const Icon = overviewIcons[index] || BookOpen;
            return (
              <article
                data-reveal
                key={item.id}
                className="reveal group flex items-center gap-6 rounded-2xl border border-academic-border bg-white p-6 shadow-sm hover:border-academic-accent hover:shadow-soft transition-all duration-300 cursor-pointer"
              >
                <span className="text-2xl font-black text-academic-strong/40 group-hover:text-academic-strong transition-colors duration-200">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="h-8 w-px bg-academic-border/60" />
                <Icon size={22} className="shrink-0 text-academic-strong group-hover:scale-110 transition-transform duration-300" />
                <div className="min-w-0 flex-1 md:flex md:items-center md:justify-between md:gap-6">
                  <h3 className="font-bold text-academic-ink text-base md:text-lg group-hover:text-academic-strong transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-academic-muted md:mt-0 md:text-right">{item.desc}</p>
                </div>
                <ArrowRight size={18} className="text-academic-strong opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:block shrink-0" />
              </article>
            );
          })}
        </div>
      </section>

      {/* Digital Learning Profile Grid */}
      <section data-reveal className="reveal space-y-8">
        <div className="max-w-3xl">
          <span className="section-kicker text-academic-strong text-xs">Digital learning profile</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">Hồ sơ học tập</h2>
          <p className="mt-4 text-base leading-relaxed text-academic-muted">
            Portfolio phản ánh cách kiến thức ngôn ngữ, năng lực số và tư duy học thuật được kết nối thành một quá trình học tập có hệ thống.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            ['Profile', 'Trọng tâm học tập', 'Ngôn ngữ Hàn Quốc, văn hóa Hàn Quốc và năng lực giao tiếp trong môi trường học thuật hiện đại.'],
            ['Objective', 'Mục tiêu học phần', 'Thành thạo công cụ số, biết đánh giá thông tin và sử dụng AI như một trợ lý học tập có trách nhiệm.'],
            ['Purpose', 'Lý do xây dựng portfolio', 'Hệ thống hóa sản phẩm, minh chứng tiến bộ và nhìn lại hành trình phát triển kỹ năng.'],
            ['Skills', 'Kỹ năng mũi nhọn', student.skills.join(' · ')],
            ['Digital focus', 'Định hướng ứng dụng', 'Quản lý dữ liệu, nghiên cứu thông tin, prompt engineering, cộng tác trực tuyến và sáng tạo nội dung.'],
            ['Academic values', 'Giá trị học thuật', 'Chính xác, minh bạch, tôn trọng bản quyền và chủ động kiểm chứng nội dung do AI hỗ trợ.'],
          ].map(([label, title, description]) => (
            <article data-reveal className="reveal soft-card hover-lift rounded-2xl bg-white p-7 border border-academic-border" key={label}>
              <span className="section-kicker text-[10px] text-academic-strong/80 block tracking-wider uppercase">{label}</span>
              <h3 className="mt-3 text-lg font-bold text-academic-ink">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-academic-muted">{description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
