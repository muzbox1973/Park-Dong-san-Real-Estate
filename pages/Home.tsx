import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, TrendingUp, Handshake, ChevronRight, CheckCircle2, Building2 } from 'lucide-react';
import { HERO_BG, PROBLEM_IMG, FEATURE_IMG, SOCIAL_PROOF_BG } from '../images/assets';

export const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        >
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white pt-20">
          <div className="inline-block border-b-2 border-secondary mb-6 pb-1">
            <span className="text-secondary font-medium tracking-widest text-sm uppercase">Premium Real Estate Service</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
            부동산은 흔들려도,<br />
            <span className="text-secondary">박동산의 기준</span>은<br className="md:hidden"/> 흔들리지 않습니다.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            20년 무사고, 1,000건 이상의 성공적인 계약 체결.<br />
            귀하의 자산을 지키고 키우는 가장 든든한 파트너가 되겠습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 bg-secondary text-primary font-bold rounded hover:bg-white transition-all duration-300 text-lg shadow-lg hover:shadow-secondary/20">
              무료 방문상담 예약하기
            </Link>
            <Link to="/about" className="px-8 py-4 border border-white text-white font-medium rounded hover:bg-white/10 transition-all duration-300 text-lg">
              박동산 소개 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">왜 20년 경력의 전문가여야 할까요?</h2>
            <p className="text-gray-600">불확실한 시장 상황 속에서도 확실한 해답을 드립니다.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={PROBLEM_IMG} 
                alt="전문가 상담" 
                className="w-full h-[500px] object-cover rounded-sm shadow-2xl"
              />
              <div className="absolute -bottom-10 -right-10 bg-primary p-8 rounded-sm shadow-xl hidden md:block max-w-xs">
                 <p className="text-secondary font-serif text-2xl font-bold mb-2">Since 2004</p>
                 <p className="text-white text-sm">한 번 맺은 인연을 평생의 파트너십으로 발전시킵니다.</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-off-white p-8 rounded-sm border-l-4 border-secondary hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 mb-3">
                  <div className="p-3 bg-white rounded-full text-primary shadow-sm">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">복잡한 권리 관계와 불안</h3>
                    <p className="text-gray-600 leading-relaxed">
                      "등기부등본만으로는 알 수 없는 히스토리가 있습니다."<br/>
                      <span className="font-semibold text-primary">Solution:</span> 현미경 권리 분석으로 숨은 리스크를 0%로 만듭니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-off-white p-8 rounded-sm border-l-4 border-secondary hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 mb-3">
                  <div className="p-3 bg-white rounded-full text-primary shadow-sm">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">자산 가치 상승의 니즈</h3>
                    <p className="text-gray-600 leading-relaxed">
                      "단순 중개만으로는 자산이 늘어나지 않습니다."<br/>
                      <span className="font-semibold text-primary">Solution:</span> 리모델링 및 임대차 재구성을 통한 토탈 밸류업(Value-up) 전략을 제안합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 md:py-32 bg-off-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-secondary font-bold tracking-wider uppercase mb-2 block">Our Core Values</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">박동산이 약속하는 3가지 원칙</h2>
            </div>
            <Link to="/services" className="flex items-center text-primary font-bold hover:text-secondary transition-colors">
              서비스 더보기 <ChevronRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6 overflow-hidden rounded h-48">
                 <img src={FEATURE_IMG} alt="Data Analysis" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">철저한 데이터 분석</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                감이 아닌 빅데이터와 꼼꼼한 현장 실사(Imjang)에 기반하여 정확한 가치를 평가합니다. 시장의 흐름을 읽는 눈으로 최적의 타이밍을 잡아드립니다.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6 overflow-hidden rounded h-48">
                 <div className="w-full h-full bg-primary flex items-center justify-center">
                    <Handshake className="text-secondary w-16 h-16" />
                 </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">법률/세무 원스톱 네트워크</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                전문 변호사, 세무사와의 긴밀한 협업을 통해 계약 단계부터 절세 전략까지 한 번에 수립합니다. 복잡한 문제를 단순하게 해결해드립니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6 overflow-hidden rounded h-48">
                 <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <CheckCircle2 className="text-primary w-16 h-16" />
                 </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">끝까지 책임지는 사후 관리</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                계약 체결이 끝이 아닙니다. 잔금 처리부터 명도, 그리고 새로운 임차인 세팅까지. 고객님이 만족하실 때까지 완벽하게 케어합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 md:py-32 relative bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${SOCIAL_PROOF_BG})` }}>
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">건물주님들이 박동산을 신뢰하는 이유</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md p-10 rounded border border-white/20 text-white">
              <div className="mb-6 text-secondary">★★★★★</div>
              <p className="text-lg font-light italic mb-6 leading-relaxed opacity-90">
                "강남 빌딩 매입, 처음이라 금액도 크고 막막했는데 박 대표님의 권리 분석 덕분에 숨은 리스크를 피했습니다. 등기부 너머의 사람 관계까지 읽어내는 능력에 감탄했습니다."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary font-bold text-xl">김</div>
                <div>
                  <p className="font-bold">김OO 님</p>
                  <p className="text-sm text-gray-300">50대 법인 대표 / 강남 빌딩 매입</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-10 rounded border border-white/20 text-white">
              <div className="mb-6 text-secondary">★★★★★</div>
              <p className="text-lg font-light italic mb-6 leading-relaxed opacity-90">
                "공실 문제로 골머리를 앓던 상가, MD 구성을 새로 제안받고 프랜차이즈 우량 임차인을 맞췄습니다. 수익률이 3%에서 5%대로 뛰었습니다. 감사합니다."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary font-bold text-xl">이</div>
                <div>
                  <p className="font-bold">이OO 님</p>
                  <p className="text-sm text-gray-300">60대 건물주 / 상가 임대 관리</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-secondary font-bold tracking-wider uppercase mb-2 block">Location</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">언제든 사무실 문은 열려 있습니다.</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                편안한 분위기에서 따뜻한 차 한 잔과 함께 고객님의 고민을 나누고 싶습니다.<br/>
                사전 예약 후 방문해주시면 대기 없이 깊이 있는 상담이 가능합니다.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-off-white rounded text-primary">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Office</h4>
                    <p className="text-gray-600">서울특별시 강남구 테헤란로 123, 동산타워 5층</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                   <div className="p-3 bg-off-white rounded text-primary">
                    <CheckCircle2 size={24} />
                  </div>
                   <div>
                    <h4 className="font-bold text-lg mb-1">Open Hours</h4>
                    <p className="text-gray-600">월 - 금: 09:00 - 19:00 (주말/공휴일 예약제 운영)</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Link to="/contact" className="inline-block px-8 py-3 bg-primary text-white font-bold rounded hover:bg-primary/90 transition-colors">
                  상담 예약하기
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-200 h-[400px] rounded-sm overflow-hidden shadow-lg relative">
              {/* Google Maps Placeholder */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.0450289635023!2d127.02761031530945!3d37.49809697981067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1598c361969%3A0x7d25243173d102f4!2z6rCV64Ko66eIIOqwleuCqOuMgOroIdWVkQ!5e0!3m2!1sko!2skr!4v1623812345678!5m2!1sko!2skr" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};