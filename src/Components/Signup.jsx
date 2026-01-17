export default function Signup() {
  return (
    <>
      <div className="p-5 bg-blue-300">
        {/*  Declaring inputs in sections*/}
        {/* Section 1(First && Surname) */}
        <div className="col col-2">
          <input type="text" name="firstname" id="" placeholder="Firstname" />
          <input type="text" name="surname" id="" placeholder="Surname" />
        </div>

        {/* Section 2(Email && Password) */}
        <div className="col col-2">
          <input type="text" name="email" id="" placeholder="Email" />
          <input type="password" name="password" id="" placeholder="password" />
        </div>

        {/* Section 3(Contact && DOB)*/}
        <input type="text" name="" id="" placeholder="Contact" />
        <input type="date" name="" id="" placeholder="dob" />
      </div>
    </>
  );
}
