export default function Cart () {
  return (
    <div className="header--cart ml-3 pl-3 border-l relative">
      <img className="w-6 h-6 cursor-pointer" src="https://salt.tikicdn.com/ts/upload/51/e2/92/8ca7e2cc5ede8c09e34d1beb50267f4f.png" alt="" />
      <span className="absolute -top-3 -right-2 text-[10px] font-bold px-1 py-[0.5px] rounded-full text-white bg-[#ff424f]">0</span>
    </div>
  )
}