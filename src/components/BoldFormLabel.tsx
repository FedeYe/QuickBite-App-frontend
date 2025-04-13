import { FormLabel } from "./ui/form";

type Props = {
    children: React.ReactNode
};

export const BoldFormLabel = ({ children }: Props) => {
  return <FormLabel className="font-bold">{children}</FormLabel>
}

export default BoldFormLabel;
