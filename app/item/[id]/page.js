import React from 'react'
import items from '@/constans/items'
import ItemImages from '@/components/item/itemimgs/ItemImages'
import ItemForm from '@/components/item/itemform/ItemForm'
import Avis from '@/components/item/avis/Avis'

const page = ({ params }) => {
    const item = items.find(e => e.id == params?.id)

    return (
        <div className="w-full px-5 mb-5 overflow-hidden">
            <div className="flex flex-col min-h-screen md:items-end relative ">
                <div className="w-full md:w-6/12">
                    <h1 className="my-3 font-bold capitalize text-lg md:text-2xl">
                        {item.name}
                    </h1>
                    <p className="text-[#0007] font-[500] text-sm">
                        {item.des}
                    </p>
                    <h2 className="text-[#ef4444] font-bold my-2 text-xl">
                        {item.price} DA
                    </h2>
                </div>

                {/* Fixed position for the image container */}
                <div className="w-full md:w-6/12 md:h-fit md:absolute top-0 left-0 overflow-hidden">
                    <ItemImages imgs={item.imgs} />
                </div>

                {/* Form Section */}
                <ItemForm price={item.price} />

                <div className="w-full md:w-6/12 mt-5">
                    {item.add.map(e => (
                        <p key={e}>{e}</p>
                    ))}
                </div>
            </div>
            <Avis />
        </div>
    )
}

export default page;
