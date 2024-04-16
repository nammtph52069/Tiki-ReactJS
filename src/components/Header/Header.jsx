import Cart from './Cart/Cart'
import { useState } from 'react'


const arrSuggestions = [
  {
    id: 'sgg01',
    title: 'gánh gánh gồng gồng',
    thumnail_url: 'https://salt.tikicdn.com/ts/upload/e8/aa/26/42a11360f906c4e769a0ff144d04bfe1.png'
  },
  {
    id: 'sgg02',
    title: 'lúc biết xuyên không thì đã muộn',
    thumnail_url: 'https://salt.tikicdn.com/ts/upload/e8/aa/26/42a11360f906c4e769a0ff144d04bfe1.png'
  },
  {
    id: 'sgg03',
    title: 'lúc biết xuyên không thì đã muộn',
    thumnail_url: 'https://salt.tikicdn.com/ts/upload/e8/aa/26/42a11360f906c4e769a0ff144d04bfe1.png'
  },
  {
    id: 'sgg04',
    title: 'tai nghe bluetooth',
    thumnail_url: 'https://salt.tikicdn.com/ts/upload/e8/aa/26/42a11360f906c4e769a0ff144d04bfe1.png'
  }
]

export default function Header () {
  const [suggestions, setSuggestions] = useState(false)

  const handleSuggestions = () => {
    setSuggestions(!suggestions)
    // console.log(suggestions)

    // suggestions ? 'block' : 'hidden'

    return (
      <div className="header--Suggestions hidden w-full absolute top-full left-0 shadow-md bg-white">
        <div className="suggestionsWrapper py-3">
          {arrSuggestions.map((item, index) => {
            return (
              <div key={ index } className="suggestionsItem px-4 flex items-center gap-2 cursor-pointer hover:bg-[#27272a1f]">
                <img className="h-9 w-9" src={ item.thumnail_url } alt="" />
                <p className="text-sm font-medium">{ item.title }</p>
              </div>
            )
          })}
        </div>
        <div className="text-xs text-center py-2 px-4 cursor-pointer text-[#0d5cb6]">Xem thêm</div>
      </div>
    )
  }

  const ShowSuggestions = () => {
    return (
      <div className="header--Suggestions hidden w-full absolute top-full left-0 shadow-md bg-white">
        <div className="suggestionsWrapper py-3">
          {arrSuggestions.map((item, index) => {
            return (
              <div key={ index } className="suggestionsItem px-4 flex items-center gap-2 cursor-pointer hover:bg-[#27272a1f]">
                <img className="h-9 w-9" src={ item.thumnail_url } alt="" />
                <p className="text-sm font-medium">{ item.title }</p>
              </div>
            )
          })}
        </div>
        <div className="text-xs text-center py-2 px-4 cursor-pointer text-[#0d5cb6]">Xem thêm</div>
      </div>
    )
  }

  return (
    <section className="header--wrapper w-[1440px] font-primary container px-6 py-2 mx-auto flex items-center gap-12">
      <section className="header--logo">
        <a href="#">
          <img className="h-10" src="https://salt.tikicdn.com/ts/upload/0e/07/78/ee828743c9afa9792cf20d75995e134e.png" alt="" />
          <p className="text-sm font-semibold mt-2 text-[#003ea1]">Tốt & Nhanh</p>
        </a>
      </section>

      <section className="header--HomeRevamp w-full flex flex-col gap-2">
        <div className="header--middle flex">
          <div className="header--form flex flex-shrink flex-grow basis-0 relative">
            <form action="" className="flex items-center w-full border rounded-md">
              <img className="w-5 h-5 ml-5" src="https://salt.tikicdn.com/ts/upload/33/d0/37/6fef2e788f00a16dc7d5a1dfc5d0e97a.png" alt="searchIcon" />
              <input onFocus={ handleSuggestions } className="text-sm px-2 outline-none flex-grow flex-shrink basis-0" type="text" placeholder="Tìm kiếm..." />
              <input className="text-sm w-24 h-[38px] outline-none border-l rounded-r-md cursor-pointer transition-all hover:bg-[#0a68ff33] text-[#0a68ff]" type="button" value="Tìm kiếm" />
            </form>
            {/* header--Suggestions */}
            <ShowSuggestions />
          </div>

          <div className="header--user ml-12 flex items-center">
            <div className="header--home">
              <a href="#" className="flex items-center gap-1 px-4 py-2 rounded-md hover:bg-[#0060ff1f]">
                <img className="h-6 w-6" src="https://salt.tikicdn.com/ts/upload/32/56/db/d919a4fea46f498b5f4708986d82009d.png" alt="" />
                <p className="text-sm font-medium text-[#0a68ff]">Trang chủ</p>
              </a>
            </div>
            <div className="header--account group/item relative">
              <a href="#" className="flex items-center gap-1 px-4 py-2 rounded-md hover:bg-[#27272a1f]">
                <img className="h-6 w-6" src="https://salt.tikicdn.com/ts/upload/07/d5/94/d7b6a3bd7d57d37ef6e437aa0de4821b.png" alt="" />
                <p className="text-sm font-medium text-[#808089]">Tài khoản</p>
              </a>
              <div className="header--userDropdown absolute top-[200%] transition-all invisible opacity-0 right-0 w-60 shadow-md rounded-md group-hover/item:top-full group-hover/item:visible group-hover/item:opacity-100 bg-white">
                <nav className="h-full w-full py-2">
                  <a className="block px-4 py-2 text-sm transition-all text-[#27272a] hover:bg-[#27272a1f]" href="">Thông tin tài khoản</a>
                  <a className="block px-4 py-2 text-sm transition-all text-[#27272a] hover:bg-[#27272a1f]" href="">Đơn hàng của tôi</a>
                  <a className="block px-4 py-2 text-sm transition-all text-[#27272a] hover:bg-[#27272a1f]" href="">Trung tâm hỗ trợ</a>
                  <a className="block px-4 py-2 text-sm transition-all text-[#27272a] hover:bg-[#27272a1f]" href="">Đăng xuất</a>
                </nav>
              </div>
            </div>
            <Cart />
          </div>
        </div>

        <div className="header--bottom flex items-center justify-between">
          <div className="header--quicklinks flex items-center gap-3">
            <a className="text-sm block text-[#808089]" href="">điện gia dụng</a>
            <a className="text-sm block text-[#808089]" href="">xe cộ</a>
            <a className="text-sm block text-[#808089]" href="">mẹ & bé</a>
            <a className="text-sm block text-[#808089]" href="">khỏe đẹp</a>
            <a className="text-sm block text-[#808089]" href="">nhà cửa</a>
            <a className="text-sm block text-[#808089]" href="">sách</a>
            <a className="text-sm block text-[#808089]" href="">thể thao</a>
          </div>
          <div className="header--address">
            <div className="flex items-center gap-1">
              <img className="w-5 h-5" src="https://salt.tikicdn.com/ts/upload/88/5c/9d/f5ee506836792eb7775e527ef8350a44.png" alt="" />
              <p className="text-sm text-[#808089]">Giao đến:</p>
              <a className="text-sm font-medium underline text-[#27272a]" href="">Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội</a>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}