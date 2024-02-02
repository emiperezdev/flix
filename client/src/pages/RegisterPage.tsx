export const RegisterPage = () => {
  return (
    <section className="flex h-[calc(100vh-200px)] justify-center items-center drop-shadow">
      <div className="max-w-md p-7 rounded-lg border">
        <form>
          <h2 className="mb-7 text-4xl text-center font-semibold leading-7 text-gray-900">
            Sign up
          </h2>
          <input
            className="m-2 w-full bg-slate-100 p-3 rounded-md"
            type="text"
            placeholder="Name"
          />
          <input
            className="m-2 w-full bg-slate-100 p-3 rounded-md"
            type="text"
            placeholder="Last name"
          />
          <input
            className="m-2 w-full bg-slate-100 p-3 rounded-md"
            type="email"
            placeholder="Email"
          />
          <input
            className="m-2 w-full bg-slate-100 p-3 rounded-md"
            type="password"
            placeholder="Password"
          />

          <div className="flex justify-center">
            <button type="submit" className="bg-sky-400 text-white border p-2 px-6 rounded-lg hover:bg-sky-500">
              Save
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
