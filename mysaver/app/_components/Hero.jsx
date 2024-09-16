import React from "react";

function Hero() {
  return (
    <section className="bg-white-50">
      <div className="mx-auto max-w-screen-2xl px-4 py-32 lg:flex ">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-6xl mb-5">
            Manage Your Expense
            <strong className="font-extrabold text-[#2e81b4] sm:block mt-3">
              Control Your Money
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Start Creating Your Budget and Save Ton of Money
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full  bg-[#2e81b4] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#2e81b4]-700 focus:outline-none focus:ring active:bg-[#2e81b4]-500 sm:w-auto rounded-lg"
              href="/sign-in"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
