import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  {
    id: 1,
    name: "Midnight Black Ankle Boots",
    category: "women",
    image: p1_img,
    new_price: 999.0,
    old_price: 1599.0,
  },
  {
    id: 2,
    name: "Women Aldo Turquoise Blue Suede High Heel Shoes",
    category: "women",
    image: p2_img,
    new_price: 699.0,
    old_price: 900.0,
  },
  {
    id: 3,
    name: "Midnight Moonlight Ankle-Strap Sandals",
    category: "women",
    image: p3_img,
    new_price: 899.0,
    old_price: 1200.0,
  },
  {
    id: 4,
    name: "Mahogany Mystery Heeled Boots",
    category: "women",
    image: p4_img,
    new_price: 999.0,
    old_price: 1500.0,
  },
  {
    id: 5,
    name: "Radiant Rose High Heel Sandals",
    category: "women",
    image: p5_img,
    new_price: 999.0,
    old_price: 1499.0,
  },
  {
    id: 6,
    name: "Emerald Enigma Lace-Up Booties",
    category: "women",
    image: p6_img,
    new_price: 899.0,
    old_price: 1500.0,
  },
  {
    id: 7,
    name: "Chestnut Charm Knee-High Boots",
    category: "women",
    image: p7_img,
    new_price: 999.0,
    old_price: 1600.0,
  },
  {
    id: 8,
    name: "Blossom Breeze Ballet Flats",
    category: "women",
    image: p8_img,
    new_price: 849.0,
    old_price: 1200.0,
  },
  {
    id: 9,
    name: "Power Surge Athletic Sneakers",
    category: "women",
    image: p9_img,
    new_price: 699.0,
    old_price: 800.0,
  },
  {
    id: 10,
    name: "Turquoise Temptation Wedge Sandals",
    category: "women",
    image: p10_img,
    new_price: 849.0,
    old_price: 1200.0,
  },
  {
    id: 11,
    name: "Caribbean Dream Strappy Heeled Sandals",
    category: "women",
    image: p11_img,
    new_price: 850.0,
    old_price: 1200.0,
  },
  {
    id: 12,
    name: "Aqua Sky Suede Platform Shoes",
    category: "women",
    image: p12_img,
    new_price: 899.0,
    old_price: 1200.0,
  },
  {
    id: 13,
    name: "Urban Voyager Oxford Wingtips",
    category: "men",
    image: p13_img,
    new_price: 999.0,
    old_price: 1549.0,
  },
  {
    id: 14,
    name: "Velocity Vortex Basketball High-Tops",
    category: "men",
    image: p14_img,
    new_price: 1149.0,
    old_price: 1800.0,
  },
  {
    id: 15,
    name: "Nike Zoom Pegasus Turbo",
    category: "men",
    image: p15_img,
    new_price: 1599.0,
    old_price: 2459.0,
  },
  {
    id: 16,
    name: "Urban Elegance Foldable Ballet Flats",
    category: "men",
    image: p16_img,
    new_price: 999.0,
    old_price: 1400.0,
  },
  {
    id: 17,
    name: "Nike Air Force 1 Utility",
    category: "men",
    image: p17_img,
    new_price: 1849.0,
    old_price: 2549.0,
  },
  {
    id: 18,
    name: "Maverick Marvel Leather Penny Loafers",
    category: "men",
    image: p18_img,
    new_price: 1149.0,
    old_price: 1949.0,
  },
  {
    id: 19,
    name: "Vintage Supreme Running Sneaker",
    category: "men",
    image: p19_img,
    new_price: 1249.0,
    old_price: 1899.5,
  },
  {
    id: 20,
    name: "Shadow Sentinel Formal Derby Shoes",
    category: "men",
    image: p20_img,
    new_price: 1849.0,
    old_price: 2799.0,
  },
  {
    id: 21,
    name: "Prestige Patent Leather Loafers",
    category: "men",
    image: p21_img,
    new_price: 1149.0,
    old_price: 1549.0,
  },
  {
    id: 22,
    name: "Nova Nebula Retro Sneaker Collection",
    category: "men",
    image: p22_img,
    new_price: 1049.0,
    old_price: 1299.0,
  },
  {
    id: 23,
    name: "Nobleman's Monarch Loafers",
    category: "men",
    image: p23_img,
    new_price: 599.0,
    old_price: 900.0,
  },
  {
    id: 24,
    name: "Titan Trekker Waterproof Hiking Boots",
    category: "men",
    image: p24_img,
    new_price: 699.0,
    old_price: 1200.0,
  },
  {
    id: 25,
    name: "Tiny Tots Toe-Tappers",
    category: "kid",
    image: p25_img,
    new_price: 459.0,
    old_price: 649.0,
  },
  {
    id: 26,
    name: "Little Explorers Sneakers",
    category: "kid",
    image: p26_img,
    new_price: 799.0,
    old_price: 1249.0,
  },
  {
    id: 27,
    name: "Junior Jamboree Flip Flops",
    category: "kid",
    image: p27_img,
    new_price: 859.0,
    old_price: 1197.0,
  },
  {
    id: 28,
    name: "Baby Bounce Athletic Shoes",
    category: "kid",
    image: p28_img,
    new_price: 849.0,
    old_price: 1249.5,
  },
  {
    id: 29,
    name: "Snuggly Snappers Winter Boots",
    category: "kid",
    image: p29_img,
    new_price: 799.0,
    old_price: 999.0,
  },
  {
    id: 30,
    name: "Playtime Pumps Dress Shoes",
    category: "kid",
    image: p30_img,
    new_price: 949.0,
    old_price: 1249.0,
  },
  {
    id: 31,
    name: "Junior Jumpstart Sports Sneakers",
    category: "kid",
    image: p31_img,
    new_price: 599.0,
    old_price: 849.0,
  },
  {
    id: 32,
    name: "Little Explorer Outdoor Adventure Shoes",
    category: "kid",
    image: p32_img,
    new_price: 899.0,
    old_price: 1349.0,
  },
  {
    id: 33,
    name: "Little Explorer Sport Sneaker",
    category: "kid",
    image: p33_img,
    new_price: 749.0,
    old_price: 849.0,
  },
  {
    id: 34,
    name: "Adventure-Ready Trail Hiking Shoes",
    category: "kid",
    image: p34_img,
    new_price: 899.0,
    old_price: 1329.0,
  },
  {
    id: 35,
    name: "Kiddie Comfort Velcro Strap Sandals",
    category: "kid",
    image: p35_img,
    new_price: 899.0,
    old_price: 1439.0,
  },
  {
    id: 36,
    name: "Playful Puddle-Proof Rain Boots",
    category: "kid",
    image: p36_img,
    new_price: 739.0,
    old_price: 1249.0,
  },
];

export default all_product;
