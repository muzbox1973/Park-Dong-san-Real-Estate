import React from 'react';
import { Briefcase, Key, PieChart, Check } from 'lucide-react';
import { SERVICE_CHART, SERVICE_CONSULT } from '../images/assets';

export const Services: React.FC = () => {
  return (
    <div className="w-full pt-20">
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">자산 관리 솔루션</h1>
          <p className="text-xl md:text-2xl text-secondary font-light">"매입부터 매각까지, 부동산 생애주기(Life-cycle) 전반을 관리합니다."</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Service 1 */}
            <div className="bg-off-white rounded-lg p-8 hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-secondary mb-6 shadow-lg">
                <Briefcase size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">상업용 부동산 매매</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                빌딩, 상가, 오피스 등 수익형 부동산 전문 중개. 단순 매칭이 아닌, 입지 분석부터 향후 엑시트(Exit) 전략까지 포함된 정밀 보고서를 제공합니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-700"><Check className="text-secondary w-4 h-4"/> 빅데이터 상권 분석</li>
                <li className="flex items-center gap-3 text-sm text-gray-700"><Check className="text-secondary w-4 h-4"/> 적정 매매가 산출</li>
                <li className="flex items-center gap-3 text-sm text-gray-700"><Check className="text-secondary w-4 h-4"/> 계약 및 등기 이전 관리</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-off-white rounded-lg p-8 hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-secondary mb-6 shadow-lg">
                <Key size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">임대차 관리 (LM)</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                건물의 가치는 어떤 임차인이 들어오느냐에 따라 결정됩니다. 병의원, 프랜차이즈 등 우량 임차인(Key Tenant) 유치를 최우선으로 합니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-700"><Check className="text-secondary w-4 h-4"/> 임차인 구성(MD) 기획</li>
                <li className="flex items-center gap-3 text-sm text-gray-700"><Check className="text-secondary w-4 h-4"/> 렌트프리 및 조건 조율</li>
                <li className="flex items-center gap-3 text-sm text-gray-700"><Check className="text-secondary w-4 h-4"/> 연체 및 명도 관리</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-off-white rounded-lg p-8 hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-secondary mb-6 shadow-lg">
                <PieChart size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">자산 관리 자문</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                부동산은 세금과의 싸움입니다. 상속, 증여를 고려한 장기적인 포트폴리오 재구성 및 절세 전략을 전문가와 협업하여 제공합니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-700"><Check className="text-secondary w-4 h-4"/> 보유세/양도세 시뮬레이션</li>
                <li className="flex items-center gap-3 text-sm text-gray-700"><Check className="text-secondary w-4 h-4"/> 법인 설립 및 전환 컨설팅</li>
                <li className="flex items-center gap-3 text-sm text-gray-700"><Check className="text-secondary w-4 h-4"/> 부동산 포트폴리오 진단</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-20 bg-off-white border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg h-80">
              <img src={SERVICE_CHART} alt="분석 차트" className="w-full h-full object-cover" />
            </div>
            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg h-80">
              <img src={SERVICE_CONSULT} alt="사무실 전경" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">지금 바로 전문가의 제안을 받아보세요</h2>
            <button className="px-8 py-3 bg-secondary text-white font-bold rounded hover:bg-secondary/90 transition-colors">
              서비스 제안서 요청
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};