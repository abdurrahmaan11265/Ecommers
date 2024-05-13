import { useState, React } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from '../components/Color';

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  return (
    <>
      <Meta title='Our Store' />
      <BreadCrumb title='Our Store' />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className='filter-card mb-3'>
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className='ps-0'>
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>

              <div className='filter-card mb-3'>
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input type="checkbox" className='form-check-input' id='in-stock' />
                      <label htmlFor="in-stock" className='form-check-label'>In Stock (1)</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className='form-check-input' id='out-of-stock' />
                      <label htmlFor="out-of-stock" className='form-check-label'>Out Of Stock (0)</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className='d-flex align-items-center'>
                    <div className="form-floating">
                      <input type="email" className="form-control py-1" id="floatingInput" placeholder="From" />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input type="email" className="form-control py-1" id="floatingInput1" placeholder="To" />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <div>
                      <Color />
                    </div>
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input type="checkbox" className='form-check-input' id='color-1' />
                      <label htmlFor="color-1" className='form-check-label'>S (2)</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className='form-check-input' id='color-2' />
                      <label htmlFor="color-2" className='form-check-label'>M (2)</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className='filter-card mb-3'>
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      Headphone
                    </span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      Laptop
                    </span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      Mobile
                    </span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      Wire
                    </span>
                  </div>
                </div>
              </div>

              <div className='filter-card'>
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-products d-flex mb-3">
                    <div className="w-50">
                      <img src="images/watch.jpg" alt="watch" className='img-fluid' />
                    </div>
                    <div className="w-50">
                      <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$300.00</b>
                    </div>
                  </div>

                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img src="images/watch.jpg" alt="watch" className='img-fluid' />
                    </div>
                    <div className="w-50">
                      <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$300.00</b>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{ width: "100px" }}>Sort By:</p>
                    <select name="" className='form-control form-select' id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected='selected'>Best Selling</option>
                      <option value="title-ascending">Alphabetically, A-Z</option>
                      <option value="title-descending">Alphabetically, Z-A</option>
                      <option value="price-ascending">Price, Low to High</option>
                      <option value="price-descending">Price, High to Low</option>
                      <option value="created-ascending">Date, Old to New</option>
                      <option value="created-descending">Date, New to Old</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 Products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img onClick={() => {
                        setGrid(3);
                      }}
                        src="images/gr4.svg"
                        alt="grid"
                        className='d-block img-fluid' />
                      <img onClick={() => {
                        setGrid(4);
                      }}
                        src="images/gr3.svg"
                        alt="grid"
                        className='d-block img-fluid' />
                      <img onClick={() => {
                        setGrid(6);
                      }}
                        src="images/gr2.svg"
                        alt="grid"
                        className='d-block img-fluid' />
                      <img onClick={() => {
                        setGrid(12);
                      }}
                        src="images/gr.svg"
                        alt="grid"
                        className='d-block img-fluid' />
                    </div>
                  </div>
                </div>
              </div>

              <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurStore