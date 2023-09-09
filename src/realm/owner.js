import * as Realm from "realm-web";
import { realm_app } from "./app";

export const createOwner = async (newOwner) => {
  try {
    const isSaved =
      await realm_app.currentUser.functions.createNewOwnerDocument(newOwner);
    console.log("createOwner", isSaved);
    return isSaved;
  } catch (err) {
    console.error("createOwner Error", err);
    return null;
  }
};

/**
 *
 * @returns all owners from Realm
 */
export const getAllOwners = async () => {
  try {
    const result = await realm_app.currentUser.functions.getAllOwners();
    return result;
  } catch (err) {
    console.error("getAllOwners Error", err);
    return null;
  }
};
