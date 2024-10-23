import { Phone } from "lucide-react";

export const CallNowFooter = () => {
  return (
    <div className="fixed bottom-0 w-full bg-transparent  text-white py-3 z-50">
      {/* <div className="fixed bottom-0 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 z-50"> */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-2  items-center justify-between">
          <div className="flex items-center space-x-2 bg-green-700 rounded-full px-5 py-2">
            <Phone size={14} className="animate-bounce" />
            <a
              href="tel:+919460661374"
              className="text-sm font-medium uppercase"
            >
              Call now
            </a>
          </div>
          {/* Hindi text */}
          {/* <div className="text-sm">डॉक्टर ऑनलाइन है, अभी कॉल करें...</div> */}
        </div>
      </div>
    </div>
  );
};
