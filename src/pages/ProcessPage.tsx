const ProcessPage = () => {
  return (
    <div className="min-h-screen bg-white font-poppins p-8">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-center mb-6">Our Glass Processing Stages</h1>
      <p className="text-lg text-center text-gray-700 mb-8">
        We ensure precision and quality at every stage of our process.
      </p>

      {/* Process Steps */}
      <div className="flex flex-col gap-10">
        {/* Step 1 */}
        <div className="md:w-3/4 mx-auto">
          <h2 className="text-3xl font-semibold">Step 1: Glass Cutting</h2>
          <p className="text-gray-700 mt-4">
            Our experts use high-precision cutting tools to shape the glass according to client specifications.
          </p>
        </div>

        {/* Step 2 */}
        <div className="md:w-3/4 mx-auto">
          <h2 className="text-3xl font-semibold">Step 2: Polishing & Strengthening</h2>
          <p className="text-gray-700 mt-4">
            The glass undergoes a special polishing process to enhance durability and aesthetics.
          </p>
        </div>

        {/* Step 3 */}
        <div className="md:w-3/4 mx-auto">
          <h2 className="text-3xl font-semibold">Step 3: Quality Control</h2>
          <p className="text-gray-700 mt-4">
            Each glass product is inspected to ensure it meets industry standards for safety and performance.
          </p>
        </div>

        {/* Step 4 */}
        <div className="md:w-3/4 mx-auto">
          <h2 className="text-3xl font-semibold">Step 4: Packaging & Delivery</h2>
          <p className="text-gray-700 mt-4">
            The processed glass is carefully packaged to prevent damage and delivered to customers with precision handling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;
