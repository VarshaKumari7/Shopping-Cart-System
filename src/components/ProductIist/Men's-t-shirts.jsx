// const products = [
//   {
//     id: 1,
//     name: "Earthen Bottle",
//     href: "#",
//     price: "$48",
//     imageSrc:
//       "https://images.bewakoof.com/t640/men-s-black-chandrayaan-3-lander-graphic-printed-oversized-t-shirt-612770-1692887800-1.jpg",
//     imageAlt:
//       "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
//   },
//   {
//     id: 2,
//     name: "Nomad Tumbler",
//     href: "#",
//     price: "$35",
//     imageSrc:
//       "https://images.bewakoof.com/t640/men-s-white-jujutsu-sorcerer-graphic-printed-oversized-t-shirt-602837-1689074586-1.jpg",
//     imageAlt:
//       "Olive drab green insulated bottle with flared screw lid and flat top.",
//   },
//   {
//     id: 3,
//     name: "Focus Paper Refill",
//     href: "#",
//     price: "$89",
//     imageSrc:
//       "https://images.bewakoof.com/t640/men-s-red-moon-rider-graphic-printed-oversized-t-shirt-502017-1680169902-1.jpg",
//     imageAlt:
//       "Person using a pen to cross a task off a productivity paper card.",
//   },
//   {
//     id: 4,
//     name: "Machined Mechanical Pencil",
//     href: "#",
//     price: "$35",
//     imageSrc:
//       "https://images.bewakoof.com/t640/men-s-white-karma-circles-typography-oversized-t-shirt-489752-1681218931-1.jpg",
//     imageAlt:
//       "Hand holding black machined steel mechanical pencil with brass tip and top.",
//   },
//   {
//     id: 5,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://images.bewakoof.com/t640/men-s-black-batman-riddle-bml-oversized-t-shirt-479765-1667519419-1.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
// ];

// export default function MenTShirts() {
//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <h2 className="sr-only">Products</h2>

//         <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
//           {products.map((product) => (
//             <a key={product.id} href={product.href} className="group">
//               <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
//                 <img
//                   src={product.imageSrc}
//                   alt={product.imageAlt}
//                   className="h-full w-full object-cover object-center group-hover:opacity-75"
//                 />
//               </div>
//               <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
//               <p className="mt-1 text-lg font-medium text-gray-900">
//                 {product.price}
//               </p>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
