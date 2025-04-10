import React from 'react'

function Test() {
  return (
    <div>let year = parseInt(prompt("Enter your year:"));
    console.log("Hello, " + year);
    
    const oldt = 5500;
    
    const yon = (year) => {
      return new Promise((resolve) => {
        let totalYears = year + oldt;
        let ra = Math.floor(totalYears / 4);
        let nyear = (totalYears + ra) % 7;
        let zemen = nyear - 1;
        if (zemen < 0) zemen = 6;
    
        let mappedZemen;
        switch (zemen) {
          case 0: mappedZemen = 5; break;
          case 1: mappedZemen = 4; break;
          case 2: mappedZemen = 3; break;
          case 3: mappedZemen = 2; break;
          case 4: mappedZemen = 8; break;
          case 5: mappedZemen = 7; break;
          case 6: mappedZemen = 6; break;
          default: mappedZemen = "Invalid";
        }
    
        resolve(mappedZemen);
      });
    };
    
    const metke = (year) => {
      return new Promise((resolve) => {
        let totalYears = year + oldt;
        let nyear = totalYears % 19;
        let wenber = nyear - 1;
        let we = wenber * 19;
        if (we > 30) {
          we = we % 30;
        }
        resolve(we);
      });
    };
    
    const nenewe = (yonValue, metkeValue) => {
      return new Promise((resolve) => {
        let result = (yonValue + metkeValue)%30;
    let nene;
    
    if (metkeValue > 14) {
      nene = "ጥር"; // Tirr
    } else if (result > 30) {
      let nenew = result % 30;
      nene = "የካቲት" + nenew;
    } else {
      nene = "የካቲት"; // Yekatit
    }
    
    let neneww = nene + " " + result;
    
        
        // Example operation
        resolve(neneww);
      });
    };
    
    // Run everything in chain
    let yonValue, metkeValue;
    
    yon(year)
      .then((mappedZemen) => {
        console.log("Mapped Zemen:", mappedZemen);
        yonValue = mappedZemen;
        return metke(year);
      })
      .then((metkeResult) => {
        console.log("Metke Result:", metkeResult);
        metkeValue = metkeResult;
        return nenewe(yonValue, metkeValue);
      })
      .then((neneweResult) => {
        console.log("Nenewe Result:", neneweResult);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
            </div>
  )
}

export default Test