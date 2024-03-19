import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../views";

const drawerWidth = 240;

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView />
    </JournalLayout>
  )
}
