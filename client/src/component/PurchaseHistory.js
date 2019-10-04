import React from 'react';
import { Link } from 'react-router-dom';

const PurchaseHistory = () => {
  return (
    <div className="container">
      <h4>Purchase History</h4>
      <table className="responsive-table striped">
        <thead>
          <tr>
            <th>Event</th>
            <th>Date</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Payment Type</th>
            <th>Payment Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <div className="col s12" style={{ fontWeight: 'bold' }}>
                Hiking in the Tatras
              </div>
              <div className="col s12">Event type</div>
            </td>
            <td>
              <div className="col s12">10.00</div>
              <div className="col s12" style={{ fontWeight: 'bold' }}>
                25 May, 2019
              </div>
            </td>
            <td>3</td>
            <td>120 $</td>
            <td>Credit Card</td>
            <td className="green-text">In Progress</td>
          </tr>

          <tr>
            <td>
              <div className="col s12" style={{ fontWeight: 'bold' }}>
                Hiking in the Tatras
              </div>
              <div className="col s12">Event type</div>
            </td>
            <td>
              <div className="col s12">10.00</div>
              <div className="col s12" style={{ fontWeight: 'bold' }}>
                25 May, 2019
              </div>
            </td>
            <td>3</td>
            <td>120 $</td>
            <td>Credit Card</td>
            <td>
              Successfully
              <br />
              <Link to="/receipt" className="blue-text valign-wrapper">
                <i className="material-icons">receipt</i> RECEIPT{' '}
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <div className="col s12" style={{ fontWeight: 'bold' }}>
                Hiking in the Tatras
              </div>
              <div className="col s12">Event type</div>
            </td>
            <td>
              <div className="col s12">10.00</div>
              <div className="col s12" style={{ fontWeight: 'bold' }}>
                25 May, 2019
              </div>
            </td>
            <td>3</td>
            <td>120 $</td>
            <td>Credit Card</td>
            <td>Refunded</td>
          </tr>

          <tr>
            <td>
              <div className="col s12" style={{ fontWeight: 'bold' }}>
                Hiking in the Tatras
              </div>
              <div className="col s12">Event type</div>
            </td>
            <td>
              <div className="col s12">10.00</div>
              <div className="col s12" style={{ fontWeight: 'bold' }}>
                25 May, 2019
              </div>
            </td>
            <td>3</td>
            <td>120 $</td>
            <td>Credit Card</td>
            <td>
              Successfully
              <br />
              <Link to="/receipt" className="blue-text valign-wrapper">
                <i className="material-icons">receipt</i> RECEIPT{' '}
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <div className="col s12" style={{ fontWeight: 'bold' }}>
                Hiking in the Tatras
              </div>
              <div className="col s12">Event type</div>
            </td>
            <td>
              <div className="col s12">10.00</div>
              <div className="col s12" style={{ fontWeight: 'bold' }}>
                25 May, 2019
              </div>
            </td>
            <td>3</td>
            <td>120 $</td>
            <td>Credit Card</td>
            <td>
              Successfully
              <br />
              <Link to="/receipt" className="blue-text valign-wrapper">
                <i className="material-icons">receipt</i> RECEIPT{' '}
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PurchaseHistory;
