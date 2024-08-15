// File: pages/ProductsPage.tsx
import React from 'react';
import Product from '../components/Product';
import './ProductsPage.css'; // Import CSS file


const products = [
  {
    id: 1,
    description: "Nồi áp suất Inox hiệu PoongNyun HNHPC-06(IH) - Hàng chính hãng",
    price: 3000000,
    oldPrice: 3900000,
    topDeal: true,
    auth: true,
    soldNum: 1,
    discount: "-23%",
    deliveryInfo: "Giao thứ 4, 26/06",
    imageURL: "https://salt.tikicdn.com/cache/750x750/ts/product/cc/e7/a8/38b9e155f7073218832f0eb33a2edff6.jpg.webp",
    deliveryNow: "Giao siêu tốc 2h",
    origin: "Hàn Quốc",
  },
  {
    id: 2,
    description: "Nồi Áp Suất PoongNyun VBVPC-08 (4.5L)",
    price: 3210000,
    oldPrice: 5100000,
    topDeal: true,
    auth: true,
    soldNum: 1,
    discount: "-37%",
    deliveryInfo: "Giao thứ 4, 26/06",
    imageURL: "https://salt.tikicdn.com/cache/750x750/media/catalog/product/v/b/vbvpc-08-1.u5386.d20170802.t100339.861828.jpg.webp",
    deliveryNow: "Giao siêu tốc 2h",
    origin: "Hàn Quốc",
  },
  {
    id: 3,
    description: "Nồi Áp Suất PoongNyun SQS11-20C (3.5L)",
    price: 1600000,
    oldPrice: 2900000,
    topDeal: true,
    auth: true,
    soldNum: 1,
    discount: "-46%",
    deliveryInfo: "Giao thứ 4, 26/06",
    imageURL: "https://salt.tikicdn.com/cache/750x750/media/catalog/product/s/q/sqs11-20c-1.u5386.d20170802.t085742.207212.jpg.webp",
    deliveryNow: "Giao siêu tốc 2h",
    origin: "Hàn Quốc",
  },
  {
    id: 4,
    description: "Nồi áp suất nhôm đúc nguyên khối PoongNyun PN HCAPC-50 - Hàng chính hãng",
    price: 6000000,
    oldPrice: 7200000,
    topDeal: true,
    auth: true,
    soldNum: 1,
    discount: "-20%",
    deliveryInfo: "Giao thứ 4, 26/06",
    imageURL: "https://salt.tikicdn.com/cache/750x750/ts/product/24/a1/16/af76b8efc52c1122b70d53663194370d.jpg.webp",
    deliveryNow: "Giao siêu tốc 2h",
    origin: "Hàn Quốc",
  },
  {
    id: 5,
    description: "Nồi Áp Suất PoongNyun SQS11-22C (4.5L)",
    price: 2719000,
    oldPrice: 4500000,
    topDeal: true,
    auth: true,
    soldNum: 1,
    discount: "-40%",
    deliveryInfo: "Giao thứ 4, 26/06",
    imageURL: "https://salt.tikicdn.com/cache/750x750/media/catalog/product/s/q/sqs11-22c-1.u5386.d20170802.t093943.836912.jpg.webp",
    deliveryNow: "Giao siêu tốc 2h",
    origin: "Hàn Quốc",
  },
  {
    id: 6,
    description: "Nồi áp suất Inox IH hiệu PoongNyun VTSPC-10 - Hàng chính hãng",
    price: 3400000,
    oldPrice: 4828000,
    topDeal: true,
    auth: true,
    soldNum: 1,
    discount: "-42%",
    deliveryInfo: "Giao thứ 4, 26/06",
    imageURL: "https://salt.tikicdn.com/cache/750x750/ts/product/7d/90/8e/9229178a4daf5b07711d960ad403b452.jpg.webp",
    deliveryNow: "Giao siêu tốc 2h",
    origin: "Hàn Quốc",
  },
  {
    id: 7,
    description: "Nồi Áp Suất PoongNyun VTPC-22C (4.5L)",
    price: 3000000,
    oldPrice: 4080000,
    topDeal: true,
    auth: true,
    soldNum: 1,
    discount: "-36%",
    deliveryInfo: "Giao thứ 4, 26/06",
    imageURL: "https://salt.tikicdn.com/cache/750x750/media/catalog/product/v/t/vtpc-22c-1.u5386.d20170802.t100407.267886.jpg.webp",
    deliveryNow: "Giao siêu tốc 2h",
    origin: "Hàn Quốc",
  },
  {
    id: 8,
    description: "Nồi áp suất nhôm Poongnyun BMPC-10 (5.5L) - Hàng chính hãng",
    price: 2185000,
    oldPrice: 3125000,
    topDeal: true,
    auth: true,
    soldNum: 1,
    discount: "-43%",
    deliveryInfo: "Giao thứ 4, 26/06",
    imageURL: "https://salt.tikicdn.com/cache/280x280/ts/product/04/fe/82/cd4287e2bcf1d2ba44517c577610ce87.jpg.webp",
    deliveryNow: "Giao siêu tốc 2h",
    origin: "Hàn Quốc",
  },
  

];
const ProductsPage: React.FC = () => {
  return (
    <div className="container"> {/* Use className instead of style */}
      {products.map((product) => (
        <div key={product.id} className="productContainer"> {/* Use className instead of style */}
          <Product
            description={product.description}
            price={product.price}
            topDeal={product.topDeal}
            auth={product.auth}
            discount={product.discount}
            deliveryInfo={product.deliveryInfo}
            imageURL={product.imageURL}
            oldPrice={product.oldPrice}
            deliveryNow={product.deliveryNow}
            origin={product.origin}
            soldNum={product.soldNum}
          />
        </div>
      ))}
    </div>
  );
};
export default ProductsPage;
