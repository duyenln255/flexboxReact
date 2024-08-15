import React from 'react';
import './Product.css'; // Import CSS file

interface ProductProps {
  topDeal: boolean;
  auth: boolean;
  description: string;
  price: number;
  oldPrice: number;
  origin: string;
  soldNum: number;
  discount: string;
  deliveryInfo: string;
  imageURL: string;
  deliveryNow: string;
}

const Product: React.FC<ProductProps> = ({
  description,
  price,
  topDeal,
  oldPrice,
  auth,
  deliveryNow,
  origin,
  soldNum,
  discount,
  deliveryInfo,
  imageURL,
}) => {
  return (
    <div className="card"> {/* Use className instead of style */}
      <div className="image" style={{ backgroundImage: `url(${imageURL})` }}></div> {/* Display image */}
      <div className="content">
        <div className="badges">
          {topDeal && <div className="badgeTopDeal">TOP DEAL</div>}
        </div>
        <div className="badges">
          {auth && <div className="badgeAuth">CHÍNH HÃNG</div>}
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="price">
          {price.toLocaleString()}đ
        </div>
        <div className="discount">
          <span className="oldPrice">{oldPrice.toLocaleString()}đ</span>{/* Display image, .toLocaleString(): Converts a number to a string by using the current or specified locale. */}
          <span>{discount}</span>
        </div>
        <div className="deliveryInfo">
          {deliveryInfo}
        </div>
      </div>
    </div>
  );
};

export default Product;
