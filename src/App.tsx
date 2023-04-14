import { Box, Button, CssBaseline, TextField } from "@mui/material"
import { BaseLayout } from "./Layout/BaseLayout"
import { Theme } from "./theme/ThemeProvider"


function App() {




  return (

    <>
    
      <Theme>
        <CssBaseline />
        <BaseLayout appBarTitle="Buscador de Perfil">
          <TextField/>
          <Button variant="contained">Buscar Perfil</Button>

        </BaseLayout>
      </Theme>
      
    </>
  )
}

export default App
