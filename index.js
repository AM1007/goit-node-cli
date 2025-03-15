import { program } from "commander";
import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from "./contacts.js";

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const options = program.opts();

// Функція для виклику відповідного методу з contacts.js
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactsList = await listContacts();
      console.table(contactsList);
      break;

    case "get":
      const contact = await getContactById(id);
      if (contact) {
        console.log("Contact found:");
        console.table([contact]);
      } else {
        console.log(`Contact with id=${id} not found`);
      }
      break;

    case "add":
      if (!name || !email || !phone) {
        console.log("Please provide name, email, and phone to add a contact");
        break;
      }
      const newContact = await addContact(name, email, phone);
      console.log("Contact added successfully:");
      console.table([newContact]);
      break;

    case "remove":
      const removedContact = await removeContact(id);
      if (removedContact) {
        console.log("Contact removed successfully:");
        console.table([removedContact]);
      } else {
        console.log(`Contact with id=${id} not found`);
      }
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
