function HomePage() {
  return (
   
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>E-commerce Home</title>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
       
        {/* Hero Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Welcome to ShopName
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Discover the best products at unbeatable prices. Shop now and
                  enjoy exclusive offers!
                </p>
                <a
                  href="#"
                  className="mt-8 inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-300"
                >
                  Shop Now
                </a>
              </div>
              <div className="mt-10 lg:mt-0">
                <img
                  className="mx-auto"
                  src="https://images.unsplash.com/photo-1668713701571-1d1cbcefe7bd?q=80&w=1396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="E-commerce"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Product Showcase */}
        <div className="bg-gray-100 flex">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-gray-900">
              Featured Products
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {/* Product Card */}
              <div className="group relative">
                <div className="w-full bg-white rounded-lg overflow-hidden group-hover:opacity-75">
                  <img
                    src="https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29kaW5nJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww"
                    alt="Product Image"
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        Product Name
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Category</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">$99.99</p>
                </div>
              </div>
              {/* Repeat Product Card for more products */}
            </div>
          </div>
          
        </div>
      </>
    
  );
}
export default HomePage;
