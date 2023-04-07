import { CssBaseline } from "@mui/material"
import { BaseLayout } from "./Layout/BaseLayout"
import { Theme } from "./theme/ThemeProvider"


function App() {


  return <>
    <Theme>
    <CssBaseline />
    <BaseLayout appBarTitle="Buscador de Perfil">


    </BaseLayout>
    </Theme>
  </>
}

export default App
