// components/hooks/use-toast.ts

import { toast as baseToast } from "react-toastify"; // Assuming you're using react-toastify

export const toast = ({ title, description }: { title: string; description: string }) => {
  baseToast(`${title}: ${description}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
