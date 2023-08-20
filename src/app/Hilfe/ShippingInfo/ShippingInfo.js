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
        <div className='w-screen '>
            <div className='w-screen py-16 shadow-2xl bg-coastal-blue-10 '>
                <h2 className='px-4 text-3xl text-center lg:font-bold text-sandy-beige-10'>
                    Danke, dass Sie bei Phone 2 Door einkaufen.
                </h2>
                <ul className='grid w-screen grid-flow-col grid-cols-2 grid-rows-4 px-4 pt-16 mx-auto lg:py-32 lg:grid-rows-2 lg:grid-cols-4 lg:grid-flow-row lg:w-fit text-sandy-beige-10 '>
                    <li className='order-8 w-full p-4 lg:font-bold lg:px-6 lg:order-1'>
                        <FiShoppingCart className='w-6 h-6 mx-auto lg:h-8 lg:w-8' />
                        <p className='py-2 text-center'>Ihre Bestellung</p>
                    </li>
                    <li className='order-7 w-full lg:font-bold lg:px-6 lg:order-2'>
                        <FiMail className='w-6 h-6 mx-auto lg:h-8 lg:w-8' />
                        <p className='py-2 text-center'>Wir danken</p>
                    </li>
                    <li className='order-6 w-full lg:font-bold lg:px-6 lg:order-3'>
                        <FiTruck className='w-6 h-6 mx-auto lg:h-8 lg:w-8' />
                        <p className='py-2 text-center'>Lieferung</p>
                    </li>
                    <li className='order-5 w-full lg:font-bold lg:px-6 lg:order-4'>
                        <FiHome className='w-6 h-6 mx-auto lg:h-8 lg:w-8' />
                        <p className='py-2 text-center'>Zugestellt</p>
                    </li>
                    <li className='flex flex-col items-center order-1 w-full lg:py-2 lg:order-8 lg:flex-row '>
                        <TimeLineSection />
                        <TimeLineNode stepNumber={1} />
                        <TimeLineSection label='Sofort' />
                    </li>
                    <li className='flex flex-col items-center order-1 w-full lg:py-2 lg:order-8 lg:flex-row '>
                        <TimeLineSection />
                        <TimeLineNode stepNumber={2} />
                        <TimeLineSection label='1 Werktag' />
                    </li>
                    <li className='flex flex-col items-center order-1 w-full lg:py-2 lg:order-8 lg:flex-row '>
                        <TimeLineSection />
                        <TimeLineNode stepNumber={3} />
                        <TimeLineSection
                            label='24&nbsp;Stunden&#10;(express)'
                        />
                    </li>
                    <li className='flex flex-col items-center order-1 w-full lg:py-2 lg:order-8 lg:flex-row '>
                        <TimeLineSection />
                        <TimeLineNode stepNumber={4} />
                        <TimeLineSection />
                    </li>
                </ul>
            </div>
            <div className='w-full py-16 mt-0 rounded-md lg:p-8 bg-sandy-beige-6'>
                <div className='mx-auto lg:w-2/3'>
                    <h1 className='mb-8 text-3xl text-center lg:font-bold text-coastal-blue-10'>
                        {/* <FontAwesomeIcon icon={faShippingFast} /> */}
                        Versand- und Lieferinformationen
                    </h1>
                    <h3 className='mt-10 mb-5 text-lg text-center'>
                        {/* <FontAwesomeIcon icon={faFileAlt} /> */}
                        Versandoptionen:
                    </h3>

                    <div className='w-full mx-auto mt-8 '>
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

                    <h2 className='mt-10 mb-5 text-lg text-justify lg:font-bold'>
                        {/* <FontAwesomeIcon icon={faMapMarkedAlt} /> */}
                        Bestellverfolgung
                    </h2>
                    <p className='text-base mb-2.5 text-justify'>
                        Nach dem Versand Ihrer Bestellung erhalten Sie eine
                        Sendungsverfolgungsnummer per E-Mail.
                    </p>

                    <h2 className='mt-10 mb-5 text-lg text-justify lg:font-bold'>
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
