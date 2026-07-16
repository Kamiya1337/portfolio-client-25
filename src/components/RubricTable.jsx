import { CheckCircle2, CircleDashed, RefreshCw } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function RubricTable() {
  const { projects, rubric } = portfolioData;
  const totalMilestones = projects.length * 2;
  const completedMilestones = projects.reduce((acc, project) => {
    const reportDone = project.report !== 'Sẽ cập nhật sau' && project.report !== '' && project.report !== 'Không yêu cầu';
    const imgDone = project.evidenceImg !== 'Sẽ cập nhật sau' && project.evidenceImg !== '' && project.evidenceImg !== 'Không yêu cầu';
    return acc + (reportDone ? 1 : 0) + (imgDone ? 1 : 0);
  }, 0);
  const progressPercent = Math.round(50 + (completedMilestones / totalMilestones) * 50);

  return (
    <div className="space-y-8">
      {/* Redesigned Premium Summary Banner Card */}
      <div 
        data-reveal 
        className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-r from-academic-navy to-academic-strong p-8 text-white md:p-12 shadow-soft border border-academic-border/30"
      >
        {/* Decorative ambient blobs */}
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl -mr-20 -mt-20" />
        <div className="absolute left-1/3 bottom-0 h-32 w-32 rounded-full bg-academic-pastel/20 blur-2xl -mb-10" />

        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <span className="section-kicker text-academic-pastel text-[10px] tracking-widest font-extrabold uppercase mb-3 block">
              Learning outcomes & digital skills
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl text-white">
              Tổng kết kỹ năng
            </h2>
            <p className="mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-white/85">
              Hành trình sáu bài tập kết nối quản lý dữ liệu, nghiên cứu thông tin, tư duy AI, cộng tác, sáng tạo và liêm chính học thuật.
            </p>
          </div>
          
          <div className="rounded-2xl border border-white/20 bg-white/10 px-8 py-6 text-center backdrop-blur-sm shrink-0">
            <p className="text-5xl font-black text-white tracking-tight">{progressPercent}%</p>
            <p className="mt-2 text-[10px] font-extrabold uppercase tracking-widest text-white/85">
              Portfolio readiness
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative z-10 mt-8 h-3 overflow-hidden rounded-full bg-white/20 border border-white/5">
          <div 
            className="h-full rounded-full bg-gradient-to-r from-academic-pastel to-white transition-all duration-1000 shadow-sm" 
            style={{ width: `${progressPercent}%` }} 
          />
        </div>

        {/* Info Note footer */}
        <div className="relative z-10 mt-5 flex items-center gap-2 text-xs md:text-sm text-white/90 font-medium">
          <RefreshCw size={15} className="animate-spin-slow shrink-0" />
          <span>{completedMilestones}/{totalMilestones} mục báo cáo và ảnh minh chứng đã được đồng bộ.</span>
        </div>
      </div>

      {/* Grid of Rubric criteria cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const reportDone = project.report !== 'Sẽ cập nhật sau' && project.report !== '' && project.report !== 'Không yêu cầu';
          const imgDone = project.evidenceImg !== 'Sẽ cập nhật sau' && project.evidenceImg !== '' && project.evidenceImg !== 'Không yêu cầu';
          const isFullyDone = reportDone && imgDone;
          const rubricItem = rubric[project.id];

          return (
            <article 
              data-reveal 
              key={project.id} 
              className="reveal soft-card hover-lift rounded-2xl bg-white p-7 border border-academic-border flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-academic-strong/40">
                    {String(project.id).padStart(2, '0')}
                  </span>
                  {isFullyDone ? (
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-academic-ivory border border-academic-pastel text-academic-strong">
                      <CheckCircle2 size={18} />
                    </span>
                  ) : (
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 border border-slate-200 text-slate-400">
                      <CircleDashed size={18} className="animate-pulse" />
                    </span>
                  )}
                </div>
                <h3 className="mt-4 font-bold text-academic-ink text-base md:text-md leading-snug">
                  {project.title}
                </h3>
              </div>

              <div className="mt-5 pt-4 border-t border-academic-border/40">
                <p className="text-xs font-bold text-academic-strong uppercase tracking-wider">
                  {isFullyDone ? 'Đạt chuẩn minh chứng' : 'Cần bổ sung minh chứng'}
                </p>
                {rubricItem && (
                  <p className="mt-2 text-xs leading-relaxed text-academic-muted">
                    {rubricItem.action}
                  </p>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
