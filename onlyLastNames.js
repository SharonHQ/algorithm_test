//This function returns last names from a contact list

const rokket = contacts => contacts.map(person => person.lastName);

const contacts = [
  { firstName: 'Juanito', lastName: 'Rokket' },
  { firstName: 'James', lastName: 'Bond' },
  { firstName: 'Harry', lastName: 'Potter' }
]
console.log(rokket(contacts)) // this outputs ['Rokket', 'Bond', 'Potter'];