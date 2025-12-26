import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';
import { FaHandPointer } from 'react-icons/fa';
import { HiArrowsExpand } from 'react-icons/hi';
import './Showcase3D.css';

function PizzaModel() {
  const { scene } = useGLTF('/models/pizza.glb');
  return <primitive object={scene} scale={1.5} />;
}

function Showcase3D() {
  return (
    <section id="features" className="showcase">
      <div className="container">
        <div className="showcase-content">
          <div className="showcase-text">
            <h2>3D Modelleme<br />Hizmetimiz</h2>
            <p>
              Menünüzdeki yemeklerin 3D modellerini profesyonelce oluşturuyoruz.
              Gerçekçi görünümler ve detaylı tasarımlarla müşterilerinize unutulmaz bir deneyim sunun.
            </p>
          </div>

          <div className="showcase-3d">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <Suspense fallback={null}>
                <Stage environment="city" intensity={0.6}>
                  <PizzaModel />
                </Stage>
                <OrbitControls 
                  enableZoom={true}
                  enablePan={false}
                  autoRotate={true}
                  autoRotateSpeed={2}
                />
              </Suspense>
            </Canvas>
            
            <div className="drag-hint">
              <div style={{position: 'relative'}}>
                <FaHandPointer size={30} />
                <HiArrowsExpand size={18} style={{position: 'absolute', top: -10, right: -8, opacity: 0.6}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase3D;