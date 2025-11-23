import React, { useState } from 'react';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import { CONTACT_HERO } from '../images/assets';

export const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="w-full pt-20">
       <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${CONTACT_HERO})` }}
        >
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">파트너십 요청</h1>
          <p className="text-xl text-gray-200">"귀하의 소중한 자산, 전문가와 상의하십시오."</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  모든 상담은 박동산 대표가 직접 1차 검토 후 진행합니다.<br/>
                  프라이버시를 철저히 보장하며, 고객님의 상황에 맞는 최적의 솔루션을 준비하겠습니다.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-off-white rounded-lg">
                  <MapPin className="text-secondary w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Address</h3>
                    <p className="text-gray-600 mb-2">서울특별시 강남구 테헤란로 123, 동산타워 5층</p>
                    <p className="text-xs text-gray-500">* 발렛 파킹 가능 / 지하철 2호선 역삼역 3번 출구 도보 3분</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-off-white rounded-lg">
                  <Phone className="text-secondary w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Phone</h3>
                    <p className="text-gray-600">02-1234-5678</p>
                    <p className="text-xs text-gray-500">* 상담 가능 시간: 평일 09:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-off-white rounded-lg">
                  <Mail className="text-secondary w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Email</h3>
                    <p className="text-gray-600">contact@parkdongsan.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 md:p-10 rounded-lg shadow-2xl border border-gray-100">
              {formStatus === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <Clock size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">상담 신청이 완료되었습니다.</h3>
                  <p className="text-gray-600">
                    검토 후 담당자가 24시간 이내에<br/>기재해주신 연락처로 연락드리겠습니다.
                  </p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="mt-8 text-secondary underline hover:text-primary transition-colors"
                  >
                    새로운 문의 작성하기
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-primary mb-6">상담 신청서 작성</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">성함</label>
                      <input 
                        required 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 rounded border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                        placeholder="홍길동"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">연락처</label>
                      <input 
                        required 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-3 rounded border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                        placeholder="010-0000-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="type" className="text-sm font-medium text-gray-700">관심 분야 (선택)</label>
                    <select id="type" className="w-full px-4 py-3 rounded border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all bg-white">
                      <option value="">선택해주세요</option>
                      <option value="buy">건물/상가 매입</option>
                      <option value="sell">부동산 매각</option>
                      <option value="manage">임대/자산 관리</option>
                      <option value="other">기타 문의</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">문의 내용</label>
                    <textarea 
                      required 
                      id="message" 
                      rows={5}
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all resize-none"
                      placeholder="보유 자산 현황이나 궁금하신 점을 자유롭게 적어주세요."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className={`w-full py-4 bg-primary text-white font-bold rounded shadow-lg hover:bg-primary/90 transition-all duration-300 ${formStatus === 'submitting' ? 'opacity-70 cursor-wait' : ''}`}
                  >
                    {formStatus === 'submitting' ? '처리중...' : '상담 신청 완료'}
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    입력하신 정보는 상담 목적으로만 사용되며, 안전하게 보호됩니다.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};