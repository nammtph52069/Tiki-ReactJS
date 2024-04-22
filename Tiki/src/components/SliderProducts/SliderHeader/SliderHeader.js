import { SliderProductsData } from "../../../data/SliderProductData";
import TimeDeal from "./TimeDeal";

export default function SliderHeader (props) {
  return (`
    <section class="sliderHeader">
      <div class="flex items-center justify-between">
        <div class="title flex items-center">
          <h3 class="text-base font-semibold mr-3 text-[#27272a]">Giá tốt hôm nay</h3>
          ${ props === 'deal_product' ? TimeDeal() : '' }
        </div>
        <div class="navigation">
          <a class="text-sm font-medium text-[#0a68ff]" href="">Xem tất cả</a>
        </div>
      </div>
    </section>
  `);
}
