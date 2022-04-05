import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ScanHistoryResolverBase } from "./base/scanHistory.resolver.base";
import { ScanHistory } from "./base/ScanHistory";
import { ScanHistoryService } from "./scanHistory.service";

@graphql.Resolver(() => ScanHistory)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ScanHistoryResolver extends ScanHistoryResolverBase {
  constructor(
    protected readonly service: ScanHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
