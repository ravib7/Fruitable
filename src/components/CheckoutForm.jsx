import React from 'react'

const CheckoutForm = () => {
    return <>
        <form className='my-5'>
            <div className="row">
                <div className="col-md-6 col-lg-3">
                    <label className="form-label">First Name *</label>
                    <input type="text" className="form-control my-2" />
                </div>
                <div className="col-md-6 col-lg-3">
                    <label className="form-label">Last Name *</label>
                    <input type="text" className="form-control my-2" />
                </div>
            </div>
            <div className='my-3'>
                <label className="form-label">Company Name *</label>
                <input type="text" className="form-control w-50 my-2" />
            </div>
            <div>
                <label className="form-label">Address *</label>
                <input type="text" placeholder='House Number Street Name ' className="form-control w-50 my-2" />
            </div>
            <div className='my-3'>
                <label className="form-label">Town / City *</label>
                <input type="text" className="form-control w-50 my-2" />
            </div>
            <div>
                <label className="form-label">Country *</label>
                <input type="text" className="form-control w-50 my-2" />
            </div>
            <div className='my-3'>
                <label className="form-label">Postcode / Zip *</label>
                <input type="text" className="form-control w-50 my-2" />
            </div>
            <div>
                <label className="form-label">Mobile *</label>
                <input type="text" className="form-control w-50 my-2" />
            </div>
            <div className='my-3'>
                <label className="form-label">Email Address *</label>
                <input type="text" className="form-control w-50 my-2" />
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="id" />
                <label class="form-check-label" for="id">
                    Create an account?
                </label>
            </div>
            <hr className='w-50' />
            <div class="form-check my-3">
                <input class="form-check-input" type="checkbox" value="" id="id" />
                <label class="form-check-label" for="id">
                    Ship to a different address?
                </label>
            </div>
            <div class="form-floating">
                <textarea class="form-control w-50" style={{ height: "250px" }}></textarea>
                <label for="floatingTextarea">Order Notes (Optional)</label>
            </div>
        </form>
    </>
}

export default CheckoutForm