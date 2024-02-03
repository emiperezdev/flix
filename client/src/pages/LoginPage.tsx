import { useForm } from "react-hook-form";
import { ContainerForm } from "../components/ContainerForm";
import { InputField } from "../components/InputField";
import { SubmitButton } from "../components/SubmitButton";
import { TitleForm } from "../components/TitleForm";
import { EmailInput, PasswordInput } from "../entitites/input.entity";
import { ErrorMessage } from "../components/ErrorMessage";
import LoginDto from "../entitites/login.entity";
import useLogin from "../hooks/useLogin";
import useErrorState from "../states/useErrorState";
import { ResponseErrorMessage } from "../components/ResponseErrorMessage";

export const LoginPage = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<LoginDto>();

  const errorMessage = useErrorState((s) => s.error);

  const login = useLogin();

  const onSubmit = handleSubmit((data) => {
    login.mutate(data);
  });

  return (
    <section className="flex h-[calc(100vh-200px)] justify-center items-center drop-shadow-md mx-5">
      <ContainerForm>
        <form onSubmit={onSubmit}>
          <TitleForm text="Login" />

          {errorMessage && (
            <ResponseErrorMessage errorResponse={errorMessage} />
          )}

          <InputField inputData={EmailInput} register={register} />
          {errors.email && <ErrorMessage error="Email is required" />}

          <InputField inputData={PasswordInput} register={register} />
          {errors.password && <ErrorMessage error="Password is required" />}

          <SubmitButton text="Login" />
        </form>
      </ContainerForm>
    </section>
  );
};
