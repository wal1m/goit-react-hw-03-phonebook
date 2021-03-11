import { useState, useEffect } from "react";

import Container from "./components/Container/Container";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

function App() {
  const [contacts, setContacts] = useState([
    // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  const hendleSubmit = (contact) => {
    if (contacts.find(({ name }) => name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    setContacts((prevState) => [contact, ...prevState]);
  };

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  const normalizeFilter = filter.toLowerCase();
  const filtrContactList = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter)
  );

  const handleDeleteContact = (id) =>
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== id)
    );

  useEffect(() => {
    // console.log("Чтение из localStorage", localStorage.getItem("contacts"));
    const contactsSave = localStorage.getItem("contacts");
    const parsedContactsSave = JSON.parse(contactsSave);
    if (parsedContactsSave) {
      setContacts(parsedContactsSave);
    }
  }, []);

  useEffect(() => {
    // console.log("Запись в localStorage");
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={hendleSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleSearchChange} />
      <ContactList contacts={filtrContactList} onDelete={handleDeleteContact} />
    </Container>
  );
}

export default App;
