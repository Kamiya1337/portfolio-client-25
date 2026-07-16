import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ArrowLeft, ExternalLink, FileText, FolderOpen, Image, Maximize2, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { setSelectedProject, setPreviewData, clearPreviewData } from '../store/portfolioSlice';

const unavailable = (value) => !value || value === 'Sẽ cập nhật sau';
const notRequired = (value) => value === 'Không yêu cầu';

function PreviewModal() {
  const dispatch = useDispatch();
  const previewData = useSelector((state) => state.portfolio.previewData);

  useEffect(() => {
    if (!previewData.isOpen) return undefined;
    const handleEscape = (event) => event.key === 'Escape' && dispatch(clearPreviewData());
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [previewData.isOpen, dispatch]);

  if (!previewData.isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[90] flex items-center justify-center bg-academic-ink/75 p-4 backdrop-blur-sm transition-all duration-300"
      onMouseDown={() => dispatch(clearPreviewData())}
    >
      <div 
        className="flex h-[88vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl border border-academic-border"
        onMouseDown={(event) => event.stopPropagation()}
      >
        {/* Header of Modal */}
        <div className="flex items-center justify-between gap-4 border-b border-academic-border bg-academic-ivory px-6 py-4">
          <div>
            <p className="section-kicker text-[10px] tracking-wider text-academic-strong">Preview Mode</p>
            <h3 className="font-bold text-academic-ink text-base md:text-lg">
              {previewData.type === 'pdf' ? 'Trình xem PDF (Báo cáo)' : 'Trình xem Hình ảnh (Screenshot)'}
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href={previewData.url} 
              target="_blank" 
              rel="noreferrer" 
              className="icon-button h-10 w-10 border border-academic-border hover:border-academic-accent hover:bg-academic-ivory transition-all duration-200"
              aria-label="Mở trong tab mới"
            >
              <ExternalLink size={18} />
            </a>
            <button 
              type="button" 
              onClick={() => dispatch(clearPreviewData())} 
              className="icon-button h-10 w-10 border border-academic-border hover:border-academic-accent hover:bg-academic-ivory transition-all duration-200"
              aria-label="Đóng bản xem trước"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-0 flex-1 overflow-hidden bg-academic-ivory">
          {previewData.type === 'pdf' ? (
            <iframe
              src={previewData.url}
              title="Bản xem trước báo cáo PDF"
              className="block h-full w-full border-0 bg-transparent"
            />
          ) : (
            <div className="flex h-full items-center justify-center overflow-auto p-4">
              <img src={previewData.url} alt="Ảnh minh chứng bài tập" className="block max-h-full max-w-full rounded-lg shadow-md object-contain" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ResourceAction({ value, type, onPreview }) {
  const config = {
    pdf: { label: 'Báo cáo PDF', icon: FileText },
    img: { label: 'Ảnh minh chứng', icon: Image },
    drive: { label: 'Google Drive', icon: FolderOpen },
  }[type];
  const Icon = config.icon;

  if (unavailable(value)) return <span className="resource-disabled text-xs"><Icon size={16} /> Sẽ cập nhật sau</span>;
  if (notRequired(value)) return <span className="resource-disabled text-xs"><Icon size={16} /> Không yêu cầu</span>;

  return (
    <a
      href={value}
      target={type === 'drive' ? '_blank' : undefined}
      rel={type === 'drive' ? 'noreferrer' : undefined}
      onClick={type === 'drive' ? undefined : (event) => onPreview(event, value, type)}
      className="resource-action text-xs md:text-sm font-bold border border-academic-border bg-white text-academic-strong hover:bg-academic-ivory rounded-full shadow-sm hover:scale-102 transition-all duration-200"
    >
      <Icon size={16} />
      {config.label}
      {type === 'drive' ? <ExternalLink size={13} className="opacity-80" /> : <Maximize2 size={13} className="opacity-80" />}
    </a>
  );
}

export default function ProjectsTab() {
  const dispatch = useDispatch();
  const selectedProject = useSelector((state) => state.portfolio.selectedProject);
  const { projects } = portfolioData;

  const openPreview = (event, url, type) => {
    event.preventDefault();
    dispatch(setPreviewData({ isOpen: true, url, type }));
  };

  return (
    <section data-reveal className="reveal section-anchor space-y-12" aria-labelledby="cases-title">
      <PreviewModal />

      {/* Title Header */}
      <div className="mx-auto max-w-3xl text-center space-y-3">
        <span className="section-kicker text-academic-strong text-xs font-extrabold tracking-widest">Digital learning cases</span>
        <h2 id="cases-title" className="text-3xl font-extrabold tracking-tight md:text-4xl text-academic-ink">6 case học phần</h2>
        <p className="text-sm leading-relaxed text-academic-muted md:text-base max-w-xl mx-auto">
          Sáu bài tập thực hành ghi lại hành trình ứng dụng công nghệ, minh chứng số liệu và trải nghiệm nghiên cứu thực tế.
        </p>
      </div>

      {/* Selected Case Detail View */}
      {selectedProject && (
        <article className="soft-card overflow-hidden rounded-3xl bg-white border border-academic-border shadow-soft transition-all duration-300">
          {/* Hero Banner Header of Card */}
          <div className="bg-academic-ivory border-b border-academic-border p-7 md:p-10 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-academic-blush/35 rounded-full blur-3xl -mr-20 -mt-20"></div>
            
            <div className="relative">
              <button 
                type="button" 
                onClick={() => dispatch(setSelectedProject(null))} 
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-academic-border bg-white px-4 py-2 text-xs font-bold text-academic-strong hover:bg-academic-blush hover:border-academic-accent transition-all duration-200"
              >
                <ArrowLeft size={15} /> Trở lại 6 case
              </button>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-academic-strong">
                Case {String(selectedProject.id).padStart(2, '0')} · {selectedProject.chapter}
              </p>
              <h3 className="mt-3 max-w-4xl text-2xl font-extrabold leading-tight text-academic-ink md:text-3.5xl">
                {selectedProject.title}
              </h3>
              <p className="mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-academic-muted">
                {selectedProject.shortDesc}
              </p>
            </div>
          </div>

          {/* Details Body */}
          <div className="grid gap-8 p-7 md:p-10 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-2xl bg-academic-ivory p-6 border border-academic-border relative overflow-hidden">
                <span className="section-kicker text-[10px] text-academic-strong block font-bold mb-2">Mục tiêu</span>
                <p className="relative z-10 text-sm leading-relaxed text-academic-ink">{selectedProject.target}</p>
              </div>
              
              <div className="rounded-2xl bg-white p-6 border border-academic-border">
                <span className="section-kicker text-[10px] text-academic-strong block font-bold mb-3">Kỹ năng áp dụng</span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.skills?.map((skill) => (
                    <span 
                      className="tag text-xs font-bold bg-academic-ivory text-academic-strong border border-academic-pastel px-3 py-1 rounded-full" 
                      key={skill}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl bg-white p-6 border border-academic-border relative">
              <span className="section-kicker text-[10px] text-academic-strong block font-bold mb-3">Quá trình thực hiện</span>
              <p className="text-sm leading-relaxed text-academic-muted whitespace-pre-line">{selectedProject.process}</p>
            </div>
          </div>

          {/* Resources & Evidences footer inside card */}
          <div className="border-t border-academic-border bg-academic-ivory/50 p-6 md:px-10">
            <p className="section-kicker text-[10px] text-academic-strong block font-bold mb-4">Tài liệu & minh chứng</p>
            <div className="flex flex-wrap gap-3">
              <ResourceAction value={selectedProject.report} type="pdf" onPreview={openPreview} />
              <ResourceAction value={selectedProject.evidenceImg} type="img" onPreview={openPreview} />
              <ResourceAction value={selectedProject.driveLink} type="drive" onPreview={openPreview} />
            </div>
          </div>
        </article>
      )}

      {/* Grid List of 6 Cases */}
      <div 
        className={`${selectedProject ? 'hidden' : 'grid'} gap-6 md:grid-cols-2`} 
        aria-hidden={Boolean(selectedProject)}
      >
        {projects.map((project) => (
          <article 
            data-reveal 
            key={project.id} 
            className="reveal soft-card hover-lift group flex min-h-[320px] flex-col rounded-2xl bg-white p-7 border border-academic-border hover:border-academic-accent transition-all duration-300 relative overflow-hidden"
          >
            {/* Top Bar inside card */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="section-kicker text-[10px] tracking-widest text-academic-strong block">Case {String(project.id).padStart(2, '0')}</span>
                <p className="mt-1 text-[10px] font-extrabold uppercase tracking-wide text-academic-muted">{project.chapter}</p>
              </div>
              <span className="rounded-full bg-academic-blush text-academic-strong border border-academic-pastel px-3.5 py-1 text-[10px] font-extrabold uppercase">
                {project.status}
              </span>
            </div>

            {/* Core Info */}
            <h3 className="mt-5 text-lg md:text-xl font-extrabold leading-snug text-academic-ink group-hover:text-academic-strong transition-colors duration-200">
              {project.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-academic-muted">
              {project.shortDesc}
            </p>

            {/* Tech Tags */}
            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.skills?.slice(0, 3).map((skill) => (
                <span key={skill} className="tag text-[10px] border border-academic-border bg-white text-academic-muted font-bold rounded-full px-2.5 py-0.5">
                  {skill}
                </span>
              ))}
            </div>

            {/* Action buttons inside card */}
            <div className="mt-6 flex items-center justify-between border-t border-academic-border/60 pt-5">
              <button 
                type="button" 
                onClick={() => dispatch(setSelectedProject(project))} 
                className="rounded-full bg-academic-strong px-5 py-2 text-xs font-bold text-white shadow-sm hover:bg-academic-accent hover:shadow-soft transition-all duration-200"
              >
                Xem chi tiết
              </button>
              <button 
                type="button" 
                onClick={(event) => openPreview(event, project.report, 'pdf')} 
                disabled={unavailable(project.report) || notRequired(project.report)} 
                className="icon-button border border-academic-border hover:border-academic-accent hover:bg-academic-ivory h-9 w-9 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-academic-border disabled:hover:bg-transparent" 
                aria-label={`Xem báo cáo ${project.title}`}
              >
                <FileText size={16} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
