import React from 'react'
import Footer from './Footer'
import Header from './Header'

function English() {
  return (
    <div>
            <Header />

          <div className='justify-center flex p-10'>
        
        <div className='lex-col  justify-center flex flex-col  max-w-[950px] items-center bg-gray-200 p-5 rounded-[8px] border-1 border-yellow-300 border-solid'>
                <h1 className='text-black text-[20px] font-bold'>Bahire Hasab - ባሕረ ሃሳብ - The Ethiopian Calendar</h1>
                <br></br>
                <p  className='text-black text-[15px] font-auto'>
                Ethiopia has its own ancient calendar based on the system called Bahire Hasab - ባሕረ ሃሳብ which means the Sea of Ideas. Bahire Hasab  also known as Abushakir is a chronological system used for calculating the times of festivals and the beginning and ending of the fasting days throughout the year.
<br></br><br></br>
The Ethiopian Calendar has much in common with the Coptic-Egyptian Calendar but not identical. The two calendars differ with regards to the time and observation of Saints' days. Pope Demetrios of the Church of Alexandria(seat of St. Mark) utilized Mitonic cycles. The calculations of Claudius Ptolemy and the Egyptian calendar were to establish the rules for calculating Easter on the day of a particular New Year.
                
<br></br><br></br>                 
According to the beliefs of the Ethiopian Orthodox Church, God created the world 5500 years before the birth of Our Lord and Savior Eyesus Kristos and it is 2015 years since Our Lord and Savior Eyesus Kristos was born. Based on this timeline, we are in the year 7515 (5500 + 2015) of the eighth millennium. These are referred to as Amete Alem or “The Years from the Beginning of Creation”.
<br></br><br></br>
The Ethiopic years have four year cycles. The years are named after the Evangelists Matthew, Mark, Luke and John. Each year has four seasons, autumn(fall), winter, spring and summer. An Ethiopian week has seven days. Each day has a numeric value for use in its calendrical calculations. Apart from hours, minutes and seconds the Ethiopic calendar also has a time frame known as Kekros(ኬክሮስ). A Kekros is 1/60th of a day. An Ethiopian solar year has 365 days and 15 Kekroses while a lunar year has 364 days and 22 Kekroses. 
<br></br><br></br>
Enoch wrote his Ethiopic Bible as the first and oldest author in any human language. The Book of Enoch has been part of the Ethiopian Canon. 
<br></br>
 <b>Enoch 72:33 </b> 
<br></br>
<b><i>"the year is exactly as to its days three hundred and sixty-four." </i> </b>
<br></br><br></br>
<b> 1.  Calculating Amete Alem - አመተ አለም (the years since Creation)</b> <br></br>

Amete Alem is the sum of the number of years before birth of Eyesus Kristos and after the birth of Our Lord and Saviour Eyesus Kristos.

Amete Alem = years Before Birth of Christ + years After birth of Christ <br></br>

Example: In 2015 E.C.(Ethiopian Calendar)<br></br><br></br>

Amete Alem = 5500 + 2015 = 7515<br></br>

Amete Alem = 7515<br></br> <br></br>

<b>2.  Calculating the Evangelist of the year(Wengelawi ) - ወንጌላዊ</b> <br></br>

 Wengelawi means the writers of the Gospel. The years are named after the four Evangelist namely Mathewos(Matthew), Markos(Mark), Lukas(Luke) and Yohannes (John). 

The name of the Evangelist of the year is the remainder of Amete Alem divided by 4 and if the  remainder is:     <br></br>          

   <b>    1, then it is the year of Mathewos(Matthew)  <br></br> 

    2, then it is the year of Markos(Mark) <br></br> 

    3, then it is the year of Lukas(Luke) <br></br> 

    0, then it is the year of Yohannes(John) <br></br> </b>

We divided it by 4 because we have 4 Evangelists. <br></br> 

Example: In 2014 E.C.(Ethiopian Calendar) <br></br> 

 Recall from step 1 above: Amete Alem = 7515 <br></br> 

(7515/4) = 1878 remaining 3

 The remaining 2 implies the name of the Evangelist which is Mark(Markos) <br></br> 

Evangelist = Luke <br></br> 

The quotient without the remainder is called Metene Rabiet <br></br> 

Metene Rabiet (quotient) = 1878              <br></br>  <br></br> 



<b>3. Calculating the day of the week of the Ethiopian New Year</b> <br></br>  <br></br> 

To know the day when the Ethiopian New Year starts add Amete Alem and Metene Rabiet then divide by 7. The remainder is given the name Tinte Qemer, which is the first day that the New Year begins. 

If Tinte Qemer is: <br></br> <b>

    0, then the new year starts on Monday  <br></br> 

    1, then the new year starts on Tuesday  <br></br> 

    2, then the new year starts on Wednesday  <br></br> 

    3, then the new year starts on Thursday  <br></br> 

    4, then the new year starts on Friday <br></br> 

    5, then the new year starts on Saturday <br></br> 

    6, then the new year starts on Sunday <br></br> </b>
    <p className='text-center'>

    Tinte Qemer = Amete Alem + Metene Rabiet divided by 7<br></br>

Example: In 2015 E.C <br></br>

Recall from step 1 above: Amete Alem = 7515<br></br>

Recall from step 2 above: Metene Rabiet (quotient) = 1878<br></br>

Tinte Qemer (7515+1878)/7 = 1341 remaining 6 which is Tinte Qemer. <br></br>

<b> Note: We divided it by 7, because a week has 7 days</b><br></br>

Therefore, the year of 2015 starts on Sunday (Meskerem 1).<br></br>
    </p>
    
    <br></br>
    <b> 4. Calculating Medeb (መደብ) and Wenber (ወንበር)</b><br></br>
<p className='text-center'>
Medeb is the remainder of Amete Alem  divided by 19(Nuskemer)<br></br>

 Example: In 2015:<br></br>

Recall from step 1 above: Amete Alem = 7515<br></br>

(7515 / 19) = 395 remaining 10. Therefore, Medeb of the year is 10<br></br>

 Medeb = 10<br></br>

 

Wenber is obtained by subtracting 1 from Medeb and is used for finding Metqi and Abektie which are used in calculating Fasting Dates and Holidays. <br></br>

Wenber = Medeb – 1<br></br>

 Wenber = 10– 1 = 9<br></br>

 Wenber = 9 <br></br>
<b>
Note: If remainder is 0, Medeb of the year is 0 and Wenber is 18.<br></br></b>

    </p>
    
<b> 5. Calculating Abektie(አበቅቴ) and Metqi(መጥቅ)</b><br></br>
Abektie is obtained by Multiplying Wenber by 11 and if the product is greater than 30, it is then divided by 30. The remainder in the division is called Abektie. Note that if the product is less than 30 the product itself will be the Abektie of the year.
    <br></br><p className='text-center'>
    Abektie is the reminder of (Wenber x 11) / 30<br></br>

Example: In 2015:<br></br>
<br></br>
Recall from step 4 above: Wenber = 9
<br></br>
Abektie = (9 x 11) / 30 = 3 with reminder 9.
<br></br>
Abektie = 9
<br></br>
</p><br></br>
Similarly, Metqi is obtained by Multiplying Wenber by 19 and if the product is greater than 30, it is then divided by 30. The remainder in the division is called Metqi. If the product is less than 30 the product itself will be the Metqi of the year.
<br></br>
<p className='text-center'>
Metqi is the reminder of (Wenber x 19) / 30 <br></br>

Example: In 2015:
<br></br>
Recall from step 4 above: Wenber = 9
<br></br>
Metqi is the reminder of (9 x 19) / 30 = 5 with reminder 21.
<br></br>
Metqi = 21
<br></br>
Note:   Abektie + Metqi = 30 always
<br></br>
Example: In 2015: 9 + 21 = 30
<br></br>
 Note: Metqi cannot be 1, 3, 6, 9, 11, 14,17, 20, 22, 25 and 28. Therefore it can be any of the other 19 numbers.
 <br></br> </p>
 <p> 

<b> 6. Calculating BealeMetqi and Mebaja Hamer</b> <br></br>
<br></br>
 

<b>6.1  Beale Metqi </b>is the date assigned by Metqi.
<br></br>
<p className='text-center'>

Example: In 2015: 
<br></br>
Recall from step 5 above: Metqi = 21
<br></br>
If Metqi is greater than 14, then Beale-Metqi is in Meskerem (from Meskerem 15-30).
<br></br>
If Metqi is less than 14, then BealeMetqi is in Month of Tikimt.
<br></br>
Example:-In 2015 E.C:
<br></br>
We saw above that Metqi is 21. This implies that Beale Metqi is the 21st. of Meskerem. 
<br></br> </p>
Since the 1st. of Meskerem is Sunday, then the 21st of Meskerem is on Saturday which is Beale Metqi.
<br></br>  </p>
<p><br></br>
  </p>
  <b>6.2  Tewsak</b> is the number of days from end of the Nineveh Fast to the starting date of the Lent Fast.  If the number of days is greater than 30, it's divided by 30 and the remainder will be Tewsak. 
  <br></br>
 Example: <br></br>
 If Beale Metqi is on Saturday, the number of days between the next day of Beale Metqi and Nineveh is 128. So 128 divided by 30 gives a remainder of 8. This remainder of 8 is called Tewsak which always fall on Tuesday.<br></br>


 <table className="border border-gray-400 border-solid border-collapse w-full text-center">
  <thead className="bg-gray-200">
    <tr>
      <th className="border border-gray-400 border-solid px-4 py-2">Day</th>
      <th className="border border-gray-400 border-solid px-4 py-2">No. of Days up to the Nineveh Tewsak</th>
      <th className="border border-gray-400 border-solid px-4 py-2">Tewsak of the Day</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-gray-400 border-solid px-4 py-2">Sunday</td>
      <td className="border border-gray-400 border-solid px-4 py-2">127</td>
      <td className="border border-gray-400 border-solid px-4 py-2">7</td>
    </tr>
    <tr>
      <td className="border border-gray-400 border-solid px-4 py-2">Monday</td>
      <td className="border border-gray-400 border-solid px-4 py-2">126</td>
      <td className="border border-gray-400 border-solid px-4 py-2">6</td>
    </tr>
    <tr>
      <td className="border border-gray-400 border-solid px-4 py-2">Tuesday</td>
      <td className="border border-gray-400 border-solid px-4 py-2">125</td>
      <td className="border border-gray-400 border-solid px-4 py-2">5</td>
    </tr>
    <tr>
      <td className="border border-gray-400 border-solid px-4 py-2">Wednesday</td>
      <td className="border border-gray-400 border-solid px-4 py-2">124</td>
      <td className="border border-gray-400 border-solid px-4 py-2">4</td>
    </tr>
    <tr>
      <td className="border border-gray-400 border-solid px-4 py-2">Thursday</td>
      <td className="border border-gray-400 border-solid px-4 py-2">123</td>
      <td className="border border-gray-400 border-solid px-4 py-2">3</td>
    </tr>
    <tr>
      <td className="border border-gray-400 border-solid px-4 py-2">Friday</td>
      <td className="border border-gray-400 border-solid px-4 py-2">122</td>
      <td className="border border-gray-400 border-solid px-4 py-2">2</td>
    </tr>
    <tr>
      <td className="border border-gray-400 border-solid px-4 py-2">Saturday</td>
      <td className="border border-gray-400 border-solid px-4 py-2">128</td>
      <td className="border border-gray-400 border-solid px-4 py-2">8</td>
    </tr>
  </tbody>
</table>

<br></br><b>6.3 Mebaja Hamer</b> is obtained by adding Beale Metqi and Tewsak of the day of Beale Metqi. If the result is greater than 30 as usual the remainder is taken.<br></br>
<p className='text-center'>
Mebaja Hamer = Beale Metqi + Tewsak  of the day of Beale Metqi<br></br>

 

Example: In 2015 E.C 
<br></br>
Recall Beale Metqi is Meskerem 21 Saturday
<br></br>
Mebaja Hamer = 21 + Tewsak of Saturday
<br></br>
Recall on the above list Tewsak of Saturday = 8 
<br></br>
Mebaja Hamer = 21 + Tewsak  of Saturday= 21 + 8 =29
<br></br>
Mebaja Hamer = 29
<br></br>
 

But if Beale Metqi is in Meskerem and it is added with Tewsak of the day to be greater than 30, then Nineveh is in Yekatit by taking the extra days above 30.
<br></br></p>


<p>
  <b>
7.   Calculating Holy days and Fasting days</b> <br></br>

To obtain Fasting days, first it is necessary to get the date for Nineveh. The fasting date of Nineveh is the same as the Mebaja Hamer number. The Nineveh fasting month is obtained by the following rules:
<br></br><p className='text-center'>
· If Metqi is above 14, Beale Metqi is in Meskerem, then Nineveh is in Tirr. 
<br></br>
· If Metqi is below 14, Beale Metqi is in Tikimt, then Nineveh is in Yekatit.
<br></br>
Nineveh fasting = the Mebaja Hamer number
<br></br>
Nineveh fasting =Tirr 29 <br></br>
</p>
 
<br></br>
Tewsak is the number of days from the start of Nineveh to the starting day of the fast or holy day. This means if the number of days are greater than 30, it's divided by 30 and the remainder will be Tewsak.
<br></br>
</p>
 

Example:<br></br>

For Debre Zeit, the number of days after Nineveh is 41, so 41 divided by 30 = 1 with 11 remanding. Therefore, the Tewsak of Debre Zeit is 11. 
<br></br>

<table className="border border-gray-400 border-solid border-collapse w-full text-center mt-8">
  <thead className="bg-gray-200">
    <tr>
      <th className="border border-gray-400 border-solid px-4 py-2">Fasting Dates and Holy Days</th>
      <th className="border border-gray-400 border-solid px-4 py-2">Tewsak</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-gray-400 border-solid px-4 py-2">Abiy Tsome</td>
      <td className="border border-gray-400 border-solid px-4 py-2">14</td>
    </tr>
    <tr>
      <td className="border border-gray-400 border-solid px-4 py-2">Debre Zeit</td>
      <td className="border border-gray-400 border-solid px-4 py-2">11</td>
    </tr>
    <tr>
      <td className="border border-gray-400 border-solid px-4 py-2">Hosanna</td>
      <td className="border border-gray-400 border-solid px-4 py-2">2</td>
    </tr>
    <tr>
      <td className="border border-gray-400 border-solid px-4 py-2">Good Friday</td>
      <td className="border border-gray-400 border-solid px-4 py-2">7</td>
    </tr>
    <tr>
      <td className="border border-gray-400 border-solid px-4 py-2">Tinsaye</td>
      <td className="border border-gray-400 border-solid px-4 py-2">9</td>
    </tr>
    <tr>
      <td className="border border-gray-400 border-solid px-4 py-2">Rkbe Kahnat</td>
      <td className="border border-gray-400 border-solid px-4 py-2">3</td>
    </tr>
    <tr>
      <td className="border border-gray-400 border-solid px-4 py-2">Ascension</td>
      <td className="border border-gray-400 border-solid px-4 py-2">18</td>
    </tr>
    <tr>
      <td className="border border-gray-400 border-solid px-4 py-2">Paraclete</td>
      <td className="border border-gray-400 border-solid px-4 py-2">28</td>
    </tr>
    <tr>
      <td className="border border-gray-400 border-solid px-4 py-2">Fast of the Holy Apostles</td>
      <td className="border border-gray-400 border-solid px-4 py-2">29</td>
    </tr>
    <tr>
      <td className="border border-gray-400 border-solid px-4 py-2">Wednesday and Friday Weekly Fast</td>
      <td className="border border-gray-400 border-solid px-4 py-2">1</td>
    </tr>
  </tbody>
</table>


<b>Note</b>: Nineveh doesn't have Tewsak, because it is the starting point of the calculations of the Fasting days and Holy days. However, to obtain Nineveh directly, take the Mebaja Hamer number as explained above.
<br></br>
<ol>
  <li>
    <strong>1.</strong> To obtain Abiy Tsome, Count 14 days (Tewsak of Abiy Tsome = 14) after Nineveh.
    <ul>
      <li><strong>Abiy Tsome = Tirr 29 + 14 days = Yekatit 13</strong></li>
    </ul>
  </li>
  <li>
    <strong>2.</strong> To obtain Debre Zeit, Count 41 days after Nineveh.
    <ul>
      <li>Tewsak of Debre Zeit(11) + 30 = 11 + 30 = 41</li>
      <li><strong>Debre Zeit = Tirr 29 + 41 days = Megabit 10</strong></li>
    </ul>
  </li>
  <li>
    <strong>3.</strong> To obtain Hosanna, Count 62 days after Nineveh.
    <ul>
      <li>Tewsak of Hosanna(2) + (2 x 30) = 2 + 60 = 62</li>
      <li><strong>Hosanna = Tirr 29 + 62 days = Miazia 1</strong></li>
    </ul>
  </li>
  <li>
    <strong>4.</strong> To obtain Siklet (Good Friday), Count 67 days after Nineveh.
    <ul>
      <li>Tewsak of Good Friday(7) + (2 x 30) = 7 + 60 = 67</li>
      <li><strong>Siklet = Tirr 29 + 67 days = Miazia 6</strong></li>
    </ul>
  </li>
  <li>
    <strong>5.</strong> To obtain Tinsaye (Resurrection), Count 69 days after Nineveh.
    <ul>
      <li>Tewsak of Tinsaye(9) + (2 x 30) = 9 + 60 = 69</li>
      <li><strong>Tinsaye = Tirr 29 + 69 days = Miazia 8</strong></li>
    </ul>
  </li>
  <li>
    <strong>6.</strong> To obtain Rikbe Kahnkat, Count 93 days after Nineveh.
    <ul>
      <li>Tewsak of Rikbe Kahnkat(3) + (3 x 30) = 3 + 90 = 93</li>
      <li><strong>Rikbe Kahnkat = Tirr 29 + 93 days = Ginbot 2</strong></li>
    </ul>
  </li>
  <li>
    <strong>7.</strong> To obtain Ascension, Count 108 days after Nineveh.
    <ul>
      <li>Tewsak of Ascension(18) + (3 x 30) = 18 + 90 = 108</li>
      <li><strong>Ascension = Tirr 29 + 108 days = Ginbot 17</strong></li>
    </ul>
  </li>
</ol>
<ol start="8">
  <li>
    <strong>8.</strong> To obtain Paraclete, Count 118 days after Nineveh.
    <ul>
      <li>Tewsak of Paraclete(28) + (3 x 30) = 28 + 90 = 118</li>
      <li><strong>Paraclete = Tirr 29 + 118 days = Ginbot 27</strong></li>
    </ul>
  </li>
  <li>
    <strong>9.</strong> To obtain Fasting of Holy Apostles, Count 119 days after Nineveh.
    <ul>
      <li>Tewsak of Fasting of Holy Apostles(29) + (3 x 30) = 29 + 90 = 119</li>
      <li><strong>Holy Apostles = Tirr 29 + 119 days = Ginbot 28</strong></li>
    </ul>
  </li>
  <li>
    <strong>10.</strong> To obtain Weekly fast (Wednesday and Friday), Count 121 days after Nineveh.
    <ul>
      <li>Tewsak of Weekly fast - Wednesday and Friday(1) + (4 x 30) = 1 + 120 = 121</li>
      <li><strong>Weekly Fast = Tirr 29 + 119 days = Ginbot 30</strong></li>
    </ul>
  </li>
</ol>


<p><strong>Note:</strong> The Weekly Wednesday and Friday fasts also called Tsome dihenet meaning Fast of Salvation.</p>

<h3 class="text-center font-bold mt-5">Happy Ethiopian New Year!!</h3>

<div class="text-center font-semibold mt-5">
  Source: 
  <a 
    href="https://www.eotc-ma.com/about-our-church" 
    target="_blank" 
    rel="noopener noreferrer" 
    class="text-blue-600 hover:text-blue-800 underline"
  >
    Ethiopian Orthodox Church Medhane Alem Canada
  </a>
</div>


                </p>
<br></br><br></br>
<div class="text-center font-medium mt-3">
  በአማርኛ ለመማር እባክዎን እነዚህን ፋይሎች ያውርዱ፡፡
</div>

<div class="text-center font-medium mt-3">
  በአማርኛ ለመማር እባክዎን እነዚህን ፋይሎች ያውርዱ፡፡
</div>

<div class="text-center mt-4">
  <a 
    href="../assets/baherehasab.pdf" 
    download="baherehasab.pdf" 
    class="text-blue-600 hover:text-blue-800 underline"
  >
    Baherehasab (1MB)
  </a>
</div>

<div class="text-center mt-2">
  <a 
    href="../assets/ባሕረ ሐሳብ - ጌታቸው ኃይሌ.pdf" 
    download="ባሕረ_ሐሳብ_ጌታቸው_ኃይሌ.pdf" 
    class="text-blue-600 hover:text-blue-800 underline"
  >
    ባሕረ ሐሳብ - ጌታቸው ኃይሌ (5.4MB)
  </a>
</div>
      
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default English