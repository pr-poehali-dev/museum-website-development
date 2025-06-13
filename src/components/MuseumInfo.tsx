import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const MuseumInfo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-montserrat text-gray-800">
            Информация для посетителей
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <Icon name="Clock" size={32} className="text-purple-600" />
              </div>
              <CardTitle className="font-montserrat">Часы работы</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>Вт-Вс:</strong> 10:00 - 18:00
                </p>
                <p>
                  <strong>Пн:</strong> Выходной
                </p>
                <p>
                  <strong>Касса:</strong> до 17:30
                </p>
                <p className="text-sm text-purple-600 mt-4">
                  Последняя среда месяца - санитарный день
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <Icon name="MapPin" size={32} className="text-purple-600" />
              </div>
              <CardTitle className="font-montserrat">Адрес</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-gray-600">
                <p>г. Москва, ул. Культурная, 15</p>
                <p>
                  <strong>Метро:</strong> Кропоткинская
                </p>
                <p>
                  <strong>Парковка:</strong> Платная
                </p>
                <p className="text-sm text-purple-600 mt-4">
                  5 минут пешком от метро
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <Icon name="Ticket" size={32} className="text-purple-600" />
              </div>
              <CardTitle className="font-montserrat">Билеты</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>Взрослый:</strong> 400 ₽
                </p>
                <p>
                  <strong>Льготный:</strong> 200 ₽
                </p>
                <p>
                  <strong>Дети до 7 лет:</strong> Бесплатно
                </p>
                <p className="text-sm text-purple-600 mt-4">
                  Скидка 50% по четвергам
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MuseumInfo;
