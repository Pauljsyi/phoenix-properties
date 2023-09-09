import * as Realm from "realm-web";

/**
 * Instantiate a new Realm app
 */
export const realm_app = new Realm.App({ id: process.env.REACT_APP_REALM_ID });
