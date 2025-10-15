import { Card } from "@/components/ui/card";
import { Activity, Zap, Database, TrendingUp } from "lucide-react";

export default function AnalyticsDashboard() {
  //todo: remove mock functionality - replace with real metrics
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
      <Card className="p-3 sm:p-4">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Activity className="size-5 text-primary" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-foreground">127</div>
            <div className="text-xs text-muted-foreground">Analyses Today</div>
          </div>
        </div>
      </Card>
      
      <Card className="p-3 sm:p-4">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-lg bg-chart-2/10 flex items-center justify-center">
            <Zap className="size-5 text-chart-2" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-foreground">2.3s</div>
            <div className="text-xs text-muted-foreground">Avg Latency</div>
          </div>
        </div>
      </Card>
      
      <Card className="p-3 sm:p-4">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-lg bg-chart-3/10 flex items-center justify-center">
            <Database className="size-5 text-chart-3" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-foreground">15.2TB</div>
            <div className="text-xs text-muted-foreground">Processed</div>
          </div>
        </div>
      </Card>
      
      <Card className="p-3 sm:p-4">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-lg bg-chart-4/10 flex items-center justify-center">
            <TrendingUp className="size-5 text-chart-4" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-foreground">94%</div>
            <div className="text-xs text-muted-foreground">Accuracy</div>
          </div>
        </div>
      </Card>
    </div>
  );
}
