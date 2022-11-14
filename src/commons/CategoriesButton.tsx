import React from 'react';

const CategoriesButton = ({
  title,
  isSelected,
  changeCategory,
}: {
  title: string;
  isSelected: boolean;
  changeCategory: any;
}) => {
  if (isSelected) {
    return (
      <button
        className="cursor-default bg-[#CE4040A6] h-[44px] w-max whitespace-nowrap mx-[4px] px-[24px] py-[12px] font-noto text-[14px] text-[#FFFFFF] font-[500] rounded-[208px] border-[2px] border-[#CDCDCD]"
        onClick={changeCategory}
      >
        {title}
      </button>
    );
  } else {
    return (
      <button
        className="cursor-default h-[44px] w-max whitespace-nowrap mx-[4px] px-[24px] py-[12px] font-noto text-[14px] text-[#696969] font-[500] rounded-[208px] border-[2px] border-[#CDCDCD]"
        onClick={changeCategory}
      >
        {title}
      </button>
    );
  }
};

export default CategoriesButton;