import PrdDeal from "./PrdDeal";
import InforPrd from "./InforPrd";

export default function SliderItems (props) {
  return (`
    <!-- sliderItem -->
    <div class="sliderItem customCardProduct">
      <a href="">
        <div class="imagePrd relative">
          <img src="https://salt.tikicdn.com/cache/280x280/ts/product/75/bd/e9/ca423d66dc3e857774dcaf2e72e6c665.jpg.webp" alt="">
          <div class="dealPrice absolute top-1 left-1 p-[2px] text-xs font-bold rounded text-[#ff424e] bg-[#ffdbde]">-47%</div>
        </div>
        ${ props === 'deal_product' ? PrdDeal(props) : InforPrd(props) }
      </a>
    </div>

    
  `);
}
