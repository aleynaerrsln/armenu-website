import { motion } from 'framer-motion';
import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form gönderildi:', formData);
    alert('Mesajınız alındı! En kısa sürede dönüş yapacağız.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>İletişime Geçin</h2>
          <p>AR menü sistemi hakkında daha fazla bilgi almak için bize ulaşın</p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p>info@armenu.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📱</div>
              <div>
                <h4>Telefon</h4>
                <p>+90 555 123 45 67</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h4>Adres</h4>
                <p>Ankara, Türkiye</p>
              </div>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Adınız Soyadınız"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Adresiniz"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="company"
                placeholder="Restoran/Şirket Adı"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                rows="5"
                placeholder="Mesajınız"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Gönder
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;