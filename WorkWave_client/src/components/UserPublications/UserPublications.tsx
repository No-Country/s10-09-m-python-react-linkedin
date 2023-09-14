import Publication from "./Publication";
import { useEffect, useState } from "react";
import { getPublication } from "../../services/Publications";
import NewPublication from "./NewPublication";
function UserPublicatons() {
  type id = {
    id: number;
  };
  interface publication {
    id: id;
    users_customuser: customuser;
    title: string;
    img: string;
    content: string;
    post_date: Date;
  }
  interface customuser {
    id: string;
  }
  const userData = JSON.parse(localStorage.getItem("user") ?? "{}");

  const [Publications, setPublications] = useState([]);

  useEffect(() => {
    getPublication().then((data) => setPublications(data));
  }, []);
  const userPublications = Publications.filter(
    (e: publication) => e.users_customuser?.id === String(userData.id)
  );
  console.log(userPublications);
  return (
    <div>
      <NewPublication />
      <div className="w-full flex  flex-col justify-center  gap-8">
        {userPublications.map((publication: publication, index) => (
          <div key={index}>
            <Publication
              id={publication.id}
              text={publication.title}
              img=""
              footText={publication.content}
              userData={userData}
              post_date={new Date(publication.post_date)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserPublicatons;
