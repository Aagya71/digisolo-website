// Format phone number for WhatsApp URL
export const formatPhoneNumber = (phone: string): string => {
  return phone.replace(/\D/g, '');
};

// Create WhatsApp message URL
export const createWhatsAppUrl = (
  phone: string,
  name: string,
  email: string,
  message: string
): string => {
  const formattedPhone = formatPhoneNumber(phone);
  const text = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  );
  return `https://wa.me/${formattedPhone}?text=${text}`;
};

// Create mailto URL
export const createMailtoUrl = (
  toEmail: string,
  name: string,
  fromEmail: string,
  message: string
): string => {
  const subject = encodeURIComponent(`Website Inquiry from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${fromEmail}\nMessage: ${message}`
  );
  return `mailto:${toEmail}?subject=${subject}&body=${body}`;
};