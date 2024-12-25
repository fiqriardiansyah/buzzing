import React from 'react';
import x from './assets/x.svg';
import arrowtrdark from './assets/arrow-top-right-dark.svg';
import CardCalculate from './card-calculate';

const campaigns = [
    { id: 1, title: "Boost Campaign", desc: "Lorem ipsum dolor sit amet consectetur. Turpis id", price: 500000, kuota: [1, 2, 3, 4, 5] },
    { id: 2, title: "App Store & Play Store Optimization ", desc: "Lorem ipsum dolor sit amet consectetur. Turpis id", price: 500000, kuota: [1, 2, 3, 4, 5] },
    { id: 3, title: "Trending Hashtag Campaigns", desc: "Lorem ipsum dolor sit amet consectetur. Turpis id", price: 500000, kuota: [1, 2, 3, 4, 5] },
    { id: 4, title: "Boost Campaign", desc: "Lorem ipsum dolor sit amet consectetur. Turpis id", price: 500000, kuota: [1, 2, 3, 4, 5] },
    { id: 5, title: "App Store & Play Store Optimization ", desc: "Lorem ipsum dolor sit amet consectetur. Turpis id", price: 500000, kuota: [1, 2, 3, 4, 5] },
    { id: 6, title: "Trending Hashtag Campaigns", desc: "Lorem ipsum dolor sit amet consectetur. Turpis id", price: 500000, kuota: [1, 2, 3, 4, 5] },
]

const boosters = [
    { id: 11, title: "Boost Campaign", desc: "Lorem ipsum dolor sit amet consectetur. Turpis id", price: 500000, kuota: [1, 2, 3, 4, 5] },
    { id: 22, title: "App Store & Play Store Optimization ", desc: "Lorem ipsum dolor sit amet consectetur. Turpis id", price: 500000, kuota: [1, 2, 3, 4, 5] },
    { id: 32, title: "Trending Hashtag Campaigns", desc: "Lorem ipsum dolor sit amet consectetur. Turpis id", price: 500000, kuota: [1, 2, 3, 4, 5] },
    { id: 42, title: "Boost Campaign", desc: "Lorem ipsum dolor sit amet consectetur. Turpis id", price: 500000, kuota: [1, 2, 3, 4, 5] },
    { id: 52, title: "App Store & Play Store Optimization ", desc: "Lorem ipsum dolor sit amet consectetur. Turpis id", price: 500000, kuota: [1, 2, 3, 4, 5] },
    { id: 62, title: "Trending Hashtag Campaigns", desc: "Lorem ipsum dolor sit amet consectetur. Turpis id", price: 500000, kuota: [1, 2, 3, 4, 5] },
]

const convert = (number) => {
    const idrString = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0 
      }).format(number);
    return idrString;
}
const ModalCalculate = ({
    show,
    setShow,
}) => {

    const [kuotas, setKuotas] = React.useState([]);

    React.useEffect(() => {
        document.body.style.overflow = show ? 'hidden' : 'auto';
    }, [show]);

    const total = kuotas.reduce((acc, curr) => {
        const campaign = [...campaigns, ...boosters].find((i) => i.id === curr.id);
        return acc + (campaign.price * curr.kuota);
    }, 0);

    if(!show) return null;
    return (
        <div className="w-screen bg-black bg-opacity-60 h-screen fixed top-0 left-0 z-50">
            <div className="w-full h-full lg:w-[95%] lg:h-[95%] p-4 flex flex-col bg-secondary lg:rounded-xl absolute top-1/2 transform -translate-x-1/2 left-1/2 -translate-y-1/2 ">
                <div className="w-full flex items-center justify-between">
                    <p className="font-bold text-lg">Budget Estimation</p>
                    <button onClick={() => setShow((prev) => !prev)} className="font-bold">
                        <img src={x} alt="" />
                    </button>
                </div>
                <div className="flex-1 w-full overflow-y-scroll flex flex-col gap-3">
                    <p className='font-bold text-primary'>Campaign</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 p-2 lg:p-5">
                        {campaigns.map((camp) => (
                            <CardCalculate kuotas={kuotas} setKuotas={setKuotas} key={camp.id} {...camp} />
                        ))}
                    </div>
                    <p className='font-bold text-primary'>Boosters</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 p-2 lg:p-5">
                        {boosters.map((camp) => (
                            <CardCalculate kuotas={kuotas} setKuotas={setKuotas} key={camp.id} {...camp} />
                        ))}
                    </div>
                </div>
                <div className="w-full flex flex-col gap-5 items-center">
                    <div className="w-full flex items-center justify-between">
                        <p className="font-bold text-2xl">Total Estimation</p>
                        <p className="font-bold text-2xl">{convert(total)}</p>
                    </div>
                    <button className="card-primary-style flex items-center py-3 px-6 rounded-xl gap-2 w-fit">
                        CONTACT US
                        <img src={arrowtrdark} className='' alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalCalculate