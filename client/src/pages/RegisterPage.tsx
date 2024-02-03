import { useForm } from "react-hook-form";
import useAddUser from "../hooks/usePostUser";
import UserEntity from "../entitites/user.entity";
import useErrorState from "../states/useErrorState";
import { ErrorMessage } from "../components/ErrorMessage";
import { SubmitButton } from "../components/SubmitButton";
import { TitleForm } from "../components/TitleForm";

export const RegisterPage = () => {
  const {
    formState: { errors },
    reset,
    handleSubmit,
    register,
  } = useForm<UserEntity>();

  const addUser = useAddUser();

  const onSubmit = handleSubmit((data) => {
    addUser.mutate(data);
  });

  const errorResponse = useErrorState(s => s.error);

  return (
    <section className="flex h-[calc(100vh-200px)] justify-center items-center drop-shadow-md mx-5">
      <div className="max-w-md sm:w-auto p-5 sm:p-7 rounded-lg border">
        <form onSubmit={onSubmit}>
          <TitleForm text="Sign up" />
          {errorResponse && <p className="bg-red-500 p-3 rounded-lg text-white mt-2">{errorResponse}</p>}

          <input
            {...register("name", { required: true })}
            className="my-2 w-full bg-slate-100 p-3 rounded-md"
            type="text"
            placeholder="Name"
          />
          {errors.name && <ErrorMessage error="Name is required" />}

          <input
            {...register("last_name", { required: true })}
            className="my-2 w-full bg-slate-100 p-3 rounded-md"
            type="text"
            placeholder="Last name"
          />
          {errors.last_name && (
            <ErrorMessage error="Last name is required" />
          )}

          <input
            {...register("email", { required: true })}
            className="my-2 w-full bg-slate-100 p-3 rounded-md"
            type="email"
            placeholder="Email"
          />
          {errors.email && <ErrorMessage error="Email is required" />}

          <input
            {...register("password", { required: true })}
            className="my-2 w-full bg-slate-100 p-3 rounded-md"
            type="password"
            placeholder="Password"
          />
          {errors.password && <ErrorMessage error="Password is required" />}

          <SubmitButton text="save" />
        </form>
      </div>
    </section>
  );
};
