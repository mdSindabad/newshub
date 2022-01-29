import Image from 'next/image'
import { AiOutlineUser } from 'react-icons/ai'
import { FcCalendar } from 'react-icons/fc'

const TopNews = ({ news }) => {

    return <div className='md:col-span-3 bg-gray-100 cursor-pointer md:flex flex-wrap px-2 justify-around block'>
        {
            news?.map((article, index) => (
                <div key={article.title} className={`mt-4 p-1 ${index === 0 ? 'basis-full' : 'basis-5/12 hover:scale-105 transition'}`}>
                    <Image
                        src={article.urlToImage}
                        alt={article.title}
                        width={index === 0 ? 800 : 400}
                        height={index === 0 ? 400 : 200}
                        className='object-cover'
                    />
                    <h1 className={`font-bold text-xl text-gray-700 hover:text-rose-500 transition ${index === 0 && 'text-3xl md:text-4xl'}`}>{article.title}</h1>
                    <div className='my-1'>
                        <div className='flex items-center text-gray-500 mr-2'>
                            <AiOutlineUser />
                            <span className='ml-1 hover:text-rose-500'>{article.author}</span>
                        </div>
                        <div className='flex items-center text-gray-500 mr-2'>
                            <FcCalendar />
                            <span className='ml-1 hover:text-rose-500'>{article.publishedAt.split('T')[0]}</span>
                        </div>
                        <div className='flex items-center text-gray-500'></div>
                    </div>
                    <hr />
                </div>
            ))
        }
    </div>;
};

export default TopNews;

