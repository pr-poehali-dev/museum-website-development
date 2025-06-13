import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const NewsEvents = () => {
  const news = [
    {
      title: "Ночь в музее 2024",
      description: "Специальная программа с мастер-классами и лекциями",
      date: "18 мая 2024",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
    },
    {
      title: "Лекция «История русского искусства»",
      description: "Известный искусствовед расскажет о развитии живописи",
      date: "25 мая 2024",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
    },
    {
      title: "Детский мастер-класс по живописи",
      description: "Творческое занятие для детей от 7 до 12 лет",
      date: "2 июня 2024",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-montserrat text-gray-800">
            События и новости
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Следите за нашими мероприятиями и культурными событиями
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-purple-600 text-sm mb-2">
                  <Icon name="Calendar" size={16} />
                  {item.date}
                </div>
                <CardTitle className="font-montserrat text-lg">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  {item.description}
                </CardDescription>
                <Button
                  variant="ghost"
                  className="text-purple-600 hover:text-purple-700 p-0"
                >
                  Читать далее →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Все события
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
