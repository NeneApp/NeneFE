import Image from "next/image";
import b1 from "../../public/assets/homePage1/brand/b1.png";
import b2 from "../../public/assets/homePage1/brand/b2.png";
import b3 from "../../public/assets/homePage1/brand/b3.png";
import b4 from "../../public/assets/homePage1/brand/b4.png";
import b5 from "../../public/assets/homePage1/brand/b5.png";
import b6 from "../../public/assets/homePage1/brand/b6.png";
import b7 from "../../public/assets/homePage1/brand/b7.png";
import b8 from "../../public/assets/homePage1/brand/b8.png";
import b9 from "../../public/assets/homePage1/brand/b9.png";
import Button from "../button/button";

export default function Brands() {
  const brands = [b1, b2, b3, b4, b5, b6, b7, b8, b9];
  return (
    <div className="p-8">
      <h2 className="text-center text-2xl">Brands</h2>
      <div className="flex flex-wrap gap-4 mt-5 items-center justify-center">
        {brands.map((brand) => (
          <Image src={brand} key={brand} alt="" />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Button text="See More" />
      </div>
    </div>
  );
}
