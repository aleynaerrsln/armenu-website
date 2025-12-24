import { motion } from 'framer-motion';
import './Features.css';

function Features() {
  const features = [
    {
      icon: '📱',
      title: 'QR ile Kolay Erişim',
      description: 'Müşterileriniz menüdeki QR kodu okutarak anında 3D yemekleri görüntüleyebilir.'
    },
    {
      icon: '🎨',
      title: 'Gerçekçi 3D Modeller',
      description: 'Yemeklerinizin profesyonel, fotorealistik 3D modellerini oluşturuyoruz.'
    },
    {
      icon: '💡',
      title: 'Artırılmış Sipariş',
      description: 'Müşteriler yemeği görerek sipariş verir, memnuniyet artar.'
    },
    {
      icon: '🚀',
      title: 'Kolay Entegrasyon',
      description: 'Mevcut menünüze kolayca entegre edin, uygulama indirme gerektirmez.'
    },
    {
      icon: '📊',
      title: 'Analitik Raporlar',
      description: 'Hangi yemeklerin daha çok görüntülendiğini takip edin.'
    },
    {
      icon: '🌍',
      title: 'Çok Dilli Destek',
      description: 'Menünüzü farklı dillerde sunarak uluslararası müşterilere ulaşın.'
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <motion.div 
          className="features-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Neden AR Menü?</h2>
          <p>Restoranınız için yeni nesil dijital menü deneyimi</p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;