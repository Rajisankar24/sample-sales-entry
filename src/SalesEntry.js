import React, { useState } from 'react';
import "./SalesEntry.css"

const SalesEntry = () => {
    const [totalSum,setTotalSum] =useState(0)
  const [header, setHeader] = useState({ vrNo: '', vrDate: '', acName: '' },);

  const [details, setDetails] = useState([
    {
        itemCode:"",itemName:"", price:"",qty:"",rate:"",amt:""
    }
  ]);

  const handleHeaderChange = (e) => {
    const { name, value } = e.target;
    setHeader({ ...header, [name]: value });
  };

  const handleDetailChange = (index, e) => {
    const { name, value } = e.target;
    const updatedDetails = [...details];
    updatedDetails[index] = { ...updatedDetails[index], [name]: value };
    setDetails(updatedDetails);
  };
  const handleAddDetail = () => {
    setDetails([...details, {
        itemCode:"",itemName:"", price:"",qty:"",rate:"",amt:""
    }]);
  };

  const handleRemoveDetail = (index) => {
    const updatedDetails = details.filter((_, i) => i !== index);
    setDetails(updatedDetails);
  };

  const handleSubmit = () => {
    // TODO: Implement logic to send data to backend for storage

    console.log('Header:', header);
    console.log('Details:', details);
  };

  const handleTotal =()=>{
    const allamt = details.map(val=>val.amt)
    let sum = 0;
for (let i = 0; i < allamt.length; i++) {
  sum += allamt[i];
}
    console.log(sum)
    setTotalSum(sum)
  }

  return (
    <div>
      <h1>Header</h1>

      {/* Header Section */}
      <div className='headercontainer'>
      <label>VrNO:</label>
        <input
          type="text"
          name="vrNo"
          value={header.vrNo}
          onChange={handleHeaderChange}
        />
        <label>Vr Date:</label>
        <input
          type="date"
          name="date"
          value={header.date}
          onChange={handleHeaderChange}
        />
        <label>Ac Name:</label>
        <input
          type="text"
          name="acName"
          value={header.acName}
          onChange={handleHeaderChange}
        />
        <label>Ac Amt:</label>
        <input
        disabled
          type="text"
          name="acAmt"
          value={totalSum}
          onChange={handleHeaderChange}
          className='amtBtn'
        />
      </div>

      {/* Details Section */}
      <div >
        <h2>Details</h2>
        {details.map((detail, index) => (
          <div key={index} className='detailcontainer'>
            
            <label>Item Code:</label>
            <input
              type="text"
              name="itemCode"
              value={detail.itemCode}
              onChange={(e) => handleDetailChange(index, e)}
            />
            <label>Item Name:</label>
            <input
              type="text"
              name="itemName"
              value={detail.itemName}
              onChange={(e) => handleDetailChange(index, e)}
            />
            <label>Price:</label>
            <input
              type="number"
              name="price"
              value={detail.price}
              onChange={(e) => handleDetailChange(index, e)}
            />
            <label>Qty:</label>
            <input
              type="number"
              name="qty"
              value={detail.qty}
              onChange={(e) => handleDetailChange(index, e)}
            />
            <label>Rate:</label>
            <input
              type="number"
              name="rate"
              value={detail.rate}
              onChange={(e) => handleDetailChange(index, e)}
            />
            <label>Amount:</label>
            <input
              type="number"
              name="amt"
              value={detail.amt}
              onChange={(e) => handleDetailChange(index, e)}
            />
            <button className='deleteBtn' onClick={() => handleRemoveDetail(index)}>
              Remove Item
            </button>
          </div>
        ))}
       <div className='btncontainer' >
       <button onClick={handleAddDetail}>Add Detail</button>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleTotal}>Total</button>
      <input className='amtBtn' disabled value={totalSum} type='number'/>
       </div>

      </div>

      {/* Submit Button */}
      
    </div>
  );
};

export default SalesEntry;
