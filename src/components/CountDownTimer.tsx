/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import Countdown from 'react-countdown';

 const CountDownTimer = ({onCompleteFunction}: {onCompleteFunction: Function}) => {
  // Define la fecha de fin de la cuenta regresiva
//   const endDate = new Date().getTime() + 10000; // 10 segundos desde el momento actual
  return (
    <div className="flex justify-center items-center p-4 z-10">
     <Countdown date={Date.now() + 40000} className='text-white z-10' onComplete={()=> {
      onCompleteFunction()
     }}/>
    </div>
  );
};


export default CountDownTimer;