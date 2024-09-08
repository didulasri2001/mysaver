import React from "react";

function Hero() {
  return (
    <section className="bg-white-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex ">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-4xl">
            Manage Your Expense
            <strong className="font-extrabold text-blue-700 sm:block">
              Control Your Money
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Start Creating Your Budget and Save Ton of Money
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#2e81b4]-700 focus:outline-none focus:ring active:bg-[#2e81b4]-500 sm:w-auto"
              href="/sign-in"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
