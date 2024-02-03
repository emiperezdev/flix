interface Props {
  text: string;
}

export const TitleForm = ({ text }: Props) => {
  return (
    <h2 className="mb-7 text-3xl sm:text-4xl text-center font-semibold leading-7 text-gray-900">
      {text}
    </h2>
  );
};
