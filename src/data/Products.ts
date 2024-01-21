// products.js


type products =  {
  id: number,
  name: string,
  brand: string, 
  price: number, 
  volume: string, 
  image : string,
}

export const hairProducts: products[] = [
  {
    id: 1,
    name: "Shampoo",
    brand: "XYZ",
    price: 10.99,
    volume: "250ml",
    image:
      "https://static.thcdn.com/images/small/original/widgets/95-en/14/original-original-allsoft-extreme-oneu-507x417-035422-085414.jpg",
  },
  {
    id: 2,
    name: "Conditioner",
    brand: "ABC",
    price: 8.99,
    volume: "200ml",
    image:
      "https://static.thcdn.com/images/small/original/widgets/95-en/14/original-original-allsoft-extreme-oneu-507x417-035422-085414.jpg",
  },
  {
    id: 3,
    name: "Hair Mask",
    brand: "DEF",
    price: 15.99,
    volume: "300ml",
    image:
      "https://static.thcdn.com/images/small/original/widgets/95-en/14/original-original-allsoft-extreme-oneu-507x417-035422-085414.jpg",
  },
];

export const makeupProducts = [
  {
    id: 4,
    name: "Foundation",
    brand: "LMN",
    price: 19.99,
    shade: "Medium Beige",
    image:
      "https://static.thcdn.com/images/small/original/widgets/95-en/14/original-original-allsoft-extreme-oneu-507x417-035422-085414.jpg",
  },
  {
    id: 5,
    name: "Lipstick",
    brand: "PQR",
    price: 12.99,
    shade: "Red Velvet",
    image:
      "https://static.thcdn.com/images/small/original/widgets/95-en/14/original-original-allsoft-extreme-oneu-507x417-035422-085414.jpg",
  },
  {
    id: 6,
    name: "Eyeshadow Palette",
    brand: "STU",
    price: 24.99,
    colors: ["Neutral Brown", "Shimmering Gold", "Smoky Gray"],
    image:
      "https://static.thcdn.com/images/small/original/widgets/95-en/14/original-original-allsoft-extreme-oneu-507x417-035422-085414.jpg",
  },
];

export const nailProducts = [
  {
    id: 7,
    name: "Nail Polish",
    brand: "VWX",
    price: 7.99,
    color: "Pastel Pink",
    image:
      "https://static.thcdn.com/images/small/original/widgets/95-en/14/original-original-allsoft-extreme-oneu-507x417-035422-085414.jpg",
  },
  {
    id: 8,
    name: "Nail Art Kit",
    brand: "YZA",
    price: 14.99,
    designs: ["Floral", "Geometric", "Abstract"],
    image:
      "https://static.thcdn.com/images/small/original/widgets/95-en/14/original-original-allsoft-extreme-oneu-507x417-035422-085414.jpg",
  },
  {
    id: 9,
    name: "Nail Strengthener",
    brand: "BCD",
    price: 9.99,
    image:
      "https://static.thcdn.com/images/small/original/widgets/95-en/14/original-original-allsoft-extreme-oneu-507x417-035422-085414.jpg",
  },
];
