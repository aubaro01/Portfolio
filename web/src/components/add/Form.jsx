import React, { useState, useRef } from 'react';
import { Form, Button, Alert, Spinner, FloatingLabel } from 'react-bootstrap';
import { FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import { motion } from 'framer-motion';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef();

  const API_ENDPOINT = process.env.REACT_APP_API_URL;
  const API_HEADERS = {
    'Content-Type': 'application/json',
    
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Por favor, insira seu nome';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Por favor, insira seu email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Por favor, insira um email válido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Por favor, insira sua mensagem';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'A mensagem deve ter pelo menos 10 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await axios.post(API_ENDPOINT, formData, {
        headers: API_HEADERS
      });

      if (response.status >= 200 && response.status < 300) {
        setSubmitStatus({ 
          success: true, 
          message: response.data.message || 'Mensagem enviada com sucesso!' 
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(response.data.error || 'Erro ao enviar mensagem');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      
      let errorMessage = 'Ocorreu um erro ao enviar. Tente novamente mais tarde.';
      
      if (error.response) {
        errorMessage = error.response.data?.message || errorMessage;
      } else if (error.request) {
        errorMessage = 'Sem resposta do servidor. Verifique sua conexão.';
      }
      
      setSubmitStatus({ 
        success: false, 
        message: errorMessage 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="contact-form p-4 rounded shadow"
      style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#f8f9fa' }}
    >
      <h2 className="text-center mb-4" >Fale Comigo</h2>
      
      {submitStatus && (
        <Alert 
          variant={submitStatus.success ? 'success' : 'danger'}
          onClose={() => setSubmitStatus(null)} 
          dismissible
          className="mt-3"
        >
          {submitStatus.message}
        </Alert>
      )}
      
      <Form ref={formRef} onSubmit={handleSubmit} noValidate>
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={inputVariants}
        >
          <FloatingLabel controlId="name" label="Insira o Nome" className="mb-3">
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
              placeholder=" "
              className="py-3"
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
            <div className="input-icon">
              <FiUser />
            </div>
          </FloatingLabel>
        </motion.div>
        
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={inputVariants}
        >
          <FloatingLabel controlId="email" label="Insira o seu Email" className="mb-3">
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
              placeholder=" "
              className="py-3"
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
            <div className="input-icon">
              <FiMail />
            </div>
          </FloatingLabel>
        </motion.div>
        
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={inputVariants}
        >
          <FloatingLabel controlId="message" label="Sua Mensagem">
            <Form.Control
              as="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              isInvalid={!!errors.message}
              placeholder=" "
              style={{ height: '150px' }}
              className="py-3"
            />
            <Form.Control.Feedback type="invalid">
              {errors.message}
            </Form.Control.Feedback>
            <div className="input-icon">
              <FiMessageSquare />
            </div>
          </FloatingLabel>
        </motion.div>
        
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={inputVariants}
          className="text-center mt-4"
        >
          <Button 
            variant="primary" 
            type="submit" 
            disabled={isSubmitting}
            className="px-4 py-2 rounded-pill"
          >
            {isSubmitting ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  className="me-2"
                />
                Enviando...
              </>
            ) : (
              <>
                <FiSend className="me-2" />
                Enviar Mensagem
              </>
            )}
          </Button>
        </motion.div>
      </Form>
    </motion.div>
  );
};

export default ContactForm;
