interface Props {
  errorResponse: string;
}

export const ResponseErrorMessage = ({ errorResponse }: Props) => {
  return (
    <p className="bg-red-500 p-3 rounded-lg text-white mt-2">{errorResponse}</p>
  );
};
