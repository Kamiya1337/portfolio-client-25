import { Quote, ShieldAlert, CheckSquare } from 'lucide-react';

export default function Summary() {
  return (
    <div className="space-y-8">
      {/* Title Header */}
      <div className="max-w-3xl space-y-2">
        <span className="section-kicker text-academic-strong text-xs font-bold tracking-widest">
          Reflection & academic integrity
        </span>
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-academic-ink">
          Suy ngẫm sau hành trình học tập
        </h2>
      </div>

      {/* Main Quote Card - Reflections */}
      <article 
        data-reveal 
        className="reveal soft-card hover-lift relative overflow-hidden rounded-3xl bg-white p-8 md:p-12 border border-academic-border shadow-soft"
      >
        <Quote className="absolute right-8 top-6 text-academic-blush/40 shrink-0" size={96} strokeWidth={1.5} />
        
        <div className="relative z-10 space-y-4">
          <h3 className="text-xl font-extrabold text-academic-strong">
            Kiến thức & Kỹ năng đã đạt được
          </h3>
          <p className="whitespace-pre-line text-justify leading-relaxed text-sm md:text-base text-academic-muted">
            {`"Thú thật, ban đầu em chỉ nghĩ đơn giản làm portfolio là gom góp các file bài tập cũ rồi đăng lên web cho xong nhiệm vụ. Nhưng khi thực sự bắt tay thiết kế, em mới hiểu rằng nếu chỉ quăng link một cách cơ học thì trang web sẽ rất rời rạc, không phản ánh được tư duy phát triển của bản thân.

Môn học này đã thay đổi hoàn toàn cách em tổ chức không gian số. Em học được cách thiết lập cây thư mục khoa học, đặt tên file nhất quan để tra cứu nhanh chóng – một thói quen tưởng nhỏ nhưng cực kỳ cần thiết cho việc tích lũy tài liệu dịch thuật sau này. Về tư duy AI, thay vì đặt câu hỏi theo bản năng và nhận lại những câu trả lời mơ hồ như trước, giờ đây em đã biết cách ra lệnh (Prompt Engineering) rõ ràng bằng việc phân vai, cung cấp ngữ cảnh cụ thể và định hình định dạng đầu ra. Nhờ vậy, AI thực sự trở thành một trợ lý ngôn ngữ đắc lực giúp em học từ vựng và phân tích cấu trúc ngữ pháp Hàn Quốc hiệu quả hơn.

Bên cạnh đó, việc tự tay dàn dựng giao diện web cũng rèn cho em tư duy thiết kế thông tin số: sắp xếp bố cục trực quan, tối ưu hóa trải nghiệm người dùng để thầy cô dễ dàng theo dõi hành trình của em."`}
          </p>
        </div>
      </article>

      {/* Challenges & Next Steps Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        <article 
          data-reveal 
          className="reveal soft-card hover-lift rounded-2xl bg-white p-7 border border-academic-border shadow-sm"
        >
          <span className="section-kicker text-academic-strong text-[10px] block font-bold mb-2">Thử thách</span>
          <h3 className="text-xl font-bold text-academic-ink">Khó khăn gặp phải</h3>
          <p className="mt-3 text-justify text-sm leading-relaxed text-academic-muted">
            Rào cản lớn nhất với em không nằm ở việc hoàn thành từng bài tập đơn lẻ, mà là làm sao kết nối chúng thành một thể thống nhất và mạch lạc trên nền tảng web. Việc tự căn chỉnh CSS, thiết kế bảng tiêu chí rubric hay tối ưu hóa chế độ in PDF thực sự là những thử thách hoàn toàn mới mẻ. Trong quá trình viết mã, em đã chủ động dùng AI để gỡ lỗi và tham khảo các ý tưởng giao diện. Tuy nhiên, em không bê nguyên những gì AI gợi ý. Em luôn dành thời gian chạy thử nghiệm, bóc tách dòng code để hiểu bản chất, sửa các lỗi hiển thị và thay thế toàn bộ dữ liệu mẫu bằng minh chứng học tập thực tế của mình.
          </p>
        </article>
        
        <article 
          data-reveal 
          className="reveal soft-card hover-lift rounded-2xl bg-white p-7 border border-academic-border shadow-sm"
        >
          <span className="section-kicker text-academic-strong text-[10px] block font-bold mb-2">Next steps</span>
          <h3 className="text-xl font-bold text-academic-ink">Kế hoạch hoàn thiện</h3>
          <p className="mt-3 text-justify text-sm leading-relaxed text-academic-muted">
            Để portfolio đạt trạng thái hoàn thiện nhất, em sẽ rà soát lại toàn bộ đường dẫn báo cáo PDF nhằm đảm bảo không xảy ra lỗi liên kết khi thầy cô click vào. Với các phần bài tập không yêu cầu sản phẩm riêng biệt, em sẽ ghi rõ bối cảnh thực tế trong báo cáo thay vì cố tình tạo ra những đường link trống hoặc dữ liệu ảo. Cuối cùng, em sẽ kiểm tra kỹ định dạng xuất file PDF từ trang web để chắc chắn bố cục trình bày không bị lệch hay mất thông tin khi nộp lên hệ thống đánh giá của nhà trường.
          </p>
        </article>
      </div>

      {/* Academic Integrity Pledge Banner */}
      <article 
        data-reveal 
        className="reveal relative overflow-hidden rounded-3xl bg-academic-blush/60 p-8 md:p-12 border border-academic-border shadow-soft text-center"
      >
        <div className="absolute right-0 bottom-0 h-40 w-40 rounded-full bg-academic-pastel/25 blur-xl -mr-10 -mb-10" />
        <div className="absolute left-6 top-6 text-academic-strong/20 shrink-0"><ShieldAlert size={48} /></div>

        <div className="relative z-10 space-y-4 max-w-4xl mx-auto">
          <div className="flex justify-center mb-2">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-academic-border text-academic-strong text-xs font-bold uppercase shadow-sm">
              <CheckSquare size={14} /> Cam kết Liêm chính Học thuật
            </span>
          </div>
          
          <h3 className="text-xl font-extrabold text-academic-navy">
            Chính xác, Minh bạch & Đạo đức công nghệ
          </h3>
          <p className="mx-auto max-w-3xl whitespace-pre-line text-sm italic leading-relaxed text-academic-ink/90">
            {`Là một sinh viên ULIS, em – Nguyễn Hương Giang – cam kết toàn bộ báo cáo và minh chứng số trong portfolio này là kết quả từ quá trình tự học và thực hành nghiêm túc của cá nhân. Việc sử dụng các mô hình AI chỉ giới hạn ở vai trò một công cụ hỗ trợ gỡ lỗi lập trình, tra cứu thông tin và gợi ý cách diễn đạt.

Em tin rằng công nghệ chỉ là đòn bẩy, còn tư duy tự học mới là giá trị cốt lõi. Em tuyệt đối không sao chép công sức của người khác, không ngụy tạo minh chứng học tập và không lạm dụng AI để thay thế năng lực tư duy độc lập của bản thân. Em chịu hoàn toàn trách nhiệm về tính trung thực của sản phẩm này! Em xin chân thành cảm ơn thầy cô đã theo dõi.`}
          </p>
        </div>
      </article>
    </div>
  );
}
