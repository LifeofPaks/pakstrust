import Image from 'next/image';
import React from 'react'


const MyLoader = () => {
    return (
        <div className='myLoader'>
          <Image src={"/logo-R.png"} width={70} height={90} alt="loading-img" />
          <p>Rivero Trust Bank Plc</p>
        </div>
      );
}

export default MyLoader