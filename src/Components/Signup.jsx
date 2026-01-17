export default function Signup() {
  return (
    <>
      <div className="">
        {/*  Declaring inputs in sections*/}
        {/* Section 1(First && Surname) */}
        <div>
          <input type="text" name="firstname" id="" placeholder="Firstname" />
          <input type="text" name="surname" id="" placeholder="Surname" />
        </div>

        {/* Section 2(Email && Password) */}
        <div>
          <input type="text" name="email" id="" placeholder="Email" />
          <input type="password" name="password" id="" placeholder="password" />
        </div>
      </div>
    </>
  );
}
