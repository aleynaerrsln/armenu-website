import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import './Hero.css';

function TableModel() {
  const { scene } = useGLTF('/models/dinner-table.glb');
  return <primitive object={scene} scale={[1.5, 1.2, 1.5]} position={[-1.7, -1.5, 0.1]} />;
}

function PizzaModel({ position }) {
  const meshRef = useRef();
  const { scene } = useGLTF('/models/pizza2.glb');
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });
  
  return (
    <group ref={meshRef} position={position}>
      <primitive object={scene.clone()} scale={0.7} rotation={[0, 0, 0]} />
    </group>
  );
}

function Food2Model({ position }) {
  const meshRef = useRef();
  const { scene } = useGLTF('/models/food22.glb');
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });
  
  return (
    <group ref={meshRef} position={position}>
      <primitive object={scene.clone()} scale={2.4} rotation={[0, 0, 0]} />
    </group>
  );
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
            className="hero-table-scene"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
<Canvas 
  camera={{ position: [3, 2, 3], fov: 45 }}
  style={{ width: '100%', height: '100%' }}
>
  <Suspense fallback={null}>
    <ambientLight intensity={1} />
    <directionalLight position={[5, 5, 5]} intensity={1.5} />
    
    <TableModel />
    
    <PizzaModel position={[0.9, -0.55, -0.55]} />
    <Food2Model position={[-0.3, -0.55, -0.55]} />
    <PizzaModel position={[0.9, -0.55, -1.4]} />
    <Food2Model position={[-0.3, -0.55, -1.4]} />
    
    <OrbitControls 
      enableZoom={true}
      enablePan={false}
      target={[0.9, -0.8, -0.5]}
    />
  </Suspense>
</Canvas>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;