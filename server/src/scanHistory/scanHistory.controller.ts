import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ScanHistoryService } from "./scanHistory.service";
import { ScanHistoryControllerBase } from "./base/scanHistory.controller.base";

@swagger.ApiTags("scanHistories")
@common.Controller("scanHistories")
export class ScanHistoryController extends ScanHistoryControllerBase {
  constructor(
    protected readonly service: ScanHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
