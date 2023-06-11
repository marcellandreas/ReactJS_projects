import { useState } from "react";
import "./App.css";

function App() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const selectSeat = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      // Jika kursi sudah dipilih sebelumnya, batalkan pemilihan
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      // Jika kursi belum dipilih, tambahkan ke daftar kursi yang dipilih
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const checkout = () => {
    // Implementasi sederhana untuk checkout, misalnya menampilkan pesan
    alert(`Anda akan membeli tiket untuk kursi ${selectedSeats.join(", ")}`);
  };

  const seatLayout = [
    ["A1", "A2", "A3", "A4", "A5"],
    ["B1", "B2", "B3", "B4", "B5"],
    ["C1", "C2", "C3", "C4", "C5"],
    ["D1", "D2", "D3", "D4", "D5"],
    ["E1", "E2", "E3", "E4", "E5"],
    ["F1", "F2", "F3", "F4", "F5"],
  ];

  return (
    <div>
      <h2>Pilih Kursi</h2>
      <div className="seat-map">
        {/* Tampilkan layout kursi bioskop */}
        {seatLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="seat-row">
            {row.map((seat, seatIndex) => (
              <div
                key={seatIndex}
                className={`seat ${
                  selectedSeats.includes(seat) ? "selected" : ""
                }`}
                onClick={() => selectSeat(seat)}
              >
                {seat}
              </div>
            ))}
          </div>
        ))}
      </div>
      <h3>Kursi yang Dipilih:</h3>
      <ul>
        {/* Tampilkan kursi yang telah dipilih */}
        {selectedSeats.map((seat, index) => (
          <li className="selected-seats" key={index}>
            Kursi {seat}
          </li>
        ))}
      </ul>
      <div className="button-seats">
        <button onClick={() => setSelectedSeats([])}>Reset</button>
        <button onClick={checkout} disabled={selectedSeats.length === 0}>
          Beli Tiket
        </button>
      </div>
    </div>
  );
}

export default App;
