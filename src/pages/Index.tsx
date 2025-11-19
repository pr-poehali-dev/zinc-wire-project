import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: 'Проволока оцинкованная 2.0 мм',
      image: 'https://cdn.poehali.dev/projects/ba42c2d5-fea4-40bf-9a9b-fda98483b6d8/files/7bb3c08e-103d-498c-9e12-fbb457c9ff2d.jpg',
      diameter: '2.0 мм',
      strength: '450-550 Н/мм²',
      coating: 'Горячее цинкование',
      length: '500 м',
      price: '2 500 ₽',
      description: 'Идеально подходит для электропастухов средней мощности. Высокая коррозионная стойкость.',
    },
    {
      id: 2,
      name: 'Проволока оцинкованная 2.5 мм',
      image: 'https://cdn.poehali.dev/projects/ba42c2d5-fea4-40bf-9a9b-fda98483b6d8/files/23bf99ad-9e43-428f-a2df-6a7fe6c85a00.jpg',
      diameter: '2.5 мм',
      strength: '500-600 Н/мм²',
      coating: 'Горячее цинкование',
      length: '500 м',
      price: '3 200 ₽',
      description: 'Усиленная проволока для больших участков. Максимальная прочность и долговечность.',
    },
    {
      id: 3,
      name: 'Проволока оцинкованная 1.6 мм',
      image: 'https://cdn.poehali.dev/projects/ba42c2d5-fea4-40bf-9a9b-fda98483b6d8/files/7a007800-bfee-4650-b075-da543ce07540.jpg',
      diameter: '1.6 мм',
      strength: '400-500 Н/мм²',
      coating: 'Горячее цинкование',
      length: '500 м',
      price: '2 100 ₽',
      description: 'Экономичный вариант для небольших загонов. Надежная защита вашего хозяйства.',
    },
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-primary">ЭлектроПастух</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
            <a href="#delivery" className="text-foreground hover:text-primary transition-colors">Доставка</a>
          </nav>
          <Button variant="outline">
            <Icon name="Phone" size={18} className="mr-2" />
            Связаться
          </Button>
        </div>
      </header>

      <section id="home" className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <Icon name="Award" size={16} className="mr-2" />
              Качество проверено временем
            </Badge>
            <h2 className="text-5xl font-bold mb-6 text-foreground">
              Оцинкованная проволока для электропастуха
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Надежная защита вашего хозяйства. Прочная, долговечная, устойчивая к коррозии.
              Прямые поставки от производителя.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Icon name="ShoppingCart" size={20} />
                Выбрать проволоку
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="FileText" size={20} />
                Технические характеристики
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
                <CardTitle>Высокая прочность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Прочность 400-600 Н/мм² выдерживает любые нагрузки
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <Icon name="Droplet" size={24} className="text-primary" />
                </div>
                <CardTitle>Горячее цинкование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Защита от коррозии на 15+ лет эксплуатации
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <Icon name="Truck" size={24} className="text-primary" />
                </div>
                <CardTitle>Быстрая доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Доставка по России за 3-7 дней, работаем с ТК
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Каталог проволоки</h2>
            <p className="text-xl text-muted-foreground">
              Выберите оптимальный диаметр для вашего электропастуха
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card 
                key={product.id} 
                className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedProduct(product.id)}
              >
                <div className="aspect-square bg-muted flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Диаметр:</span>
                      <Badge variant="secondary">{product.diameter}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Прочность:</span>
                      <Badge variant="secondary">{product.strength}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Покрытие:</span>
                      <Badge variant="secondary">{product.coating}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Длина:</span>
                      <Badge variant="secondary">{product.length}</Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button size="sm">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Доставка и оплата</h2>
            
            <Tabs defaultValue="delivery" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="delivery">Доставка</TabsTrigger>
                <TabsTrigger value="payment">Оплата</TabsTrigger>
              </TabsList>
              
              <TabsContent value="delivery" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Truck" size={24} className="text-primary" />
                      Транспортные компании
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Работаем с ведущими транспортными компаниями:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Icon name="CheckCircle" size={18} className="text-primary" />
                        <span>ПЭК - доставка 3-5 дней</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="CheckCircle" size={18} className="text-primary" />
                        <span>СДЭК - доставка 2-4 дня</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="CheckCircle" size={18} className="text-primary" />
                        <span>Деловые линии - доставка 3-7 дней</span>
                      </li>
                    </ul>
                    <p className="mt-4 text-sm text-muted-foreground">
                      Стоимость доставки рассчитывается индивидуально в зависимости от региона
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="MapPin" size={24} className="text-primary" />
                      Самовывоз
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2">Склад в Москве: ул. Складская, 15</p>
                    <p className="text-sm text-muted-foreground">
                      Режим работы: Пн-Пт 9:00-18:00, Сб 10:00-15:00
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="payment" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="CreditCard" size={24} className="text-primary" />
                      Способы оплаты
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <Icon name="CheckCircle" size={18} className="text-primary" />
                        <span>Безналичный расчет для юридических лиц</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="CheckCircle" size={18} className="text-primary" />
                        <span>Оплата картой онлайн</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="CheckCircle" size={18} className="text-primary" />
                        <span>Наличными при самовывозе</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="CheckCircle" size={18} className="text-primary" />
                        <span>Наложенный платеж при доставке</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="FileText" size={24} className="text-primary" />
                      Документы
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      К каждой поставке прилагаются все необходимые документы: счет, накладная, 
                      сертификаты соответствия. Работаем с НДС.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Zap" size={28} />
                <h3 className="text-xl font-bold">ЭлектроПастух</h3>
              </div>
              <p className="text-sm opacity-90">
                Надежная оцинкованная проволока для защиты вашего хозяйства
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm opacity-90">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@electropastuh.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Складская, 15
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <div className="text-sm opacity-90 space-y-1">
                <p>Пн-Пт: 9:00 - 18:00</p>
                <p>Сб: 10:00 - 15:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-75">
            <p>© 2024 ЭлектроПастух. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;