import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF } from '@react-three/drei';
import { Suspense, useState } from 'react';
import './Menu.css';

function FoodModel({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1.5} />;
}

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Tümü', icon: '🍽️' },
    { id: 'pizza', name: 'Pizza', icon: '🍕' },
    { id: 'burger', name: 'Burger', icon: '🍔' },
    { id: 'dessert', name: 'Tatlılar', icon: '🍰' },
    { id: 'drinks', name: 'İçecekler', icon: '🥤' }
  ];

  const menuItems = [
    {
      id: 1,
      name: 'Margarita Pizza',
      category: 'pizza',
      description: 'Taze mozzarella, domates sosu, fesleğen',
      model: '/models/pizza.glb',
      image: '🍕'
    },
    {
      id: 2,
      name: 'Cheeseburger',
      category: 'burger',
      description: 'Angus köfte, cheddar peyniri, turşu, soğan',
      model: '/models/burger.glb',
      image: '🍔'
    },
    {
      id: 3,
      name: 'Çikolatalı Pasta',
      category: 'dessert',
      description: 'Belçika çikolatası, krema',
      model: '/models/cake.glb',
      image: '🍰'
    },
    {
      id: 4,
      name: 'Limonata',
      category: 'drinks',
      description: 'Taze sıkılmış limon, nane',
      model: '/models/drink.glb',
      image: '🥤'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="menu-page">
      <section className="menu-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>3D Menü Galerisi</h1>
            <p>Yemeklerimizi artırılmış gerçeklikte keşfedin</p>
          </motion.div>
        </div>
      </section>

      <section className="menu-content">
        <div className="container">
          <div className="category-filters">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="category-icon">{category.icon}</span>
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>

          <div className="menu-grid">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="menu-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="menu-card-3d">
                  <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                    <Suspense fallback={null}>
                      <Stage environment="city" intensity={0.6}>
                        <mesh>
                          <boxGeometry args={[2, 2, 2]} />
                          <meshStandardMaterial color="#6366f1" />
                        </mesh>
                      </Stage>
                      <OrbitControls 
                        enableZoom={false}
                        enablePan={false}
                        autoRotate={true}
                        autoRotateSpeed={3}
                      />
                    </Suspense>
                  </Canvas>
                </div>
                <div className="menu-card-info">
                  <div className="menu-icon">{item.image}</div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <button className="btn-view-ar">AR'da Görüntüle</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Menu;