import React from "react";
import {
  Card as NextUICard,
  CardHeader,
  CardBody,
  Avatar,
  Button,
} from "@nextui-org/react";

function Test_Basket() {
  const [popular, setPopular] = React.useState(false);

  return (
    <div className="w-full  flex items-center justify-center  bg-red-500  overflow-x-auto ">
      <div className="max-w-[340px] p-4">
        <NextUICard className="bg-[#F0F4FE] gap-3">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Avatar isBordered radius="full" size="md" src="" />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-black font-bold leading-none">TATA</h4>
                <h5 className="text-small tracking-tight text-default-400">
                  smallbaskets
                </h5>
              </div>
            </div>
            <Button> Popular </Button>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small text-black-600">
            <p className="mb-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa,
              esse!
            </p>
          </CardBody>
        </NextUICard>
      </div>
      <div className="max-w-[340px] p-4">
        <NextUICard className="bg-[#F0F4FE] gap-3">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Avatar isBordered radius="full" size="md" src="" />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-black font-bold leading-none">TATA</h4>
                <h5 className="text-small tracking-tight text-default-400">
                  smallbaskets
                </h5>
              </div>
            </div>
            <Button> Popular </Button>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small text-black-600">
            <p className="mb-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa,
              esse!
            </p>
          </CardBody>
        </NextUICard>
      </div>
      <div className="max-w-[340px] p-4 ">
        <NextUICard className="bg-[#F0F4FE] gap-3">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Avatar isBordered radius="full" size="md" src="" />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-black font-bold leading-none">TATA</h4>
                <h5 className="text-small tracking-tight text-default-400">
                  smallbaskets
                </h5>
              </div>
            </div>
            <Button> Popular </Button>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small text-black-600">
            <p className="mb-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa,
              esse!
            </p>
          </CardBody>
        </NextUICard>
      </div>
    </div>
  );
}

export default Test_Basket;
