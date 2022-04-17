import React from "react";

const Home = () => {
  return (
    <div>
      <div className="absolute w-full top-1/4">
        <h1 className="text-4xl lg:text-8xl uppercase font-serif text-white">
          Charlie's Studio
        </h1>
      </div>
      <img
        className="w-full"
        src="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1528189468-988067-sunset-3434911-1280jpg.jpg"
        alt=""
      />
      <br />
      <div className="">
        <h1 className=" font-semibold text-4xl">Service Section</h1>
        <br />
        <div className="grid md:grid-cols-3">
          <div className=" border-2 mx-auto mb-10 w-3/4 max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <h1 className="text-2xl text-center font-bold">
                Wedding Photography
              </h1>
              <br />
              <img
                className="h-60 w-80"
                src="https://katjasimon.com/wp-content/uploads/2016/12/bari-wedding-photographer-.jpg"
                alt=""
              />
              <br />
              <h1 className="text-2xl text-center font-extrabold">$ 800</h1>
            </div>
          </div>

          <div className="border-2 mx-auto mb-10 w-3/4 max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <h1 className="text-2xl text-center font-bold">
                Wild Life Photography
              </h1>
              <br />
              <img
                className="h-60 w-80"
                src="https://wallpaperaccess.com/full/2251380.jpg"
                alt=""
              />
              <br />
              <h1 className="text-2xl text-center font-extrabold">$ 1500</h1>
            </div>
          </div>

          <div className=" border-2 mx-auto mb-10 w-3/4 max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <h1 className="text-2xl text-center font-bold">
                Fashion Photography
              </h1>
              <br />
              <img
                className="h-60 w-80"
                src="https://cdn-ajggd.nitrocdn.com/kMoOFpDlsOVtlYJLrnSRNCQXaUFHZPTY/assets/static/optimized/rev-6389224/wp-content/uploads/2020/09/naeim-jafari.jpg"
                alt=""
              />
              <br />
              <h1 className="text-2xl text-center font-extrabold">$100</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
