import PhoneDisplay from "./PhoneDisplay";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Заголовок */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Мы всегда
            <span className="text-purple-600 block">на связи</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Свяжитесь с нами прямо сейчас. Наши специалисты готовы помочь вам в
            любое время дня и ночи.
          </p>
        </div>

        {/* Номер телефона */}
        <div className="max-w-md mx-auto">
          <PhoneDisplay phoneNumber="123456" label="Позвоните Дяде Васе" />
        </div>

        {/* Дополнительная информация */}
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-purple-600">24/7</div>
            <p className="text-gray-600 text-sm">Круглосуточно</p>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-purple-600">&lt; 1 мин</div>
            <p className="text-gray-600 text-sm">Быстрый ответ</p>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-purple-600">100%</div>
            <p className="text-gray-600 text-sm">Профессионально</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
