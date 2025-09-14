import { useState } from 'react';

function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneType, setPhoneType] = useState('');
    const [comments, setComments] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        const contactUsInformation = {
            name,
            email,
            phone,
            phoneType,
            comments,
            submittedOn: new Date()
        };
        console.log(contactUsInformation); // For debugging
        // reset form
        setName('');
        setEmail('');
        setPhone('');
        setPhoneType('');
        setComments('');
    };

    return (
        <div>
            <h2>Contact Us</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input
                        id='name'
                        type='text'
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input
                        id='email'
                        type='email'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div>
                    <label htmlFor='phone'>Phone:</label>
                    <input
                        id='phone'
                        type='tel'
                        onChange={e => setPhone(e.target.value)}
                        value={phone}
                    />
                </div>
                <div>
                    <label htmlFor='phoneType'>Phone Type:</label>
                    <select
                        id='phoneType'
                        value={phoneType}
                        onChange={e => setPhoneType(e.target.value)}
                    >
                        <option value=''>Select</option>
                        <option value='mobile'>Mobile</option>
                        <option value='work'>Work</option>
                        <option value='home'>Home</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='comments'>Comments:</label>
                    <textarea
                        id='comments'
                        name='comments'
                        onChange={e => setComments(e.target.value)}
                        value={comments}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactUs;
