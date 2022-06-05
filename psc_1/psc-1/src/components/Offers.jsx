import React from 'react'

export const Offers = (props) => {
  return (
    <div>
      <section className="offers">
        <div className="container">
          {
            props.offers.map((offer) => (
              <img className="offer" src={offer} />
            ))
          }

        </div>
      </section>
    </div>
  )
}
