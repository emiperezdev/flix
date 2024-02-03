interface Props {
  error: string;
}

export const ErrorMessage = ({ error }: Props) => {
  return <p className="text-red-600 mb-2">{error}</p>;
};
