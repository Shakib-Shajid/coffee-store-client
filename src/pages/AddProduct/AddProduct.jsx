import Swal from "sweetalert2";


const AddProduct = () => {

    const handleFood = event => {
        event.preventDefault();

        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const desc = form.desc.value;
        const rating = form.rating.value;

        const newFood = { photo, name, brand, type, price, desc, rating }
        console.log(newFood);


        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })


    }

    return (
        <div className="bg-[#F4F3F0] lg:p-24">
            <h2 className="text-3xl font-extrabold">Add Food</h2>
            <form onSubmit={handleFood}>

                {/* 1st row */}
                <div className="md:flex mb-7 gap-4">
                    <div className="form-control  md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered w-full " />
                        </label>
                    </div>

                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Food Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Food name" className="input input-bordered w-full " />
                        </label>
                    </div>

                </div>
                {/* 2nd row */}
                <div className="md:flex mb-7 gap-4">
                    <div className="form-control   md:w-1/2  ">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="type" placeholder="Type" className="input input-bordered w-full " />
                        </label>
                    </div>

                </div>


                {/* 3rd row */}
                <div className="md:flex mb-7 gap-4">
                    <div className="form-control  md:w-1/2  ">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="desc" placeholder="Short Description" className="input input-bordered w-full " />
                        </label>
                    </div>
                </div>

                {/* 4th row */}
                <div className="mb-7 ">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full " />
                        </label>
                    </div>

                </div>


                <input type="submit" value="Add Food" className="btn btn-block bg-black text-white" />

            </form>
        </div>
    );
};

export default AddProduct;