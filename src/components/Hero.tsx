import PhoneDisplay from "./PhoneDisplay";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Заголовок */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Стройматериалы
            <span className="text-orange-600 block">у дяди Васи</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Качественные строительные материалы по выгодным ценам. Цемент,
            кирпич, арматура и всё для вашего строительства.
          </p>
        </div>

        {/* Номер телефона */}
        <div className="max-w-md mx-auto">
          <PhoneDisplay
            phoneNumber="+7 (999) 123-45-67"
            label="Звоните дяде Васе за стройматериалами"
          />
        </div>

        {/* Дополнительная информация */}
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-orange-600">🏗️</div>
            <p className="text-gray-600 text-sm">Опыт 20+ лет</p>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-orange-600">🚛</div>
            <p className="text-gray-600 text-sm">Доставка в день заказа</p>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-orange-600">💰</div>
            <p className="text-gray-600 text-sm">Лучшие цены</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
