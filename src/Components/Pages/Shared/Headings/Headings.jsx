/* eslint-disable react/prop-types */


const Headings = ({ mainText, subText }) => {
    return (
        <div className='space-y-4'>
            <div>
                {
                    mainText && <h1 className='text-center text-4xl font-bold text-primary-cyan mt-8 md:mt-32'>{mainText}</h1>
                }
            </div>
            <div>
                {
                    subText && <h3 className='text-center text-lg'>{subText}</h3>
                }
            </div>
        </div>
    );
};

export default Headings;