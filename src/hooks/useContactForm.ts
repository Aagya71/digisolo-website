import { useState } from 'react';
import { validateEmail, validateName, validateMessage } from '../utils/validation';
import { createWhatsAppUrl, createMailtoUrl } from '../utils/messaging';
import { CONTACT_CONFIG } from '../config/contact';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!validateName(formData.name)) {
      newErrors.name = 'Name must be at least 2 characters long';
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!validateMessage(formData.message)) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Open both WhatsApp and email in new tabs
      const whatsappUrl = createWhatsAppUrl(
        CONTACT_CONFIG.WHATSAPP_NUMBER,
        formData.name,
        formData.email,
        formData.message
      );
      const mailtoUrl = createMailtoUrl(
        CONTACT_CONFIG.BUSINESS_EMAIL,
        formData.name,
        formData.email,
        formData.message
      );

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      // Open email client
      window.location.href = mailtoUrl;

      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    handleSubmit,
    handleChange
  };
};