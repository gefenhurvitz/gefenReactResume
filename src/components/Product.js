import React from 'react'

const Product = (props) => {
    // console.log(props.product)
  return (
    <div>
          {/* <!-- life guard hat --> */}
          <div className="col mb-5">
            <div className="card h-100">
              {/* <!-- Sale badge--> */}
              {/* <!-- <div className="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div> --> */}
              {/* <!-- Product image--> */}
              <img
                className="card-img-top"
                src={props.product.img}
                alt="..."
              />
              {/* <!-- Product details--> */}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* <!-- Product name--> */}
                  <h5 className="fw-bolder">{props.product.name}</h5>
                  {/* <!-- Product price--> */}
                  {/* <!-- <span className="text-muted text-decoration-line-through">$50.00</span> --> */}
                  ${props.product.price}
                </div>
              </div>
              {/* <!-- Product actions--> */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a
                    className="btn btn-outline-dark mt-auto"
                    href={props.product.link}
                    target={'_blank'}
                    >buy</a
                  >
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Product