let cities = [
  "الشرقية",
  "البحيرة",
  "الفيوم",
  "الإسكندرية",
  "الغربية",
  "الجيزة",
  "المنُوفيّة",
  "المنيا",
  "القاهرة",
  "القليوبية",
  "الأقصر",
  "الوادي الجديد",
  "الدقهلية",
  "البحر الأحمر",
  "أسوان",
  "الدقهلية",
];

for (let city of cities) {
  const content = `
                <option value="" >/${city}</option>
                `;
  document.getElementById("cities").innerHTML += content;
}

document.getElementById("cities").addEventListener("change",function Prayer() {
    this.value === city
    fetch(
      `http://api.aladhan.com/v1/timingsByCity/:date_or_timestamp?country=EG&city=${city}`
    )
      .then((response) => {
        response = response.json();
        return response;
      })
      .then((data) => {
        console.log(data);
        const timings = data.data.timings;
        document.getElementById("fajr-time").innerHTML = timings.Fajr;
        document.getElementById("Sunrise-time").innerHTML = timings.Sunrise;
        document.getElementById("Dhuhr-time").innerHTML = timings.Dhuhr;
        document.getElementById("Asr-time").innerHTML = timings.Asr;
        document.getElementById("Maghrib-time").innerHTML = timings.Maghrib;
        document.getElementById("Isha-time").innerHTML = timings.Isha;
    
        const date =
          data.data.date.hijri.weekday.ar + "  " + "  " + data.data.date.readable;
        document.querySelector(".date").innerHTML = date;
      })
      .catch((err) => {
        console.log("ERROR", err.message);
      });
    
})
Prayer()
