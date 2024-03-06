import React, { useState, useEffect } from 'react';

function TrendingCarousel({ data,title }) {
  const [greenStates, setGreenStates] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const newGreenStates = data.map(
        (item) => parseFloat(item?.item?.data?.price_change_percentage_24h?.usd || 0) >= 0
      );
      setGreenStates(newGreenStates);
    }
  }, [data]);

  return (
    <>
      <h1 className='text-[24px] font-semibold'>{title}</h1>
      <div className='overflow-auto w-[100%] flex gap-4 carousel'>
        {data &&
          data.map((item, index) => (
            <div key={index} className='w-[252px] border-[1px] border-[#E3E3E3] rounded-[10px] p-[1rem] flex-shrink-0'>
              <div className='flex items-center gap-2'>
                <img src={item?.item?.small} alt='img' width={24} height={24} />
                <h3 className='text-[16px]'>{item?.item?.symbol}</h3>
                <span
                  className='text-[12px] p-[0.25rem]'
                  style={{
                    backgroundColor: greenStates[index] ? '#EBF9F4' : '',
                    color: greenStates[index] ? '#14B079' : '#F7324C',
                  }}
                >
                  {parseFloat(item?.item?.data?.price_change_percentage_24h?.usd || 0).toFixed(1)}%
                </span>
              </div>
              <h2 className='text-[20px] font-medium'>{(item?.item?.data?.price).split('<')[0]}</h2>
              <img src={item?.item?.data?.sparkline} alt='sparkline' width={200} height={60} />
            </div>
          ))}
      </div>
    </>
  );
}

export default TrendingCarousel;
