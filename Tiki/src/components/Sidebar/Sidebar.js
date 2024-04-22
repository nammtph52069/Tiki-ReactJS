import { SidebarData } from "../../data/SiderbarData";
export default function Sidebar() {
  return (`
    <section class="sticky top-4">
      <div class="w-[230px] max-h-screen sticky top-4 overflow-y-scroll customScroll flex flex-col gap-3 rounded-md">
      ${Object.values(SidebarData).map((sidebarItem) => {
        return (`
        <div class="sidebar--category py-3 px-2 rounded-md bg-white">
          <h3 class="pl-4 mb-2 text-sm font-bold leading-5 text-[#27272a]">${sidebarItem.title}</h3>
          <div class="flex flex-col gap-1">
          ${sidebarItem.items.map((item) => {
            return (`
              <a class="flex items-center gap-1 px-4 py-2 transition-all rounded-md hover:bg-[#27272a1f]" href="${item.link}">
                <img class="h-8 w-8" src="${item.icon_url}" alt="">
                <p class="text-sm text-[#27272a]">${item.text}</p>
              </a>
            `)
          }).join("")}
          </div>
        </div>
          `)
        }).join("")}
      </div>
    </section>
  `);
}