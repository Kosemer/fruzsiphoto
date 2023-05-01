import ContactDetails from "../Components/ContactForm/ContactDetails";
import ContactUs from "../Components/ContactForm/ContactUs";
import classes from './Contact.module.css';

function Contact(props) {
  console.log(props.location.state.title)
  return (
    <div>
      

      <h1 style={{ textAlign: 'center', marginTop: '10rem', fontSize: '50px', fontFamily: 'Caveat' }}>Kapcsolat</h1>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ flex: 4 }}>
        <ContactDetails />
      </div>
      <div style={{ flex: 6 }}>
        <ContactUs />
      </div>
    </div>
    </div>
  );
}



export default Contact;
