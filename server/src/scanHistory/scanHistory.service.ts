import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ScanHistoryServiceBase } from "./base/scanHistory.service.base";

@Injectable()
export class ScanHistoryService extends ScanHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
