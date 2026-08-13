import { WHATSAPP_MESSAGE } from "../../lib/constants";
import Coil from "../ui/Coil";

const FinalCta = () => {
  return (
    <section className="relative px-6 py-24 md:py-32 overflow-hidden bg-cacao">
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] rounded-full bg-caramelo/20 blur-3xl"
      />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <span className="inline-flex justify-center text-mango" aria-hidden="true">
          <Coil className="w-10 h-10" strokeWidth={1.75} />
        </span>
        <h2 className="mt-6 text-4xl md:text-6xl font-display font-extrabold text-crema tracking-tight leading-tight">
          Tu textura tiene nombre.
          <span className="block text-mango">Vamos a cuidarla.</span>
        </h2>
        <p className="mt-6 text-lg text-crema/80 leading-relaxed max-w-xl mx-auto">
          Cuéntanos qué necesita tu cabello y te asesoramos para elegir el
          producto o el tratamiento ideal.
        </p>
        <a
          href={WHATSAPP_MESSAGE("Hola, necesito asesoría para mi cabello")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-mango px-10 py-4 font-bold text-cacao transition-all duration-300 hover:-translate-y-0.5 hover:bg-caramelo hover:text-crema focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mango focus-visible:ring-offset-2 focus-visible:ring-offset-cacao active:scale-[0.98]"
        >
          Escríbenos por WhatsApp
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default FinalCta;
