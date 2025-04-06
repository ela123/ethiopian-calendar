import React, { useState } from "react";

function Calendar() {
  const [newtt, setNewtt] = useState("");
  const [yearType, setYearType] = useState("");
  const [zemen, setZemen] = useState("");
  const [wenberr, setwenberr] = useState("");
  const [metkenew, setmetkenew] = useState("");
  const oldt = 5500;

  // Handle input change
  const handleChange = (event) => {
    setNewtt(event.target.value);
  };

  // ዘመን
  const calculateYearType = (year) => {
    return new Promise((resolve) => {
      let year1 = (year + oldt) % 4;
      let yearType =
        year1 === 0 || year1 === 4 ? "Yohans year" :
        year1 === 1 ? "Matyos year" :
        year1 === 2 ? "Markos year" :
        year1 === 3 ? "Lukas year" :
        "Invalid year";

      resolve(yearType);
    });
  };

  // ዐወደ ዓመት
  const calculateZemen = (year) => {
    return new Promise((resolve) => {
      let totalYears = year + oldt;
      let nyear = Math.floor(totalYears / 4);
      let yeart = totalYears + nyear;
      let zemen = yeart % 7;

      let day =
        zemen === 0 ? "Monday" :
        zemen === 1 ? "Tuesday" :
        zemen === 2 ? "Wednesday" :
        zemen === 3 ? "Thursday" :
        zemen === 4 ? "Friday" :
        zemen === 5 ? "Saturday" :
        zemen === 6 ? "Sunday" :
        "Invalid year";

      resolve(day);
    });
  };
// አበቅቴ
  const wenber = (year) => {
    return new Promise((resolve) => {
      let totalYears = year + oldt;
    let nyear = totalYears % 19;
    let wenber = nyear - 1;
    let we = wenber * 11;

    if (we > 30) {
      we = we % 30;
    }
    resolve(we); // Pass result to .then()
    });
  }
// መጥቅዕ
  const metke = (year) => {
    return new Promise((resolve) => {
      let totalYears = year + oldt;
    let nyear = totalYears % 19;
    let wenber = nyear - 1;
    let we = wenber * 19;
    if (we > 30) {
      we = we % 30;
    }
    resolve(we); // Pass result to .then()
    });
  }

  // Function to handle calculations
  const calculate = () => {
    let year = parseInt(newtt);
    if (isNaN(year)) {
      alert("Invalid input. Please enter a valid number.");
      return;
    }

    calculateYearType(year)
    .then((yearType) => {
      setYearType(yearType);
      return calculateZemen(year);
    })
    .then((day) => {
      setZemen(day);
      return wenber(year);
    })
    .then((wenberr) => {
      setwenberr(wenberr);
      return metke(year);
    })
    .then((metkenew) => {
      setmetkenew(metkenew);
    })
    .catch((error) => console.error(error));
  
  };

  return (
    <div className="md:flex-nowrap md:flex-row flex-col gap-4 bg-black/70">
      <div className="flex flex-col mx-auto justify-evenly items-center p-4">
        <h1 className="text-white text-[20px] font-bold">
          Enter The Year You Want To Calculate The Calendar
        </h1>
      </div>

      <div className="flex  mx-auto flex flex-col  justify-center items-center">
        <input
          type="number"
          placeholder="Enter Year"
          value={newtt}
          onChange={handleChange}
          className="border-2  m-3 border-yellow-300 rounded-[15px] placeholder-white text-white pl-2"
        />
        <input
          type="button"
          value="Calculate"
          onClick={calculate}
          className="hover:bg-gray-300 hover:text-black min-w-30 min-h-10 bg-yellow-300 text-gray text-[15px] font-bold border-2 border-yellow-300 rounded-[15px]"
        />
      </div>

      <div className="flex justify-center items-center p-4">
  <div className="bg-black/70 max-w-200 flex justify-center items-center p-2 rounded-[8px] border border-yellow-300">
    <div className="gap-4 min-w-100 pl-9">
      <h2 className="text-[15px] text-white font-bold">ዘመን: {yearType || "--"}</h2>
      <h2 className="text-[15px] text-white font-bold">ዐወደ ዓመት : {zemen || "--"}</h2>
      <h2 className="text-[15px] text-white font-bold">አበቅቴ : { wenberr || "--"}</h2>
      <h2 className="text-[15px] text-white font-bold">መጥቅዕ : {metkenew || "--"}</h2>
      <h2 className="text-[15px] text-white font-bold">ነነዌ : {zemen || "--"}</h2>
      <h2 className="text-[15px] text-white font-bold">ዐቢይ ጾም : {zemen || "--"}</h2>
      <h2 className="text-[15px] text-white font-bold">ደብረ ዘይት : {zemen || "--"}</h2>
      <h2 className="text-[15px] text-white font-bold">ሆሣዕና : {zemen || "--"}</h2>
      <h2 className="text-[15px] text-white font-bold">ስቅለት : {zemen || "--"}</h2>
      <h2 className="text-[15px] text-white font-bold">ትንሣኤ : {zemen || "--"}</h2>
      <h2 className="text-[15px] text-white font-bold">ርክበ ካህናት : {zemen || "--"}</h2>
      <h2 className="text-[15px] text-white font-bold">ዕርገት : {zemen || "--"}</h2>
      <h2 className="text-[15px] text-white font-bold">ጰራቅሊጦስ : {zemen || "--"}</h2>

    </div>
  </div>
</div>

    </div>
  );
}

export default Calendar;
