import Header from "./components/Header"
import Content from "./components/Content"
import Image from "./components/Image"
import GoodsCard from "./components/GoodsCard"

import "./style.css"

function App() {
    var hobbies = ["Reading", "Travelling", "Playing videogames"]
    var movies = ["Before I Fall", "Looking for Alaska", "The Hunger Games"]
    var cityText =
        "The town of Nazare in Portugal stands out most in my memory. " +
        "It is a small fishing town on the Atlantic coast, world-renowned " +
        "for its massive waves that attract surfers from every corner of " +
        "the globe. Here, there is a striking blend of traditional " +
        "Portuguese charm-narrow streets, colorful houses, and fish " +
        "markets-and the rugged, powerful sea. The Sitio viewpoint, " +
        "situated atop a high cliff, offers an incredible panorama of " +
        "the ocean and the town's entire beach."
    var goods = [
        { id: 1, name: "Whey protein", price: 899, photo: process.env.PUBLIC_URL + "/images/goods/protein.jpeg" },
        { id: 2, name: "Creatine Monohydrate", price: 549, photo: process.env.PUBLIC_URL + "/images/goods/creatine.jpeg" },
        { id: 3, name: "BCAA Amino Acids", price: 649, photo: process.env.PUBLIC_URL + "/images/goods/bcaa.jpeg" },
        { id: 4, name: "Pre-Workout Complex", price: 999, photo: process.env.PUBLIC_URL + "/images/goods/preworkout.jpeg" },
        { id: 5, name: "Vitamin Complex", price: 449, photo: process.env.PUBLIC_URL + "/images/goods/vitamins.jpeg" },
        { id: 6, name: "Sports Shaker", price: 199, photo: process.env.PUBLIC_URL + "/images/goods/shaker.jpeg" }
    ]

return (
        <div className="page">
            <section id="task1">
                <Header
                    name="Khorunzha Mariia Serhiivna"
                    birthInfo="03.08.2006 Kyiv, Ukraine"
                    university={"National Technical University of Ukraine 'Igor Sikorsky Kyiv Polytechnic Institute'"}
                />

                <Content
                    hobbies={hobbies}
                    movies={movies}
                    cityText={cityText}
                />
                <Image
                    src={process.env.PUBLIC_URL + "/images/nazare.jpg"}
                    alt="Nazare, Portugal"
                    initialWidth={500}
                    link="https://www.cm-nazare.pt/"
                />
            </section>
            <section id="task2">
            <h2>Product Gallery</h2>
            <div className="goods-gallery">
                {goods.map(function (item) {
                    return (
                        <GoodsCard
                            key={item.id}
                            photo={item.photo}
                            name={item.name}
                            price={item.price}
                        />
                    )
                })}
            </div>
        </section>
        </div>
    )
}

export default App