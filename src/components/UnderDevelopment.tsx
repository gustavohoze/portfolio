import { Settings } from 'lucide-react';

const UnderDevelopment = () => {
  return (
    <div className="flex-1 relative overflow-hidden fadeInTop">
      {/* Background Gear Animation */}
      <div className="absolute -top-[250px] -right-[250px] text-[#eaeaea] animate-[spin_50s_linear_infinite] origin-center">
        <Settings size={600} strokeWidth={0.5} color='#eaeaea'/>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex h-full">
        <div className="flex justify-start items-center w-full px-12 py-8">
          <div className="w-full max-w-2xl">
            {/* Category Label */}

            {/* Main Message */}
            <div className="space-y-8">
              <h1 className="text-[#5f5f5f] text-5xl font-light leading-tight">
                This page is still
                <br />
                under development
              </h1>

              <div className="w-12 h-[1px] bg-[#eee]" />

              <p className="text-[#808080] text-lg font-light leading-relaxed">
                This section is currently being developed with the same attention to detail 
                as the rest of the portfolio. Please check back soon.
              </p>

              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#777] rounded-full" />
                <span className="text-[#777] text-xs">In progress</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderDevelopment;