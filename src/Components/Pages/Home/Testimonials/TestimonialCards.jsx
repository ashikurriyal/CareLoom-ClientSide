
const TestimonialCards = ({title, image, designation, comment, name}) => {
    return (
        <div className='max-w-96 bg-white p-10 border-2 rounded-2xl'>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h1 className='text-2xl font-bold mt-8'>{title}</h1>
            </div>
            <div>
                <p className='text-lg mt-3'>{comment}</p>
            </div>
            <div className='mt-8'>
                <h3 className='text-lg font-bold text-primary-cyan'>{name}</h3>
            </div>
            <div>
                <h4 className='text-lg text-secondary-gray mt-2'>{designation}</h4>
            </div>
        </div>
    );
};

export default TestimonialCards;