const RegPage = () => {
  return (
    <main>
      <div className="flex flex-col">
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-neutral-800">Login</h1>
            <form className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="p-2 border border-neutral-400 rounded-lg"
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="p-2 border border-neutral-400 rounded-lg"
              />
              <button
                type="submit"
                className="bg-amber-500 text-amber-50 rounded-lg p-2 mt-4"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegPage;
