function ProfileImg() {
  //   const image = document.querySelector("img");
  //   const input = document.querySelector("input");

  //   input?.addEventListener("change", () => {
  //     image?.src;
  //   });
  return (
    <div className="flex flex-col items-center p-4 mr-6">
      <img
        src="https://images.pexels.com/photos/17126623/pexels-photo-17126623/free-photo-of-artischocke-wilde.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="userImg"
        className="h-32 w-36 rounded-full object-cover bg-[#dfdfdf]"
      />
      {/* <input type="file" /> */}
    </div>
  );
}

export default ProfileImg;
