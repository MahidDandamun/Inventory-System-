import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
 


interface FormErrorProps {
  message?: string;

}


export const FormError = ({
  message,
}: FormErrorProps) => {

  if (!message) return null;


  return (
    <div className="bg-red-500/15 p-3 rounded-md flex  items-center gap-x-2 text-sm font-medium text-red-500">
      <ExclamationTriangleIcon className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};