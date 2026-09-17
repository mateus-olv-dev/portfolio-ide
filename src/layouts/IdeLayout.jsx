import '../components/Editor/EditorScreen'
import { EditorScreen } from '../components/Editor/EditorScreen'
import { SideBar } from '../components/Sidebar/SideBar'
// import { SideBarNew } from '../components/SidebarNav/SideBarNew'

export function IdeLayout() {
  return(
    <main>
      <SideBar />
      <EditorScreen />
    </main>
  )
}


