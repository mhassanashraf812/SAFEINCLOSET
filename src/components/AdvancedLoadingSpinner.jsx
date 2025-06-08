const AdvancedLoadingSpinner = () => {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center z-50">
        <div className="flex flex-col items-center space-y-6">
          {/* Multiple ring spinner */}
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
            <div
              className="absolute inset-2 border-4 border-transparent border-t-indigo-500 rounded-full animate-spin"
              style={{ animationDirection: "reverse", animationDuration: "0.8s" }}
            ></div>
            <div
              className="absolute inset-4 border-4 border-transparent border-t-purple-400 rounded-full animate-spin"
              style={{ animationDuration: "1.2s" }}
            ></div>
          </div>
  
          {/* Loading text with gradient */}
          <div className="text-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Loading
            </h2>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default AdvancedLoadingSpinner
  