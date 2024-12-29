function Product() {
  return (
    <>
      {/* Product Filter Section */}
      {/* <div className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-extrabold text-gray-900">Product</h2>
            <div className="flex space-x-4">
              <select className="border-gray-300 rounded-md">
                <option>Category</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Home &amp; Garden</option>
              </select>
              <select className="border-gray-300 rounded-md">
                <option>Price</option>
                <option>Low to High</option>
                <option>High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div> */}
      {/* Product Grid */}
      <div className="bg-gray-100 py-8 flex">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {/* Product Card */}
            <div className="group relative">
              <div className="w-full bg-white rounded-lg overflow-hidden group-hover:opacity-75">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {/* Product Card */}
            <div className="group relative">
              <div className="w-full bg-white rounded-lg overflow-hidden group-hover:opacity-75">
                <img
                  src="https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?q=80&w=1454&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
export default Product;
