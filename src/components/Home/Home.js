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
        <h1 className="mt-20 mb-10 font-semibold text-4xl">Service Section</h1>
        <br />
        <div className="grid md:grid-cols-3">
          <div className=" border-2 mx-auto mb-10 w-3/4 max-w-sm rounded-2xl overflow-hidden shadow-lg">
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
              <h1 className="text-2xl text-center font-extrabold">$ 1800</h1>
              <br />
              <p className="text-justify">
                A wedding is one of the greatest events that every couple looks
                into. Most couples desire to make it more meaningful and
                unforgettable as it happens once in a lifetime. Finding the
                venue, shopping for the wedding dress, preparing invitations,
                and booking a photographer and videographer should be a top
                priority.
              </p>
              <br />
              <a
                href="/checkout"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Book Photographer
              </a>
            </div>
          </div>

          <div className=" border-2 mx-auto mb-10 w-3/4 max-w-sm rounded-2xl overflow-hidden shadow-lg">
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
              <br />
              <p className="text-justify">
                Nature isn't just pretty scenery. It's also seen in the
                ferociousness animals have and in the love animals have for each
                other. We offer a fine collection of wildlife photographs
                featuring animal species in a variety of habitat locations that
                will fit seamlessly into many themed settings from African to
                rustic.
              </p>
              <br />
              <a
                href="/checkout"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Book Photographer
              </a>
            </div>
          </div>

          <div className=" border-2 mx-auto mb-10 w-3/4 max-w-sm rounded-2xl overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <h1 className="text-2xl text-center font-bold">
                Fashion Photography
              </h1>
              <br />
              <img
                className="h-60 w-80"
                src="https://cdn-ajggd.nitrocdn.com/kMoOFpDlsOVtlYJLrnSRNCQXaUFHZPTY/assets/static/optimized/rev-536aa32/wp-content/uploads/2020/09/ussama-azam.jpg"
                alt=""
              />
              <br />
              <h1 className="text-2xl text-center font-extrabold">$1000</h1>
              <br />
              <p className="text-justify">
                Fashion photography focuses on the display of fashion clothing
                and items. It is most common on advertising boards and in
                fashion magazines. The photography will usually feature models
                wearing the display items. Fashion photography has existed
                almost as long as photography itself has been around.
              </p>
              <br />
              <a
                href="/checkout"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Book Photographer
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 border-4 my-10 mx-20 rounded-3xl">
        <h1 className="text-center font-bold text-2xl mt-5">
          Photography quotes
        </h1>
        <div className="grid md:grid-cols-3 mt-5 mx-20 rounded-3xl items-center mb-10">
          <img
            className="h-3/4 mx-auto rounded-3xl"
            src="https://i.pinimg.com/564x/7e/ba/93/7eba93a055457f73f503f7f8892070e0.jpg"
            alt=""
          />
          <img
            className="h-3/4 mx-auto rounded-3xl"
            src="https://i.pinimg.com/564x/95/46/54/954654c8d0d53efc634b1930e2080ff1.jpg"
            alt=""
          />
          <img
            className="h-3/4 mx-auto rounded-3xl"
            src="https://i.pinimg.com/736x/ab/7d/d0/ab7dd0a2b1ef8a121bc2fe16de774d0d.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
