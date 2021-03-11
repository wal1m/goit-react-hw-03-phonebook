import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  button: {
    marginLeft: "10px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    // border: "borderTopStyle",
    borderBottomStyle: "outset",
  },
});

const ContactItem = ({ contact: { id, name, number }, onDelete }) => {
  const handelDelete = () => onDelete(id);
  const classes = useStyles();
  return (
    <li className={classes.listItem}>
      {name}: {number}
      <button type="button" onClick={handelDelete} className={classes.button}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};
