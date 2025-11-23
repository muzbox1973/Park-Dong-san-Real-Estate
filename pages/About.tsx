import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';
import { ABOUT_PROFILE } from '../images/assets';

export const About: React.FC = () => {
  return (
    <div className="w-full pt-20">
      {/* Header */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">20년의 길</h1>
          <p className="text-xl md:text-2xl text-secondary font-light">"숫자보다 사람을, 계약보다 신의를 먼저 생각합니다."</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            <div className="lg:w-1/3">
              <div className="relative">
                <div className="absolute top-4 -left-4 w-full h-full border-2 border-secondary rounded-sm"></div>
                <img src={ABOUT_PROFILE} alt="박동산 대표" className="w-full rounded-sm shadow-xl relative z-10" />
              </div>
              <div className="mt-8 text-center lg:text-left">
                <h3 className="text-2xl font-serif font-bold text-primary">박 동 산</h3>
                <p className="text-gray-500 mb-4">공인중개사 / 부동산 자산관리사</p>
                <div className="flex flex-col gap-2 text-sm text-gray-600">
                  <p>• 제 15회 공인중개사 자격 취득</p>
                  <p>• K-CPM (부동산자산관리사) 수료</p>
                  <p>• 2020년 서울시 우수 중개업소 표창</p>
                  <p>• 전) 대형 법인 중개법인 이사</p>
                  <p>• 현) 박동산 부동산 중개법인 대표</p>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-primary mb-6 relative inline-block">
                  인사말
                  <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-secondary"></span>
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                  <p>
                    안녕하십니까, <span className="font-bold text-primary">공인중개사 박동산</span>입니다.
                  </p>
                  <p>
                    20년 전, 작은 원룸 중개로 이 일을 시작했을 때가 기억납니다. 사회초년생 고객님이 첫 전셋집을 구하고 기뻐하던 그 미소를 보며, 중개업이란 단순히 공간을 거래하는 것이 아니라 누군가의 '꿈'과 '미래'를 다루는 일임을 깨달았습니다.
                  </p>
                  <p>
                    지금은 수백억 원대의 빌딩을 중개하고 기업의 자산을 관리하지만, 제가 지켜온 원칙은 단 하나입니다. <span className="bg-secondary/20 px-1">"고객의 자산을 내 것처럼 아끼자."</span>
                  </p>
                  <p>
                    부동산 시장은 끊임없이 변합니다. 하지만 정직과 신뢰라는 가치는 변하지 않습니다. 20년간 쌓아온 데이터와 경험, 그리고 굳건한 신념으로 귀하의 자산 증식을 위한 최고의 파트너가 되겠습니다.
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-primary mb-10">History</h2>
                <div className="border-l-2 border-gray-200 ml-4 space-y-10">
                  <div className="relative pl-10">
                    <div className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-secondary border-4 border-white shadow-sm"></div>
                    <span className="text-secondary font-bold text-lg block mb-1">2024</span>
                    <h4 className="text-xl font-bold text-primary">누적 거래액 5,000억 달성</h4>
                    <p className="text-gray-600">강남권 주요 상업용 부동산 거래 주도</p>
                  </div>
                  <div className="relative pl-10">
                    <div className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-gray-300 border-4 border-white shadow-sm"></div>
                    <span className="text-secondary font-bold text-lg block mb-1">2015</span>
                    <h4 className="text-xl font-bold text-primary">박동산 부동산 중개법인 설립</h4>
                    <p className="text-gray-600">전문적인 자산 관리 서비스 시작</p>
                  </div>
                  <div className="relative pl-10">
                    <div className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-gray-300 border-4 border-white shadow-sm"></div>
                    <span className="text-secondary font-bold text-lg block mb-1">2010</span>
                    <h4 className="text-xl font-bold text-primary">상업용 부동산 전문 팀장 승진</h4>
                    <p className="text-gray-600">빌딩/오피스 중개 전문화</p>
                  </div>
                   <div className="relative pl-10">
                    <div className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-gray-300 border-4 border-white shadow-sm"></div>
                    <span className="text-secondary font-bold text-lg block mb-1">2004</span>
                    <h4 className="text-xl font-bold text-primary">공인중개사 자격 취득 및 실무 시작</h4>
                    <p className="text-gray-600">부동산 업계 입문</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-off-white p-6 rounded text-center">
                  <Award className="mx-auto text-secondary mb-3 w-10 h-10" />
                  <h4 className="font-bold text-primary mb-2">전문 자격</h4>
                  <p className="text-sm text-gray-600">공인중개사 & 자산관리사<br/>더블 라이센스 보유</p>
                </div>
                <div className="bg-off-white p-6 rounded text-center">
                  <Users className="mx-auto text-secondary mb-3 w-10 h-10" />
                  <h4 className="font-bold text-primary mb-2">인적 네트워크</h4>
                  <p className="text-sm text-gray-600">세무/법무/건축<br/>분야별 전문가 협업</p>
                </div>
                <div className="bg-off-white p-6 rounded text-center">
                  <BookOpen className="mx-auto text-secondary mb-3 w-10 h-10" />
                  <h4 className="font-bold text-primary mb-2">데이터 분석</h4>
                  <p className="text-sm text-gray-600">빅데이터 기반<br/>상권 및 시세 분석</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};