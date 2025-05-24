import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profile } from "../../features/getProducts/GetProduct";

const Profile = () => {
  const dispatch = useDispatch();
  const profileUser = useSelector((state) => state.todolist.profileUser);
  console.log(profileUser);

  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);
  return <div className="max-w-[1700px] m-auto">
    <section className="">
        <h2 className="font-bold text-2xl text-red-600">Profile</h2>
        <fieldset className="border-1 p-2">
            <legend>First name</legend>
            <input type="text" value={profileUser.firstName}  className="outline-0"/>
        </fieldset>
    </section>
  </div>;
};

export default Profile;
