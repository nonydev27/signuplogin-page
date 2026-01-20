export default function Signup() {
  return (
    <>
      <div className="flex justify-center items-center h-screen shadow-2xl">
        <div className="p-10 bg-blue-300 rounded-3xl">
          {/*  Declaring inputs in sections*/}
          {/* Section 1(Firstname */}
          <div className="col p-4">
            <input type="text" name="firstname" id="" placeholder="Firstname" />
          </div>
          {/* Section 2(Surname) */}

          <input type="text" name="surname" id="" placeholder="Surname" />

          {/* Section 3(Email && Password) */}

          <input type="text" name="email" id="" placeholbder="Email" />
          <input type="password" name="password" id="" placeholder="password" />

          {/* Section 4(Contact && DOB)*/}

          <input type="text" name="" id="" placeholder="Contact" />
          <input type="date" name="" id="" placeholder="dob" />

          <div className="col col-2 p-4">
            <button name="submit" type="submit">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
