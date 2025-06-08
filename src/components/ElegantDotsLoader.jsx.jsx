"use client"

const ElegantDotsLoader = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="flex items-center space-x-2">
        <div className="flex space-x-1">
          <div
            className="w-4 h-4 bg-blue-500 rounded-full opacity-0 animate-pulse"
            style={{
              animation: "slideIn 1.5s ease-in-out infinite",
              animationDelay: "0s",
            }}
          ></div>
          <div
            className="w-4 h-4 bg-purple-500 rounded-full opacity-0 animate-pulse"
            style={{
              animation: "slideIn 1.5s ease-in-out infinite",
              animationDelay: "0.3s",
            }}
          ></div>
          <div
            className="w-4 h-4 bg-pink-500 rounded-full opacity-0 animate-pulse"
            style={{
              animation: "slideIn 1.5s ease-in-out infinite",
              animationDelay: "0.6s",
            }}
          ></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          50% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(20px);
          }
        }
      `}</style>
    </div>
  )
}

export default ElegantDotsLoader
