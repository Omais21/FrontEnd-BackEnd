// import { useParams } from "react-router-dom";
// import useSWR from "swr";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { formatDistanceToNow } from "date-fns";
// import { useSelector } from "react-redux";

// export default function ProductDetail() {
//   const params = useParams();

//   // Fetch product details using SWR
//   const { data, error, isLoading } = useSWR(
//     `https://dummyjson.com/products/${params.id}`,
//     (url) => axios.get(url).then((res) => res.data)
//   );

//   const product = data;

//   const [selectedImage, setSelectedImage] = useState(null);
//   const [quantity, setQuantity] = useState(1);

//   // Initialize quantity with minimumOrderQuantity if available
//   useEffect(() => {
//     if (product?.minimumOrderQuantity) {
//       setQuantity(product.minimumOrderQuantity);
//     }
//   }, [product]);

//   if (isLoading) return <p className="text-center mt-10">Loading...</p>;
//   if (error) return <p className="text-center mt-10 text-red-500">Failed to load product details.</p>;

//    const darkMode = useSelector((state) => state.darkMode.darkMode);

//   return (
//     <main className={`max-w-7xl mx-auto p-5  ${darkMode ? "bg-slate-900 text-white" : ""}`}>  
//       {/* Product Section */}
//       <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
//         {/* Image Section */}
//         <div className="flex md:w-1/2 border-r border-gray-200">
//           {product?.images?.length > 1 && (
//             <div className="w-20 p-3 flex flex-col gap-3">
//               {product.images.map((image, i) => (
//                 <img
//                   key={i}
//                   src={image}
//                   alt={`Product ${i}`}
//                   className="w-full h-20 object-cover cursor-pointer border rounded-md hover:border-gray-400"
//                   onMouseOver={() => setSelectedImage(image)}
//                 />
//               ))}
//             </div>
//           )}
//           <div className="flex-grow flex justify-center items-center">
//             <img
//               src={selectedImage || product?.images[0]}
//               alt="Main Product"
//               className="w-full max-w-[500px] h-auto object-cover"
//             />
//           </div>
//         </div>

//         {/* Product Details */}
//         <div className="md:w-1/2 p-6 flex flex-col gap-4">
//           <h1 className="text-2xl font-semibold">{product?.title}</h1>
//           <p className="text-gray-700 text-lg">
//             Price: <span className="font-bold text-red-500">${product?.price * quantity || 0}</span>
//           </p>
//           <p className="text-gray-600">
//             Quantity:
//             <button
//               onClick={() => setQuantity(quantity + 1)}
//               className="ml-2 px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
//             >
//               +
//             </button>
//             <span className="mx-2 font-bold">{quantity}</span>
//             <button
//               onClick={() => {
//                 if (quantity <= product?.minimumOrderQuantity) return;
//                 setQuantity(quantity - 1);
//               }}
//               className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
//             >
//               -
//             </button>
//           </p>
//           <p className="text-sm text-gray-500">
//             Minimum Order Quantity: {product?.minimumOrderQuantity}
//           </p>
//           <button className="mt-4 px-6 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600">
//             Add to Cart
//           </button>
//         </div>
//       </div>

//       {/* Reviews Section */}
//       <div className="mt-10">
//         <h2 className="text-2xl font-semibold mb-6 text-gray-800">Customer Reviews</h2>
//         {product?.reviews?.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {product.reviews.map((review, i) => (
//               <div
//                 key={i}
//                 className="bg-white border border-gray-200 rounded-lg shadow-md p-6 flex flex-col gap-4"
//               >
//                 {/* Reviewer Info */}
//                 <div className="flex items-center gap-4">
//                   <div className="w-10 h-10 bg-blue-200 rounded-full flex justify-center items-center text-blue-700 font-bold uppercase">
//                     {review.reviewerName[0]}
//                   </div>
//                   <div>
//                     <h5 className="text-lg font-medium text-gray-900">
//                       {review.reviewerName}
//                     </h5>
//                     <span className="text-sm text-gray-500">
//                       {formatDistanceToNow(new Date(review.date), { addSuffix: true })}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Review Content */}
//                 <p className="text-gray-700 text-sm">{review.comment}</p>

//                 {/* Ratings (Optional) */}
//                 {review.rating && (
//                   <div className="flex items-center gap-1">
//                     {Array.from({ length: review.rating }, (_, index) => (
//                       <svg
//                         key={index}
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5 text-yellow-400"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M12 .587l3.668 7.429 8.2 1.193-5.93 5.773 1.398 8.155L12 18.896l-7.336 3.864 1.398-8.155-5.93-5.773 8.2-1.193z" />
//                       </svg>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
//         )}
//       </div>
//     </main>
//   );
// }

import React from 'react'

export default function ProductsDetail() {
  return (
    <div>
      Hello
    </div>
  )
}
