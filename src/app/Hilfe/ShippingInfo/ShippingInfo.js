import React from 'react';
import {
    FiHome,
    FiMail,
    FiPackage,
    FiPhone,
    FiShoppingCart,
    FiSmartphone,
    FiStar,
    FiTruck,
} from 'react-icons/fi';
import TimeLineSection from './TimeLineSection';
import TimeLineNode from './TimeLineNode';

const ShippingInfo = () => {
    return (
        <div>
            <div className='w-full py-16 bg-coastal-blue-10'>
                <h2 className='text-3xl font-bold text-center text-sandy-beige-10'>
                    Danke, dass Sie bei Phone 2 Door einkaufen.
                </h2>
                <ul className='grid grid-cols-4 py-32 mx-auto w-fit text-sandy-beige-10'>
                    <li className='px-6 font-bold'>
                        <FiShoppingCart className='w-8 h-8 mx-auto' />
                        <p className='py-2 text-center'>Ihre Bestellung</p>
                    </li>
                    <li className='px-6 font-bold'>
                        <FiMail className='w-8 h-8 mx-auto' />
                        <p className='py-2 text-center'>Wir danken</p>
                    </li>
                    <li className='px-6 font-bold'>
                        <FiTruck className='w-8 h-8 mx-auto' />
                        <p className='py-2 text-center'>Lieferung</p>
                    </li>
                    <li className='px-6 font-bold'>
                        <FiHome className='w-8 h-8 mx-auto' />
                        <p className='py-2 text-center'>Zugestellt</p>
                    </li>

                    <li className='flex items-center py-2'>
                        <TimeLineSection />
                        <TimeLineNode stepNumber={1} />
                        <TimeLineSection label='Sofort' />
                    </li>
                    <li className='flex items-center py-2'>
                        <TimeLineSection />
                        <TimeLineNode stepNumber={2} />
                        <TimeLineSection label='1 Werktag' />
                    </li>
                    <li className='flex items-center py-2'>
                        <TimeLineSection />
                        <TimeLineNode stepNumber={3} />
                        <TimeLineSection
                            label='24&nbsp;Stunden&#10;(express)'
                        />
                    </li>
                    <li className='flex items-center py-2'>
                        <TimeLineSection />
                        <TimeLineNode stepNumber={4} />
                        <TimeLineSection />
                    </li>
                </ul>
            </div>
            <div className='w-full p-8 py-16 mt-0 rounded-md bg-sandy-beige-6'>
                <div className='w-2/3 mx-auto'>
                    <h1 className='mb-8 text-3xl font-bold text-center text-coastal-blue-10'>
                        {/* <FontAwesomeIcon icon={faShippingFast} /> */}
                        Versand- und Lieferinformationen
                    </h1>
                    <h3 className='mt-10 mb-5 text-lg text-center'>
                        {/* <FontAwesomeIcon icon={faFileAlt} /> */}
                        Versandoptionen:
                    </h3>

                    <div className='w-7/12 mx-auto mt-8'>
                        <table className='w-full bg-gray-200 border-collapse'>
                            <thead>
                                <tr>
                                    <th className='p-4 text-left bg-gray-300 border border-gray-300'>
                                        Versandoption
                                    </th>
                                    <th className='p-4 text-left bg-gray-300 border border-gray-300'>
                                        Lieferzeit
                                    </th>
                                    <th className='p-4 text-left bg-gray-300 border border-gray-300'>
                                        Preis
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='hover:bg-white'>
                                    <td className='p-4 text-left border border-gray-300'>
                                        Expressversand
                                    </td>
                                    <td className='p-4 text-left border border-gray-300'>
                                        24 Stunden
                                    </td>
                                    <td className='p-4 text-left border border-gray-300'>
                                        €7,00
                                    </td>
                                </tr>
                                <tr className='hover:bg-white'>
                                    <td className='p-4 text-left border border-gray-300'>
                                        Standardversand
                                    </td>
                                    <td className='p-4 text-left border border-gray-300'>
                                        3-4 Werktage
                                    </td>
                                    <td className='p-4 text-left border border-gray-300'>
                                        €3,99
                                    </td>
                                </tr>
                                <tr className='hover:bg-white'>
                                    <td className='p-4 text-left border border-gray-300'>
                                        Europa Versand *
                                    </td>
                                    <td className='p-4 text-left border border-gray-300'>
                                        5-11 Werktage
                                    </td>
                                    <td className='p-4 text-left border border-gray-300'>
                                        €10,00 - €30,00
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td
                                        colSpan='3'
                                        className='p-4 text-left border border-gray-300'
                                    >
                                        {/* <FontAwesomeIcon icon={faMoneyBill} /> */}
                                        * Die Preise für den internationalen
                                        Versand hängen vom Land ab und werden
                                        beim Auschecken berechnet.
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    <h2 className='mt-10 mb-5 text-lg font-bold text-justify'>
                        {/* <FontAwesomeIcon icon={faMapMarkedAlt} /> */}
                        Bestellverfolgung
                    </h2>
                    <p className='text-base mb-2.5 text-justify'>
                        Nach dem Versand Ihrer Bestellung erhalten Sie eine
                        Sendungsverfolgungsnummer per E-Mail.
                    </p>

                    <h2 className='mt-10 mb-5 text-lg font-bold text-justify'>
                        {/* <FontAwesomeIcon icon={faTools} /> */}
                        Lieferprobleme
                    </h2>
                    <p className='text-base mb-2.5 text-justify'>
                        Wenn Sie Probleme mit der Lieferung Ihrer Bestellung
                        haben, kontaktieren Sie uns bitte für Hilfe.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ShippingInfo;
