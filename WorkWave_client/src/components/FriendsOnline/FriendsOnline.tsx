function FriendsOnline() {
  return (
    <li className="flex items-center mb-5">
      <div className="relative mr-2">
        <img
          className="object-cover w-10 h-10 rounded-full"
          src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <span className="absolute top-0 right-0 w-3 h-3 border-2 border-white rounded-full bg-lime-600"></span>
      </div>
      <span className="font-semibold">Adrian</span>
    </li>
  );
}

export default FriendsOnline;
