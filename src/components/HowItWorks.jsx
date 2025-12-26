import { motion } from 'framer-motion';
import './HowItWorks.css';

function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'QR Kodu Okutun',
      description: 'Müşterileriniz menüdeki QR kodu telefonlarıyla okutarak AR deneyimini başlatır.'
    },
    {
      number: '02',
      title: 'Yemeği 3D Görün',
      description: 'Seçtikleri yemek masalarında gerçek boyutunda 3D olarak belirir.'
    },
    {
      number: '03',
      title: 'Karar Verin',
      description: 'Yemeği AR ile inceledikten sonra siparişinize ekleyin veya başka yemeklere göz atın.'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <motion.div
          className="how-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Nasıl Çalışır?</h2>
          <p>3 basit adımda AR menü deneyimi</p>
        </motion.div>

        <div className="how-content">
          <div className="steps-container">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="step-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="phone-demo"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="phone-frame">
              <div className="phone-notch"></div>
<iframe
  src="https://armenuqr.com/menu/remi?section=salon&embed=1"
  title="AR Menü Demo"
  className="phone-screen"
/>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;