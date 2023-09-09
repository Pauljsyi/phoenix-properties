import * as Realm from "realm-web";
import { realm_app } from "./app";

/**
 * Authenticate the user and store the auth token in session
 * Fetches user's custom data
 * @param {*} email the input email
 * @param {*} pw the input password
 */
export const authenticateUser = async (email, pw) => {
  const credentials = Realm.Credentials.emailPassword(email, pw);
  try {
    const user = await realm_app.logIn(credentials);
    console.assert(user.id === realm_app.currentUser.id);
    console.log("user in login", user);
    console.log("cust data", realm_app.currentUser.customData);
    if (user) {
      storeSession(user._accessToken);
      return await realm_app.currentUser.customData;
    }
    return null;
  } catch (error) {
    console.error("authenticateUser Error", error);
    return null;
  }
};

/**
 * Register the user then log the user in manually to change the user from pending status to active in Realm - This also runs the trigger function on Realm to create a new user object
 * Stores the access token in session for protected route navigation
 * @param {*} names
 * @param {*} params  email and password
 * @returns
 */
export const registerUser = async (names, { email, password }) => {
  try {
    const authenticated = await realm_app.emailPasswordAuth.registerUser({
      email,
      password,
    });
    const user = await authenticateUser(email, password);
    console.log("user", user);
    const updated = await user.functions.updateUserFirstLastNames({
      id: user.id,
      firstName: names.firstName,
      lastName: names.lastName,
    });
    storeSession(user._accessToken);
    return user;
  } catch (error) {
    console.error("registerUser Error", error);
    return null;
  }
};

export const logOutUser = async () => {
  console.log("logging out");
  await realm_app.currentUser.logOut();
};

/**
 * Stores the token in session
 * @param {*} token access token from Realm for authenticated user
 */
const storeSession = (token) => {
  sessionStorage.setItem("Auth_Token", token);
};
