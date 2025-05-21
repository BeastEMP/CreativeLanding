import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Brands() {
  useScrollAnimation();

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 mb-8">Trusted by industry-leading companies</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          <div className="flex justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <i className="fab fa-microsoft text-4xl text-gray-400"></i>
          </div>
          <div className="flex justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <i className="fab fa-amazon text-4xl text-gray-400"></i>
          </div>
          <div className="flex justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <i className="fab fa-spotify text-4xl text-gray-400"></i>
          </div>
          <div className="flex justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <i className="fab fa-slack text-4xl text-gray-400"></i>
          </div>
          <div className="flex justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <i className="fab fa-google text-4xl text-gray-400"></i>
          </div>
          <div className="flex justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <i className="fab fa-airbnb text-4xl text-gray-400"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
