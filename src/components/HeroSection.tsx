import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=1920&h=1080&fit=crop')",
        }}
      ></div>

      <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold mb-6 font-montserrat leading-tight">
            Государственный
            <span className="block text-purple-300">Музей Искусств</span>
          </h1>
          <p className="text-xl mb-8 text-gray-200 leading-relaxed">
            Откройте для себя величайшие произведения искусства, погрузитесь в
            историю и культуру через наши уникальные коллекции
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
            >
              Купить билеты
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3"
            >
              Виртуальный тур
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
