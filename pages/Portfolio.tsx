import React from 'react';
import { ArrowRight, BarChart2, Building } from 'lucide-react';
import { PORTFOLIO_1, PORTFOLIO_2 } from '../images/assets';

export const Portfolio: React.FC = () => {
  return (
    <div className="w-full pt-20">
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">성공의 기록</h1>
          <p className="text-xl md:text-2xl text-secondary font-light">"결과로 증명합니다. 고객과 함께 만든 성공 스토리입니다."</p>
        </div>
      </section>

      <section className="py-20 bg-off-white">
        <div className="container mx-auto px-4 md:px-6 space-y-20">
          
          {/* Case 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative h-64 lg:h-auto">
              <img src={PORTFOLIO_1} alt="빌딩 매각 사례" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute top-0 left-0 bg-secondary text-primary font-bold px-6 py-2">CASE STUDY 01</div>
            </div>
            <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-gray-500 mb-4 font-medium tracking-wide text-sm">
                <Building size={16} /> 상업용 빌딩 매각
              </div>
              <h3 className="text-3xl font-serif font-bold text-primary mb-6">노후 꼬마빌딩 매각 및<br/>신축 컨설팅</h3>
              
              <div className="space-y-6 mb-8 border-t border-gray-100 pt-6">
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Challenge</h4>
                  <p className="text-gray-700">30년 된 노후 건물로 누수 등 관리 이슈 발생, 공실률 40%로 수익률 악화.</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-secondary uppercase tracking-wider mb-1">Solution</h4>
                  <p className="text-gray-700">리모델링보다는 신축 부지로서의 가치를 재평가. 건축 도면 가설계 제공 및 우량 시공사 매칭을 통한 매수자 설득.</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-1">Result</h4>
                  <p className="text-2xl font-bold text-primary">시세 대비 120% 매각 성공</p>
                </div>
              </div>
            </div>
          </div>

          {/* Case 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-xl flex flex-col lg:flex-row-reverse">
             <div className="lg:w-1/2 relative h-64 lg:h-auto">
              <img src={PORTFOLIO_2} alt="상가 매입 사례" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute top-0 right-0 bg-primary text-secondary font-bold px-6 py-2">CASE STUDY 02</div>
            </div>
            <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-gray-500 mb-4 font-medium tracking-wide text-sm">
                <BarChart2 size={16} /> 수익형 부동산 매입
              </div>
              <h3 className="text-3xl font-serif font-bold text-primary mb-6">역세권 상가 통매입 및<br/>금융 레버리지 전략</h3>
              
              <div className="space-y-6 mb-8 border-t border-gray-100 pt-6">
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Challenge</h4>
                  <p className="text-gray-700">급매물 정보 입수, 하지만 매수자의 현금 유동성 부족으로 빠른 자금 조달 필요.</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-secondary uppercase tracking-wider mb-1">Solution</h4>
                  <p className="text-gray-700">제1금융권 지점장 출신 네트워크 활용, 최저 금리 대출 알선 및 최적의 레버리지(Leverage) 비율 산정.</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-1">Result</h4>
                  <p className="text-2xl font-bold text-primary">자기자본 수익률 12% 달성</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-20">
            <p className="text-gray-600 mb-6">귀하의 자산도 성공 사례가 될 수 있습니다.</p>
            <a href="/contact" className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors text-lg">
                상담 신청하러 가기 <ArrowRight size={20} />
            </a>
        </div>
      </section>
    </div>
  );
};