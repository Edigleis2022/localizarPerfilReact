import { Avatar, Box, Button, Card, CardActions, CardContent, CssBaseline, TextField, TextFieldProps, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { BaseLayout } from "./Layout/BaseLayout"
import { Theme } from "./theme/ThemeProvider"
import { UserProps } from "./Types/users"
import Form from "./components/Form"

function App() {

  const userData: UserProps = {
    avatar_url: '',
    login: '',
    location: '',
    followers: 0,
    following: 0
  };

  const [user, setUser] = useState<UserProps>(userData);
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const loadUser = async (userName: String) => {
      const res = await fetch(`http://api.github.com/users/edigleis2022`)

      const data = await res.json();

      const { avatar_url, login, location, followers, following } = data


      setUser(userData);
    }

  }, [])



  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
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
                <form>
                  <Box sx={{ justifyContent: "center", }}  >
                    <TextField
                      label="Nome do Perfil" fullWidth
                      name='userName' onSubmit={handleSubmit} />
                    <Button
                      variant="contained"
                      type="submit" >Buscar Perfil</Button>
                  </Box>
                </form>
              </CardActions>
            </Card>
          </Box>
        </BaseLayout>
      </Theme>

    </>
  )
}

export default App




