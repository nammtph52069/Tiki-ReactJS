import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import QuickLink from "./components/QuickLink/QuickLink";
import SliderProducts from "./components/SliderProducts/SliderProducts";

export default function App () {
  return (`
    <header id="header" class="shadow">${Header()}</header>

    <main class="bg-[#efefef]">
      <section class="w-[1440px] mx-auto pt-4 px-6 flex gap-6">
        <section id="sidebar">${ Sidebar() }</section>
        <section id="mainContent" class="flex-shrink flex-grow basis-0 flex flex-col gap-3">
          <section id="banner"></section>
          <section id="quickLink">${ QuickLink() }</section>
          <section id="sliderPrd">${ SliderProducts('past_interest') }</section>
          <section id="sliderPrd">${ SliderProducts('tiki_best') }</section>
          <section id="sliderPrd">${ SliderProducts('deal_product') }</section>
        </section>
      </section>
    </main>
  `);
}