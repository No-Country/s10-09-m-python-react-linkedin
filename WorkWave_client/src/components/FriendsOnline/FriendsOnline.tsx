function FriendsOnline() {
  return (
    <li className="flex items-center justify-around mb-5">
      {/* <div className="relative ">
        <img
          className="object-cover w-10 h-10 rounded-full"
          src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <span className="absolute top-0 right-0 w-3 h-3 border-2 border-white rounded-full bg-lime-600"></span>
      </div> */}
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        </div>
      </div>
      <span className="font-semibold">Adrian Espinoza</span>
    </li>
  );
}

export default FriendsOnline;
