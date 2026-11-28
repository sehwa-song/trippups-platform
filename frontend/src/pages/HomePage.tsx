import { useEffect, useState, type CSSProperties } from 'react'
import heroImage from '../assets/gyeongbokgung-night.jpg'
import seoulImage from '../assets/seoul.jpg'
import sokchoImage from '../assets/sokcho.jpg'
import jejuImage from '../assets/jeju.jpg'

const features = [
  {
    title: '여행지 탐색',
    description: '관심 있는 한국 여행지를 찾아보세요.',
    icon: <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5z" /></>,
  },
  {
    title: '내 여행',
    description: '선택한 여행지로 나만의 일정을 만들어보세요.',
    icon: <><rect x="4" y="6" width="16" height="15" rx="2" /><path d="M8 3v5m8-5v5M4 11h16m-11 5 2 2 4-4" /></>,
  },
  {
    title: '여행 메이트',
    description: '나와 잘 맞는 여행 메이트를 찾아보세요.',
    icon: <><circle cx="9" cy="8" r="3" /><path d="M3 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2m1-15a3 3 0 0 1 0 6m2 3a4 4 0 0 1 3 4v2" /></>,
  },
]

const destinations = [
  {
    name: '서울',
    image: seoulImage,
    alt: '광화문 앞 세종대로가 이어지는 서울 도심',
    description: '고궁과 활기찬 도심을 한 번에 만나는 여행.',
  },
  {
    name: '강원 속초',
    image: sokchoImage,
    alt: '설악산 공룡능선에서 바라본 울산바위',
    description: '설악산의 바위 능선과 속초 바다를 함께 만나는 여행.',
  },
  {
    name: '제주',
    image: jejuImage,
    alt: '바다를 배경으로 솟아 있는 제주 성산일출봉',
    description: '성산일출봉과 푸른 바다를 따라 걷는 섬 여행.',
  },
]

export default function HomePage() {
  const [scrollY, setScrollY] = useState(() => window.scrollY)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const heroStyle = {
    '--hero-scale': Math.max(0.94, 1 - Math.max(0, scrollY) / 4200),
    '--hero-radius': `${Math.min(24, Math.max(0, scrollY) / 11)}px`,
  } as CSSProperties

  return (
    <div className="home-page">
      <section className="hero" aria-labelledby="home-title">
        <div className="hero-panel" style={heroStyle}>
          <div className="hero-media">
            <img
              className="hero-image"
              src={heroImage}
              alt="경복궁과 N서울타워가 불을 밝힌 서울의 밤"
              fetchPriority="high"
            />
          </div>
          <div className="hero-content">
            <h1 id="home-title" lang="en">Find Your Next<br /> Korean Adventure</h1>
            <p>한국의 새로운 여행지를 발견하고, 나만의 여행을 계획해보세요.</p>
            <button className="hero-cta" type="button">
              여행 시작하기
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      <section className="home-section features-section" aria-labelledby="features-title">
        <h2 id="features-title">TripPups로 할 수 있는 것</h2>
        <div className="home-grid">
          {features.map(({ title, description, icon }) => (
            <article className="feature-card" key={title}>
              <span className="feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
                  {icon}
                </svg>
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section destinations-section" aria-labelledby="destinations-title">
        <h2 id="destinations-title">추천 여행지</h2>
        <p className="destination-intro">서울을 중심으로 전국의 여행지를 소개합니다.</p>
        <div className="home-grid">
          {destinations.map(({ name, image, alt, description }) => (
            <article className="destination-card" key={name}>
              <div className="destination-photo">
                <img src={image} alt={alt} loading="lazy" decoding="async" />
              </div>
              <div className="destination-content">
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
