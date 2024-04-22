import { SliderProductsData } from "../../../data/SliderProductData";

export default function SliderHorizontal (props) {
  let filterSliderProducts = SliderProductsData.filter((sliderProducts) => {
    return sliderProducts?.code === props & sliderProducts?.tabs !== null;
  })
  
  return (`
    <section class="horizontalTabs">
      <div class="flex items-center gap-2">
        ${
          filterSliderProducts[0]?.tabs ?
          (filterSliderProducts[0]?.tabs.map(({title}) => {
            return (`
              <div class="h-8 text-sm px-4 flex items-center border rounded-full cursor-pointer text-[#27272a] border-[#dddde3]">${ title }</div>
            `);
          }).join("")) : ''
        }
      </div>
    </section>
  `);
}
