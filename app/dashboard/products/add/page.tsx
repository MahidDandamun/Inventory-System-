'use client';
import Link from 'next/link';
import {
  FileInputField,
  FormSubmitButton,
  NumberInputField,
  SelectOptionField,
  TextInputField,
} from '../../../../components/ui/dashboard/inputFields/inputField';

function AddProduct() {
  const warehouseOptions = [
    { name: 'Makati', value: 'mkt' },
    { name: 'Taguig', value: 'tg' },
    { name: 'Mandaluyong', value: 'mdyg' },
  ];

  return (
    <>
      <div className="p-4 rounded-lg dark:border-gray-700   overflow-y-auto">
        <form className="max-w-full sm:max-w-xl mt-26 mx-auto shadow-md sm:rounded-lg p-5">
          <h1 className="text-center text-md mt-3 mb-8 sm:text-lg md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Add product
          </h1>
          <div className="grid md:grid-cols-2 md:gap-6">
            <TextInputField
              name={'product_name'}
              TextLabel={'Product name'}
              type={'text'}
            />
            <TextInputField
              name={'product_sku'}
              TextLabel={'Sku (123-124-122)'}
              type={'text'}
            />
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <SelectOptionField
              name={'product_warehouse'}
              label={'Warehouse'}
              options={warehouseOptions}
            />
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <NumberInputField
              name={'product_qty'}
              placeholder={'Product Quantity'}
              Label={'Quantity'}
            />
            <NumberInputField
              name={'product_price'}
              placeholder={'Product Price'}
              Label={'Price'}
            />
          </div>
          <FileInputField name={'product_image'} label={"Product's"} />
          <FormSubmitButton action={'Add'} path={'products'} />
        </form>
      </div>
    </>
  );
}

export default AddProduct;
