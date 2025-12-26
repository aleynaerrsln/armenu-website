import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense, useRef, useState } from 'react';
import { FaHandPointer } from 'react-icons/fa';
import { HiArrowsExpand } from 'react-icons/hi';
import './Hero.css';

function TableModel() {
  const { scene } = useGLTF('/models/dinner-table.glb');
  return <primitive object={scene} scale={[1.5, 1.2, 1.5]} position={[-1.7, -1.5, 0.1]} />;
}

function PizzaModel({ position, onClick, isModal }) {
  const root = useRef();
  const { scene } = useGLTF('/models/pizza2.glb');

  useFrame(() => {
    if (root.current && !isModal) {
      root.current.rotation.y += 0.01;
    }
  });

  return (
    <group position={position}>
      <primitive
        ref={root}
        object={scene.clone()}
        scale={isModal ? 3 : 0.7}
        onClick={(e) => {
          e.stopPropagation();
          onClick && onClick();
        }}
        onPointerOver={() => (document.body.style.cursor = 'pointer')}
        onPointerOut={() => (document.body.style.cursor = 'default')}
      />
    </group>
  );
}

function Food2Model({ position, onClick, isModal }) {
  const meshRef = useRef();
  const { scene } = useGLTF('/models/food22.glb');

  useFrame(() => {
    if (meshRef.current && !isModal) {
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
      onPointerOver={() => (document.body.style.cursor = 'pointer')}
      onPointerOut={() => (document.body.style.cursor = 'default')}
    >
      <primitive object={scene.clone()} scale={isModal ? 10 : 2.4} />
    </group>
  );
}

function Food3Model({ position, onClick, isModal }) {
  const meshRef = useRef();
  const { scene } = useGLTF('/models/food33.glb');
  
  useFrame(() => {
    if (meshRef.current && !isModal) {
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
      <primitive object={scene.clone()} scale={isModal ? 0.5 : 0.21} rotation={[0, 0, 0]} />
    </group>
  );
}

function Food4Model({ position, onClick, isModal }) {
  const meshRef = useRef();
  const { scene } = useGLTF('/models/food4.glb');
  
  useFrame(() => {
    if (meshRef.current && !isModal) {
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
      <primitive object={scene.clone()} scale={isModal ? 1.5 : 0.41} rotation={[0, 0, 0]} />
    </group>
  );
}

function Food5Model({ position, onClick, isModal }) {
  const meshRef = useRef();
  const { scene } = useGLTF('/models/food3.glb');
  
  useFrame(() => {
    if (meshRef.current && !isModal) {
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
      <primitive object={scene.clone()} scale={isModal ? 4 : 1.5} rotation={[0, 2, 0]} />
    </group>
  );
}

function Food6Model({ position, onClick, isModal }) {
  const meshRef = useRef();
  const { scene } = useGLTF('/models/food5.glb');
  
  useFrame(() => {
    if (meshRef.current && !isModal) {
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
      <primitive object={scene.clone()} scale={isModal ? 0.5 : 0.16} rotation={[0, 0, 0]} />
    </group>
  );
}

function CandleModel({ onClick, isModal }) {
  const { scene } = useGLTF('/models/candle.glb');
  
  if (isModal) {
    return <primitive object={scene.clone()} scale={2} position={[0, 0, 0]} />;
  }
  
  return (
    <primitive 
      object={scene.clone()} 
      scale={1.1} 
      position={[0.3, -0.55, -0.95]} 
      onClick={(e) => {
        e.stopPropagation();
        onClick && onClick();
      }}
      onPointerOver={() => (document.body.style.cursor = 'pointer')}
      onPointerOut={() => (document.body.style.cursor = 'default')}
    />
  );
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
      <div
        style={{
          position: 'absolute',
          left: '800px',
          top: '160px',
          width: '480px',
          height: '450px',
          background: 'rgba(10, 10, 10, 0.55)',
          backdropFilter: 'blur(20px)',
          borderRadius: '22px',
          overflow: 'hidden',
          boxShadow: '0 25px 80px rgba(0,0,0,0.6)',
          border: '1px solid rgba(255,255,255,0.08)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-glass" onClick={onClose}>
          ✕
        </button>

        <Canvas 
          camera={{ position: [0, 0, 3], fov: 50 }} 
          style={{ width: '100%', height: '100%' }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />

{food.type === 'pizza' ? (
  <PizzaModel position={[0, 0, 0]} isModal={true} />
) : food.type === 'candle' ? (
  <CandleModel isModal={true} />
) : food.type === 'food3' ? (
  <Food3Model position={[0, 0, 0]} isModal={true} />
) : food.type === 'food4' ? (
  <Food4Model position={[0, 0, 0]} isModal={true} />
) : food.type === 'food5' ? (
  <Food5Model position={[0, 0, 0]} isModal={true} />
) : food.type === 'food6' ? (
  <Food6Model position={[0, 0, 0]} isModal={true} />
) : (
  <Food2Model position={[0, 0, 0]} isModal={true} />
)}

            <OrbitControls enableZoom={true} autoRotate={false} />
          </Suspense>
        </Canvas>

        <p style={{
          position: 'absolute',
          bottom: '15px',
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: '18px',
          fontWeight: 600,
          color: '#ffffff',
          zIndex: 300,
          pointerEvents: 'none'
        }}>
          {food.name}
        </p>
      </div>
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
              <a 
                href="https://wa.me/905050093842" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
                WhatsApp ile İletişime Geç
              </a>
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
              raycaster={{ params: { Mesh: { threshold: 0.15 } } }}
              style={{ width: '100%', height: '100%' }}
            >
              <Suspense fallback={null}>
                <ambientLight intensity={1} />
                <directionalLight position={[5, 5, 5]} intensity={1.5} />
                
                <TableModel />
<CandleModel 
  onClick={() => setSelectedFood({ type: 'candle', name: 'Dekoratif Vazo' })}
/>
                
                <PizzaModel 
                  position={[0.9, -0.55, -0.55]} 
                  onClick={() => setSelectedFood({ type: 'pizza', name: 'Margarita Pizza' })}
                />
                <Food3Model 
                  position={[-0.3, -0.55, -0.55]} 
                  onClick={() => setSelectedFood({ type: 'food3', name: 'Latte' })}
                />
                <Food2Model 
                  position={[0.9, -0.55, -1.4]} 
                  onClick={() => setSelectedFood({ type: 'food2', name: 'Muzlu Çikolatalı Pankek' })}
                />
                <Food4Model 
                  position={[-0.3, -0.55, -1.4]} 
                  onClick={() => setSelectedFood({ type: 'food4', name: 'Patates Kızartması ve Tost' })}
                />
                <Food5Model 
                  position={[1.5, -0.55, -0.95]} 
                  onClick={() => setSelectedFood({ type: 'food5', name: 'Patates Püresi Ve Mevsim Salata' })}
                />
                <Food6Model 
                  position={[-0.85, -0.55, -0.95]} 
                  onClick={() => setSelectedFood({ type: 'food6', name: 'Çikolatalı Pasta' })}
                />
                
                <OrbitControls
                  enableZoom={true}
                  enablePan={true}
                  mouseButtons={{
                    LEFT: 0,
                    MIDDLE: 1,
                    RIGHT: 2
                  }}
                  target={[0.9, -0.8, -0.5]}
                />
              </Suspense>
            </Canvas>

            <div className="drag-hint-hero">
              <div style={{position: 'relative'}}>
                <FaHandPointer size={30} />
                <HiArrowsExpand size={18} style={{position: 'absolute', top: -10, right: -8, opacity: 0.6}} />
              </div>
            </div>
            <div className="table-instruction">
  <span>💡</span>
  <p>Yakınlaştırarak Yemeklere tıklayıp yakından inceleyebilirsiniz</p>
</div>
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