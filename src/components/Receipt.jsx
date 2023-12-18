import React from 'react'
import { FaRegTrashAlt,FaPlus, FaMinus } from "react-icons/fa";

const Receipt = () => {
  return (
    <div>
        <div className="order-wrapper">
        <h3>Your Order from</h3>

        <div className="items">
          <div className="flex product">
            <p className="productname">Double Grilled Chicken Burger</p>
            <button className="delete"><FaRegTrashAlt /></button>
            <p><span className="naira">N</span> 12000</p>
          </div>

          <div className="flex counter">
            <button><FaMinus /></button>
            <p>1</p>
            <button><FaPlus /></button>
          </div>
        </div>

        <div className="receipt">
          <div className="item-total flex">
            <p>Item Total :</p>
            <p><span className="naira">N</span> 12000</p>
          </div>
          <div className="item-total flex">
            <p>Discount :</p>
            <p><span className="naira">N</span> 0</p>
          </div>
          <div className="item-total flex">
            <p>Delivery Charge:</p>
            <p><span className="naira">N</span> 0</p>
          </div>
        </div>

        <div className="flex total">
          <p>Total: </p>
          <p><span className="naira">N</span> 12000</p>
        </div>
      </div>
    </div>
  )
}

export default Receipt