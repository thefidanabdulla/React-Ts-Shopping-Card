import React from "react";
import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrenncy } from "../utilities/formatCurrency";

import storeItems from "./../data/items.json";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();

  const item = storeItems.find((i) => i.id === id);

  if (item === null) return null;

  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex align-align-items-center"
    >
      <img
        src={item?.imgUrl}
        alt="cart item"
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item?.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              {quantity}x
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrenncy(item?.price)}
        </div>
      </div>
      <div>{formatCurrenncy(item?.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item?.id)}
      >
        X
      </Button>
    </Stack>
  );
};

export default CartItem;
