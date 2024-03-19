import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

const drawerWidth = 240;

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <NothingSelectedView /> */}
      <NoteView />
    </JournalLayout>
  )
}
