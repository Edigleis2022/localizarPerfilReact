import { Box, Button, CssBaseline, TextField, useAutocomplete } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { useRef, useState } from "react"
import { BaseLayout } from "./Layout/BaseLayout"
import { Theme } from "./theme/ThemeProvider"


function App() {

const [search, setSearch ] = useState("");
//const inputRef = useRef(null)
const handleClick = ()=>{
//const username = inputRef.current
}

/*const {data, isLoading } = useQuery({
 queryKey:["user-github"],
 queryFn:() => {
  getUser(search);
 },
})*/



  return (

    <>
    
      <Theme>
        <CssBaseline />
        <BaseLayout appBarTitle="Buscador de Perfil">
          <TextField/>
          <Button variant="contained" onClick={handleClick}>Buscar Perfil</Button>

        </BaseLayout>
      </Theme>
      
    </>
  )
}

export default App
