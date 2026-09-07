import '../css/components/Main.css';

const Main = () => {

    const classCards = [
        {
            id: 1,
            image: "src/assets/images/icon-sparkle.svg",
            number: "2.4M",
            title: "Students reached",
            description:
            "Across 31 countries since 2011.",
        },
                {
            id: 2,
            image: "src/assets/images/icon-plus.svg",
            number: "1,284",
            title: "Schools partnered",
            description:
            "In 14 countries, from kenya to Guatemala.",
        },
                {
            id: 3,
            image: "src/assets/images/icon-arrow-right.svg",
            number: "38K",
            title: "Teachers trained",
            description:
            "Equipped with modern tools and methodology.",
        },
                {
            id: 4,
            image: "src/assets/images/icon-trending-up.svg",
            number: "3.1x",
            title: "Graduation lift",
            description:
            "Partner schools outperfom nacional averages 3x.",
        },
    ];

    return (  
        <main className="main">
            <div className="container__class">
                <div className="description__class">
                    <h1>
                        A classroom for every child.
                    </h1>
                    <p>
                        We fund the schools, train the teachers, and measure what works -- so every child we reach today becomes a graduate tomorrow.
                    </p>
                </div>
            </div>
            <div className="container__cards">
                {classCards.map((card) => (
                    <div className="card" key={card.id}>
                        <div className="info">
                            <img src={card.image} alt="Icon"/>
                            <h2>{card.number}</h2>
                        </div>
                        <div className="description__card">
                            <h3>{card.title}</h3>
                            <p>
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
 
export default Main;