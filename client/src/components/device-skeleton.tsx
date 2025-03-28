import { useTheme } from "@/components/ui/theme-provider";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface DeviceSkeletonProps {
  variant?: "device" | "airpods";
  delay?: number;
}

export function DeviceSkeleton({
  variant = "device",
  delay = 0,
}: DeviceSkeletonProps) {
  const { theme } = useTheme();

  if (variant === "airpods") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay }}
      >
        <Card
          className={`group relative overflow-hidden ${
            theme === "dark" ? "bg-zinc-800/50" : "bg-white/50"
          } backdrop-blur-xl rounded-2xl shadow-lg border border-transparent`}
        >
          <CardContent className="relative p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <Skeleton className="h-[22px] w-[140px]" />
                <Skeleton className="h-[18px] w-[100px]" />
              </div>
              <Skeleton className="h-10 w-10 rounded-lg" />
            </div>

            <div
              className={`mt-5 pt-5 border-t ${
                theme === "dark" ? "border-zinc-700/50" : "border-gray-100"
              }`}
            >
              <div className="grid grid-cols-3 gap-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center space-y-2">
                    <Skeleton className="h-5 w-5 mb-2" />
                    <Skeleton className="h-7 w-[45px] mb-1" />
                    <Skeleton className="h-4 w-[30px]" />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay }}
    >
      <Card
        className={`group relative overflow-hidden ${
          theme === "dark" ? "bg-zinc-800/50" : "bg-white/50"
        } backdrop-blur-xl rounded-2xl shadow-lg h-[196px]`}
      >
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <Skeleton className="h-[22px] w-[160px]" />
              <Skeleton className="h-[18px] w-[120px]" />
            </div>
            <Skeleton className="h-10 w-10 rounded-lg" />
          </div>

          <div
            className={`mt-5 pt-5 border-t ${
              theme === "dark" ? "border-zinc-700/50" : "border-gray-100"
            }`}
          >
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-3">
                <Skeleton className="h-7 w-[56px]" />
                <Skeleton className="h-8 w-[64px]" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
