import { Module } from "@nestjs/common";
import { ScanHistoryModuleBase } from "./base/scanHistory.module.base";
import { ScanHistoryService } from "./scanHistory.service";
import { ScanHistoryController } from "./scanHistory.controller";
import { ScanHistoryResolver } from "./scanHistory.resolver";

@Module({
  imports: [ScanHistoryModuleBase],
  controllers: [ScanHistoryController],
  providers: [ScanHistoryService, ScanHistoryResolver],
  exports: [ScanHistoryService],
})
export class ScanHistoryModule {}
