import React from 'react';
import { Link } from 'react-router-dom';

const Receipt = () => {
  const onClick = () => {};

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p style={{ fontSize: '25px' }}>Receipt</p>
        <button
          type="submit"
          style={{ marginTop: '20px' }}
          className="btn waves-light col offset-s0 s7"
          onClick={onClick}
        >
          Download Pdf
        </button>
      </div>
      <div className="row">
        <div className="col s6">
          <h4>Company Name</h4>
          <p>
            company address <br />
            site
          </p>
        </div>
        <div className="col s6">
          <h5>Customer</h5>
          <p>Name of Customer</p>
          <h5>Date</h5>
          <p>12.12.2019</p>
          <h5>Order</h5>
          <p>order #</p>
        </div>
      </div>

      <table className="responsive-table striped">
        <thead>
          <tr>
            <th>Item</th>
            <th>Ordered</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Hiking in the Tatras</td>
            <td>12.12.2019</td>
            <td>2</td>
            <td>24 $</td>
            <td>48 $</td>
          </tr>

          <tr>
            <td>Hiking in the Tatras</td>
            <td>12.12.2019</td>
            <td>2</td>
            <td>24 $</td>
            <td>48 $</td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Total:</td>
            <td>72 $</td>
          </tr>
        </tbody>
      </table>
      <button
        type="submit"
        style={{ marginTop: '20px' }}
        className="btn waves-light col offset-s0 s7"
      >
        <Link to="/" style={{ color: '#fff' }}>
          Go Back
        </Link>
      </button>
    </div>
  );
};

export default Receipt;
