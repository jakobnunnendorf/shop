import React from 'react';
import Link from 'next/link';
import { FiX } from 'react-icons/fi';
import { valuesFromParamString } from '@lib/helperFunctions';
import { convertCategoryToGerman } from '@lib/helperFunctions';
import { toggleQueryParam } from '@lib/helperFunctions';

export default function FilterTags({ paramString }: { paramString: string }) {
    const paramArray = valuesFromParamString(
        paramString.replace('filter=true', '')
    );

    return (
        <ul
            className={`${
                paramArray.length > 0
                    ? 'translate-x-0'
                    : 'hidden -translate-x-full'
            }  flex flex-wrap grid-flow-col-dense gap-2 lg:px-0 px-8 py-4 lg:py-2 text-xs lg:text-[0.5rem] font-bold text-slate-400 auto-cols-max`}
        >
            {paramArray.length
                ? paramArray.map(([key, value]) => {
                      let filter: string;
                      switch (key) {
                          case 'category':
                              filter = convertCategoryToGerman(value);
                              break;
                          case 'price':
                              filter =
                                  value
                                      .split('-')
                                      .join(' - ')
                                      .replace('.', ',') + ' €';
                              break;
                          default:
                              filter = value;
                      }
                      const currentURL =
                          process.env.NEXT_PUBLIC_URL + '/shop?' + paramString;
                      const toggleThisQueryParam = () => {
                          const prunedURL = toggleQueryParam(
                              currentURL,
                              key,
                              value
                          );
                          return prunedURL;
                      };
                      return (
                          <li className='flex items-center px-2 py-1 lg:py-[1px] lg:px-1 border rounded-full'>
                              {filter}{' '}
                              <Link
                                  href={toggleThisQueryParam()}
                                  className='px-1'
                              >
                                  <FiX />
                              </Link>
                          </li>
                      );
                  })
                : null}
        </ul>
    );
}
