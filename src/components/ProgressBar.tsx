import { formatPrice } from "@/lib/utils";
import { Progress } from "./ui/progress"

interface ProgressBarProps {
    raisedAmount: number,
    target: number
}

const ProgressBar = ({raisedAmount, target}: ProgressBarProps) => {
    const progressPercentage = (function progressBar() {
        //if raised amt should  be 0 or undefined return 0 progress
        if (raisedAmount === undefined || !target) {
          return 0;
        } else {
          // find percentage to nearest number
          return Math.round((raisedAmount / target) * 100);
        }
      })();
    return <div>
    <Progress value={progressPercentage} className="h-1" />
    <div className="flex items-center justify-between mx-0 my-1 text-xs">
      <p className="text-muted-foreground">
        Raised: {formatPrice(raisedAmount)}
      </p>
      <p className=" text-muted-foreground">
        Goal: {formatPrice(target)}
      </p>
    </div>
  </div>
}
export default ProgressBar