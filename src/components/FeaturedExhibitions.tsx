import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FeaturedExhibitions = () => {
  const exhibitions = [
    {
      title: "Золотой век русской живописи",
      description: "Шедевры Репина, Сурикова и Левитана в одной экспозиции",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      dates: "15 мая - 30 сентября 2024",
    },
    {
      title: "Современное искусство XXI века",
      description: "Работы современных художников и инсталляции",
      image:
        "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop",
      dates: "1 июня - 15 октября 2024",
    },
    {
      title: "Археологические находки",
      description: "Уникальные артефакты древних цивилизаций",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0e50b2a5c50?w=400&h=300&fit=crop",
      dates: "Постоянная экспозиция",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-montserrat text-gray-800">
            Текущие выставки
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Погрузитесь в мир искусства через наши специально подобранные
            экспозиции
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exhibitions.map((exhibition, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={exhibition.image}
                  alt={exhibition.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-montserrat text-xl">
                  {exhibition.title}
                </CardTitle>
                <CardDescription className="text-purple-600 font-medium">
                  {exhibition.dates}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{exhibition.description}</p>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedExhibitions;
