import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, TextField, Typography, useAutocomplete } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { FormEvent, useState } from "react"
import { BaseLayout } from "./Layout/BaseLayout"
import { Theme } from "./theme/ThemeProvider"


function App() {

  const [user, setUserName] = useState("");
  //const inputRef = useRef(null)
  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    const inputUserName = event.currentTarget.useName
  }

  



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

              </Typography>
            </CardContent>
            <CardActions onSubmit={handleSubmit} >
              <TextField
                label="Nome do Perfil" fullWidth
                name='userName'/>
              <Button variant="contained"  type="submit" >Buscar Perfil</Button>
            </CardActions>
          </Card>

        </BaseLayout>
      </Theme>

    </>
  )
}

export default App
