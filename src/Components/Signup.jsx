export default function Signup() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="p-10 bg-blue-300 rounded-2xl">
          {/*  Declaring inputs in sections*/}
          {/* Section 1(Firstname */}
          <div className="col p-4">
            <input type="text" name="firstname" id="" placeholder="Firstname" />
          </div>
          {/* Section 2(Surname) */}
          <div className="col p-4">
            <input type="text" name="surname" id="" placeholder="Surname" />
          </div>

          {/* Section 3(Email && Password) */}
          <div className="col col-2 p-4">
            <input type="text" name="email" id="" placeholder="Email" />
            <input
              type="password"
              name="password"
              id=""
              placeholder="password"
            />
          </div>

          {/* Section 4(Contact && DOB)*/}
          <div className="col col-2 p-4">
            <input type="text" name="" id="" placeholder="Contact" />
            <input type="date" name="" id="" placeholder="dob" />
          </div>
        </div>
      </div>
    </>
  );
}
