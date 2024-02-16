"use client";
import Link from "next/link";
import { useState } from "react";
import { Alert } from "keep-react";
import { Info } from "phosphor-react";
import { useStore } from "@lib/useStore";

interface AlertComponentsProps {
  type: "error" | "success";
  message: string;
}

const AlertComponent = ({ type, message }: AlertComponentsProps) => {
  const { dismissAlert, alert } = useStore();
  return (
    <Alert
      onDismiss={dismissAlert}
      dismiss={!alert}
      rounded={true}
      withBorder={true}
      withBorderAccent={true}
      color={type}
      className="py-4 top-12 right-2 fixed w-96"
    >
      <Alert.Container>
        <Alert.Body>
          <Alert.Title className="mb-0">{message}</Alert.Title>
        </Alert.Body>
      </Alert.Container>
    </Alert>
  );
};

export default AlertComponent;
