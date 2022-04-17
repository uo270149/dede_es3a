import {getSolidDataset,getThing,getStringNoLocale,Thing,getUrl} from "@inrupt/solid-client";
import { VCARD } from "@inrupt/lit-generated-vocab-common";
import React, {useEffect} from "react";
import { Box, Grid } from "@mui/material";

type Props_POD = {
    webID: string;
};

async function userAddress(webID: string): Promise<string[]> {
    let profileDocumentURI = webID.split("#")[0]
    let myDataSet = await getSolidDataset(profileDocumentURI)
    let profile = getThing(myDataSet, webID)
    let hasAddress = getUrl(profile as Thing, VCARD.hasAddress) as string
    let addressUser = await getThing(myDataSet, hasAddress)

    let street_address= getStringNoLocale(addressUser as Thing, VCARD.street_address) as string
    let locality= getStringNoLocale(addressUser as Thing, VCARD.locality) as string
    let postal_code= getStringNoLocale(addressUser as Thing, VCARD.postal_code) as string
    let region= getStringNoLocale(addressUser as Thing, VCARD.region) as string
    let country= getStringNoLocale(addressUser as Thing, VCARD.country_name) as string;
    
    let address = [street_address,locality,postal_code,region,country];
    return address;
  }

function GetAddressPod( props: Props_POD): JSX.Element {
    const [address, setAddress] = React.useState<string[]>([]);
    const getAddress = async () => setAddress(await userAddress(props.webID))

    useEffect(() => {
        getAddress();
    });

    return (
        <Grid container>
          <Grid>
            <Box component="p">Calle: {address[0]}</Box>
            <Box component="p">Localidad: {address[1]}</Box>
            <Box component="p">Codigo Postal: {address[2]}</Box>
            <Box component="p">Región: {address[3]}</Box>"
            <Box component="p">Pais: {address[4]}</Box>
          </Grid>
        </Grid>
    );
  }
export default GetAddressPod;