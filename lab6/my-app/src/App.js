import Header from "./components/Header"
import Content from "./components/Content"
import Image from "./components/Image"

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

return (
        <div className="page">
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
                src="/images/nazare.jpg"
                alt="Nazare, Portugal"
                initialWidth={500}
                link="https://www.cm-nazare.pt/"
            />

        </div>
    )
}

export default App