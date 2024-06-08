import scss from "./Carousel.module.scss"

const Carousel = () => {
    return (
        <section className={scss.Welcome}>
            <div className="container">
                <div className={scss.content}>
                    <h6>Welcome</h6>
                </div>
            </div>
        </section>
    );
};

export default Carousel;