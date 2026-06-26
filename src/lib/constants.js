export const CONTACT = {
  phone: "573042134073",
  whatsappUrl: "https://wa.me/573042134073",
  location: "Sincélejo, Sucre, Colombia",
};

export const BRAND = {
  name: "G-Curly",
  tagline: "Disfruta tus texturas",
  description:
    "Especialistas en el cuidado y amor por el cabello crespo, rizado y afro.",
};

export const GRADIENT_COLORS = {
  primary: "#386641",
  secondary: "#AA8F59",
  terracotta: "#A65640",
  dark: "#26482e",
  deepGreen: "#0A150A",
  accent: "#F8F8F8",
};

export const WHATSAPP_MESSAGE = (text) => {
  const url = `${CONTACT.whatsappUrl}?text=${encodeURIComponent(text)}`;
  return url;
};