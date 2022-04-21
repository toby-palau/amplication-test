import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

@Injectable()
export class HealthServiceBase {
  constructor(protected readonly prisma: PrismaService) {}
  async isDbReady(): Promise<boolean> {
    try {
      await this.prisma.$runCommandRaw({});
      return true;
    } catch (error) {
      return false;
    }
  }
}
