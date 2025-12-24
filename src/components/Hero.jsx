import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Yemeklerinizi<br />
              <span className="gradient-text">Artırılmış Gerçekliğe</span><br />
              Uyarlıyoruz
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              QR kod okutun, menüdeki yemekleri masanızda 3D olarak görün.
              Restoran deneyiminizi bir üst seviyeye taşıyın.
            </motion.p>

            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <button className="btn btn-primary">Demo İzle</button>
              <button className="btn btn-secondary">İletişime Geç</button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <div className="phone-mockup">
              <div className="phone-screen">
                <motion.div 
                  className="ar-indicator"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity 
                  }}
                >
                  AR
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;