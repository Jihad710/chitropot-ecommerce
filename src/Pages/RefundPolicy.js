import React from 'react'
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import Container from '../Components/Container';

const RefundPolicy = () => {
  return (
    <>
       <Meta title={"Refund Policy"}></Meta>
      <BreadCrumb title="Refund Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy">
                
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default RefundPolicy
