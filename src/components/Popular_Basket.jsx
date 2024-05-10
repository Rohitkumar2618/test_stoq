import React from "react";
import {
  Card as NextUICard,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";

function Popular_Basket() {
  const basketsData = [
    {
      name: "Windmill Capital",
      quantity: 57,
      avatarSrc: "url-to-avatar-image",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus maxime quo quaerat iusto obcaecati voluptatum mollitia magnam totam sequi? Et libero voluptates voluptate officia repellat laudantium dolores consequuntur voluptatum nihil?",
      popular: false,
    },
    {
      name: "Windmill Capital",
      quantity: 57,
      avatarSrc: "url-to-avatar-image",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus maxime quo quaerat iusto obcaecati voluptatum mollitia magnam totam sequi? Et libero voluptates voluptate officia repellat laudantium dolores consequuntur voluptatum nihil?",
      popular: true,
    },
    {
      name: "Windmill Capital",
      quantity: 57,
      avatarSrc: "url-to-avatar-image",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus maxime quo quaerat iusto obcaecati voluptatum mollitia magnam totam sequi? Et libero voluptates voluptate officia repellat laudantium dolores consequuntur voluptatum nihil?",
      popular: true,
    },
    {
      name: "Windmill Capital",
      quantity: 57,
      avatarSrc: "url-to-avatar-image",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus maxime quo quaerat iusto obcaecati voluptatum mollitia magnam totam sequi? Et libero voluptates voluptate officia repellat laudantium dolores consequuntur voluptatum nihil?",
      popular: true,
    },
    {
      name: "Windmill Capital",
      quantity: 57,
      avatarSrc: "url-to-avatar-image",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus maxime quo quaerat iusto obcaecati voluptatum mollitia magnam totam sequi? Et libero voluptates voluptate officia repellat laudantium dolores consequuntur voluptatum nihil?",
      popular: true,
    },
    {
      name: "Windmill Capital",
      quantity: 57,
      avatarSrc: "url-to-avatar-image",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus maxime quo quaerat iusto obcaecati voluptatum mollitia magnam totam sequi? Et libero voluptates voluptate officia repellat laudantium dolores consequuntur voluptatum nihil?",
      popular: true,
    },
    {
      name: "Windmill Capital",
      quantity: 57,
      avatarSrc: "url-to-avatar-image",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus maxime quo quaerat iusto obcaecati voluptatum mollitia magnam totam sequi? Et libero voluptates voluptate officia repellat laudantium dolores consequuntur voluptatum nihil?",
      popular: true,
    },
    {
      name: "Windmill Capital",
      quantity: 57,
      avatarSrc: "url-to-avatar-image",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus maxime quo quaerat iusto obcaecati voluptatum mollitia magnam totam sequi? Et libero voluptates voluptate officia repellat laudantium dolores consequuntur voluptatum nihil?",
      popular: true,
    },
    {
      name: "Windmill Capital",
      quantity: 57,
      avatarSrc: "url-to-avatar-image",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus maxime quo quaerat iusto obcaecati voluptatum mollitia magnam totam sequi? Et libero voluptates voluptate officia repellat laudantium dolores consequuntur voluptatum nihil?",
      popular: true,
    },
    {
      name: "Windmill Capital",
      quantity: 57,
      avatarSrc: "url-to-avatar-image",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus maxime quo quaerat iusto obcaecati voluptatum mollitia magnam totam sequi? Et libero voluptates voluptate officia repellat laudantium dolores consequuntur voluptatum nihil?",
      popular: true,
    },
    {
      name: "Windmill Capital",
      quantity: 57,
      avatarSrc: "url-to-avatar-image",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus maxime quo quaerat iusto obcaecati voluptatum mollitia magnam totam sequi? Et libero voluptates voluptate officia repellat laudantium dolores consequuntur voluptatum nihil?",
      popular: true,
    },
    {
      name: "Windmill Capital",
      quantity: 57,
      avatarSrc: "url-to-avatar-image",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus maxime quo quaerat iusto obcaecati voluptatum mollitia magnam totam sequi? Et libero voluptates voluptate officia repellat laudantium dolores consequuntur voluptatum nihil?",
      popular: true,
    },
  ];

  const [popular, setPopular] = React.useState(false);

  return (
    <>
      <div
        className="  w-full  flex gap-2 overflow-x-auto mr-5
    justify-content items-center
    rounded-md  p-10 
    "
      >
        {basketsData.map((basket, index) => (
          <div key={index} className="flex-shrink-0">
            <div className="">
              <NextUICard className="max-w-[340px] bg-[#F0F4FE] gap-3">
                <CardHeader className="justify-between">
                  <div className="flex gap-5">
                    <Avatar isBordered radius="full" size="md" src="" />
                    <div className="flex flex-col gap-1 items-start justify-center">
                      <h4 className="text-black font-bold leading-none ">
                        {basket.name}
                      </h4>
                      <h5 className="text-small tracking-tight text-default-400">
                        {basket.quantity} smallbaskets
                      </h5>
                    </div>
                  </div>
                  <Button
                    className={`text-white ${
                      basket.popular ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {basket.popular ? "Popular" : " Average"}
                  </Button>
                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-black-600">
                  <p className="mb-3">{basket.description}</p>
                </CardBody>
              </NextUICard>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Popular_Basket;
