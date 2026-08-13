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
  arena: "#F4E9D8",
  cacao: "#21140B",
  caramelo: "#C9742F",
  mango: "#E9A13B",
  moca: "#6B4527",
  crema: "#FFF9EF",
};

export const WHATSAPP_MESSAGE = (text) => {
  const url = `${CONTACT.whatsappUrl}?text=${encodeURIComponent(text)}`;
  return url;
};