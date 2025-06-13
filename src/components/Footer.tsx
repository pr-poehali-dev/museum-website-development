import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-montserrat">
              Государственный Музей Искусств
            </h3>
            <p className="text-gray-300 mb-4">
              Сохраняем и представляем культурное наследие для будущих поколений
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Facebook" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Instagram" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Twitter" size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Посещение</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Билеты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Часы работы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Как добраться
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Правила посещения
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Коллекции</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Живопись
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Скульптура
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Графика
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Декоративно-прикладное искусство
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>г. Москва, ул. Культурная, 15</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@museum.ru</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Государственный Музей Искусств. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
