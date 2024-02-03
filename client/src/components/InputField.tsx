import { UseFormRegister } from "react-hook-form";
import InputDto from "../entitites/input.entity";

interface Props {
  inputData: InputDto;
  register: UseFormRegister<any>;
}

export const InputField = ({ inputData, register }: Props) => {
  return (
    <input
      {...register(inputData.name, { required: true })}
      className="w-full bg-slate-100 p-3 rounded-md my-2"
      type={inputData.type}
      placeholder={inputData.placeholder}
    />
  );
};
