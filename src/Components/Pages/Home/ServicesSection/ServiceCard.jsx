

const ServiceCard = ({ image, title, description }) => {
    return (
        <div className='max-w-96 bg-white p-6 rounded-2xl'>
            <div className='flex justify-center'>
                <img src={image} alt={title} className='w-[345px] h-[220px] rounded-xl' />
            </div>
            <div>
                <h1 className='text-2xl font-bold text-primary-cyan mt-6'>{title}</h1>
            </div>
            <div>
                <p className='mt-3 text-secondary-gray'>
                    {description}
                </p>
            </div>
            <button className='mt-9 text-primary-cyan flex items-center gap-2 font-bold'>
                Learn more
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Line Rounded/Arrow Right">
                        <g id="Arrow Right">
                            <path id="Line" d="M10.5322 2.94922L17.5829 9.99994L10.5322 17.0507" stroke="#007E85" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            <path id="Line_2" d="M17.5829 10L2.58301 10" stroke="#007E85" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </g>
                </svg>
            </button>
        </div>
    );
};

export default ServiceCard;