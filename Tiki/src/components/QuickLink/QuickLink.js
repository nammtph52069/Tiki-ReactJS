import { QuickLinkData } from "../../data/QuickLinkData"
export default function QuickLink () {
  return (`
    <section class="quickLinkWrapper p-4 rounded-lg bg-white">
      <div class="quickLinkList flex items-center justify-around">
      ${QuickLinkData.items.map((quickLinkItem) => {
        return(`
          <div class="quickLinkItem">
            <a class="flex flex-col items-center gap-2" href="${quickLinkItem.url}">
              <img class="h-16 w-16" src="${quickLinkItem.thumbnail_url}" alt="">
              <p class="text-sm font-medium">${quickLinkItem.name}</p>
            </a>
          </div>
          `);
        }).join("")
      }
      </div>
    </section>
  `)
}
