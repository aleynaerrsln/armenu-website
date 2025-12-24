import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';
import './Hero.css';

function PizzaModel() {
  const { scene } = useGLTF('/models/pizza2.glb');
  scene.rotation.x = -Math.PI / 3;
  return <primitive object={scene} scale={2} />;
}

function Food2Model() {
  const { scene } = useGLTF('/models/food22.glb');
  scene.rotation.x = -Math.PI / 3;
  return <primitive object={scene} scale={6} />;
}

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
            <div className="showcase-3d-hero">
              <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
                <Suspense fallback={null}>
                  <ambientLight intensity={0.8} />
                  <directionalLight position={[10, 10, 5]} intensity={1} />
                  <PizzaModel />
                  <OrbitControls 
                    enableZoom={true}
                    enablePan={false}
                    autoRotate={true}
                    autoRotateSpeed={2}
                  />
                </Suspense>
              </Canvas>
            </div>



            <div className="showcase-3d-hero showcase-3d-hero-2">
              <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
                <Suspense fallback={null}>
                  <ambientLight intensity={0.8} />
                  <directionalLight position={[10, 10, 5]} intensity={1} />
                  <Food2Model />
                  <OrbitControls 
                    enableZoom={true}
                    enablePan={false}
                    autoRotate={true}
                    autoRotateSpeed={2}
                  />
                </Suspense>
              </Canvas>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;