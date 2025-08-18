export default function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 z-[9999]">
      {/* Spinning dual ring */}
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
        <div className="absolute inset-0 rounded-full border-4 black border-t-transparent animate-spin"></div>
      </div>

      {/* Text */}
      <p className="mt-6 text-lg font-semibold text-gray-700 tracking-wide animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
}
