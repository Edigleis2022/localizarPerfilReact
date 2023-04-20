import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, TextField, Typography, useAutocomplete } from "@mui/material"
import { FormEvent, useState } from "react"
import { BaseLayout } from "./Layout/BaseLayout"
import { Theme } from "./theme/ThemeProvider"
import { UserProps } from "./Types/users" 

function App() {

  const loadUser = async(userName: String) => {
    const res = await fetch(`http://api.github.com/users/${userName}`)
    
    const data  = await res.json();

    const {avatar_url, login, location, followers, following} = data

    const userData: UserProps = { 
        avatar_url,
        login,
        location, 
        followers,
        following,
    };
    
    setUser(userData);

}
  

  const [user, setUserName] = useState("");
  const[isLoading, setLoading] = useState(false)
  
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const inputUserName: HTMLInputElement = form.userName;
    setLoading(true)
    setUserName(await getUser(inputUserName))
    setLoading(false)
  }
 


  return (

    <>

      <Theme>
        <CssBaseline />
        <BaseLayout appBarTitle="Buscador de Perfil">
          <Box sx={{
                   justifyContent: "center",
          }} >
            <Card sx={{ maxWidth: 345 }}>
                <Avatar src={user.avatar_url} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Git Hub
                </Typography>
                <Typography variant="body2" color="text.secondary">

                </Typography>
              </CardContent>
              <CardActions onSubmit={handleSubmit} >
                <Box sx={{ justifyContent: "center", }} >
                  <TextField
                    label="Nome do Perfil" fullWidth
                    name='userName' />
                  <Button variant="contained" type="submit" >Buscar Perfil</Button>
                </Box>
              </CardActions>
            </Card>
          </Box>
        </BaseLayout>
      </Theme>

    </>
  )
}

export default App
function getUser(inputUserName: HTMLInputElement): import("react").SetStateAction<string> | PromiseLike<import("react").SetStateAction<string>> {
  throw new Error("Function not implemented.")
}

