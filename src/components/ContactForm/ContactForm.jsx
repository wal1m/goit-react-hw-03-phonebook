import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  form: {
    padding: "5px",
    border: ["1px", "solid", "#2f2f2f"],
    borderRadius: "4px",
  },
  button: {
    marginTop: "10px"
  }
});

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleNumberChange = (e) => setNumber(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };
    onSubmit(newContact);
    setName("");
    setNumber("");
  };

  const classes = useStyles();
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div>
        <label>
          <p>Name</p>
          <input
            type="text"
            // name='name'
            onChange={handleNameChange}
            value={name}
          />
        </label>
        <label>
          <p>Number</p>
          <input
            type="tel"
            // name='name'
            onChange={handleNumberChange}
            value={number}
          />
        </label>
      </div>
      <button className={classes.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
