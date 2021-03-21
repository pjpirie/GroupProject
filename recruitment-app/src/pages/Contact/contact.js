import {Button} from '@material-ui/core';

function Contact() {
    return (
        <div className="Contact">
            <h1>Contact Us</h1>
            <form>
                <label for="name">First Name: </label>
                <input type="text" id="name" required />

                <label for="email">Email: </label>
                <input type="email" id="email" required />

                <label for="number">Number: </label>
                <input type="text" id="number" required />

                <label for="category">Category: </label>
                <input type="text" id="category" required />

                <label for="enquiry">Enquiry: </label>
                <input type="text" id="enquiry" required />

                <Button value="submit">Submit</Button>
            </form>
            <h1 className="formSubmit">Thank you for contacting us with your enquiry</h1>
        </div>
    );
}

export default Contact;