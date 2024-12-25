
const convert = (number) => {
    const idrString = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0 
      }).format(number);
    return idrString;
}

const CardCalculate = ({
    id,
    title,
    desc,
    price,
    kuota,
    kuotas,
    setKuotas
}) => {

    const onChangeKuota = (id) => {
        return (e) => {
            setKuotas((prev) => {
                if(prev.find((i) => i.id === id)) {
                    return prev.map((i) => { 
                        if(i.id === id) {
                            return { id, kuota: e.target.value }
                        }
                        return i;
                    });
                }
                return [...prev, { id, kuota: e.target.value }];
            });
        }
    }

    const value = kuotas.find((i) => i.id === id)?.kuota || 0;

    return (
        <div className="card-primary-style flex flex-col items-start rounded-xl gap-2 w-fit">
            <div className="w-full p-5 flex flex-col gap-3">
                <p className="font-bold text-sm lg:text-lg text-primary">{title}</p>
                <p className="font-light text-primary text-[10px] lg:text-sm">{desc}</p>
                <p className="font-bold text-primary text-sm lg:text-2xl">{convert(price)}</p>
            </div>
            <div className="w-full h-[1px] bg-primary"></div>
            <div className="p-5 w-full flex flex-col gap-3">
                <p className="text-primary text-sm lg:text-base font-light">Kuota</p>
                <select onChange={onChangeKuota(id)} name="kuota" value={value} id="" className="bg-transparent lg:text-base text-[10px] cursor-pointer py-2 px-3 rounded-lg border border-primary">
                    <option value="0">Pilih Kuota</option>
                    {kuota.map((k) => <option key={k} value={k}>{k}</option> )}
                </select>
            </div>
        </div>
    )
}

export default CardCalculate;