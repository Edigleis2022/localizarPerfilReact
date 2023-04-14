import { Box, Button, CssBaseline, TextField, useAutocomplete } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { BaseLayout } from "./Layout/BaseLayout"
import { Theme } from "./theme/ThemeProvider"


function App() {

//const {data, isLoading } = useQuery



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
