import SliderHeader from "./SliderHeader/SliderHeader";
import SliderHorizontal from "./SliderHorizontal/SliderHorizontal";
import SliderBody from "./SliderBody/SliderBody";
import { SliderProductsData } from "../../data/SliderProductData";

export default function SliderProducts (props) {
  return (`
    <section class="sliderWrapper p-4 flex flex-col gap-3 rounded-lg bg-white">
      ${SliderHeader(props)}
      ${SliderHorizontal(props)}
      ${SliderBody(props)}
    </section>
  `);
}