import React from "react";

const Blogs = () => {
  return (
    <div className="text-left my-16 w-3/4 mx-auto">
      <h1 className="font-base text-center text-2xl"> Question Answers </h1>
      <br />
      <h1 className="mt-10 font-bold">
        Difference between authorization and authentication?
      </h1>
      <p>
        Authentication is the process of verifying who someone is and
        authorization is the process of verifying what specific permissions,
        files and data a user has access to.
      </p>
      <br />
      <h1 className="font-bold">
        Why are you using firebase? What other options do you have to implement
        authentication?
      </h1>
      <p>
        I am using firebase for custom email and password authentication
        purpose. We can use goggle sign-in, github sign-in, facebook sign-in
        etc. for authentication purpose.
      </p>
      <br />
      <h1 className="font-bold">
        What other services does firebase provide other than authentication?
      </h1>
      <p className="">
        There are many services provided by firebase. Among them are Firebase
        real-time database, firebase firestore, google analytics, etc.
      </p>
    </div>
  );
};

export default Blogs;
