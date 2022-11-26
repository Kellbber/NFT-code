import { HomeContainer, Product } from "../styles/pages/home";

import Image from "next/image";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import camisa1 from "../assets/images/image1.png";
import camisa2 from "../assets/images/image2.png";
import camisa3 from "../assets/images/image3.png";
import camisa4 from "../assets/images/image4.png";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides:{
      perView: 3,
      spacing: 48,
    }
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camisa1} width={420} height={380} alt="imagem nft" />
        <footer>
          <strong>NFT FIRST</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camisa2} width={420} height={380} alt="imagem nft" />
        <footer>
          <strong>NFT FIRST</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camisa3} width={420} height={380} alt="imagem nft" />
        <footer>
          <strong>NFT FIRST</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camisa4} width={420} height={380} alt="imagem nft" />
        <footer>
          <strong>NFT FIRST</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
