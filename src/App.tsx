import Login from "./components/login";
import Nav from "./components/nav";
export default function App() {
  return (
    <div className="h-screen flex-grow flex justify-center">
      <div className="flex-auto w-96">
        <Nav />
      </div>
    </div>
  );
}
