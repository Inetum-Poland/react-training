import { Button } from "@/components/ui/button";

function App() {
  function handleOnClick() {
    console.log("click");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-white text-3xl font-semibold flex flex-col gap-4">
        <span>React training</span>
        <Button variant="destructive" onClick={handleOnClick}>
          Click me!
        </Button>
      </div>
    </div>
  );
}

export default App;
