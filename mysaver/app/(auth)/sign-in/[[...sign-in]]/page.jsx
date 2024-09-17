"use client";
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
  const user = useRouter();
  return (
    <div className="bg-white ">
      <Image
        className="pt-4 pl-5 "
        src={"/logo.png"}
        alt="logo"
        width={200}
        height={200}
      />

      <div className="bg-white -mt-14 ">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-center justify-center lg:col-span-5 lg:h-full xl:col-span-6">
            <Image
              src={"/expense.jpg"}
              alt="logo"
              width={500}
              height={500}
              className="max-w-full h-auto"
            />
          </section>

          <main className="flex items-center justify-center  lg:col-span-7  lg:py-12 xl:col-span-6 mt-4">
            <div className="max-w-xl lg:max-w-3xl">
              <SignIn
                onSignIn={() => {
                  // Redirect to the dashboard after successful sign-in
                  router.push("http://localhost:3001/dashboard"); // Use router.push to navigate
                }}
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
