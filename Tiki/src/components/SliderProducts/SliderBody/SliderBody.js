import { SliderProductsData } from "../../../data/SliderProductData";
import SliderItems from "./SliderItems/SliderItems";
import DirSlider from "./DirSlider";

export default function SliderBody (props) {
  let filterSlider = SliderProductsData.filter((sliderProducts) => {
    return sliderProducts?.code === props & sliderProducts?.tabs === null;
  })


  return (`
    <section class="sliderBody overflow-hidden relative">
      <div class="listLider h-auto flex items-center gap-1 bg-white">
        ${
          filterSlider[0] ?
            (
              filterSlider[0]?.items.map(() => {
                  return SliderItems(props)
                })
            ) : ''
        }
      </div>

      ${ DirSlider() }
    </section>
  `);
}

