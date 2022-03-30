import React from 'react'
import "./Eventspage.css"
import img from '../../../Assets/zz.jpg'

const Events19 = () => {
  return (
    <div>
      <div className="Eventdetails">
        <div className="events">
          <div class="wrap">
            <div class="product-img">
              <img src={img} />
            </div>
            <div class="product-info">
              <div class="product-text">
                <h1>Harvest Vase</h1>
                <h2>by studio and friends</h2>
                <p>Harvest Vases are a reinterpretationof peeled fruits and vegetables asfunctional objects. The surfaces appear to be sliced and pulled aside, allowing room for growth. </p>
              </div>
              <div class="product-price-btn">
                <button type="button"><a href="#E1">View More</a></button>
              </div>
            </div>
          </div>
        </div>
        <div id="E1" class="popup popup-article">
          <div class="popup__block">
            <div class="modalica--content" >
              <div class="modal">
                <div class="modal-img">
                  <img src={img} />
                </div>
                <div class="modal-info">
                  <div class="modal-text">
                    <h1>Harvest Vase</h1>
                    <h2>by studio and friends</h2>
                    <p>Harvest Vases are a reinterpretationof peeled fruits and vegetables asfunctional objects. The surfaces appear to be sliced and pulled aside, allowing room for growth.
                      Harvest Vases are a reinterpretationof peeled fruits and vegetables asfunctional objects. The surfaces appear to be sliced and pulled aside, allowing room for growth.
                      Harvest Vases are a reinterpretationof peeled fruits and vegetables asfunctional objects. The surfaces appear to be sliced and pulled aside, allowing room for growth.
                      Harvest Vases are a reinterpretationof peeled fruits and vegetables asfunctional objects. The surfaces appear to be sliced and pulled aside, allowing room for growth.
                      Harvest Vases are a reinterpretationof peeled fruits and vegetables asfunctional objects. The surfaces appear to be sliced and pulled aside, allowing room for growth.
                      Harvest Vases are a reinterpretationof peeled fruits and vegetables asfunctional objects. The surfaces appear to be sliced and pulled aside, allowing room for growth.
                      Harvest Vases are a reinterpretationof peeled fruits and vegetables asfunctional objects. The surfaces appear to be sliced and pulled aside, allowing room for growth.

                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a href="#f1" class="popup__close">close</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Events19