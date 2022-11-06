import { Counter, Gallery } from "@/components";

function App() {
  return (
    <div className='App grid place-items-center py-12 h-full w-screen bg-slate-50 text-gray-800'>
      <Gallery />
      <Counter />
    </div>
  );
}

export default App;
