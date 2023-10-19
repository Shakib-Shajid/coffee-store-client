import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const { id } = useParams();
    const Details = useLoaderData();
    console.log(Details.img)

    const idInt = parseInt(id);
    const job = Details.find(job => job.id === idInt)
    console.log(job)
    return (
        <div>

            {/* carousal */}
            <div className="carousel w-2/3 text-center h-96">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="/food.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="/food1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="/food2.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
            {/* ............................................... */}
            <div className="grid md:grid-cols-3 ">
                <div className="col-span-4 ">
                    {/* <p>{id}</p> */}

                    <div className="space-y-3 my-8">
                        <div >
                            <img src={job.img} className="h-96 mx-auto" alt="" />
                        </div>
                        <div className="block md:flex justify-between">
                            <h1 className=" text-xl md:text-3xl font-medium">{job.title}</h1>
                            <p className=" text-lg md:text-xl">price: {job.price}</p>
                        </div>
                        <p className="text-sm md:text-lg">{job.description}</p>
                    </div>


                </div>

            </div>


        </div>
    );
};

export default Details;