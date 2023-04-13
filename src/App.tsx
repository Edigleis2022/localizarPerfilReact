import { CssBaseline, TextField } from "@mui/material"
import { BaseLayout } from "./Layout/BaseLayout"
import { Theme } from "./theme/ThemeProvider"


function App() {


  return (

    <>
      <Theme>
        <CssBaseline />
        <BaseLayout appBarTitle="Buscador de Perfil">
          <TextField/>

        </BaseLayout>
      </Theme>
    </>
  )
}

export default App
