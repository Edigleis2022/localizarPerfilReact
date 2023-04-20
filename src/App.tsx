import { Box, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, TextField, Typography, useAutocomplete } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { useRef, useState } from "react"
import { BaseLayout } from "./Layout/BaseLayout"
import { Theme } from "./theme/ThemeProvider"


function App() {

  const [search, setSearch] = useState("");
  //const inputRef = useRef(null)
  const handleClick = () => {
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
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia

            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Git Hub
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
            <TextField />
              <Button variant="contained" onClick={handleClick}>Buscar Perfil</Button>
            </CardActions>
          </Card>
          
        </BaseLayout>
      </Theme>

    </>
  )
}

export default App
