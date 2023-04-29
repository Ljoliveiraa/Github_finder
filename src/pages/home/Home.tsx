import { useState } from "react";
import { Search } from "../../components/search";
import { UserProps } from "../../models";
import { User } from "../../components/user";
import { Error } from "../../components/MsgErro";

import "./_style.scss";
//
export const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  const loadUser = async (userName: string) => {
    setError(false);
    setUser(null);
    const res = await fetch(`https://api.github.com/users/${userName}`); //api go github
    const data = await res.json();
    if (res.status === 404) {
      setError(true);
      return;
    }
    const { avatar_url, login, location, following, followers, bio, name, received_events_url } =
      data;
    const userDate: UserProps = {
      avatar_url,
      following,
      followers,
      location,
      login,
      bio,
      name,
      received_events_url,
    };
    setUser(userDate);
  };

  return (
    <div className="full-page-home">
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  );
};
