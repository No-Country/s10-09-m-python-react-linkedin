import imgAvatar from "../../assets/noAvatar.png";
function Conversations() {
  return (
    <div className="flex items-center gap-2 p-5 cursor-pointer ">
      <div className="avatar ">
        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={imgAvatar} />
        </div>
      </div>
      <span className="font-semibold">Work Wave</span>
    </div>
  );
}

export default Conversations;
