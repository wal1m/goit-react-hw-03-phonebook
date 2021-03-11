import ContactItem from "../ContactItem/ContactItem";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  list: {
    marginBottom: "10px",
  },
});

const ContactList = ({ contacts, onDelete }) => {
  const classes = useStyles();
  return (
    <ul className={classes.list}>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
