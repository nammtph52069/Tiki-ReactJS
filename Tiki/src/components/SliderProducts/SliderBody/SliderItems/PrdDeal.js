export default function PrdDeal (props) {
  return (`
    <div class="prdDeal">
      <div class=" flex flex-col items-center">
        <span class="text-base text-center my-2 font-medium text-[#ff424e]">79.000d</span>
        <div class="w-full h-4 rounded-full relative bg-[#ffaaaf]">
          <div class="h-4 w-4 rounded-full absolute top-0 left-0 bg-[#ff424e]"></div>
          <span class="text-[10px] text-center flex items-center justify-center text-white">Vừa mở bán</span>
        </div>
      </div>
    </div>
  `)
}