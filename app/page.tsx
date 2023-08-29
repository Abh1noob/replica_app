import Logo from "@/components/logo";
import Background from "@/components/background";

export default function Home() {
  return (
    <main className="absolute flex items-center justify-center h-[100vh] w-[100vw]">
      <Background/>
      <Logo />
     
    </main>
  );
}
