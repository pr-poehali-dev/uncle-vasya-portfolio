import Icon from "@/components/ui/icon";

interface PhoneDisplayProps {
  phoneNumber: string;
  label?: string;
}

const PhoneDisplay = ({
  phoneNumber,
  label = "Позвоните нам",
}: PhoneDisplayProps) => {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
          <Icon name="Phone" size={24} className="text-purple-600" />
        </div>

        <div>
          <p className="text-sm text-gray-600 mb-2">{label}</p>
          <a
            href={`tel:${phoneNumber}`}
            className="text-3xl font-bold text-gray-900 hover:text-purple-600 transition-colors duration-200 block"
          >
            {phoneNumber}
          </a>
        </div>

        <button
          onClick={handleCall}
          className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105"
        >
          <Icon name="Phone" size={20} />
          Позвонить
        </button>
      </div>
    </div>
  );
};

export default PhoneDisplay;
