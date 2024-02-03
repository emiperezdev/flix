import { useForm } from "react-hook-form";
import useAddUser from "../hooks/usePostUser";
import UserEntity from "../entitites/user.entity";
import useErrorState from "../states/useErrorState";
import { ErrorMessage } from "../components/ErrorMessage";
import { SubmitButton } from "../components/SubmitButton";
import { TitleForm } from "../components/TitleForm";
import { InputField } from "../components/InputField";
import { EmailInput, LastNameInput, NameInput, PasswordInput } from "../entitites/input.entity";
import { ContainerForm } from "../components/ContainerForm";

export const RegisterPage = () => {
  const {
    formState: { errors },
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
      <ContainerForm>
        <form onSubmit={onSubmit}>
          <TitleForm text="Sign up" />
          {errorResponse && <p className="bg-red-500 p-3 rounded-lg text-white mt-2">{errorResponse}</p>}

          <InputField inputData={NameInput} register={register} />
          {errors.name && <ErrorMessage error="Name is required" />}

          <InputField inputData={LastNameInput} register={register} />
          {errors.last_name && (
            <ErrorMessage error="Last name is required" />
          )}

          <InputField inputData={EmailInput} register={register} />
          {errors.email && <ErrorMessage error="Email is required" />}

          <InputField register={register} inputData={PasswordInput} />
          {errors.password && <ErrorMessage error="Password is required" />}

          <SubmitButton text="Save" />
        </form>
      </ContainerForm>
    </section>
  );
};
