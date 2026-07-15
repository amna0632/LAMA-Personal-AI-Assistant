import {
  DashboardContainer,
  DashboardGrid,
  LeftArea,
  CenterArea,
  RightArea,
} from "./DashboardStyles";

import LeftPanel from "../../LeftPanel/LeftPanel";
import RightPanel from "../../RightPanel/RightPanel";
import CenterOrb from "../../CenterOrb/CenterOrb";

export default function Dashboard() {
  return (
    <DashboardContainer>
      <DashboardGrid>

        <LeftArea>
          <LeftPanel />
        </LeftArea>

        <CenterArea>
          <CenterOrb />
        </CenterArea>

        <RightArea>
          <RightPanel />
        </RightArea>

      </DashboardGrid>
    </DashboardContainer>
  );
}