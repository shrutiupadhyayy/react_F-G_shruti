import { useState, useEffect} from "react";
import FormInput from "./components/FormInput";
import "./App.css";
const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    phone: "",
    // box1: "",
    // box2: "",
    // box3: "",
    // box4: "",
});

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should be between 3 and 16 characters",
      label: "Customer Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      errorMessage: "It should be a valid email address",
      placeholder: "Email",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "phone",
      type: "text",
      errorMessage: "Please enter a valid phone number",
      pattern: "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$",
      label: "Phone",
      required: true,
    },
   
  ];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(check);
   
  };

  
  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value })
  }
  console.log(values);

  const [check, setCheck] = useState([])

  const handleChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    console.log(value, checked);
    if(checked)
    {
      setCheck([
        ...check, value
      ])
    } else {
      check(check.filter((e) => (e !== value) ));
    }
  }
  
  //adding the data to the local storage
  useEffect(() => {
    localStorage.setItem('values', JSON.stringify(values));
  }, [values])
  useEffect(() => {
    const values = JSON.parse(localStorage.getItem('values'));
    if (values) {
     setValues(values);
    } 
  }, []);
  

  return (
    <>
    
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Aromatic Bar</h1>
        <p>We are committed to providing you with the best dining experience possible, so we welcome your comments.
        Please fill out this questionnaire. Thank you.
        </p>
         {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]}
          onChange={onChange}
          />
        ))}

       <form onSubmit={handleSubmit}>
        <label htmlFor="">Please rate the quality of the service you received from your host. &nbsp;</label>
        <br />
        <input type="checkbox" name="stg" value="Excellent" onChange={handleChange}/>
        <label htmlFor=""> &nbsp; Excellent</label>
        &nbsp;

        <input type="checkbox" name="stg" value="Good"onChange={handleChange} />
        <label htmlFor=""> &nbsp; Good</label>
          &nbsp;

        <input type="checkbox" name="stg" value="Fair" onChange={handleChange} />
        <label htmlFor=""> &nbsp; Fair</label>
          &nbsp;

        <input type="checkbox" name="stg" value="Bad" onChange={handleChange}/>
        <label htmlFor=""> &nbsp; Bad</label>
        &nbsp;
       </form>
          <br />
       <form>
        <label htmlFor="">Please rate the quality of your beverage. 
         &nbsp;</label>
        <br />
        <input type="checkbox" name="stg" value="Excellent" onChange={handleChange} />
        <label htmlFor=""> &nbsp; Excellent</label>
        &nbsp;

        <input type="checkbox" name="stg" value="Good"onChange={handleChange} />
        <label htmlFor=""> &nbsp; Good</label>
          &nbsp;

        <input type="checkbox" name="stg" value="Fair" onChange={handleChange}/>
        <label htmlFor=""> &nbsp; Fair</label>
          &nbsp;

        <input type="checkbox" name="stg" value="Bad"onChange={handleChange}/>
        <label htmlFor=""> &nbsp; Bad</label>
        &nbsp;
       </form>
          <br />
       <form>
        <label htmlFor="">Was our restaurant clean?  &nbsp;</label>
        <br />
        <input type="checkbox" name="stg" value="Excellent" onChange={handleChange} />
        <label htmlFor=""> &nbsp; Excellent</label>
        &nbsp;

        <input type="checkbox" name="stg" value="Good" onChange={handleChange}/>
        <label htmlFor=""> &nbsp; Good</label>
          &nbsp;

        <input type="checkbox" name="stg" value="Fair" onChange={handleChange} />
        <label htmlFor=""> &nbsp; Fair</label>
          &nbsp;

        <input type="checkbox" name="stg" value="Bad" onChange={handleChange}/>
        <label htmlFor=""> &nbsp; Bad</label>
        &nbsp;
       </form>
          <br />
        <form>
        <label htmlFor="">Please rate your overall dining experience. &nbsp;</label>
        <br />
        <input type="checkbox" name="stg" value="Excellent" onChange={handleChange}/>
        <label htmlFor=""> &nbsp; Excellent</label>
        &nbsp;

        <input type="checkbox" name="stg" value="Good" onChange={handleChange}/>
        <label htmlFor=""> &nbsp; Good</label>
          &nbsp;

        <input type="checkbox" name="stg" value="Fair" onChange={handleChange}/>
        <label htmlFor=""> &nbsp; Fair</label>
          &nbsp;
        <input type="checkbox" name="stg" value="Bad" onChange={handleChange}/>
        <label htmlFor=""> &nbsp; Bad</label>
        &nbsp;
       </form>
          <br /> 
        <button>Submit Review   
        </button>
      </form>  
   
    </div>
    <h2>Aromatic Bar</h2>
    <table>
    <tr>
          <th>Customer Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Ratings</th>
        </tr>
        <tr>
          <td>Anom</td>
          <td>anom11@gmail.com</td>
          <td>9900887766</td>
          <td>Excellent</td>
        </tr>
        <tr>
          <td>Megha</td>
          <td>megha20@gmail.com</td>
          <td>9876789765</td>
          <td>Good</td>
        </tr>
        <tr>
          <td>Shubham</td>
          <td>shubh00@gmail.com</td>
          <td>9876545678</td>
          <td>Fair</td>
        </tr>
    </table>
  </>
  );
};

export default App;
