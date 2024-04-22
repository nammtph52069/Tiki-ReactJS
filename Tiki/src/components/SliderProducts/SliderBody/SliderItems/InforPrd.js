import RateStar from "./RateStar";

export default function InforPrd (props) {
  return (`
    <div class="inforPrd flex flex-col gap-1 py-1">
      <div class="bodyPrd px-2 flex flex-col gap-1">
        <div class="badge flex flex-col gap-1">
          <img class="h-5 w-[74px]" src="https://salt.tikicdn.com/ts/upload/0f/27/42/1fff0f8fe6125514354597d1c5f5260c.png" alt="">
          <img class="h-5 w-[74px]" src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png" alt="">
        </div>
        <div class="name-wrapper h-[52px] flex flex-col gap-1">
          <h3 class="customText text-xs overflow-hidden text-[#27272a]">Dầu Gạo Lứt Simply 2L</h3>
          ${ RateStar() }
        </div>
        <div class="price-discount">
          <span class="text-base font-semibold text-[#27272a]">138.000</span><sup>₫</sup>
        </div> 
      </div>
      <div class="footerPrd px-2 flex flex-col gap-1">
        <div class="ImportedInfo text-[10px] text-[#27272a]">Made in Korea</div>
        <div class="deliveryInfo flex items-center gap-1 pt-2 border-t">
          <img class="h-4 w-8" src="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png" alt="">
          <p class="text-[10px] text-[#808089]">Giao siêu tốc 2h</p>
        </div>
      </div>
    </div>
  `);
}