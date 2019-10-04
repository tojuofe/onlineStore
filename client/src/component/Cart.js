import React from 'react';
import Hiker from './layout/hiker.jpg';

const Cart = () => {
  return (
    <div className="container">
      <h3>Cart</h3>
      <div className="row">
        <div className="col s7">
          <div className="section">
            <div className="row">
              <div className="col s6">
                <img
                  src={Hiker}
                  alt="img"
                  className="responsive-img"
                  style={{ width: '250px', paddingTop: '10px' }}
                />
              </div>
              <div className="col s6">
                <h5>Hiking in the Tatras</h5>
                <p>Event type</p>
                <p>5 spot</p>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <p>24 $ / spot</p>
                  <p>Total: 120 $</p>
                </div>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="section">
            <div className="row">
              <div className="col s6">
                <img
                  src={Hiker}
                  alt="img"
                  className="responsive-img"
                  style={{ width: '250px', paddingTop: '10px' }}
                />
              </div>
              <div className="col s6">
                <h5>Something else</h5>
                <p>Event type</p>
                <p>5 hours</p>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <p>24 $ / hour</p>
                  <p>Total: 120 $</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col s5">
          <div class="col s12">
            <div class="card indigo lighten-5">
              <div class="card-content black-text">
                <span class="card-title" style={{ fontWeight: 'bold' }}>
                  Details
                </span>
                <div>
                  <p>Item 1: 120 $</p>

                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <p>Item 2: 120 $</p>
                    <p>Total: 240 $</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col offset-s2 s8">
                      <input
                        type="text"
                        className="center"
                        placeholder="Card Name"
                      />
                      <input
                        type="text"
                        className="center"
                        placeholder="Card Number"
                      />
                      <div className="col s7">
                        <input
                          type="text"
                          className="center"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div className="col s5">
                        <input
                          type="text"
                          className="center"
                          placeholder="CVV"
                        />
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', padding: '10px' }}>
                    <button
                      type="submit"
                      className="btn waves-light col offset-s0 s7"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn waves-light col offset-s1 s7"
                    >
                      Pay
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
