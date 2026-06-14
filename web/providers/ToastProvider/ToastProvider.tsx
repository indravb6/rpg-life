"use client";

import { Alert, AlertColor, Snackbar } from "@mui/material";
import { PropsWithChildren } from "react";
import { create } from "zustand";

export const useToast = create<{
  open: boolean;
  severity: AlertColor;
  message: string;
  showToast: (severity: AlertColor, message: string) => void;
  hideToast: () => void;
}>((set) => ({
  open: false,
  message: "",
  severity: "info",
  showToast: (severity: AlertColor, message: string) => set({ open: true, message, severity }),
  hideToast: () => set({ open: false, message: "" }),
}));

export default function ToastProvider({ children }: PropsWithChildren) {
  const { open, message, severity, hideToast } = useToast();

  return (
    <>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={hideToast}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={hideToast} severity={severity} variant="filled" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
