import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Icon name="Shield" className="h-8 w-8 text-blue-800 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">ЭкспертЗалив</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-800 transition-colors">О нас</a>
              <a href="#services" className="text-gray-700 hover:text-blue-800 transition-colors">Услуги</a>
              <a href="#advantages" className="text-gray-700 hover:text-blue-800 transition-colors">Преимущества</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-800 transition-colors">Стоимость</a>
              <a href="#contacts" className="text-gray-700 hover:text-blue-800 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-blue-800 hover:bg-blue-900">
              Заказать экспертизу
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Профессиональная экспертиза залива
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Определим причины залива, зоны ответственности и точно рассчитаем ущерб. 
              Документы принимаются в суде и страховых компаниях.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-800 hover:bg-gray-100">
                Заказать экспертизу
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
                Консультация
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">О нас</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Команда сертифицированных экспертов с более чем 10-летним опытом проведения экспертиз заливов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader className="text-center">
                <Icon name="Users" className="h-12 w-12 text-blue-800 mx-auto mb-4" />
                <CardTitle>Опытная команда</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Более 500 успешно проведенных экспертиз
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardHeader className="text-center">
                <Icon name="FileText" className="h-12 w-12 text-blue-800 mx-auto mb-4" />
                <CardTitle>Официальные документы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Заключения принимаются в суде и страховых
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardHeader className="text-center">
                <Icon name="Clock" className="h-12 w-12 text-blue-800 mx-auto mb-4" />
                <CardTitle>Быстрые сроки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Готовое заключение от 3 рабочих дней
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Полный спектр экспертных услуг для определения причин и последствий залива
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="h-full">
              <CardHeader>
                <Icon name="Search" className="h-8 w-8 text-blue-800 mb-2" />
                <CardTitle>Определение причин залива</CardTitle>
                <CardDescription>
                  Техническое исследование для выявления источника протечки
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Осмотр места происшествия</li>
                  <li>• Анализ технических систем</li>
                  <li>• Фотофиксация повреждений</li>
                  <li>• Заключение о причинах</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <Icon name="Scale" className="h-8 w-8 text-blue-800 mb-2" />
                <CardTitle>Зоны ответственности</CardTitle>
                <CardDescription>
                  Определение ответственных сторон согласно законодательству
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Анализ правовых норм</li>
                  <li>• Разграничение ответственности</li>
                  <li>• Документы собственности</li>
                  <li>• Заключение о виновности</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <Icon name="Calculator" className="h-8 w-8 text-blue-800 mb-2" />
                <CardTitle>Расчет ущерба</CardTitle>
                <CardDescription>
                  Точная оценка материального ущерба от залива
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Оценка поврежденного имущества</li>
                  <li>• Расчет стоимости восстановления</li>
                  <li>• Учет рыночных цен</li>
                  <li>• Итоговая смета ущерба</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши преимущества</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Почему клиенты доверяют нам проведение экспертиз
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Award" className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Сертификация</h3>
              <p className="text-gray-600">Все эксперты имеют официальные сертификаты</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Shield" className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Гарантия</h3>
              <p className="text-gray-600">Гарантируем качество проведенной экспертизы</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Zap" className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Оперативность</h3>
              <p className="text-gray-600">Выезд на объект в течение 24 часов</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Icon name="CheckCircle" className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Надежность</h3>
              <p className="text-gray-600">Документы принимаются во всех инстанциях</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Итоговый результат</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Что вы получите по итогам экспертизы
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Официальное заключение включает:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <Icon name="FileText" className="h-5 w-5 text-blue-800 mr-2 mt-0.5" />
                    Детальное описание причин залива
                  </li>
                  <li className="flex items-start">
                    <Icon name="Users" className="h-5 w-5 text-blue-800 mr-2 mt-0.5" />
                    Определение виновных сторон
                  </li>
                  <li className="flex items-start">
                    <Icon name="Calculator" className="h-5 w-5 text-blue-800 mr-2 mt-0.5" />
                    Точный расчет ущерба
                  </li>
                  <li className="flex items-start">
                    <Icon name="Camera" className="h-5 w-5 text-blue-800 mr-2 mt-0.5" />
                    Фотоматериалы и схемы
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Дополнительные документы:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <Icon name="Award" className="h-5 w-5 text-blue-800 mr-2 mt-0.5" />
                    Копии сертификатов эксперта
                  </li>
                  <li className="flex items-start">
                    <Icon name="FileCheck" className="h-5 w-5 text-blue-800 mr-2 mt-0.5" />
                    Справки о допуске к экспертизе
                  </li>
                  <li className="flex items-start">
                    <Icon name="Building" className="h-5 w-5 text-blue-800 mr-2 mt-0.5" />
                    Лицензии организации
                  </li>
                  <li className="flex items-start">
                    <Icon name="Shield" className="h-5 w-5 text-blue-800 mr-2 mt-0.5" />
                    Страховые полисы
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Стоимость услуг</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Прозрачные цены на все виды экспертиз
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Базовая экспертиза</CardTitle>
                <CardDescription>Для простых случаев</CardDescription>
                <div className="text-3xl font-bold text-blue-800 mt-4">от 15 000 ₽</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Осмотр объекта</li>
                  <li>• Определение причин</li>
                  <li>• Расчет ущерба</li>
                  <li>• Заключение эксперта</li>
                </ul>
                <Button className="w-full mt-6 bg-blue-800 hover:bg-blue-900">
                  Заказать
                </Button>
              </CardContent>
            </Card>
            <Card className="relative border-blue-800 border-2">
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-800">
                Популярный
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Полная экспертиза</CardTitle>
                <CardDescription>Рекомендуется для суда</CardDescription>
                <div className="text-3xl font-bold text-blue-800 mt-4">от 25 000 ₽</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Всё из базовой</li>
                  <li>• Анализ ответственности</li>
                  <li>• Фотофиксация</li>
                  <li>• Консультации</li>
                </ul>
                <Button className="w-full mt-6 bg-blue-800 hover:bg-blue-900">
                  Заказать
                </Button>
              </CardContent>
            </Card>
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Экспресс-экспертиза</CardTitle>
                <CardDescription>Срочное проведение</CardDescription>
                <div className="text-3xl font-bold text-blue-800 mt-4">от 35 000 ₽</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Выезд в течение 2 часов</li>
                  <li>• Результат за 1 день</li>
                  <li>• Полный пакет документов</li>
                  <li>• Приоритетная поддержка</li>
                </ul>
                <Button className="w-full mt-6 bg-blue-800 hover:bg-blue-900">
                  Заказать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши документы</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Все необходимые лицензии и сертификаты для проведения экспертиз
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <Icon name="FileText" className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Лицензия СРО</h3>
              <p className="text-sm text-gray-600">Свидетельство о допуске к экспертизе</p>
            </Card>
            <Card className="text-center p-6">
              <Icon name="Award" className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Сертификаты</h3>
              <p className="text-sm text-gray-600">Квалификационные аттестаты</p>
            </Card>
            <Card className="text-center p-6">
              <Icon name="Shield" className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Страхование</h3>
              <p className="text-sm text-gray-600">Полис ответственности</p>
            </Card>
            <Card className="text-center p-6">
              <Icon name="Building2" className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Регистрация</h3>
              <p className="text-sm text-gray-600">Госрегистрация ЮЛ</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Свяжитесь с нами для получения консультации
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Phone" className="h-5 w-5 text-blue-800 mr-3" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="h-5 w-5 text-blue-800 mr-3" />
                  <span>info@ekspertzaliv.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="h-5 w-5 text-blue-800 mr-3" />
                  <span>г. Москва, ул. Примерная, д. 1</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" className="h-5 w-5 text-blue-800 mr-3" />
                  <span>Пн-Пт: 9:00-18:00</span>
                </div>
              </div>
            </Card>
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-6">Заказать экспертизу</h3>
              <div className="space-y-4">
                <Button className="w-full bg-blue-800 hover:bg-blue-900" size="lg">
                  <Icon name="Phone" className="h-5 w-5 mr-2" />
                  Позвонить сейчас
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <Icon name="MessageSquare" className="h-5 w-5 mr-2" />
                  Написать в WhatsApp
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <Icon name="Mail" className="h-5 w-5 mr-2" />
                  Отправить заявку
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="Shield" className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold">ЭкспертЗалив</h3>
              </div>
              <p className="text-gray-400">
                Профессиональная экспертиза заливов с 2014 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Определение причин</li>
                <li>Зоны ответственности</li>
                <li>Расчет ущерба</li>
                <li>Консультации</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Документы</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@ekspertzaliv.ru</p>
                <p>г. Москва</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 ЭкспертЗалив. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}