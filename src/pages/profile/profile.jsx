import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  API,
  editProfile,
  profile,
} from "../../features/getProducts/GetProduct";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Profile = () => {
  const [img, setImg] = useState(null);
  const [Name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [country , setCountry] = useState("")
  const dispatch = useDispatch();
  const profileUser = useSelector((state) => state.todolist.profileUser);

  const editUser = (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log(img);

    formData.append("Image", img[0]);
    formData.append("FirstName", Name);
    formData.append("LastName", surname);
    formData.append("Email", email);
    formData.append("PhoneNumber", `+${country} ${phone}`);
    formData.append("Dob", dob);
    dispatch(editProfile(formData));
    setImg(null);
    setName("");
    setSurname("");
    setEmail("");
    setPhone("");
    setDob("");
  };
  console.log(profileUser);

  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);
  return (
    <div className="max-w-[1700px] m-auto">
      <section className="border-2 md:w-[50%] w-[90%] p-10 m-auto my-20 rounded-2xl border-[#acacac]">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl text-red-600">Profile</h2>
          {/* edit btn */}
          <AlertDialog>
            <AlertDialogTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 text-blue-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <form onSubmit={editUser}>
                <AlertDialogHeader>
                  <AlertDialogTitle>Edit Profile</AlertDialogTitle>
                  <AlertDialogDescription>
                    <fieldset className="border-2 my-3 border-[#acacac] rounded-[5px] p-2">
                      <legend className="px-2">Image</legend>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImg(e.target.files)}
                      />
                    </fieldset>
                    {/* edit Name */}
                    <fieldset className="border-2 my-3 border-[#acacac] rounded-[5px] p-2">
                      <legend className="px-2">First Name</legend>
                      <input
                        type="text"
                        className="outline-0 w-[100%] text-[16px]"
                        placeholder="Name"
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </fieldset>
                    {/* edit Surname */}
                    <fieldset className="border-2 my-3 border-[#acacac] rounded-[5px] p-2">
                      <legend className="px-2">Last Name</legend>
                      <input
                        type="text"
                        className="outline-0 w-[100%] text-[16px]"
                        placeholder="Surname"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                      />
                    </fieldset>
                    {/* email */}
                    <fieldset className="border-2 my-3 border-[#acacac] rounded-[5px] p-2">
                      <legend className="px-2">Email</legend>
                      <input
                        type="email"
                        className="outline-0 w-[100%] text-[16px]"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </fieldset>
                    {/* Phone Num */}
                    <fieldset className="border-2 my-3 border-[#acacac] rounded-[5px] p-2">
                      <legend className="px-2">Phone Number</legend>
                      <div className="flex items-center gap-3">
                        <select className="outline-0" value={country} onChange={(e)=> setCountry(e.target.value)}>
                          <option value="992">🇹🇯 +992</option>
                          <option value="1">us +1</option>
                          <option value="44">🇬🇧 +44</option>
                          <option value="86">🇨🇳 +86</option>
                          <option value="7">🇷🇺 +7</option>
                          <option value="91">🇮🇳 +91</option>
                          <option value="49">🇩🇪 +49</option>
                          <option value="33">🇫🇷 +33</option>
                          <option value="81">🇯🇵 +81</option>
                          <option value="82">🇰🇷 +82</option>
                          <option value="55">🇧🇷 +55</option>
                        </select>
                        <input
                          type="number"
                          className="outline-0 w-[100%] text-[16px]"
                          placeholder="Number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </fieldset>
                    <fieldset className="border-2 my-3 border-[#acacac] rounded-[5px] p-2">
                      <legend className="px-2">Day Of Birth</legend>
                      <input
                        type="date"
                        className="outline-0 w-[100%] text-[16px]"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                      />
                    </fieldset>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction type="submit">Save</AlertDialogAction>
                </AlertDialogFooter>
              </form>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="border-2 md:w-[26%] w-[50%] md:h-[180px] h-[130px] rounded-[50%] m-auto my-5">
          <img
            className="w-[100%] h-[100%] rounded-[50%]"
            src={`${API}/images/${profileUser.image}`}
            alt=""
          />
        </div>
        {/* ////////////// name and surname */}
        <div className="flex justify-between my-8 md:border-b-2 md:flex-row flex-col">
          <h2 className="md:text-2xl text-gray-500">User Name :</h2>
          <h2 className="md:text-2xl text-black">{profileUser.userName}</h2>
        </div>
        <div className="flex justify-between my-8 md:border-b-2 md:flex-row flex-col">
          <h2 className="md:text-2xl text-gray-500">First Name :</h2>
          <h2 className="md:text-2xl text-black">{profileUser.firstName}</h2>
        </div>
        <div className="flex justify-between my-8 md:border-b-2 md:flex-row flex-col">
          <h2 className="md:text-2xl text-gray-500">First Name :</h2>
          <h2 className="md:text-2xl text-black">{profileUser.lastName}</h2>
        </div>
        <div className="flex justify-between my-8 md:border-b-2 md:flex-row flex-col">
          <h2 className="md:text-2xl text-gray-500">phone Number :</h2>
          <h2 className="md:text-2xl text-black">{profileUser.phoneNumber}</h2>
        </div>
        <div className="flex justify-between my-8 md:border-b-2 md:flex-row flex-col">
          <h2 className="md:text-2xl text-gray-500">Email :</h2>
          <h2 className="md:text-2xl text-black">{profileUser.email}</h2>
        </div>
        <div className="flex justify-between my-8 md:border-b-2 md:flex-row flex-col">
          <h2 className="md:text-2xl text-gray-500">Day Birth :</h2>
          <h2 className="md:text-2xl text-black">{profileUser.dob}</h2>
        </div>
      </section>
    </div>
  );
};

export default Profile;
