import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Dialog, DialogOverlay, DialogContent } from "@radix-ui/react-dialog";

const LoadingModal = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <Dialog open={loading}>
      <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50" />
      <DialogContent className="flex items-center justify-center fixed inset-0">
        <div className="w-10 h-10 border-4 border-t-transparent border-gray-300 rounded-full animate-spin" />
      </DialogContent>
    </Dialog>
  );
};

export default LoadingModal;
