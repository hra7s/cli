

import  { useState ,useEffect} from 'react';


const GetInTouch = () => {
    const [showForm, setShowForm] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        message: ''
    });

   
    const toggleForm = () => {
        setShowForm(!showForm);
    };

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true); 
    };

    useEffect(() => {
      let lastScrollY = window.scrollY;
  
      const handleScroll = () => {
          if (window.scrollY > lastScrollY) {
             
              setShowForm(true);
          } else {
              
              setShowForm(false);
          }
          lastScrollY = window.scrollY;
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  

    return (
        <div className={`get-in-touch ${showForm ? 'expanded' : 'collapsed'}`}>
            
            <button className="get-in-touch-btn" onClick={toggleForm}>
                Get in Touch
            </button>

          
            {showForm && (
                <form className="details-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            )}

          
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Submitted Details</h2>
                        <p><strong>Email:</strong> {formData.email}</p>
                        <p><strong>Phone:</strong> {formData.phone}</p>
                        <p><strong>Message:</strong> {formData.message}</p>
                        <button onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GetInTouch;
