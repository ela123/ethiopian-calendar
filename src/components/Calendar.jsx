import React, { useState } from "react";

function Calendar() {
  const [newtt, setNewtt] = useState("");
  const [yearType, setYearType] = useState("");
  const [zemen, setZemen] = useState("");
  const [wenberr, setwenberr] = useState("");
  const [metkenew, setmetkenew] = useState("");
  const [nenew, setnenew] = useState("");
  const [abiytsom, setabiytsom] = useState("");
  const [debrezeytVal, setDebrezeytVal] = useState("");
  const [honena, sethonena] = useState("");
  const [sikeltVal, setSikeltVal] = useState("");
  const [tensiaVal, setTensiaVal] = useState("");
  const [rekbeVal, setRekbeVal] = useState("");
  const [ergetVal, setErgetVal] = useState("");
  const [mefesVal, setMefesVal] = useState("");
  const [somhawaryatVal, setSomhawaryatVal] = useState("");
  const [somdehentVal, setSomdehentVal] = useState("");

  const ethiopianMonths = [
    "መስከረም",
    "ጥቅምት",
    "ኅዳር",
    "ታኅሣስ",
    "ጥር",
    "የካቲት",
    "መጋቢት",
    "ሚያዚያ",
    "ግንቦት",
    "ሰኔ",
    "ሀምሌ",
    "ነሐሴ",
    "ጷጉሜን"
  ];

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
  const yon = (year, metkeValue) => {
    return new Promise((resolve) => {
      let totalYears = year + oldt;
      let ra = Math.floor(totalYears / 4);
      let nyear = (totalYears + ra) % 7;
      let yon = nyear - 1;
  
      let arfewer = metkeValue > 14 ? 1 : 2;
      let elet = metkeValue + yon + (arfewer * 2);
      let zemen = elet % 7;
  
      let mappedZemen =
        zemen === 0 ? 8 :
        zemen === 1 ? 7 :
        zemen === 2 ? 6 :
        zemen === 3 ? 5 :
        zemen === 4 ? 4 :
        zemen === 5 ? 3 :
        zemen === 6 ? 2 :
        "Invalid year";
  
      // Nenewe logic
      let hamer = (mappedZemen + metkeValue) % 30;
      let som;
      if (metkeValue > 14 && (mappedZemen + metkeValue) < 30) {
        som = "ጥር " + hamer;
      } else {
        som = "የካቲት " + hamer;
      }
  
      resolve(som); // Return final nenewe string
    });
  };

  const abeysoma = (som) => {
    return new Promise((resolve) => {
      // Split the string, e.g., "ጥር 15" → ["ጥር", "15"]
      const [month, dayStr] = som.split(" ");
      const day = parseInt(dayStr);
  
      // Add 14 days
      let newDay = day + 14;
      let newMonth = month;
  
      // Ethiopian month lengths are typically 30 days
      if (newDay > 30) {
        newDay -= 30;
  
        // Handle month switch (simplified logic)
        newMonth = month === "ጥር" ? "የካቲት" :
                   month === "የካቲት" ? "መጋቢት" :
                   "???"; // add more if needed
      }
  
      const abiy = `${newMonth} ${newDay}`;
      resolve(abiy);
    });
  };

  const debrezeyt = (som) => {
    return new Promise((resolve) => {
      // Split the string, e.g., "ጥር 15" → ["ጥር", "15"]
      const [month, dayStr] = som.split(" ");
      const day = parseInt(dayStr);
      let totalDays = day + 41;
  

  
      // Get index of current month
      const currentMonthIndex = ethiopianMonths.indexOf(month);
      if (currentMonthIndex === -1) {
        resolve("Invalid month");
        return;
      }
  
      // Add days and calculate new month and day
      let newDay = totalDays;
      let newMonthIndex = currentMonthIndex;
  
      while (newDay > 30) {
        newDay -= 30;
        newMonthIndex++;
  
        if (newMonthIndex >= ethiopianMonths.length) {
          newMonthIndex = 0; // wrap around
        }
      }
  
      const newMonth = ethiopianMonths[newMonthIndex];

      const debere = `${newMonth} ${newDay}`;
      resolve(debere);
    });
  };
  const hosaena = (som) => {
    return new Promise((resolve) => {
      const [month, dayStr] = som.split(" ");
      const day = parseInt(dayStr);
      let totalDays = day + 62;
  

  
      // Get index of current month
      const currentMonthIndex = ethiopianMonths.indexOf(month);
      if (currentMonthIndex === -1) {
        resolve("Invalid month");
        return;
      }
  
      // Add days and calculate new month and day
      let newDay = totalDays;
      let newMonthIndex = currentMonthIndex;
  
      while (newDay > 30) {
        newDay -= 30;
        newMonthIndex++;
  
        if (newMonthIndex >= ethiopianMonths.length) {
          newMonthIndex = 0; // wrap around
        }
      }
  
      const newMonth = ethiopianMonths[newMonthIndex];
      const hosaena = `${newMonth} ${newDay}`;
      resolve(hosaena);
    });
  };
  
  const sikelt = (som) => {
    return new Promise((resolve) => {
      const [month, dayStr] = som.split(" ");
      const day = parseInt(dayStr);
      let totalDays = day + 67;
  

  
      // Get index of current month
      const currentMonthIndex = ethiopianMonths.indexOf(month);
      if (currentMonthIndex === -1) {
        resolve("Invalid month");
        return;
      }
  
      // Add days and calculate new month and day
      let newDay = totalDays;
      let newMonthIndex = currentMonthIndex;
  
      while (newDay > 30) {
        newDay -= 30;
        newMonthIndex++;
  
        if (newMonthIndex >= ethiopianMonths.length) {
          newMonthIndex = 0; // wrap around
        }
      }
  
      const newMonth = ethiopianMonths[newMonthIndex];
      const siklt = `${newMonth} ${newDay}`;
      resolve(siklt);
    });
  };
  
  const tensia = (som) => {
    return new Promise((resolve) => {
      const [month, dayStr] = som.split(" ");
      const day = parseInt(dayStr);
      let totalDays = day + 69;
  

  
      // Get index of current month
      const currentMonthIndex = ethiopianMonths.indexOf(month);
      if (currentMonthIndex === -1) {
        resolve("Invalid month");
        return;
      }
  
      // Add days and calculate new month and day
      let newDay = totalDays;
      let newMonthIndex = currentMonthIndex;
  
      while (newDay > 30) {
        newDay -= 30;
        newMonthIndex++;
  
        if (newMonthIndex >= ethiopianMonths.length) {
          newMonthIndex = 0; // wrap around
        }
      }
  
      const newMonth = ethiopianMonths[newMonthIndex];
      const tensia = `${newMonth} ${newDay}`;
      resolve(tensia);
    });
  };

  const rekbe = (som) => {
    return new Promise((resolve) => {
      const [month, dayStr] = som.split(" ");
      const day = parseInt(dayStr);
      let totalDays = day + 93;
  

  
      // Get index of current month
      const currentMonthIndex = ethiopianMonths.indexOf(month);
      if (currentMonthIndex === -1) {
        resolve("Invalid month");
        return;
      }
  
      // Add days and calculate new month and day
      let newDay = totalDays;
      let newMonthIndex = currentMonthIndex;
  
      while (newDay > 30) {
        newDay -= 30;
        newMonthIndex++;
  
        if (newMonthIndex >= ethiopianMonths.length) {
          newMonthIndex = 0; // wrap around
        }
      }
  
      const newMonth = ethiopianMonths[newMonthIndex];
      const rekebe = `${newMonth} ${newDay}`;
      resolve(rekebe);
    });
  };
  const erget = (som) => {
    return new Promise((resolve) => {
      const [month, dayStr] = som.split(" ");
      const day = parseInt(dayStr);
      let totalDays = day + 108;
  

  
      // Get index of current month
      const currentMonthIndex = ethiopianMonths.indexOf(month);
      if (currentMonthIndex === -1) {
        resolve("Invalid month");
        return;
      }
  
      // Add days and calculate new month and day
      let newDay = totalDays;
      let newMonthIndex = currentMonthIndex;
  
      while (newDay > 30) {
        newDay -= 30;
        newMonthIndex++;
  
        if (newMonthIndex >= ethiopianMonths.length) {
          newMonthIndex = 0; // wrap around
        }
      }
  
      const newMonth = ethiopianMonths[newMonthIndex];
      const erget = `${newMonth} ${newDay}`;
      resolve(erget);
    });
  };
  const mefeskidus = (som) => {
    return new Promise((resolve) => {
      const [month, dayStr] = som.split(" ");
      const day = parseInt(dayStr);
      let totalDays = day + 118;
      // Get index of current month
      const currentMonthIndex = ethiopianMonths.indexOf(month);
      if (currentMonthIndex === -1) {
        resolve("Invalid month");
        return;
      }
  
      // Add days and calculate new month and day
      let newDay = totalDays;
      let newMonthIndex = currentMonthIndex;
  
      while (newDay > 30) {
        newDay -= 30;
        newMonthIndex++;
  
        if (newMonthIndex >= ethiopianMonths.length) {
          newMonthIndex = 0; // wrap around
        }
      }
  
      const newMonth = ethiopianMonths[newMonthIndex];
      const menfeskdus = `${newMonth} ${newDay}`;
      resolve(menfeskdus);
    });
  };
  

  const somhawaryat = (som) => {
    return new Promise((resolve) => {
      const [month, dayStr] = som.split(" ");
      const day = parseInt(dayStr);
      let totalDays = day + 119;
      // Get index of current month
      const currentMonthIndex = ethiopianMonths.indexOf(month);
      if (currentMonthIndex === -1) {
        resolve("Invalid month");
        return;
      }
  
      // Add days and calculate new month and day
      let newDay = totalDays;
      let newMonthIndex = currentMonthIndex;
  
      while (newDay > 30) {
        newDay -= 30;
        newMonthIndex++;
  
        if (newMonthIndex >= ethiopianMonths.length) {
          newMonthIndex = 0; // wrap around
        }
      }
  
      const newMonth = ethiopianMonths[newMonthIndex];
      const somhawarya = `${newMonth} ${newDay}`;
      resolve(somhawarya);
    });
  };
  const   somdehent = (som) => {
    return new Promise((resolve) => {
      const [month, dayStr] = som.split(" ");
      const day = parseInt(dayStr);
      let totalDays = day + 121;
      // Get index of current month
      const currentMonthIndex = ethiopianMonths.indexOf(month);
      if (currentMonthIndex === -1) {
        resolve("Invalid month");
        return;
      }
  
      // Add days and calculate new month and day
      let newDay = totalDays;
      let newMonthIndex = currentMonthIndex;
  
      while (newDay > 30) {
        newDay -= 30;
        newMonthIndex++;
  
        if (newMonthIndex >= ethiopianMonths.length) {
          newMonthIndex = 0; // wrap around
        }
      }
  
      const newMonth = ethiopianMonths[newMonthIndex];
      const somdehent = `${newMonth} ${newDay}`;
      resolve(somdehent);
    });
  };

  

  // Function to handle calculations
  const calculate = () => {
    let year = parseInt(newtt);
    if (isNaN(year)) {
      alert("Invalid input. Please enter a valid number.");
      return;
    }
  
    let metkeValue , nenew; // shared value
  
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
      .then((metkenewVal) => {
        setmetkenew(metkenewVal);
        metkeValue = metkenewVal; //
        return yon(year, metkeValue); 
      })
      .then((finalNenewe) => {
        setnenew(finalNenewe); // Set Nenewe string 
        nenew=finalNenewe
        return abeysoma(finalNenewe);
      }).then((abiyResult) => {
        setabiytsom(abiyResult); 
        return debrezeyt(nenew);// show result
      }).then((debere) => {
        setDebrezeytVal(debere); 
        return hosaena(nenew);// Set Debre Zeit value
      }).then((hosaena) => {
        sethonena(hosaena); 
        return sikelt(nenew);
})
.then((sikeltResult) => {
  setSikeltVal(sikeltResult);
  return tensia(nenew);
})
.then((tensiaResult) => {
  setTensiaVal(tensiaResult);
  return rekbe(nenew);
})
.then((rekbeResult) => {
  setRekbeVal(rekbeResult);
  return erget(nenew);
})
.then((ergetResult) => {
  setErgetVal(ergetResult);
  return mefeskidus(nenew);
})
.then((menfesResult) => {
  setMefesVal(menfesResult);
  return somhawaryat(nenew);
})
.then((somhawaryaRes) => {
  setSomhawaryatVal(somhawaryaRes);
  return somdehent(nenew);
})
.then((somdehentRes) => {
  setSomdehentVal(somdehentRes);
})
    .catch((error) => console.error(error));
};
  


  return (
    <div className="md:flex-nowrap md:flex-col flex-col flex gap-4 bg-black/70">
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
          className="border-2  m-3 border-yellow-300 border-solid rounded-[15px] placeholder-white text-white pl-2"
        />
        <input
          type="button"
          value="Calculate"
          onClick={calculate}
          className="hover:bg-gray-300 hover:text-black min-w-30 min-h-10 bg-yellow-300 text-gray text-[15px] font-bold border-2 border-yellow-300 border-solid rounded-[15px]"
        />
      </div>

      <div className="flex justify-center items-center p-4">
  <div className="bg-black/70 max-w-200 flex justify-center items-center p-2 rounded-[8px] border border-yellow-300 border-solid">
    <div className="gap-4 min-w-70 max-w-100 pl-9">
      <h2 className="text-[15px] text-white font-bold">ዘመን:   {yearType || "--"}</h2>
      <h2 className="text-[15px] text-white font-bold">ዐወደ ዓመት : {zemen || "--"}</h2>
      <h2 className="text-[15px] text-white font-bold">አበቅቴ : { wenberr || "--"}</h2>
      <h2 className="text-[15px] text-white font-bold">መጥቅዕ : {metkenew || "--"}</h2>
      <h2 className="text-[15px] text-white font-bold">ነነዌ : {nenew || "--"}</h2>
      <h2 className="text-[15px] text-white font-bold">ዐቢይ ጾም :{abiytsom || "--"} </h2>
      <h2 className="text-[15px] text-white font-bold">ደብረ ዘይት   :{debrezeytVal || "--"}  </h2>
      <h2 className="text-[15px] text-white font-bold">ሆሣዕና :{honena || "--"} </h2>
      <h2 className="text-[15px] text-white font-bold">ስቅለት :{sikeltVal || "--"} </h2>
      <h2 className="text-[15px] text-white font-bold">ትንሣኤ :{tensiaVal || "--"} </h2>
      <h2 className="text-[15px] text-white font-bold">ርክበ ካህናት :{rekbeVal || "--"} </h2>
      <h2 className="text-[15px] text-white font-bold">ዕርገት :{ergetVal || "--"} </h2>
      <h2 className="text-[15px] text-white font-bold">ጰራቅሊጦስ :{mefesVal || "--"} </h2>
      <h2 className="text-[15px] text-white font-bold">ጸመ ሐዋርያት (የሰኔ ጾም)  :{somhawaryatVal || "--"} </h2>
      <h2 className="text-[15px] text-white font-bold">ጸመ ድኅነት  :{somdehentVal || "--"} </h2>

    </div>
  </div>
</div>

    </div>
  );
}

export default Calendar;
