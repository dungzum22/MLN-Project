'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Info, Brain, BookOpenText, Layers, Users } from 'lucide-react';
import Link from 'next/link';

export default function VeDuAn() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Tránh hydration mismatch do extension trình duyệt bằng cách
  // chỉ render nội dung sau khi client đã mount.
  if (!isClient) {
    return <div />;
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link href="/">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-gray-600 hover:text-orange-600 mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </motion.button>
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-linear-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
              <Info className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gradient">Thông tin dự án</h1>
              <p className="text-gray-600 mt-1">Thông tin AI, tài liệu tham khảo, công nghệ và nhóm thực hiện</p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-8">
          {/* AI sử dụng */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-effect rounded-2xl p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white shrink-0">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">AI đã sử dụng</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Sử dụng <span className="font-semibold text-orange-600">Google Gemini</span> thông qua thư viện <code className="px-1 py-0.5 bg-orange-50 rounded">@google/generative-ai</code> cho trang <span className="font-medium">Chat AI</span>.
                  </li>
                  <li>
                    AI được dùng như <span className="font-semibold">công cụ hỗ trợ</span> để gợi ý nội dung và cải thiện trải nghiệm, <span className="font-semibold">không thay thế</span> việc biên soạn và kiểm chứng của nhóm.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Tài liệu tham khảo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-effect rounded-2xl p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white shrink-0">
                <BookOpenText className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Tài liệu tham khảo</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Tổng hợp từ giáo trình và tài liệu học phần về Kinh tế chính trị, Kinh tế thị trường định hướng XHCN.</li>
                  <li>Văn kiện, nghị quyết và tài liệu chính thức của Đảng và Nhà nước liên quan đến thể chế kinh tế thị trường ở Việt Nam.</li>
                  <li>Tài liệu kỹ thuật: Next.js, React, Tailwind CSS, Framer Motion, Lucide Icons, Google AI (Gemini).</li>
                </ul>
                <p className="text-sm text-gray-500 mt-3">Ghi chú: Danh mục sẽ được bổ sung/cập nhật theo yêu cầu và trong quá trình hoàn thiện.</p>
              </div>
            </div>
          </motion.div>

          {/* Công nghệ & Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-effect rounded-2xl p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Công nghệ & Stack</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><span className="font-semibold">Next.js 16</span> (App Router) & <span className="font-semibold">React 19</span></li>
                  <li><span className="font-semibold">Tailwind CSS 4</span> cho giao diện và tiện ích CSS</li>
                  <li><span className="font-semibold">Framer Motion</span> cho hiệu ứng chuyển động</li>
                  <li><span className="font-semibold">Lucide React</span> cho bộ biểu tượng</li>
                  <li><span className="font-semibold">Google Generative AI (Gemini)</span> cho tính năng Chat AI</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Nhóm thực hiện */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-effect rounded-2xl p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Nhóm thực hiện</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><span className="font-semibold">Lê Tiến Dũng</span></li>
                  <li><span className="font-semibold">Lê Hoàng Long</span></li>
                  <li><span className="font-semibold">Lê Huy Hoàng</span></li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Dự án <span className="font-semibold">không hoàn toàn phụ thuộc vào AI</span>. Nội dung được tổng hợp, biên soạn và kiểm chứng bởi nhóm; AI chỉ đóng vai trò hỗ trợ trong quá trình xây dựng giao diện và gợi ý nội dung.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


