interface Props {
  text: string;
}
export const SubmitButton = ({ text }: Props) => {
  return (
    <div className="flex justify-center">
      <button
        type="submit"
        className="bg-sky-400 text-white border p-2 px-6 mt-3 rounded-lg hover:bg-sky-500"
      >
        {text}
      </button>
    </div>
  );
};
