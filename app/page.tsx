// Home.tsx
import Parent from "./component/Parent";
import State from "./state/page";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-4 p-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4"> Assignment Class-11 2-5</h1>
      {/* State Component */}
      <div className="flex-1 w-full max-w-lg">
        <State />
      </div>

      {/* Parent Component */}
      <div className="flex-1 w-full max-w-lg">
        <Parent />
      </div>
    </div>
  );
}
