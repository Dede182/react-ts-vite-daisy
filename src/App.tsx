import { selectTheme } from "./app/customize/appCustomize"
import { useAppSelector } from "./app/hooks"
import RoutesComponent from "./routes/Routes"

function App() {
  const theme = useAppSelector(selectTheme)
  return (
    <>
     <div className={`${theme} theme w-full max-h-[100vh] transition-all`}>
      <RoutesComponent />
    </div>
    </>
  )
}

export default App
