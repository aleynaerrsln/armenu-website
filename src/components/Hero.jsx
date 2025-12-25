import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense, useRef, useState } from 'react';
import './Hero.css';

function TableModel() {
  const { scene } = useGLTF('/models/dinner-table.glb');
  return <primitive object={scene} scale={[1.5, 1.2, 1.5]} position={[-1.7, -1.5, 0.1]} />;
}

function PizzaModel({ position, onClick }) {
  const meshRef = useRef();
  const { scene } = useGLTF('/models/pizza2.glb');
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });
  
  return (
    <group 
      ref={meshRef} 
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        onClick && onClick();
      }}
      onPointerOver={() => document.body.style.cursor = 'pointer'}
      onPointerOut={() => document.body.style.cursor = 'default'}
    >
      <primitive object={scene.clone()} scale={0.7} rotation={[0, 0, 0]} />
    </group>
  );
}

function Food2Model({ position, onClick }) {
  const meshRef = useRef();
  const { scene } = useGLTF('/models/food22.glb');
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });
  
  return (
    <group 
      ref={meshRef} 
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        onClick && onClick();
      }}
      onPointerOver={() => document.body.style.cursor = 'pointer'}
      onPointerOut={() => document.body.style.cursor = 'default'}
    >
      <primitive object={scene.clone()} scale={2.4} rotation={[0, 0, 0]} />
    </group>
  );
}

function Food3Model({ position, onClick }) {
  const meshRef = useRef();
  const { scene } = useGLTF('/models/food33.glb');
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });
  
  return (
    <group 
      ref={meshRef} 
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        onClick && onClick();
      }}
      onPointerOver={() => document.body.style.cursor = 'pointer'}
      onPointerOut={() => document.body.style.cursor = 'default'}
    >
      <primitive object={scene.clone()} scale={0.21} rotation={[0, 0, 0]} />
    </group>
  );
}

function Food4Model({ position, onClick }) {
  const meshRef = useRef();
  const { scene } = useGLTF('/models/food4.glb');
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });
  
  return (
    <group 
      ref={meshRef} 
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        onClick && onClick();
      }}
      onPointerOver={() => document.body.style.cursor = 'pointer'}
      onPointerOut={() => document.body.style.cursor = 'default'}
    >
      <primitive object={scene.clone()} scale={0.41} rotation={[0, 0, 0]} />
    </group>
  );
}

function Food5Model({ position, onClick }) {
  const meshRef = useRef();
  const { scene } = useGLTF('/models/food3.glb');
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });
  
  return (
    <group 
      ref={meshRef} 
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        onClick && onClick();
      }}
      onPointerOver={() => document.body.style.cursor = 'pointer'}
      onPointerOut={() => document.body.style.cursor = 'default'}
    >
      <primitive object={scene.clone()} scale={1.5} rotation={[0, 2, 0]} />
    </group>
  );
}

function Food6Model({ position, onClick }) {
  const meshRef = useRef();
  const { scene } = useGLTF('/models/food5.glb');
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });
  
  return (
    <group 
      ref={meshRef} 
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        onClick && onClick();
      }}
      onPointerOver={() => document.body.style.cursor = 'pointer'}
      onPointerOut={() => document.body.style.cursor = 'default'}
    >
      <primitive object={scene.clone()} scale={0.16} rotation={[0, 0, 0]} />
    </group>
  );
}

function CandleModel() {
  const { scene } = useGLTF('/models/candle.glb');
  return <primitive object={scene} scale={1.1} position={[0.3, -0.55, -0.95]} rotation={[0, 0, 0]} />;
}

function FoodModal({ food, onClose }) {
  if (!food) return null;
  
  return (
    <motion.div 
      className="food-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="food-modal"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>✕</button>
        
        <div className="food-modal-canvas">
          <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={1} />
              <directionalLight position={[5, 5, 5]} intensity={1.5} />
              <pointLight position={[-5, -5, -5]} intensity={0.5} />
              
              {food.type === 'pizza' ? (
                <PizzaModel position={[0, 0, 0]} />
              ) : food.type === 'food3' ? (
                <Food3Model position={[0, 0, 0]} />
              ) : food.type === 'food4' ? (
                <Food4Model position={[0, 0, 0]} />
              ) : food.type === 'food5' ? (
                <Food5Model position={[0, 0, 0]} />
              ) : food.type === 'food6' ? (
                <Food6Model position={[0, 0, 0]} />
              ) : (
                <Food2Model position={[0, 0, 0]} />
              )}
              
              <OrbitControls 
                enableZoom={true}
                enablePan={true}
                autoRotate={true}
                autoRotateSpeed={3}
              />
            </Suspense>
          </Canvas>
        </div>
        
        <div className="food-modal-info">
          <h3>{food.name}</h3>
          <p>🖱️ Fare ile döndürün • 🔍 Yakınlaştırın</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Hero() {
  const [selectedFood, setSelectedFood] = useState(null);

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
                
                {/* Mum - Masa ortası */}
                <CandleModel />
                
                {/* Yemekler */}
                <PizzaModel 
                  position={[0.9, -0.55, -0.55]} 
                  onClick={() => setSelectedFood({ type: 'pizza', name: 'Margarita Pizza' })}
                />
                <Food3Model 
                  position={[-0.3, -0.55, -0.55]} 
                  onClick={() => setSelectedFood({ type: 'food3', name: 'Özel Tatlı' })}
                />
                <Food2Model 
                  position={[0.9, -0.55, -1.4]} 
                  onClick={() => setSelectedFood({ type: 'food2', name: 'Özel Yemek' })}
                />
                <Food4Model 
                  position={[-0.3, -0.55, -1.4]} 
                  onClick={() => setSelectedFood({ type: 'food4', name: 'Özel Yemek 4' })}
                />
                <Food5Model 
                  position={[1.5, -0.55, -0.95]} 
                  onClick={() => setSelectedFood({ type: 'food5', name: 'Yeni Yemek' })}
                />
                <Food6Model 
                  position={[-0.85, -0.55, -0.95]} 
                  onClick={() => setSelectedFood({ type: 'food6', name: 'Son Yemek' })}
                />
                
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

      <AnimatePresence>
        {selectedFood && (
          <FoodModal 
            food={selectedFood} 
            onClose={() => setSelectedFood(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}

export default Hero;