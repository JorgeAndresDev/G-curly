import { memo } from "react";
import { WHATSAPP_MESSAGE } from "../../lib/constants";
import GradientPlaceholder from "../ui/GradientPlaceholder";

const PRESETS = ["product1", "product2", "product3"];

const ProductCard = ({ product }) => {
  const whatsappLink = WHATSAPP_MESSAGE(
    `Hola, estoy interesado en comprar ${product.name}`
  );
  const preset = PRESETS[(product.id - 1) % PRESETS.length];

  return (
    <div className="group bg-crema rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden border border-cacao/10 hover:border-caramelo/40 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <GradientPlaceholder
          preset={preset}
          aspectRatio="aspect-[3/4]"
          label={product.category}
        />
        <div className="absolute top-3 right-3 bg-crema/90 backdrop-blur-sm text-caramelo text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
          {product.category}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-display font-bold text-cacao mb-2 group-hover:text-caramelo transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-moca text-sm mb-4 flex-grow line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-3 border-t border-cacao/10">
          <span className="text-xl font-bold text-cacao">
            ${product.price.toLocaleString()}
          </span>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-caramelo text-crema px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-mango transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramelo focus-visible:ring-offset-2"
          >
            <span>Comprar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);
