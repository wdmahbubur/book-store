import { useStore } from "@lib/useStore";
import { Alert } from "keep-react";
import { XCircle, CheckCircle } from "phosphor-react";

interface AlertComponentsProps {
  type: "error" | "success";
  message: string;
}

const AlertComponents = ({ type, message }: AlertComponentsProps) => {
  const { dismissAlert } = useStore();
  return (
    <Alert
      color={type}
      rounded={true}
      withBorder={true}
      withBorderAccent={true}
      onDismiss={() => dismissAlert()}
      withBorderAccentPosition="left"
      icon={
        type == "error" ? (
          <XCircle size={24} color="#E92215" />
        ) : (
          <CheckCircle size={24} color="#0A9952" />
        )
      }
      title={message}
      className="fixed top-0 right-0 z-50 w-96 sm:w-8/12 md:w-5/12 lg:w-3/12 mt-10 sm:mt-16"
    />
  );
};

export default AlertComponents;
