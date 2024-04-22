export default function Header() {
  return (`
    <section class="header--wrapper w-[1440px] font-primary container px-6 py-2 mx-auto flex items-center gap-12">
      <section class="header--logo">
        <a href="#" class="">
          <img class="h-10" src="https://salt.tikicdn.com/ts/upload/0e/07/78/ee828743c9afa9792cf20d75995e134e.png" alt="">
          <p class="text-sm font-semibold mt-2 text-[#003ea1]">Tốt & Nhanh</p>
        </a>
      </section>
      <section class="header--HomeRevamp w-full flex flex-col gap-2">
        <div class="header--middle flex">
          <div class="header--form flex flex-shrink flex-grow basis-0 relative">
            <form action="" class="flex items-center w-full border rounded-md">
              <img class="w-5 h-5 ml-5" src="https://salt.tikicdn.com/ts/upload/33/d0/37/6fef2e788f00a16dc7d5a1dfc5d0e97a.png" alt="searchIcon">
              <input class="text-sm px-2 outline-none flex-grow flex-shrink basis-0" type="text" placeholder="Tìm kiếm...">
              <input class="text-sm w-24 h-[38px] outline-none border-l rounded-r-md cursor-pointer transition-all hover:bg-[#0a68ff33] text-[#0a68ff]" type="button" value="Tìm kiếm">
            </form>
            <!-- header--Suggestions -->
            <div class="header--Suggestions hidden w-full absolute top-full left-0 shadow-md bg-white">
              <!-- Header Suggestions -->
              <div class="suggestionsWrapper py-3">
                <div class="suggestionsItem px-4 flex items-center gap-2 cursor-pointer hover:bg-[#27272a1f]">
                  <img class="h-9 w-9" src="https://salt.tikicdn.com/ts/upload/e8/aa/26/42a11360f906c4e769a0ff144d04bfe1.png" alt="">
                  <p class="text-sm font-medium">gánh gánh gồng gồng</p>
                </div>
                <div class="suggestionsItem px-4 flex items-center gap-2 cursor-pointer hover:bg-[#27272a1f]">
                  <img class="h-9 w-9" src="https://salt.tikicdn.com/ts/upload/e8/aa/26/42a11360f906c4e769a0ff144d04bfe1.png" alt="">
                  <p class="text-sm font-medium">lúc biết xuyên không thì đã muộn</p>
                </div>
                <div class="suggestionsItem px-4 flex items-center gap-2 cursor-pointer hover:bg-[#27272a1f]">
                  <img class="h-9 w-9" src="https://salt.tikicdn.com/ts/upload/e8/aa/26/42a11360f906c4e769a0ff144d04bfe1.png" alt="">
                  <p class="text-sm font-medium">tai nghe bluetooth</p>
                </div>
              </div>
              <!-- View More Suggestions -->
              <div class="text-xs text-center py-2 px-4 cursor-pointer text-[#0d5cb6]">Xem thêm</div>
            </div>
          </div>
          <div class="header--user ml-12 flex items-center">
            <div class="header--home">
              <a href="#" class="flex items-center gap-1 px-4 py-2 rounded-md hover:bg-[#0060ff1f]">
                <img class="h-6 w-6" src="https://salt.tikicdn.com/ts/upload/32/56/db/d919a4fea46f498b5f4708986d82009d.png" alt="">
                <p class="text-sm font-medium text-[#0a68ff]">Trang chủ</p>
              </a>
            </div>
            <div class="header--account group/item relative">
              <a href="#" class="flex items-center gap-1 px-4 py-2 rounded-md hover:bg-[#27272a1f]">
                <img class="h-6 w-6" src="https://salt.tikicdn.com/ts/upload/07/d5/94/d7b6a3bd7d57d37ef6e437aa0de4821b.png" alt="">
                <p class="text-sm font-medium text-[#808089]">Tài khoản</p>
              </a>
              <div class="header--userDropdown absolute top-[200%] transition-all invisible opacity-0 right-0 w-60 shadow-md rounded-md group-hover/item:top-full group-hover/item:visible group-hover/item:opacity-100 bg-white">
                <nav class="h-full w-full py-2">
                  <a class="block px-4 py-2 text-sm transition-all text-[#27272a] hover:bg-[#27272a1f]" href="">Thông tin tài khoản</a>
                  <a class="block px-4 py-2 text-sm transition-all text-[#27272a] hover:bg-[#27272a1f]" href="">Đơn hàng của tôi</a>
                  <a class="block px-4 py-2 text-sm transition-all text-[#27272a] hover:bg-[#27272a1f]" href="">Trung tâm hỗ trợ</a>
                  <a class="block px-4 py-2 text-sm transition-all text-[#27272a] hover:bg-[#27272a1f]" href="">Đăng xuất</a>
                </nav>
              </div>
            </div>
            <div class="header--cart ml-3 pl-3 border-l relative">
              <img class="w-6 h-6 cursor-pointer" src="https://salt.tikicdn.com/ts/upload/51/e2/92/8ca7e2cc5ede8c09e34d1beb50267f4f.png" alt="">
              <span class="absolute -top-3 -right-2 text-[10px] font-bold px-1 py-[0.5px] rounded-full text-white bg-[#ff424f]">0</span>
            </div>
          </div>
        </div>
        <div class="header--bottom flex items-center justify-between">
          <div class="header--quicklinks flex items-center gap-3">
            <a class="text-sm block text-[#808089]" href="">điện gia dụng</a>
            <a class="text-sm block text-[#808089]" href="">xe cộ</a>
            <a class="text-sm block text-[#808089]" href="">mẹ & bé</a>
            <a class="text-sm block text-[#808089]" href="">khỏe đẹp</a>
            <a class="text-sm block text-[#808089]" href="">nhà cửa</a>
            <a class="text-sm block text-[#808089]" href="">sách</a>
            <a class="text-sm block text-[#808089]" href="">thể thao</a>
          </div>
          <div class="header--address">
            <div class="flex items-center gap-1">
              <img class="w-5 h-5" src="https://salt.tikicdn.com/ts/upload/88/5c/9d/f5ee506836792eb7775e527ef8350a44.png" alt="">
              <p class="text-sm text-[#808089]">Giao đến:</p>
              <a class="text-sm font-medium underline text-[#27272a]" href="">Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội</a>
            </div>
          </div>
        </div>
      </section>
    </section>
  `);
}