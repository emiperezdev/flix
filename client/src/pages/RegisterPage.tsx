import { useForm } from "react-hook-form";

export const RegisterPage = () => {
  const {
    formState: { errors },
    reset,
    handleSubmit,
    register,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <section className="flex h-[calc(100vh-200px)] justify-center items-center drop-shadow-md mx-5">
      <div className="max-w-md sm:w-auto p-5 sm:p-7 rounded-lg border">
        <form onSubmit={onSubmit}>
          <h2 className="mb-7 text-3xl sm:text-4xl text-center font-semibold leading-7 text-gray-900">
            Sign up
          </h2>
          <input
            {...register("name", { required: true })}
            className="my-2 w-full bg-slate-100 p-3 rounded-md"
            type="text"
            placeholder="Name"
          />
          {errors.name && <p className="text-red-600 mb-2">Name is required</p>}

          <input
            {...register("last_name", { required: true })}
            className="my-2 w-full bg-slate-100 p-3 rounded-md"
            type="text"
            placeholder="Last name"
          />
          {errors.last_name && (
            <p className="text-red-600 mb-2">Last name is required</p>
          )}

          <input
            {...register("email", { required: true })}
            className="my-2 w-full bg-slate-100 p-3 rounded-md"
            type="email"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-600 mb-2">Email is required</p>}

          <input
            {...register("password", { required: true })}
            className="my-2 w-full bg-slate-100 p-3 rounded-md"
            type="password"
            placeholder="Password"
          />
          {errors.password && <p className="text-red-600 mb-2">Password is required</p>}

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-sky-400 text-white border p-2 px-6 mt-3 rounded-lg hover:bg-sky-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
