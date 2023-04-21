import { Avatar, Box, Button, Card, CardActions, CardContent, CssBaseline, TextField, Typography} from "@mui/material"
import { Children, FormEvent, useState } from "react"
import { BaseLayout } from "./Layout/BaseLayout"
import { Theme } from "./theme/ThemeProvider"
import { UserProps } from "./Types/users"

function App() {

  const [user,setUser] = useState<UserProps>(userData);
  const[isLoading, setLoading] = useState(false)

  const userData: UserProps = { 
    avatar_url: '',
    login: '',
    location: '', 
    followers: 0,
    following: 0
};


  const loadUser = async(userName: String) => {
    const res = await fetch(`http://api.github.com/users/${userName}`)
    
    const data  = await res.json();

    const {avatar_url, login, location, followers, following} = data

   
    setUser(userData);
}
  


  
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const inputUserName: HTMLInputElement = form.userName;
    setLoading(true)
    setUser(await loadUser(inputUserName.value))
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
                <Typography gutterBottom >
                  Git Hub
                </Typography>
                <Typography >
                
                </Typography>
              </CardContent>
              <CardActions  >
                <Box sx={{ justifyContent: "center", }}  >
                  <TextField 
                    label="Nome do Perfil" fullWidth
                    name='userName' onSubmit={handleSubmit} />
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




