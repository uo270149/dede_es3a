import { useSession, CombinedDataProvider, Image, LogoutButton, Text } from "@inrupt/solid-ui-react";
import { Button, Card, CardActionArea, CardContent, Container, Typography } from "@material-ui/core";
import { FOAF, VCARD } from "@inrupt/lit-generated-vocab-common";
const ProfileViewer = () => {
  const { session } = useSession();
  const { webId } = session.info;

  return (
    
    <Container fixed>
      {session.info.webId ? (
        <CombinedDataProvider
          datasetUrl={session.info.webId}
          thingUrl={session.info.webId}>
          <Card style={{ maxWidth: 480 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <Text property={FOAF.name.iri.value} />
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" style={{ display: "flex", alignItems: "center" }}>
                <Text property={VCARD.organization_name.iri.value} />
              </Typography>
            </CardContent>

            <CardActionArea style={{ justifyContent: "center", display: "flex" }}>
            <Text id= "direction" property={VCARD.note.iri.value} />
            </CardActionArea>
          </Card>
        </CombinedDataProvider>
      ) : null}
      <LogoutButton>
        <Button style={{ marginTop: 20 }} variant="contained" color="primary">
          Logout
        </Button>
      </LogoutButton>
      <Button href="http://localhost:3000">
          Aceptar
        </Button>
    </Container>
  );
}

export default ProfileViewer
