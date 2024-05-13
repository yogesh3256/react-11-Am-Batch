import React, { useState } from 'react'; 

const data = {
  punjab: ["ludhiyana", "patiala", "Amritsar"],
  Himachal: ["una", "mandi", "Kangra"],
  " Uttar pradesh": ["luckmow", "varanasi", "Saharnpur"]
};

function Dropdown() {
  const [selectedstate, setSelectedstate] = useState("");
  const [selectedcity,setSelectedcity]=useState("");
  const [newArry,setNewarry]=useState([])

  const handleChange = (e) => {
    setSelectedstate(e.target.value)
  }
  const handleChange1 = (e) => {
    setSelectedcity(e.target.value)
  }
  const hanldeSubmit = (e) => {
    e.preventDefault();
    setNewarry([...newArry,{state: selectedstate, city:selectedcity}])
    console.log(selectedstate,selectedcity);
  }
  return (
    <div>
      <form>
        <select value={selectedstate} onChange={handleChange}>
          <option value="">Select state</option>
          {Object.keys(data).map((ele, index) => (
            <option key={index} value={ele}>{ele}</option>
          ))}
        </select>

        <select value={selectedcity} onChange={handleChange1}>
          <option value="">select City</option>
          {selectedstate && data[selectedstate].map((ele, index) => (
            <option key={index} value={ele}>{ele}</option>
          ))}
        </select>
        <button type='submit' onClick={hanldeSubmit}>Add</button>
      </form>
   
    </div>
  );
}

export default Dropdown;
