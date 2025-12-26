import './Stats.css';

function Stats() {
  const text = "MASANIZDA 3D • GERÇEKLİĞİ DEĞİŞTİRİN • AR MENÜ • GELECEĞİ YAŞAYIN • MASANIZDA 3D • GERÇEKLİĞİ DEĞİŞTİRİN • AR MENÜ • GELECEĞİ YAŞAYIN • ";

  return (
    <section className="stats-section">
      <div className="marquee">
        <div className="marquee-content">
          <span>{text}</span>
          <span>{text}</span>
        </div>
      </div>
    </section>
  );
}

export default Stats;
