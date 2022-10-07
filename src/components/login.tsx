export default function Login() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <div className="flex flex-col border w-full h-full justify-center">
      <div className="flex-col flex border-2 border-black h-1/4 mx-4 mb-10">
        <form onSubmit={handleSubmit} className="h-full flex-col">
          <div className="flex flex-col h-full justify-around">
            <div className="flex ml-8 ">
              <label>
                Username:
                <input
                  className="ml-2 rounded-md border-2 border-gray-800"
                  type="text"
                  name="username"
                />
              </label>
            </div>
            <div className="flex ml-8">
              <label>
                Password:
                <input
                  className="ml-2 rounded-md border-2 border-gray-800"
                  type="text"
                  name="password"
                />
              </label>
            </div>
            <div className="h-10 text-gray-900 hover:text-gray-300 rounded-md hover:bg-gray-800 text-xl bg-gray-300 self-center flex border justify-center w-1/2 ">
              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
      <div className=" h-12 text-gray-900 hover:text-gray-300 rounded-md hover:bg-gray-800 bg-gray-300 text-xl justify-center flex mx-20">
        <a className="self-center" href="/signup">
          Sign Up
        </a>
      </div>
    </div>
  );
}
