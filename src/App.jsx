import Nav from "../Components/Nav";
import Card from "../Components/Card";

const isiCard = [
  {
    Image: "../Components/images/gambarmobil1.jpeg",
    caption: "Mobil 1 dijual dengan harga Rp.120.000.000",
  },
  {
    Image: "../Components/images/gambarmobil2.jpeg",
    caption: "Mobil 2 dijual dengan harga Rp.280.000.000",
  },
  {
    Image: "../Components/images/gambarmobil3.jpeg",
    caption: "Mobil 3 dijual dengan harga Rp.300.000.000",
  },
  {
    Image: "../Components/images/gambarmobil4.jpeg",
    caption: "Mobil 4 dijual dengan harga Rp.320.000.000",
  },
  {
    Image: "../Components/images/gambarmobil5.jpeg",
    caption: "Mobil 5 dijual dengan harga Rp.500.000.000",
  },
  {
    Image: " ../Components/images/gambarmobil6.jpeg",
    caption: "Mobil 6 dijual dengan harga Rp.120.000.000",
  },
  {
    Image: "../Components/images/gambarmobil7.jpeg",
    caption: "Mobil 7 dijual dengan harga Rp.320.000.000",
  },
  {
    Image: "../Components/images/gambarmobil8.jpeg",
    caption: "Mobil 8 dijual dengan harga Rp.220.000.000",
  },
];

function App() {
  return (
    <container>
      <Nav />
      <div className="row">
        {isiCard.map((agt, indeks) => (
          <div className="col-lg-3 col-md-4 col-sm-6">
            <Card image={agt.Image} caption={agt.caption} />
          </div>
        ))}
      </div>
    </container>
  );
}

export default App;
