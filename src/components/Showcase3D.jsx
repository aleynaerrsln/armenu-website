import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';
import './Showcase3D.css';

function PizzaModel() {
  const { scene } = useGLTF('/models/pizza.glb');
  return <primitive object={scene} scale={1.5} />;
}

function Showcase3D() {
  return (
    <section id="showcase" className="showcase">
      <div className="container">
        <div className="showcase-content">
          <div className="showcase-text">
            <h2>Yemeklerinizi<br />Artırılmış Gerçekliğe<br />uyarlıyoruz.</h2>
            <p>
              Fikri çok beğendiniz ama gerekli 3D modellere sahip değil misiniz? 
              Endişelenmeyin, yemeklerinizin modellerini oluşturma işini biz üstlenebiliriz.
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
            <div className="canvas-info">
              <p>🖱️ Fare ile döndürün • 🔍 Yakınlaştırın</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase3D;