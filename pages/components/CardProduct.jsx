import React, { useState } from 'react'

const link = 'https://wongfood.vteximg.com.br/arquivos/ids/537062-1000-1000/Pan-Chancay-Metro-Bolsa-12-Unid-1-81397.jpg'

const CardProduct = ({linkImg, nameProduct, nameBrand, priceProduct}) => {

    const [msg, setMsg] = useState(1);
    const handleChange = (ev) => {
        const pattern = new RegExp('[a-z]+|[-*+/.,:;+~`]', 'i')
        const result = ev.target.value.replace(pattern, '');
        setMsg(result)
        
    }
    const addOne = () => {
        setMsg( x => Number(x) + 1)

    };
    const restOne = () => {
        setMsg( x => Number(x)>=2 ? Number(x) - 1 : 1)

    };
  return (
    <section className='Card w-[12.8rem] h-auto 
    border border-gray-200 px-2 py-2 flex flex-col'>
        <div className='h-auto'>
            <img src={linkImg} alt=""/>
        </div>
        <div className=''>
            <div className='flex justify-center items-start h-10 flex-wrap'>
                <p className='nunito text-xs font-bold'>{nameProduct}</p>
            </div>
            <div className='flex justify-center items-center h-10'>
                <p className='nunito text-sm'>{nameBrand}</p>
            </div>
            <div className='flex justify-between items-center h-10'>
                <span className='nunito text__red'>Online</span>
                <span className='nunito text__red'>S/{priceProduct}</span>
            </div>
            <div className='flex flex-row'>
                <div className='basis-[30%] flex flex-row '>
                    
                    <input type="text"  className='w-10 h-10 rounded-3xl bg-gray-200 
                    outline-none text-sm font-semibold text-center'
                    name="amount" value={msg} onChange={handleChange}
                    />
                    <div className='flex flex-col ml-1'>
                        <button className='flex justify-center items-center h-[18px] w-[18px] rounded-3xl bg-gray-200 text-white buttom__red font-bold text-normal mb-1'
                        onClick={addOne}>+</button>
                        <button className='flex justify-center items-center h-[18px] w-[18px] rounded-3xl bg-gray-200 text-white buttom__red font-bold text-normal'
                        onClick={restOne}>-</button>
                    </div>                    
                </div>
                <div className='basis-[70%] flex justify-center items-center ml-1'>
                    <button className='flex-1  rounded-3xl text-sm uppercase font-semibold buttom__yellow  h-full'
                    >Agregar</button>
                </div>

            </div>

        </div>
    </section>
  )
}

export default CardProduct