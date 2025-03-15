**Homework Assignment. Topic 2. Creating Console Applications**

**Step 1**

- Create a repository named `goit-node-cli`, clone it and initialize a project using the npm init command. Install the commander package as a project dependency
- Place the files from the src folder into the root of the project

**Step 2**

- In the `contacts.js` file, import the `fs` modules (in the version that works with promises - `fs/promises`) and path for working with the file system.
- Create a variable `contactsPath` and store the path to the `contacts.json` file in it. Use methods from the `path` module to build the path.
- Add asynchronous functions for working with the contacts collection. In these functions, use the `fs` module and its methods `readFile()` and `writeFile()`. The respective functions should return the necessary data using the return operator. There should be no console output in the written functions.
- Export the created functions.

```js
// contacts.js

/*
 * Uncomment and write the value
 * const contactsPath = ;
 */

async function listContacts() {
  // ...your code. Returns an array of contacts.
}

async function getContactById(contactId) {
  // ...your code. Returns a contact object with the specified id. Returns null if a contact with this id is not found.
}

async function removeContact(contactId) {
  // ...your code. Returns the object of the deleted contact. Returns null if a contact with this id is not found.
}

async function addContact(name, email, phone) {
  // ...your code. Returns the object of the added contact (with id).
}
```

**Step 3**

- Import the functions from the `contacts.js` file into the `index.js` file.
- Then use the prepared `invokeAction()` function, which receives the type of action to be performed and the necessary arguments. The function should call the corresponding method from the `contacts.js` file, passing it the necessary arguments. The result of the called function should be displayed in the console.

**Step 4**
Run the commands in the terminal and make sure the code works properly.

```
# Get and display the entire list of contacts in a table format (console.table)
node index.js -a list

# Get a contact by id and display the contact object in the console or null if a contact with this id does not exist.
node index.js -a get -i 05olLMgyVQdWRwgKfg5J6

# Add a contact and display the newly created contact object in the console
node index.js -a add -n Mango -e mango@gmail.com -p 322-22-22

# Delete a contact and display the deleted contact object in the console or null if a contact with this id does not exist.
node index.js -a remove -i qdggE76Jtbfd9eWJHrssH
```

**Acceptance Criteria**

- Repository with the homework assignment is created
- The repository link is sent to the mentor for review
- The code meets the project's technical requirements
- There are no commented code sections in the code
- The project works correctly with the current LTS version of Node
