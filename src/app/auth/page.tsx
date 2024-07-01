import Image from "next/image"
import { SignInContainer } from "./_components/SignInContainer"

export default function Page() {
  return (
    <div className="grid grid-cols-2 min-h-screen w-full">
      <div className="bg-primary overflow-hidden relative">
        <Image
          src="https://images.unsplash.com/photo-1653669485150-3eda1804e4d2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={800}
          height={800}
          alt="Login Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-center p-8 md:p-12">
        <SignInContainer />
      </div>
    </div>
  )
}