import {getSolidDataset, getThing, getStringNoLocale, Thing} from "@inrupt/solid-client";
import { VCARD } from "@inrupt/vocab-common-rdf";

export async function getAddressLogin(webID: string): Promise<string> {
    let profileDocumentURI = webID.split("#")[0]; 
    let myDataset = await getSolidDataset(profileDocumentURI); 
    let profile = getThing(myDataset, webID); 
    return getStringNoLocale(profile as Thing, VCARD.note) as string;
};

export default getAddressLogin;